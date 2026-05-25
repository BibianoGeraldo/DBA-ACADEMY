import type { Metadata } from 'next';
import Link from 'next/link';
import TextAnimation from '@/components/ui/scroll-text';

export const metadata: Metadata = {
  title: 'Contacto — dBA Academy',
  description:
    'Entre em contacto com a dBA Academy. Estamos em Maputo, Moçambique — Rua dos Desportistas, n.º 833, JAT 5-1, 9.º Andar.',
};

const CONTACT_CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@dbaacademy.co.mz',
    note: 'Resposta em menos de 24 horas',
    href: 'mailto:info@dbaacademy.co.mz',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    label: 'Telefone / WhatsApp',
    value: '+258 84 000 0000',
    note: 'Seg – Sex, 08:00 – 17:00',
    href: 'https://wa.me/258840000000',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Morada',
    value: 'Rua dos Desportistas, n.º 833',
    note: 'JAT 5-1, 9.º Andar · Maputo',
    href: 'https://maps.google.com/?q=Rua+dos+Desportistas+833+Maputo',
  },
];

const SOCIAL = [
  {
    label: 'Instagram',
    handle: '@dbaacademy.mz',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'dBA Academy',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'dBA Academy Moçambique',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

const FAQ_QUICK = [
  {
    q: 'Como efectuar a inscrição?',
    a: 'Consulte os programas disponíveis em /programas e envie-nos um email ou mensagem pelo WhatsApp. A nossa equipa responderá com todos os detalhes e condições.',
  },
  {
    q: 'Aceitam pagamentos a prestações?',
    a: 'Sim. Disponibilizamos planos de pagamento flexíveis via M-Pesa, e-Mola e transferência bancária (BCI, BIM, Standard Bank).',
  },
  {
    q: 'Os programas estão disponíveis online?',
    a: 'Dependendo do programa, oferecemos modalidades presencial (Maputo), 100% online e híbrida. Os detalhes constam da ficha de cada sessão.',
  },
  {
    q: 'Emitem factura?',
    a: 'Sim. A dBA Academy emite factura para todos os pagamentos efectuados, seja para inscrições individuais ou para empresas que inscrevem colaboradores.',
  },
];

export default function ContactoPage() {
  const mailHref = 'mailto:info@dbaacademy.co.mz?subject=Pedido%20de%20informa%C3%A7%C3%A3o%20%E2%80%94%20DBA%20Academy';

  return (
    <main className="page-main">

      {/* ── Hero ── */}
      <section className="page-hero page-hero-sm">
        <div className="page-hero-inner">
          <TextAnimation as="h1" text="Contacto" classname="page-hero-title" direction="up" stagger={0.08} />
          <TextAnimation
            as="p"
            text="Para informações sobre programas, inscrições ou parcerias institucionais, a nossa equipa está disponível para ajudar."
            classname="page-hero-lead"
            lineAnime stagger={0.16} style={{ display: 'block' }}
          />
        </div>
      </section>

      {/* ── Cartões de contacto directo ── */}
      <section className="ct-cards-section">
        <div className="section-inner">
          <div className="ct-cards-grid">
            {CONTACT_CARDS.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="ct-card scale-in"
              >
                <div className="ct-card-icon">{card.icon}</div>
                <div className="ct-card-body">
                  <span className="ct-card-label">{card.label}</span>
                  <span className="ct-card-value">{card.value}</span>
                  <span className="ct-card-note">{card.note}</span>
                </div>
                <span className="ct-card-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulário + Info lateral ── */}
      <section className="ct-main-section">
        <div className="section-inner">
          <div className="ct-layout">

            {/* Formulário */}
            <div className="ct-form-col fade-up">
              <h2 className="ct-col-title">Envie uma mensagem</h2>
              <p className="ct-col-lead">
                Preencha o formulário e a nossa equipa entrará em contacto em menos de 24 horas úteis.
              </p>
              <form className="ct-form" action={mailHref} method="GET">
                <div className="ct-field-row">
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-name">Nome completo</label>
                    <input id="ct-name" name="name" type="text" className="ct-input" placeholder="Nome completo" required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-email">Email</label>
                    <input id="ct-email" name="email" type="email" className="ct-input" placeholder="o.seu@email.com" required />
                  </div>
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-org">Organização <span className="ct-label-optional">(opcional)</span></label>
                  <input id="ct-org" name="org" type="text" className="ct-input" placeholder="Nome da empresa ou instituição" />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-subject">Assunto</label>
                  <select id="ct-subject" name="subject" className="ct-input ct-select">
                    <option value="">Seleccione um assunto</option>
                    <option>Informação sobre programas</option>
                    <option>Inscrição e pagamento</option>
                    <option>Parceria institucional</option>
                    <option>Formação in-company</option>
                    <option>Outro assunto</option>
                  </select>
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-msg">Mensagem</label>
                  <textarea id="ct-msg" name="body" className="ct-input ct-textarea" placeholder="Descreva o seu pedido ou questão…" rows={5} required />
                </div>
                <button type="submit" className="btn-primary ct-submit">
                  Enviar mensagem
                </button>
                <p className="ct-form-note">
                  Ao enviar, concorda com a nossa política de privacidade. Os dados fornecidos nunca são partilhados com terceiros.
                </p>
              </form>
            </div>

            {/* Info lateral */}
            <div className="ct-info-col">

              {/* Horário */}
              <div className="ct-info-block fade-up">
                <h3 className="ct-info-title">Horário de atendimento</h3>
                <div className="ct-hours-list">
                  <div className="ct-hours-row">
                    <span className="ct-hours-day">Segunda – Sexta</span>
                    <span className="ct-hours-time">08:00 – 17:00</span>
                  </div>
                  <div className="ct-hours-row">
                    <span className="ct-hours-day">Sábado</span>
                    <span className="ct-hours-time">08:00 – 12:00</span>
                  </div>
                  <div className="ct-hours-row">
                    <span className="ct-hours-day">Domingo</span>
                    <span className="ct-hours-time ct-hours-closed">Encerrado</span>
                  </div>
                </div>
              </div>

              {/* Redes sociais */}
              <div className="ct-info-block fade-up">
                <h3 className="ct-info-title">Redes sociais</h3>
                <div className="ct-social-list">
                  {SOCIAL.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="ct-social-item">
                      <div className="ct-social-icon">{s.icon}</div>
                      <div className="ct-social-body">
                        <span className="ct-social-platform">{s.label}</span>
                        <span className="ct-social-handle">{s.handle}</span>
                      </div>
                      <span className="ct-social-arrow">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Sede */}
              <div className="ct-info-block fade-up">
                <h3 className="ct-info-title">Sede</h3>
                <a
                  href="https://maps.google.com/?q=Rua+dos+Desportistas+833+Maputo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-address-card"
                >
                  <div className="ct-address-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="ct-address-body">
                    <span className="ct-address-line">Rua dos Desportistas, n.º 833</span>
                    <span className="ct-address-line">JAT 5-1, 9.º Andar</span>
                    <span className="ct-address-city">Maputo, Moçambique</span>
                  </div>
                  <span className="ct-address-maps">Ver no mapa →</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ rápido ── */}
      <section className="ct-faq-section">
        <div className="section-inner">
          <div className="section-head">
            <TextAnimation as="h2" text="Perguntas frequentes" classname="s-title" direction="left" stagger={0.09} />
          </div>
          <div className="ct-faq-grid stagger">
            {FAQ_QUICK.map((item) => (
              <div key={item.q} className="ct-faq-item">
                <h3 className="ct-faq-q">{item.q}</h3>
                <p className="ct-faq-a">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="ct-faq-more fade-up">
            <Link href="/faq" className="ct-faq-link">
              Ver todas as perguntas frequentes →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
