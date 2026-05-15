import { useLayoutEffect, useRef, useState, type RefObject } from "react";

// --- Constants --------------------------------------------------------------

const DESKTOP_BREAKPOINT_PX = 769;

const VERTEX_SHADER = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform sampler2D tWater;
  uniform sampler2D tFlow;
  varying vec2 vUv;
  void main() {
    vec3 flow = texture2D(tFlow, vUv).rgb;
    vec2 uv = vUv - flow.xy * 0.08;
    vec3 color = texture2D(tWater, uv).rgb;
    gl_FragColor = vec4(color, 1.0);
  }
`;

const FULLSCREEN_QUAD = {
  position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
  uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
};

// --- Types -------------------------------------------------------------------

export interface UseOGLDeformEffectOptions {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  containerRef: RefObject<HTMLElement | null>;
  imagePath: string;
  enabled: boolean;
}

// --- OGL setup (runs once refs and container size are ready) -----------------

type CleanupRef = { current: (() => void) | null };
type CancelledRef = { current: boolean };

function runDeformEffect(
  canvas: HTMLCanvasElement,
  container: HTMLElement,
  imageUrl: string,
  containerRef: RefObject<HTMLElement | null>,
  cleanupRef: CleanupRef,
  cancelledRef: CancelledRef,
) {
  cleanupRef.current?.();

  import("ogl").then((ogl) => {
    if (cancelledRef.current) return;
    cleanupRef.current?.();

    const { Renderer, Geometry, Program, Mesh, Texture, Flowmap, Vec2 } = ogl;

    const renderer = new Renderer({ dpr: 2, canvas });
    const gl = renderer.gl;
    renderer.setSize(container.clientWidth, container.clientHeight);
    gl.clearColor(0, 0, 0, 0);

    const geometry = new Geometry(gl, FULLSCREEN_QUAD);

    const texture = new Texture(gl);
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => (texture.image = img);

    const flowmap = new Flowmap(gl, {
      falloff: 0.35,
      alpha: 1,
      dissipation: 0.95,
    });

    const program = new Program(gl, {
      vertex: VERTEX_SHADER,
      fragment: FRAGMENT_SHADER,
      uniforms: {
        tWater: { value: texture },
        tFlow: flowmap.uniform,
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const mouse = new Vec2(-1);
    const velocity = new Vec2();
    const lastMouse = new Vec2();
    let lastTime: number | undefined;
    let isMoving = false;
    let idleTimeout: ReturnType<typeof setTimeout>;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse.set(x / rect.width, 1.0 - y / rect.height);

      if (lastTime == null) {
        lastTime = performance.now();
        lastMouse.set(x, y);
      }
      const deltaX = x - lastMouse.x;
      const deltaY = y - lastMouse.y;
      lastMouse.set(x, y);
      const now = performance.now();
      const delta = Math.max(16, now - lastTime);
      lastTime = now;
      velocity.x = deltaX / delta;
      velocity.y = deltaY / delta;
      isMoving = true;
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => (isMoving = false), 100);
    };

    const onMouseLeave = () => {
      mouse.set(-1);
      velocity.set(0);
      isMoving = false;
    };

    const onResize = () => {
      const el = containerRef.current;
      if (el) renderer.setSize(el.clientWidth, el.clientHeight);
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);

    let rafId: number;
    const update = () => {
      rafId = requestAnimationFrame(update);
      if (!isMoving) {
        velocity.x *= 0.9;
        velocity.y *= 0.9;
      }
      flowmap.mouse.copy(mouse);
      flowmap.velocity.lerp(velocity, 0.15);
      flowmap.update();
      renderer.render({ scene: mesh });
    };
    update();

    cleanupRef.current = () => {
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  });
}

// --- Hook: OGL deform effect --------------------------------------------------

/**
 * Sets up the OGL flowmap deform effect on an existing canvas.
 * Uses only refs and event listeners — no DOM creation or style writes.
 */
export function useOGLDeformEffect({
  canvasRef,
  containerRef,
  imagePath,
  enabled,
}: UseOGLDeformEffectOptions) {
  const cancelledRef = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    if (!enabled) return;

    const imageUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${imagePath}`
        : imagePath;

    cancelledRef.current = false;
    let initRafId: number;

    const tryInit = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (!canvas || !container) {
        initRafId = requestAnimationFrame(tryInit);
        return;
      }

      const w = container.clientWidth;
      const h = container.clientHeight;

      if (w > 0 && h > 0) {
        runDeformEffect(
          canvas,
          container,
          imageUrl,
          containerRef,
          cleanupRef,
          cancelledRef,
        );
      } else {
        initRafId = requestAnimationFrame(tryInit);
      }
    };

    initRafId = requestAnimationFrame(tryInit);

    return () => {
      cancelledRef.current = true;
      cancelAnimationFrame(initRafId);
      // The OGL cleanup is registered asynchronously after the dynamic import resolves.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const cleanup = cleanupRef.current;
      cleanup?.();
    };
    // Re-run only when enabled/imagePath change; canvas/container refs are stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, imagePath]);
}

// --- Hook: desktop breakpoint -------------------------------------------------

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT_PX}px)`);
    const handler = () => setIsDesktop(mql.matches);
    queueMicrotask(() => setIsDesktop(mql.matches));
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}
