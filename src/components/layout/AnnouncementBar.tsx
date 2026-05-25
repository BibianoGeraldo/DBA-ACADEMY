const TOPICS = [
  'Fiscalidade Empresarial',
  'Preços de Transferência',
  'Impostos Diferidos',
  'Compliance Fiscal',
  'Contabilidade Avançada',
  'Relato Financeiro',
  'Normas Internacionais',
];

export function AnnouncementBar() {
  const items = [...TOPICS, ...TOPICS];

  return (
    <div className="announcement-bar">
      <div className="announcement-ticker-wrap">
        <div className="announcement-ticker">
          {items.map((topic, i) => (
            <span key={i} className="announcement-ticker-item">
              <span className="announcement-ticker-sep">◆</span>
              <span className="announcement-ticker-program">{topic}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
