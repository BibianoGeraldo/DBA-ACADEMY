import Link from 'next/link';
import { upcomingSessions } from '@/data/upcomingPrograms';

export function AnnouncementBar() {
  const sessions = upcomingSessions.slice(0, 4);
  if (sessions.length === 0) return null;

  const tickerItems = [...sessions, ...sessions]; // duplicate for seamless loop

  return (
    <div className="announcement-bar">
      <div className="announcement-ticker-wrap">
        <div className="announcement-ticker">
          {tickerItems.map((s, i) => (
            <span key={i} className="announcement-ticker-item">
              <span className="announcement-ticker-sep">◆</span>
              <span className="announcement-ticker-label">PRÓXIMA SESSÃO</span>
              <span className="announcement-ticker-program">{s.programTitle}</span>
              <span className="announcement-ticker-sep">·</span>
              <span className="announcement-ticker-date">{s.dateDisplay}</span>
              <span className="announcement-ticker-sep">·</span>
              <span className="announcement-ticker-loc">{s.location}</span>
            </span>
          ))}
        </div>
      </div>

      <Link href={`/programas/${sessions[0].id}`} className="announcement-cta">
        Inscrever <span>→</span>
      </Link>
    </div>
  );
}
