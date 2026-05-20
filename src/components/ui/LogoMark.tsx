interface LogoMarkProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md';
}

export function LogoMark({ variant = 'dark', size = 'md' }: LogoMarkProps) {
  const dbColor = variant === 'light' ? '#ffffff' : '#000000';
  const textColor = variant === 'light' ? 'rgba(255,255,255,0.28)' : '#AFAFAF';
  const dbSize = size === 'sm' ? '1.25rem' : '1.45rem';
  const svgH = size === 'sm' ? '1.25rem' : '1.45rem';
  const svgW = size === 'sm' ? '0.95rem' : '1.1rem';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            fontSize: dbSize,
            fontWeight: 800,
            color: dbColor,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          dB
        </span>
        <span
          style={{
            position: 'relative',
            width: svgW,
            height: svgH,
            display: 'inline-flex',
            alignItems: 'flex-end',
          }}
        >
          <svg viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M2 27L11 2L20 27" stroke="#0165DD" strokeWidth="5" strokeLinecap="round" />
            <path d="M11 14L20 27" stroke="#11BF74" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 500,
          color: textColor,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        Academy
      </span>
    </div>
  );
}
