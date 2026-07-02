'use client';

import { useEffect, useRef } from 'react';

/**
 * Fixed full-viewport interactive dot-grid canvas + a custom cursor ring.
 * Mount once near the root (e.g. in page.tsx, before <main>).
 */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- Accent (read from CSS var) ----------
    const accent =
      getComputedStyle(document.documentElement).getPropertyValue('--ac').trim() || '#ff5c35';
    const hex = accent.replace('#', '');
    const ar = parseInt(hex.substring(0, 2), 16) || 255;
    const ag = parseInt(hex.substring(2, 4), 16) || 92;
    const ab = parseInt(hex.substring(4, 6), 16) || 53;

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    // ---------- Dot grid ----------
    let raf = 0;
    let onResize: (() => void) | null = null;
    const canvas = canvasRef.current;
    if (canvas && !reduce) {
      const ctx = canvas.getContext('2d')!;
      const S = { w: 0, h: 0, dpr: 1 };
      onResize = () => {
        S.dpr = Math.min(window.devicePixelRatio || 1, 2);
        S.w = window.innerWidth;
        S.h = window.innerHeight;
        canvas.width = S.w * S.dpr;
        canvas.height = S.h * S.dpr;
        ctx.setTransform(S.dpr, 0, 0, S.dpr, 0, 0);
      };
      onResize();
      window.addEventListener('resize', onResize);

      const gap = 38;
      const R = 170;
      let t = 0;
      const draw = () => {
        t += 0.012;
        ctx.clearRect(0, 0, S.w, S.h);
        for (let y = gap / 2; y < S.h; y += gap) {
          for (let x = gap / 2; x < S.w; x += gap) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const wave = 0.5 + 0.5 * Math.sin(t + x * 0.01 + y * 0.012);
            let r = 0.85 + wave * 0.5;
            let a = 0.045 + wave * 0.04;
            let cr = 255;
            let cg = 255;
            let cb = 255;
            if (dist < R) {
              const f = 1 - dist / R;
              r += f * 2.6;
              a = Math.min(0.92, a + f * 0.72);
              cr = Math.round(255 + (ar - 255) * f);
              cg = Math.round(255 + (ag - 255) * f);
              cb = Math.round(255 + (ab - 255) * f);
            }
            ctx.beginPath();
            ctx.fillStyle = `rgba(${cr},${cg},${cb},${a})`;
            ctx.arc(x, y, r, 0, 6.2832);
            ctx.fill();
          }
        }
        raf = requestAnimationFrame(draw);
      };
      draw();
    }

    // ---------- Custom cursor ----------
    let craf = 0;
    const ring = cursorRef.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const aHex = (alpha: number) => `rgba(${ar},${ag},${ab},${alpha})`;
    const onOver = (e: Event) => {
      if ((e.target as HTMLElement).closest('a,button,[data-cursor]')) setHover(true);
    };
    const onOut = (e: Event) => {
      if ((e.target as HTMLElement).closest('a,button,[data-cursor]')) setHover(false);
    };
    const setHover = (on: boolean) => {
      if (!ring) return;
      ring.style.width = on ? '54px' : '30px';
      ring.style.height = on ? '54px' : '30px';
      ring.style.background = on ? aHex(0.14) : 'transparent';
      ring.style.borderColor = on ? aHex(0.7) : 'rgba(255,255,255,0.55)';
    };

    if (ring && finePointer) {
      let rx = window.innerWidth / 2;
      let ry = window.innerHeight / 2;
      const loop = () => {
        rx += (mouse.x - rx) * 0.2;
        ry += (mouse.y - ry) * 0.2;
        ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
        craf = requestAnimationFrame(loop);
      };
      loop();
      document.addEventListener('mouseover', onOver);
      document.addEventListener('mouseout', onOut);
    } else if (ring) {
      ring.style.display = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (onResize) window.removeEventListener('resize', onResize);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(craf);
    };
  }, []);

  return (
    <>
      <canvas
        id="ig-grid"
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div id="ig-cursor" ref={cursorRef} />
    </>
  );
}
