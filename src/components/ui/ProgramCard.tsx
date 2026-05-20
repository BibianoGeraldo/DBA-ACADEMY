import type { Program } from '@/data/programs';
import { ProgramIcon } from './ProgramIcon';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="prog-card">
      <div className="prog-photo">
        <div className="ph-ico">
          <ProgramIcon iconId={program.iconId} />
        </div>
        <span className="ph-txt">Foto do programa</span>
        {program.badge && <span className="prog-badge">{program.badge}</span>}
      </div>
      <div className="prog-body">
        <div className="prog-cat">{program.category}</div>
        <h3 className="prog-title">{program.title}</h3>
        <p className="prog-desc">{program.description}</p>
        <div className="prog-meta">
          {program.meta.map((m) => (
            <div key={m.label} className="m-item">
              <span className="m-lbl">{m.label}</span>
              <span className="m-val">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
