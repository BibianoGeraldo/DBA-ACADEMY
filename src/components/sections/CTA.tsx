export function CTA() {
  return (
    <section className="cta-band" id="contacto">
      <div className="cta-scaler">
        <div className="cta-text fade-up">
          <div className="s-eyebrow">Começa Hoje</div>
          <h2 className="s-title">
            Pronto para o<br />próximo passo?
          </h2>
          <p>
            As inscrições estão abertas. Junta-te a centenas de alunos que já estão a construir
            o futuro que querem — com conhecimento, com propósito.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn-white">Inscrever Agora</a>
            <a href="#" className="btn-outline-white">Falar Connosco</a>
          </div>
        </div>
        <div className="cta-visual fade-up" style={{ transitionDelay: '0.12s' }}>
          <div className="cta-visual-label">Próxima turma começa em</div>
          <div className="cta-visual-n">Jun 2025</div>
          <div className="cta-visual-desc">
            Vagas limitadas por turma.<br />Garante o teu lugar hoje.
          </div>
        </div>
      </div>
    </section>
  );
}
