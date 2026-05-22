import type { Metadata } from 'next';
import Link from 'next/link';
import { faqItems } from '@/data/faq';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ — DBA Academy',
  description:
    'Perguntas frequentes sobre a DBA Academy: inscrições, programas, certificados, pagamentos e muito mais.',
};

export default function FAQPage() {
  return (
    <main className="page-main">
      <section className="faq-section">
        <div className="faq-split">
          <div className="faq-info-col">
            <h1 className="faq-title from-left">Como podemos ajudar?</h1>
            <p className="faq-lead fade-up" style={{ transitionDelay: '0.18s' }}>
              Tens dúvidas? Encontra aqui as respostas mais comuns. Se não encontrares o que procuras, fala connosco directamente.
            </p>
          </div>
          <div className="faq-accord-col">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="section-prog-cta">
        <div className="section-inner">
          <div className="prog-cta-inner">
            <div className="prog-cta-text">
              <h2>Ainda tem dúvidas?</h2>
              <p>Envia-nos uma mensagem e respondemos em menos de 24 horas.</p>
            </div>
            <Link href="mailto:info@dbaacademy.co.mz" className="btn-primary">
              Enviar mensagem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
