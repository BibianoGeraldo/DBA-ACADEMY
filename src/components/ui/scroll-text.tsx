'use client';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, type ElementType } from 'react';

/* ─── Default animation presets ─── */
const PRESET: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.7 },
    },
  },
  down: {
    hidden: { opacity: 0, y: -24, filter: 'blur(6px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.7 },
    },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1, x: 0,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.7 },
    },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1, x: 0,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 0.7 },
    },
  },
};

/* ─── Element map for motion components ─── */
const MOTION_MAP = {
  h1:   motion.h1,
  h2:   motion.h2,
  h3:   motion.h3,
  h4:   motion.h4,
  p:    motion.p,
  span: motion.span,
  div:  motion.div,
  li:   motion.li,
  blockquote: motion.blockquote,
} as const;

type SupportedTag = keyof typeof MOTION_MAP;

interface TextAnimationProps {
  text: string;
  as?: SupportedTag;
  /** Custom Framer Motion variants (overrides direction preset) */
  variants?: Variants;
  classname?: string;
  /** Animate letter-by-letter */
  letterAnime?: boolean;
  /** Animate line-by-line (splits on ". " or "\n") */
  lineAnime?: boolean;
  /** Entry direction — 'up' | 'down' | 'left' | 'right'. Default: 'up' */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** Delay between each token (seconds). Default: 0.06 */
  stagger?: number;
  /** Once: stop animating after first time in view. Default: true */
  once?: boolean;
  style?: React.CSSProperties;
}

export default function TextAnimation({
  text,
  as = 'h2',
  variants,
  classname = '',
  letterAnime = false,
  lineAnime   = false,
  direction   = 'up',
  stagger     = 0.06,
  once        = true,
  style,
}: TextAnimationProps) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, {
    once,
    margin: '-60px',
  });

  /* Choose token variant */
  const tokenVariants: Variants = variants ?? PRESET[direction];

  /* Container orchestrates stagger */
  const container: Variants = {
    hidden:  {},
    visible: { transition: { staggerChildren: stagger } },
  };

  const MotionEl = MOTION_MAP[as] as typeof motion.div;

  /* ── Letter-by-letter: group letters inside word wrappers so line
     breaks only happen between words, never mid-word ── */
  if (letterAnime) {
    const words = text.split(' ');
    let globalIdx = 0;
    const wordGroups = words.map((word) => {
      const letters = word.split('').map((ch) => ({ ch, idx: globalIdx++ }));
      globalIdx++; // account for the space after the word
      return letters;
    });

    return (
      <MotionEl
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={classname}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.28em', rowGap: '0.1em', ...style }}
      >
        {wordGroups.map((letters, wi) => (
          <span key={wi} style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
            {letters.map(({ ch, idx }) => (
              <motion.span
                key={idx}
                variants={tokenVariants}
                transition={{ delay: idx * stagger }}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{ display: 'inline-block' }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        ))}
      </MotionEl>
    );
  }

  /* ── Word or line tokens ── */
  let tokens: string[];
  if (lineAnime) {
    tokens = text.match(/[^.!?]+[.!?]*/g)?.map((s) => s.trim()) ?? [text];
  } else {
    tokens = text.split(' ');
  }

  const containerStyle: React.CSSProperties = lineAnime
    ? { display: 'block', ...style }
    : {
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '0.35em',
        rowGap: '0.1em',
        ...style,
      };

  return (
    <MotionEl
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={classname}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={containerStyle}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          variants={tokenVariants}
          style={{
            display: lineAnime ? 'block' : 'inline-block',
            whiteSpace: 'normal',
          }}
        >
          {token}
        </motion.span>
      ))}
    </MotionEl>
  );
}
