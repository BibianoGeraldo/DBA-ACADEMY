import Link from 'next/link';
import { LogoMark } from '@/components/ui/LogoMark';

export function Footer() {
  return (
    <footer>
      <div className="footer-simple">
        <div className="footer-simple-top">
          <Link href="/" className="footer-brand-logo">
            <LogoMark variant="light" />
          </Link>

          <nav className="footer-simple-nav">
            <Link href="/faq">FAQ</Link>
            <a href="mailto:info@dbaacademy.co.mz">info@dbaacademy.co.mz</a>
            <a href="https://dba.co.mz" target="_blank" rel="noopener noreferrer">dBA ↗</a>
          </nav>

          <div className="social-row">
            <a href="https://www.instagram.com/dbaacademy" className="social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/dba-academy" className="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/dbaacademy" className="social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 dBA Academy. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
