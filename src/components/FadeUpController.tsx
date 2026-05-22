'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function FadeUpController() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );

    document
      .querySelectorAll(
        '.fade-up:not(.in), .stagger:not(.in), ' +
        '.from-left:not(.in), .from-right:not(.in), ' +
        '.scale-in:not(.in), .clip-x:not(.in), ' +
        '.roll-child:not(.in)'
      )
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
