'use client';
import React from 'react';

type Segment = { text: string; bold?: true };

const SEGMENTS: Segment[] = [
  { text: 'Conhecimento' }, { text: 'técnico' }, { text: 'com' },
  { text: 'rigor', bold: true }, { text: '.' },
  { text: 'Aplicado' }, { text: 'com' },
  { text: 'clareza', bold: true }, { text: '.' },
  { text: 'Construído' }, { text: 'para' }, { text: 'o' },
  { text: 'mundo', bold: true }, { text: 'real', bold: true }, { text: '.' },
  { text: 'É' }, { text: 'isto' }, { text: 'que' }, { text: 'a' },
  { text: 'dBA', bold: true }, { text: 'Academy', bold: true },
  { text: 'entrega' }, { text: 'a' }, { text: 'cada' },
  { text: 'profissional' }, { text: 'que' }, { text: 'passa' },
  { text: 'por' }, { text: 'nós.' },
];

const RECTS = [
  [80,120],[220,60],[360,200],[500,80],[640,160],
  [780,50],[920,190],[1060,90],[1200,150],[1340,70],
  [140,700],[300,780],[460,720],[620,800],[860,750],[1100,790],[1300,720],
] as const;

export function Manifesto() {
  return (
    <div className="manifesto section-manifesto">
      <div className="manifesto-scaler">

        <div className="manifesto-pattern" aria-hidden="true" data-parallax="0.04">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g fill="white">
              {RECTS.map(([x, y]) => (
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
          {SEGMENTS.map((seg, i) => (
            <React.Fragment key={i}>
              <span className="mw">
                {seg.bold ? <strong>{seg.text}</strong> : seg.text}
              </span>
              {' '}
            </React.Fragment>
          ))}
          <cite className="mw" style={{ display: 'block', marginTop: '2.25rem' }}>
            — dBA Academy · Maputo, Moçambique
          </cite>
        </blockquote>

      </div>
    </div>
  );
}
