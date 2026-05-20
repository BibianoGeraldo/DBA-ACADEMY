export function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-scaler">
        <div className="about-deco-letter">dBA</div>

        <div className="photo-frame fade-up">
          <div className="photo-box">
            <div className="ph-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <span>Foto da equipa</span>
            </div>
          </div>
          <div className="photo-caption">
            &ldquo;Cada aluno é uma história de sucesso que ainda está a ser escrita.&rdquo;
          </div>
        </div>

        <div className="about-text fade-up" style={{ transitionDelay: '0.12s' }}>
          <div className="s-eyebrow">Sobre Nós</div>
          <h2 className="s-title">
            Mais do que uma academia.<br />Uma comunidade.
          </h2>
          <blockquote className="about-pull">
            Nascemos da crença de que aprender é um acto de coragem — e que merece ser apoiado
            com verdade, prática e cuidado.
          </blockquote>
          <p>
            A DBA Academy foi fundada com uma missão simples mas poderosa: dar às pessoas as
            ferramentas certas para construírem carreiras significativas na área de tecnologia e dados.
          </p>
          <p>
            Os nossos programas são desenhados por profissionais da indústria, pensados para o mercado
            real — com teoria, prática e mentoria integradas em cada módulo.
          </p>
          <p>
            Acreditamos que aprender deve ser uma experiência humana, rica e inspiradora. É por isso
            que cada sala de aula, física ou digital, é um espaço de troca genuína.
          </p>
        </div>
      </div>
    </section>
  );
}
