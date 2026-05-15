import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

import { shopBestProducts, shopProducts } from "@/data/shop";
import type { ShopProductLike } from "@/types/shop";
import type {
  CartItem,
  CartState,
  CartAction,
  CartContextValue,
  PopulatedCartItem,
} from "@/types/cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "aiero-shop-cart";

const allProducts: ShopProductLike[] = [...shopProducts, ...shopBestProducts];

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items };
    case "ADD_ITEM": {
      const { productId, quantity } = action;
      if (quantity <= 0) return state;
      const existing = state.items.find((item) => item.productId === productId);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }
      return { items: [...state.items, { productId, quantity }] };
    }
    case "UPDATE_QUANTITY": {
      const { productId, quantity } = action;
      if (quantity <= 0) {
        return {
          items: state.items.filter((item) => item.productId !== productId),
        };
      }
      const existing = state.items.find((item) => item.productId === productId);
      if (!existing) {
        return { items: [...state.items, { productId, quantity }] };
      }
      return {
        items: state.items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item,
        ),
      };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (item) => item.productId !== action.productId,
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored) as unknown;
      if (Array.isArray(parsed)) {
        const validItems = parsed.filter(
          (item): item is CartItem =>
            typeof item === "object" &&
            item !== null &&
            typeof item.productId === "string" &&
            typeof item.quantity === "number",
        );
        if (validItems.length > 0) {
          dispatch({ type: "HYDRATE", items: validItems });
        }
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore storage errors
    }
  }, [state.items]);

  const productMap = useMemo(() => {
    const map = new Map<string, ShopProductLike>();
    for (const product of allProducts) {
      map.set(product.id, product);
    }
    return map;
  }, []);

  const addItem = useCallback(
    (productId: string, quantity = 1) => {
      if (!productMap.has(productId) || quantity <= 0) return;
      dispatch({ type: "ADD_ITEM", productId, quantity });
    },
    [productMap],
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (!productMap.has(productId)) return;
      dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
    },
    [productMap],
  );

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const items = state.items;

  const populatedItems = useMemo<PopulatedCartItem[]>(() => {
    return items
      .map((item) => {
        const product = productMap.get(item.productId);
        if (!product) return null;
        const priceNumber = Number.parseFloat(product.price);
        const lineTotal = Number.isFinite(priceNumber)
          ? priceNumber * item.quantity
          : 0;
        return {
          product,
          quantity: item.quantity,
          lineTotal,
        };
      })
      .filter((entry): entry is PopulatedCartItem => entry !== null);
  }, [items, productMap]);

  const subtotal = useMemo(
    () => populatedItems.reduce((sum, item) => sum + item.lineTotal, 0),
    [populatedItems],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    populatedItems,
    itemCount,
    subtotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
