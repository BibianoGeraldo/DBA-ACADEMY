'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { TeamMember } from '@/data/team';

const LI_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

function Avatar({ member }: { member: TeamMember }) {
  const initials = member.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div className="tc-avatar-wrap">
      <div className="tc-avatar">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            width={120}
            height={120}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      {member.linkedIn && (
        <a
          href={member.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="tc-li-btn"
          aria-label={`LinkedIn de ${member.name}`}
        >
          {LI_ICON}
        </a>
      )}
    </div>
  );
}

export function TeamCarousel({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + members.length) % members.length);
  const next = () => setActive((i) => (i + 1) % members.length);

  const visible = [
    members[(active - 1 + members.length) % members.length],
    members[active],
    members[(active + 1) % members.length],
  ];

  return (
    <div className="tc-root">
      <div className="tc-track">
        {visible.map((m, pos) => (
          <div
            key={m.name}
            className={`tc-card${pos === 1 ? ' tc-card-center tilt-card' : ' tc-card-side'}`}
            data-tilt={pos === 1 ? '6' : undefined}
            onClick={() => {
              if (pos === 0) prev();
              if (pos === 2) next();
            }}
          >
            <Avatar member={m} />
            <div className="tc-name">{m.name}</div>
            <div className="tc-role">{m.role}</div>
            {pos === 1 && <p className="tc-bio">{m.bio}</p>}
          </div>
        ))}
      </div>

      <div className="tc-controls">
        <button className="tc-arrow" onClick={prev} aria-label="Anterior">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="tc-dots">
          {members.map((_, i) => (
            <button
              key={i}
              className={`tc-dot${i === active ? ' tc-dot-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Membro ${i + 1}`}
            />
          ))}
        </div>
        <button className="tc-arrow" onClick={next} aria-label="Próximo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
