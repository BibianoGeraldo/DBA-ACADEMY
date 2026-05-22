'use client';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Disable browser scroll restoration once
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // Reset scroll to top on every route change (including navigating back to /)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis__;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <LanguageProvider>{children}</LanguageProvider>;
}
