'use client';
import Link from 'next/link';
import { LogoMark } from '@/components/ui/LogoMark';

export function Header() {
  return (
    <nav id="main-nav">
      <Link href="#" className="nav-logo">
        <LogoMark variant="dark" />
      </Link>
      <ul className="nav-links">
        <li><a href="#sobre">Sobre Nós</a></li>
        <li><a href="#programas">Programas</a></li>
        <li><a href="#porque">Porquê DBA</a></li>
        <li><a href="#equipa">Equipa</a></li>
        <li><a href="#contacto" className="btn-nav">Inscrever</a></li>
      </ul>
    </nav>
  );
}
