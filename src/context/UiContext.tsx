import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";

// --- State -------------------------------------------------------------------

export interface UiState {
  searchOpen: boolean;
  sideNavOpen: boolean;
  mobileMenuOpen: boolean;
  videoModalOpen: boolean;
  videoModalUrl: string | null;
  sideMenu3Open: boolean;
  showModeSwitcher: boolean;
}

// --- Actions -----------------------------------------------------------------

export interface UiActions {
  setSearchOpen: (open: boolean) => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;

  setSideNavOpen: (open: boolean) => void;
  openSideNav: () => void;
  closeSideNav: () => void;
  toggleSideNav: () => void;

  setMobileMenuOpen: (open: boolean) => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;

  setVideoModalOpen: (open: boolean) => void;
  openVideoModal: (url?: string) => void;
  closeVideoModal: () => void;
  toggleVideoModal: (url?: string) => void;

  setSideMenu3Open: (open: boolean) => void;
  openSideMenu3: () => void;
  closeSideMenu3: () => void;
  toggleSideMenu3: () => void;

  setShowModeSwitcher: (show: boolean) => void;
}

export type UiContextValue = UiState & UiActions;

// --- Context ------------------------------------------------------------------

const UiContext = createContext<UiContextValue | null>(null);

// --- Provider -----------------------------------------------------------------

const initialState: UiState = {
  searchOpen: false,
  sideNavOpen: false,
  mobileMenuOpen: false,
  videoModalOpen: false,
  videoModalUrl: null,
  sideMenu3Open: false,
  showModeSwitcher: true,
};

interface UiProviderProps {
  children: ReactNode;
}

export function UiProvider({ children }: UiProviderProps) {
  const [searchOpen, setSearchOpen] = useState(initialState.searchOpen);
  const [sideNavOpen, setSideNavOpen] = useState(initialState.sideNavOpen);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(
    initialState.mobileMenuOpen,
  );
  const [videoModalOpen, setVideoModalOpen] = useState(
    initialState.videoModalOpen,
  );
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(
    initialState.videoModalUrl,
  );
  const [showModeSwitcher, setShowModeSwitcher] = useState(
    initialState.showModeSwitcher,
  );
  const [sideMenu3Open, setSideMenu3Open] = useState(
    initialState.sideMenu3Open,
  );

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const toggleSearch = useCallback(() => setSearchOpen((v) => !v), []);

  const openSideNav = useCallback(() => setSideNavOpen(true), []);
  const closeSideNav = useCallback(() => setSideNavOpen(false), []);
  const toggleSideNav = useCallback(() => setSideNavOpen((v) => !v), []);

  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((v) => !v), []);

  const openSideMenu3 = useCallback(() => setSideMenu3Open(true), []);
  const closeSideMenu3 = useCallback(() => setSideMenu3Open(false), []);
  const toggleSideMenu3 = useCallback(() => setSideMenu3Open((v) => !v), []);

  const openVideoModal = useCallback((url?: string) => {
    if (url != null) setVideoModalUrl(url);
    setVideoModalOpen(true);
  }, []);
  const closeVideoModal = useCallback(() => {
    setVideoModalOpen(false);
    setVideoModalUrl(null);
  }, []);
  const toggleVideoModal = useCallback((url?: string) => {
    setVideoModalOpen((open) => {
      const next = !open;
      if (next && url != null) setVideoModalUrl(url);
      if (!next) setVideoModalUrl(null);
      return next;
    });
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    const closeAll = () => {
      closeSearch();
      closeSideNav();
      closeMobileMenu();
      closeVideoModal();
      closeSideMenu3();
    };
    queueMicrotask(closeAll);
  }, [
    pathname,
    closeSearch,
    closeSideNav,
    closeMobileMenu,
    closeVideoModal,
    closeSideMenu3,
  ]);

  const value: UiContextValue = {
    searchOpen,
    setSearchOpen,
    openSearch,
    closeSearch,
    toggleSearch,

    sideNavOpen,
    setSideNavOpen,
    openSideNav,
    closeSideNav,
    toggleSideNav,

    mobileMenuOpen,
    setMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,

    videoModalOpen,
    videoModalUrl,
    setVideoModalOpen,
    openVideoModal,
    closeVideoModal,
    toggleVideoModal,

    sideMenu3Open,
    setSideMenu3Open,
    openSideMenu3,
    closeSideMenu3,
    toggleSideMenu3,

    showModeSwitcher,
    setShowModeSwitcher,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

// --- Hook ---------------------------------------------------------------------

export function useUi(): UiContextValue {
  const ctx = useContext(UiContext);
  if (ctx == null) {
    throw new Error("useUi must be used within a UiProvider");
  }
  return ctx;
}
