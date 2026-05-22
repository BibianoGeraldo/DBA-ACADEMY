'use client';
import { useEffect } from 'react';

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

const TRANSLATE_MAX = 60;
const SCALE_MAX    = 0.038;

export function useScrollEffects() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenisInstance: any = null;
    let rafId: number;

    async function init() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const LenisModule = await import('lenis' as any);
      const Lenis = LenisModule.default ?? LenisModule;

      const lenis = new Lenis({
        duration: 0.9,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
      });

      lenisInstance = lenis;
      // Expose globally so Header / Providers can call scrollTo(0)
      (window as unknown as Record<string, unknown>).__lenis__ = lenis;

      const nav = document.getElementById('main-nav');

      /* ── Stack push pairs (section A scales as section B arrives) ── */
      const stackPairs: [HTMLElement, HTMLElement][] = (
        [
          ['.hero-scaler',     '.section-manifesto'],
          ['.programs-scaler', '.section-why'],
        ] as const
      )
        .map(([a, b]) => [
          document.querySelector(a) as HTMLElement,
          document.querySelector(b) as HTMLElement,
        ])
        .filter(([a, b]) => a && b) as [HTMLElement, HTMLElement][];

      function updateStack() {
        const vh = window.innerHeight;
        stackPairs.forEach(([scaler, next]) => {
          const nextTop  = next.getBoundingClientRect().top;
          const raw      = Math.max(0, Math.min(1, (vh - nextTop) / vh));
          const progress = easeInOut(raw);
          const ty       = raw > 0 ? -TRANSLATE_MAX * progress : 0;
          const sc       = raw > 0 ? 1 - SCALE_MAX  * progress : 1;
          scaler.style.transform =
            raw > 0 ? `translateY(${ty.toFixed(2)}px) scale(${sc.toFixed(4)})` : '';
        });
      }

      /* ── Parallax elements  [data-parallax="speed"] ── */
      const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

      function updateParallax() {
        if (!parallaxEls.length) return;
        const vh = window.innerHeight;
        parallaxEls.forEach((el) => {
          const speed  = parseFloat(el.dataset.parallax || '0.1');
          const rect   = el.getBoundingClientRect();
          const offset = rect.top + rect.height / 2 - vh / 2;
          el.style.transform = `translateY(${(offset * speed).toFixed(2)}px)`;
        });
      }

      /* ── 3D mouse-tilt  [data-tilt="maxDeg"] ── */
      const tiltEls = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));

      function setupTilt(el: HTMLElement) {
        const max = parseFloat(el.dataset.tilt || '8');

        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left)  / rect.width  - 0.5;
          const y = (e.clientY - rect.top)   / rect.height - 0.5;
          el.classList.remove('tilt-reset');
          el.style.transform =
            `perspective(900px) rotateY(${(x * max * 2).toFixed(2)}deg) ` +
            `rotateX(${(-y * max).toFixed(2)}deg) translateZ(10px)`;
        });

        el.addEventListener('mouseleave', () => {
          el.classList.add('tilt-reset');
          el.style.transform = '';
          setTimeout(() => el.classList.remove('tilt-reset'), 560);
        });
      }

      tiltEls.forEach(setupTilt);

      /* ── Counter animation  [data-counter="N"] [data-suffix="x"] [data-colored] ── */
      const counterEls = Array.from(document.querySelectorAll<HTMLElement>('[data-counter]'));

      if (counterEls.length) {
        const counterObs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const el       = entry.target as HTMLElement;
              const target   = parseInt(el.dataset.counter  || '0', 10);
              const suffix   = el.dataset.suffix  || '';
              const colored  = el.dataset.colored === '1';
              const duration = 1800;
              const t0       = performance.now();

              function tick(now: number) {
                const p    = Math.min((now - t0) / duration, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                const val  = Math.round(ease * target);
                if (colored) {
                  el.innerHTML = `${val}<em style="font-style:normal;color:var(--green)">${suffix}</em>`;
                } else {
                  el.textContent = val + suffix;
                }
                if (p < 1) requestAnimationFrame(tick);
              }
              requestAnimationFrame(tick);
              counterObs.unobserve(el);
            });
          },
          { threshold: 0.65 }
        );
        counterEls.forEach((el) => counterObs.observe(el));
      }

      /* ── Manifesto word-by-word reveal driven by scroll progress ── */
      const manifestoSection = document.querySelector<HTMLElement>('.manifesto');
      const mWords           = Array.from(document.querySelectorAll<HTMLElement>('.mw'));

      function updateManifesto(scrollY: number) {
        if (!manifestoSection || !mWords.length) return;
        const sectionTop  = manifestoSection.offsetTop;
        const extraScroll = window.innerHeight * 0.42;
        const progress    = Math.max(0, Math.min(1, (scrollY - sectionTop) / extraScroll));
        const toReveal    = Math.floor(progress * (mWords.length + 3));
        mWords.forEach((w, i) => w.classList.toggle('mw-lit', i < toReveal));
      }

      /* ── Snap-to-slot (prog sticky cards) ── */
      const stickySlots = Array.from(document.querySelectorAll<HTMLElement>(
        '.prog-slot-sticky'
      ));
      let snapTimer: ReturnType<typeof setTimeout> | null = null;
      let isSnapping = false;

      /* ── Scroll event hub ── */
      lenis.on('scroll', (e: { scroll: number }) => {
        updateStack();
        updateParallax();
        updateManifesto(e.scroll);
        if (nav) nav.classList.toggle('scrolled', e.scroll > 40);

        if (!stickySlots.length || isSnapping) return;
        if (snapTimer) clearTimeout(snapTimer);
        snapTimer = setTimeout(() => {
          const vh = window.innerHeight;
          const SNAP_TOP = 108;
          for (const slot of stickySlots) {
            const delta = slot.getBoundingClientRect().top - SNAP_TOP;
            if (delta > 10 && delta < vh * 0.8) {
              isSnapping = true;
              lenis.scrollTo(e.scroll + delta, {
                duration: 0.55,
                easing: (t: number) => 1 - Math.pow(1 - t, 4),
              });
              setTimeout(() => { isSnapping = false; }, 700);
              break;
            }
          }
        }, 220);
      });

      /* also run parallax once on load so initial position is correct */
      updateParallax();

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      return undefined;
    }

    let cleanup: (() => void) | undefined;
    init().then((fn) => { cleanup = fn; });

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      delete (window as unknown as Record<string, unknown>).__lenis__;
      cleanup?.();
    };
  }, []);
}
