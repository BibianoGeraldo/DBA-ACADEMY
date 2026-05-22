'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoMark } from '@/components/ui/LogoMark';
import { useLang } from '@/contexts/LanguageContext';

const ECOSYSTEM = [
  {
    label: 'Quem Somos',
    href: '/quem-somos',
    color: '#0891b2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    label: 'Formações',
    href: '/programas',
    color: '#0165dd',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    label: 'Sessões',
    href: '/sessoes',
    color: '#7c3aed',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    label: 'Certificados',
    href: '/programas',
    color: '#d97706',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    label: 'Blog',
    href: '/blog',
    color: '#059669',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    label: 'Alumni',
    href: '#',
    color: '#0165dd',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    label: 'Comunidade',
    href: '#',
    color: '#16a34a',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: 'FAQ',
    href: '/faq',
    color: '#db2777',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    label: 'Contacto',
    href: '/contacto',
    color: '#475569',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [waffleOpen, setWaffleOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const waffleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = document.getElementById('main-nav');
    const onScroll = () => {
      const s = window.scrollY > 40;
      setScrolled(s);
      nav?.classList.toggle('scrolled', s);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setWaffleOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!waffleOpen) return;
    const onClick = (e: MouseEvent) => {
      if (waffleRef.current && !waffleRef.current.contains(e.target as Node)) {
        setWaffleOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [waffleOpen]);

  const links = [
    { label: 'Início', href: '/' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Programas', href: '/programas' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>

      {/* 1 — Logo pill */}
      <Link
        href="/"
        className="nav-logo-pill"
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).__lenis__?.scrollTo(0, { immediate: false, duration: 0.9 });
        }}
      >
        <LogoMark variant="dark" />
      </Link>

      {/* 2 — Links pill (centrado) */}
      <div className="nav-links-pill">
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? 'nav-active' : ''}
                onClick={l.href === '/' ? () => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).__lenis__?.scrollTo(0, { immediate: false, duration: 0.9 });
                } : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3 — Controlos direita */}
      <div className="nav-right">

        {/* Waffle circle */}
        <div className="nav-waffle-wrap" ref={waffleRef}>
          <button
            className={`nav-waffle-btn${waffleOpen ? ' active' : ''}`}
            onClick={() => setWaffleOpen((o) => !o)}
            aria-label="Ecossistema DBA"
            aria-expanded={waffleOpen}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden>
              <circle cx="2.5"  cy="2.5"  r="1.8"/>
              <circle cx="9"    cy="2.5"  r="1.8"/>
              <circle cx="15.5" cy="2.5"  r="1.8"/>
              <circle cx="2.5"  cy="9"    r="1.8"/>
              <circle cx="9"    cy="9"    r="1.8"/>
              <circle cx="15.5" cy="9"    r="1.8"/>
              <circle cx="2.5"  cy="15.5" r="1.8"/>
              <circle cx="9"    cy="15.5" r="1.8"/>
              <circle cx="15.5" cy="15.5" r="1.8"/>
            </svg>
          </button>

          {waffleOpen && (
            <div className="nav-waffle-panel" role="dialog" aria-label="Ecossistema DBA Academy">
              <div className="nav-waffle-header">
                <span className="nav-waffle-title">Ecossistema DBA</span>
              </div>
              <div className="nav-waffle-grid">
                {ECOSYSTEM.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-waffle-item"
                    onClick={() => setWaffleOpen(false)}
                  >
                    <div
                      className="nav-waffle-icon"
                      style={{ '--waffle-color': item.color } as React.CSSProperties}
                    >
                      {item.icon}
                    </div>
                    <span className="nav-waffle-label">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Language pill */}
        <div className="nav-lang-pill" aria-label="Seleccionar idioma">
          <button
            className={`nav-lang-btn${lang === 'pt' ? ' nav-lang-active' : ''}`}
            onClick={() => setLang('pt')}
          >
            PT
          </button>
          <button
            className={`nav-lang-btn${lang === 'en' ? ' nav-lang-active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="nav-mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-mobile-link${pathname === l.href ? ' nav-active' : ''}`}
              onClick={l.href === '/' ? () => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).__lenis__?.scrollTo(0, { immediate: false, duration: 0.9 });
              } : undefined}
            >
              {l.label}
            </Link>
          ))}
          <div className="nav-lang-switch nav-lang-switch-mobile">
            <button
              className={`nav-lang-btn${lang === 'pt' ? ' nav-lang-active' : ''}`}
              onClick={() => setLang('pt')}
            >
              PT
            </button>
            <button
              className={`nav-lang-btn${lang === 'en' ? ' nav-lang-active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <Link href="/programas" className="btn-primary nav-mobile-cta">
            Inscreva-se
          </Link>
        </div>
      )}
    </nav>
  );
}
