import Image from 'next/image';
import { team } from '@/data/team';
import { TeamCarousel } from '@/components/ui/TeamCarousel';
import TextAnimation from '@/components/ui/scroll-text';

const LI_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function Team() {
  return (
    <section className="team" id="equipa">

      {/* ── MOBILE: original carousel ── */}
      <div className="team-scaler">
        <div className="team-head fade-up">
          <h2 className="s-title">As pessoas por trás da academia</h2>
        </div>
        <TeamCarousel members={team} />
      </div>

      {/* ── DESKTOP: sticky split layout ── */}
      <div className="team-split">

        {/* Left: sticky section info */}
        <div className="team-sticky-info">
          <TextAnimation
            as="h2"
            text="As pessoas por trás da academia"
            classname="s-title"
            direction="up"
            stagger={0.07}
            style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}
          />

          <p style={{
            fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.82,
            fontWeight: 300, maxWidth: '30ch',
          }}>
            Cada instrutor combina experiência de indústria com uma paixão genuína por transmitir conhecimento real.
          </p>

          <div className="team-sticky-meta">
            <div>
              <div className="team-sticky-stat-n">
                {team.length}<em>+</em>
              </div>
              <div className="team-sticky-stat-l">Instrutores</div>
            </div>
            <div>
              <div className="team-sticky-stat-n">3<em>+</em></div>
              <div className="team-sticky-stat-l">Países</div>
            </div>
          </div>
        </div>

        {/* Right: scrolling gallery with alternating skew (Thanks To Scroll style) */}
        <div className="team-scroll-col">
          {team.map((member, i) => {
            const initials = member.name
              .split(' ')
              .map((p) => p[0])
              .slice(0, 2)
              .join('')
              .toUpperCase();

            return (
              <div key={member.name} className="team-scroll-item">
                <figure
                  className={`team-scroll-fig ${i % 2 === 0 ? 'team-scroll-fig--l' : 'team-scroll-fig--r'}`}
                  style={{ width: '280px', height: '360px' }}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="280px"
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    />
                  ) : (
                    <div className="team-scroll-placeholder">
                      <span className="team-hcard-initials">{initials}</span>
                    </div>
                  )}
                </figure>
                <div className="team-scroll-meta">
                  <div className="team-scroll-name">{member.name}</div>
                  <div className="team-scroll-role">{member.role}</div>
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-scroll-li"
                    >
                      {LI_ICON}
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
