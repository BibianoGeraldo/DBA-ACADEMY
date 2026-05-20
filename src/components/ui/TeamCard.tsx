import type { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="team-photo">
        <div className="ph-label">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
          </svg>
          <span>Foto</span>
        </div>
      </div>
      <div className="team-name">{member.name}</div>
      <div className="team-role">{member.role}</div>
      <p className="team-bio">{member.bio}</p>
    </div>
  );
}
