'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { upcomingSessions, formatPrice } from '@/data/upcomingPrograms';
import { pastSessions } from '@/data/pastSessions';
import { programs } from '@/data/programs';

interface Props {
  initialProg: number | null;
}

export function ProgramasClient({ initialProg }: Props) {
  const [activeFilter, setActiveFilter] = useState<number | null>(initialProg);

  const filteredUpcoming = activeFilter === null
    ? upcomingSessions
    : upcomingSessions.filter((s) => s.programId === activeFilter);

  const filteredPast = activeFilter === null
    ? pastSessions
    : pastSessions.filter((s) => s.programId === activeFilter);

  return (
    <>
      {/* ── Filter Tabs ── */}
      <section className="prog-filter-section">
        <div className="section-inner">
          <div className="prog-filter-tabs">
            <button
              className={`prog-filter-btn${activeFilter === null ? ' active' : ''}`}
              onClick={() => setActiveFilter(null)}
            >
              Todos
            </button>
            {programs.map((prog) => (
              <button
                key={prog.id}
                className={`prog-filter-btn${activeFilter === prog.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(prog.id)}
              >
                {prog.navName}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Sessions ── */}
      {filteredUpcoming.length > 0 ? (
        <section className="section-upcoming">
          <div className="section-inner">
            <div className="section-head">
              <h2 className="s-title">Próximas Sessões</h2>
              <p className="section-lead">Datas confirmadas. Vagas limitadas. Clica num programa para ver todos os detalhes.</p>
            </div>
            <div className="uc-grid">
              {filteredUpcoming.map((session, i) => {
                const displayPrice = session.earlyBirdPrice ?? session.price;
                return (
                  <Link key={session.id} href={`/programas/${session.id}`} className="uc-card" style={{ opacity: 1, transform: 'none' }}>
                    {session.badge && <span className="uc-badge">{session.badge}</span>}
                    <div className="uc-top">
                      <span className="uc-cat">{session.category}</span>
                      <span className={`uc-modality mod-${session.modality === 'Online' ? 'online' : session.modality === 'Presencial' ? 'presencial' : 'hibrido'}`}>
                        {session.modality}
                      </span>
                    </div>
                    <h3 className="uc-title">{session.programTitle}</h3>
                    <div className="uc-facts">
                      <div className="uc-fact"><span className="uc-fact-icon">📅</span><span>{session.dateDisplay}</span></div>
                      <div className="uc-fact"><span className="uc-fact-icon">⏱</span><span>{session.weeklySchedule}</span></div>
                      <div className="uc-fact"><span className="uc-fact-icon">📍</span><span>{session.location}</span></div>
                    </div>
                    <div className="uc-price-row">
                      <div className="uc-price">
                        <span className="uc-price-cur">MZN</span>
                        <span className="uc-price-n">{displayPrice.toLocaleString('pt-MZ')}</span>
                        {session.earlyBirdPrice && <span className="uc-eb">Early Bird</span>}
                      </div>
                    </div>
                    <div className="uc-limited-badge">
                      <span className="uc-limited-dot" />
                      Vagas limitadas
                    </div>
                    <div className="uc-mentor-mini">
                      <div className={`uc-mentor-avatar${session.mentorPhoto ? ' uc-mentor-avatar-photo' : ''}`}>
                        {session.mentorPhoto ? (
                          <Image src={session.mentorPhoto} alt={session.mentorName} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                        ) : (
                          session.mentorName.split(' ').map((p: string) => p[0]).slice(0, 2).join('')
                        )}
                      </div>
                      <div className="uc-mentor-label">
                        <span className="uc-mentor-by">Formador</span>
                        <span className="uc-mentor-name">{session.mentorName}</span>
                      </div>
                    </div>
                    <div className="uc-action">Ver detalhes <span className="uc-arrow">→</span></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="section-upcoming">
          <div className="section-inner">
            <p className="prog-filter-empty">Nenhuma sessão próxima para este programa. <button className="prog-filter-empty-link" onClick={() => setActiveFilter(null)}>Ver todos</button></p>
          </div>
        </section>
      )}

      {/* ── Past Sessions ── */}
      {filteredPast.length > 0 && (
        <section className="section-past">
          <div className="section-inner">
            <div className="section-head">
              <h2 className="s-title">Sessões Anteriores</h2>
              <p className="section-lead">Mais de 100 formandos já passaram pela dBA Academy. Aqui ficam os registos das nossas sessões.</p>
            </div>
            <div className="past-grid">
              {filteredPast.map((session, i) => (
                <Link key={session.id} href={`/sessoes/${session.id}`} className="past-card" style={{ opacity: 1, transform: 'none' }}>
                  <div className="past-photo" style={{ position: 'relative', background: `linear-gradient(145deg, ${session.gradientFrom} 0%, ${session.gradientTo} 100%)` }}>
                    {session.photo && (
                      <Image src={session.photo} alt={session.programTitle} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    )}
                    <span className="past-cat-tag" style={{ position: 'relative', zIndex: 1 }}>{session.category}</span>
                    <div className="past-students-badge" style={{ position: 'relative', zIndex: 1 }}>
                      <span className="past-students-n">{session.studentsCount}</span>
                      <span className="past-students-l">formandos</span>
                    </div>
                  </div>
                  <div className="past-body">
                    <h3 className="past-title">{session.programTitle}</h3>
                    <div className="past-date-loc">
                      <span>{session.dateDisplay}</span>
                      <span className="past-sep">·</span>
                      <span>{session.location}</span>
                    </div>
                    {session.testimonial && (
                      <p className="past-testimonial-snippet">"{session.testimonial.text.slice(0, 80)}…"</p>
                    )}
                    <span className="past-see-more">Ver sessão →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
