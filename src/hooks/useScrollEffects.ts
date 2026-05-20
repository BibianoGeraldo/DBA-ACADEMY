'use client';
import { useEffect } from 'react';

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

const TRANSLATE_MAX = 80;
const SCALE_MAX = 0.02;

export function useScrollEffects() {
  useEffect(() => {
    let lenisInstance: import('lenis').default | null = null;
    let rafId: number;

    async function init() {
      const { default: Lenis } = await import('lenis');

      const lenis = new Lenis({
        duration: 0.9,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
      });

      lenisInstance = lenis;

      const nav = document.getElementById('main-nav');

      const stackPairs = (
        [
          ['.hero-scaler', '.section-manifesto'],
          ['.programs-scaler', '.section-why'],
        ] as const
      )
        .map(([a, b]) => [document.querySelector(a) as HTMLElement, document.querySelector(b) as HTMLElement])
        .filter(([a, b]) => a && b) as [HTMLElement, HTMLElement][];

      function updateStack() {
        const vh = window.innerHeight;
        stackPairs.forEach(([scaler, next]) => {
          const nextTop = next.getBoundingClientRect().top;
          const raw = Math.max(0, Math.min(1, (vh - nextTop) / vh));
          const progress = easeInOut(raw);
          const ty = raw > 0 ? -TRANSLATE_MAX * progress : 0;
          const sc = raw > 0 ? 1 - SCALE_MAX * progress : 1;
          scaler.style.transform =
            raw > 0 ? `translateY(${ty.toFixed(2)}px) scale(${sc.toFixed(4)})` : '';
        });
      }

      const progSlots = Array.from(document.querySelectorAll<HTMLElement>('[data-prog-slot]'));
      const progNavItems = Array.from(document.querySelectorAll<HTMLElement>('[data-prog-nav]'));

      let progObserver: IntersectionObserver | null = null;
      if (progSlots.length) {
        progObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const idx = parseInt((entry.target as HTMLElement).dataset.progSlot || '0', 10);
                progNavItems.forEach((item, i) => item.classList.toggle('active', i === idx));
              }
            });
          },
          { threshold: 0.5 }
        );
        progSlots.forEach((slot) => progObserver!.observe(slot));
      }

      lenis.on('scroll', (e: { scroll: number }) => {
        updateStack();
        if (nav) nav.classList.toggle('scrolled', e.scroll > 40);
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    init();

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);
}
