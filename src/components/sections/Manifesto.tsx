export function Manifesto() {
  return (
    <div className="manifesto section-manifesto">
      <div className="manifesto-scaler">
        <div className="manifesto-pattern" aria-hidden="true">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g fill="white">
              {[
                [80, 120], [220, 60], [360, 200], [500, 80], [640, 160],
                [780, 50], [920, 190], [1060, 90], [1200, 150], [1340, 70],
                [140, 700], [300, 780], [460, 720], [620, 800],
                [860, 750], [1100, 790], [1300, 720],
              ].map(([x, y]) => (
                <rect
                  key={`${x}-${y}`}
                  x={x} y={y}
                  width="18" height="52" rx="4"
                  transform={`rotate(-30 ${x} ${y})`}
                />
              ))}
            </g>
          </svg>
        </div>
        <blockquote>
          <span className="orn">&ldquo;</span>
          Acreditamos que o <strong>conhecimento</strong> é o activo mais democrático do mundo —
          e que o acesso a ele não deve ser um privilégio de poucos.
          <cite>— Missão DBA Academy</cite>
        </blockquote>
      </div>
    </div>
  );
}
