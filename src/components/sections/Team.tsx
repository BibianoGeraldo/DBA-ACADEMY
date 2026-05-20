import { team } from '@/data/team';
import { TeamCard } from '@/components/ui/TeamCard';

export function Team() {
  return (
    <section className="team" id="equipa">
      <div className="team-scaler">
        <div className="team-head fade-up">
          <div className="s-eyebrow" style={{ justifyContent: 'center' }}>A Nossa Equipa</div>
          <h2 className="s-title">As pessoas por trás da academia</h2>
        </div>
        <div className="team-grid stagger">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
