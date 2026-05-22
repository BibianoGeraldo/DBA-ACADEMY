import Image from 'next/image';

interface LogoMarkProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md';
}

export function LogoMark({ variant = 'dark', size = 'md' }: LogoMarkProps) {
  const height = size === 'sm' ? 28 : 34;

  return (
    <Image
      src="/Logo Principal.svg"
      alt="dBA Academy"
      height={height}
      width={160}
      style={{
        height,
        width: 'auto',
        filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none',
      }}
      priority
      unoptimized
    />
  );
}
