import { LogoMark } from '@/components/ui/LogoMark';

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="footer-brand-logo">
            <LogoMark variant="light" />
          </a>
          <p>Formação de qualidade em tecnologia e dados, pensada para o futuro que queres construir.</p>
          <div className="social-row">
            <a href="#" className="social-btn" aria-label="Instagram">ig</a>
            <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
            <a href="#" className="social-btn" aria-label="Facebook">fb</a>
          </div>
        </div>

        <FooterCol title="Academia" links={[
          { label: 'Sobre Nós', href: '#' },
          { label: 'A Nossa Equipa', href: '#' },
          { label: 'Parceiros', href: '#' },
          { label: 'Blog', href: '#' },
        ]} />

        <FooterCol title="Programas" links={[
          { label: 'Análise de Dados', href: '#' },
          { label: 'Power BI', href: '#' },
          { label: 'Web Dev', href: '#' },
          { label: 'Bases de Dados', href: '#' },
          { label: 'Cloud Computing', href: '#' },
        ]} />

        <FooterCol title="Contacto" links={[
          { label: 'info@dbaacademy.co.mz', href: 'mailto:info@dbaacademy.co.mz' },
          { label: '+258 84 000 0000', href: '#' },
          { label: 'Maputo, Moçambique', href: '#' },
        ]} />
      </div>

      <div className="footer-bottom">
        <span>© 2025 DBA Academy. Todos os direitos reservados.</span>
        <span>Feito com cuidado em <span className="footer-green">Moçambique</span></span>
      </div>
    </footer>
  );
}

interface FooterColProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

function FooterCol({ title, links }: FooterColProps) {
  return (
    <div className="f-col">
      <h5>{title}</h5>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
