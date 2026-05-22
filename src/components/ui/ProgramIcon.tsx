import type { Program } from '@/data/programs';

interface ProgramIconProps {
  iconId: Program['iconId'];
}

export function ProgramIcon({ iconId }: ProgramIconProps) {
  const icons: Record<Program['iconId'], React.ReactNode> = {
    analytics: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0165DD" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    bi: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0165DD" strokeWidth="2">
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
    web: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0165DD" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    database: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0165DD" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 19c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14M21 5v14" />
      </svg>
    ),
    cloud: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0165DD" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  };

  return <>{icons[iconId]}</>;
}
