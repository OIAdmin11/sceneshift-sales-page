import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useRef,
  cloneElement,
  isValidElement,
  type ReactNode,
  type ReactElement,
} from "react";

import { gsap } from "gsap";

type SlidePart = "title" | "paragraph" | "btn" | "expBox";

type SlideAnimationContextValue = {
  registerElement: (part: SlidePart, element: HTMLElement | null) => void;
  runAnimation: () => void;
};

const SlideAnimationContext = createContext<SlideAnimationContextValue | null>(
  null,
);

function useSlideAnimation() {
  const ctx = useContext(SlideAnimationContext);
  if (!ctx) return { registerElement: () => {}, runAnimation: () => {} };
  return ctx;
}

function runTimeline(
  title: HTMLElement | null,
  paragraph: HTMLElement | null,
  btn: HTMLElement | null,
  expBox: HTMLElement | null,
) {
  const ease = "power3.out";
  gsap.set([title, paragraph, btn, expBox].filter(Boolean), {
    y: 50,
    opacity: 0,
  });

  const tl = gsap.timeline();
  if (title) tl.to(title, { y: 0, opacity: 1, duration: 0.6, ease });
  if (paragraph)
    tl.to(paragraph, { y: 0, opacity: 1, duration: 0.5, ease }, "-=0.4");
  if (btn) tl.to(btn, { y: 0, opacity: 1, duration: 0.5, ease }, "-=0.4");
  if (expBox) tl.to(expBox, { y: 0, opacity: 1, duration: 0.6, ease }, "-=0.3");
}

// Wrapper sub-components that register their root element for animation
function SlidePart({
  part,
  children,
}: {
  part: SlidePart;
  children: ReactElement;
}) {
  const { registerElement } = useSlideAnimation();

  const isValid = isValidElement(children);
  const child = isValid
    ? (children as ReactElement & { ref?: React.Ref<HTMLElement> })
    : null;

  const refCallback = useCallback(
    (el: HTMLElement | null) => {
      registerElement(part, el);
      if (child && typeof child.ref === "function") {
        child.ref(el);
      }
    },
    [part, registerElement, child],
  );

  if (!isValid || !child) {
    return <>{children}</>;
  }

  return cloneElement(child, { ref: refCallback } as Record<string, unknown>);
}

export const SlideAnimation = {
  Root: function SlideAnimationRoot({
    active,
    children,
    className,
    style,
  }: {
    active: boolean;
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }) {
    const elements = useRef<Record<SlidePart, HTMLElement | null>>({
      title: null,
      paragraph: null,
      btn: null,
      expBox: null,
    });
    const hasRun = useRef(false);
    const registerElement = useCallback(
      (part: SlidePart, el: HTMLElement | null) => {
        elements.current[part] = el;
      },
      [],
    );

    const runAnimation = useCallback(() => {
      const { title, paragraph, btn, expBox } = elements.current;
      runTimeline(title, paragraph, btn, expBox);
    }, []);

    useEffect(() => {
      if (active && !hasRun.current) {
        hasRun.current = true;
        runAnimation();
      }
      if (!active) hasRun.current = false;
    }, [active, runAnimation]);

    return (
      <SlideAnimationContext.Provider value={{ registerElement, runAnimation }}>
        <div
          className={className}
          style={{ visibility: active ? "visible" : undefined, ...style }}
        >
          {children}
        </div>
      </SlideAnimationContext.Provider>
    );
  },

  Title: function SlideTitle({ children }: { children: ReactElement }) {
    return <SlidePart part="title">{children}</SlidePart>;
  },

  Paragraph: function SlideParagraph({ children }: { children: ReactElement }) {
    return <SlidePart part="paragraph">{children}</SlidePart>;
  },

  Button: function SlideButton({ children }: { children: ReactElement }) {
    return <SlidePart part="btn">{children}</SlidePart>;
  },

  ExpBox: function SlideExpBox({ children }: { children: ReactElement }) {
    return <SlidePart part="expBox">{children}</SlidePart>;
  },
};
