import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import { team } from '@/data/team';
import TextAnimation from '@/components/ui/scroll-text';

export const metadata: Metadata = {
  title: 'Blog — DBA Academy',
  description:
    'Artigos sobre tecnologia, mercado de dados em Moçambique, carreira em tech e casos de uso reais. Da equipa DBA Academy.',
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <main className="page-main">
      {/* ── Page Header ── */}
      <section className="page-hero page-hero-sm">
        <div className="page-hero-inner">
          <TextAnimation as="h1" text="Blog DBA Academy" classname="page-hero-title" direction="up" stagger={0.07} />
          <TextAnimation
            as="p"
            text="Perspectivas da equipa sobre tecnologia, mercado de dados em Moçambique, trajectórias de carreira e histórias reais dos nossos formandos."
            classname="page-hero-lead"
            lineAnime stagger={0.16} style={{ display: 'block' }}
          />
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featured && (
        <section className="blog-featured-section">
          <div className="section-inner">
            <Link href={`/blog/${featured.slug}`} className="blog-featured-card scale-in">
              <div
                className="blog-featured-cover"
                style={{
                  position: 'relative',
                  background: `linear-gradient(135deg, ${featured.gradientFrom} 0%, ${featured.gradientTo} 100%)`,
                }}
              >
                <Image
                  src={`https://picsum.photos/seed/${featured.slug}/1200/600`}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="blog-featured-cover-inner" style={{ position: 'relative', zIndex: 1 }}>
                  <span className="blog-cover-cat">{featured.category}</span>
                </div>
              </div>
              <div className="blog-featured-body">
                <div className="blog-meta">
                  <span className="blog-cat-tag">{featured.category}</span>
                  <span className="blog-date">{featured.dateDisplay}</span>
                  <span className="blog-read">{featured.readTime} de leitura</span>
                </div>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <div className="blog-author">
                  <div className="blog-author-avatar" style={{ position: 'relative', overflow: 'hidden' }}>
                    {team.find((m) => m.name === featured.author)?.photo ? (
                      <Image
                        src={team.find((m) => m.name === featured.author)!.photo}
                        alt={featured.author}
                        fill
                        sizes="40px"
                        style={{ objectFit: 'cover', objectPosition: 'top center' }}
                      />
                    ) : (
                      featured.author.split(' ').map((p) => p[0]).slice(0, 2).join('')
                    )}
                  </div>
                  <div>
                    <div className="blog-author-name">{featured.author}</div>
                    <div className="blog-author-role">{featured.authorRole}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Posts Grid ── */}
      <section className="blog-grid-section">
        <div className="section-inner">
          <div className="section-head">
            <TextAnimation as="h2" text="Mais Artigos" classname="s-title" direction="left" stagger={0.09} />
          </div>

          <div className="blog-grid stagger">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div
                  className="blog-card-cover"
                  style={{
                    position: 'relative',
                    background: `linear-gradient(135deg, ${post.gradientFrom} 0%, ${post.gradientTo} 100%)`,
                  }}
                >
                  <Image
                    src={`https://picsum.photos/seed/${post.slug}/800/400`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <span className="blog-cover-cat" style={{ position: 'relative', zIndex: 1 }}>{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-date">{post.dateDisplay}</span>
                    <span className="blog-read">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-author">
                    <div className="blog-author-avatar sm" style={{ position: 'relative', overflow: 'hidden' }}>
                      {team.find((m) => m.name === post.author)?.photo ? (
                        <Image
                          src={team.find((m) => m.name === post.author)!.photo}
                          alt={post.author}
                          fill
                          sizes="32px"
                          style={{ objectFit: 'cover', objectPosition: 'top center' }}
                        />
                      ) : (
                        post.author.split(' ').map((p) => p[0]).slice(0, 2).join('')
                      )}
                    </div>
                    <span className="blog-author-name">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="section-prog-cta">
        <div className="section-inner">
          <div className="prog-cta-inner">
            <div className="prog-cta-text">
              <TextAnimation as="h2" text="Mantenha-se actualizado" direction="up" stagger={0.07} />
              <TextAnimation as="p" text="Novos artigos sobre fiscalidade, contabilidade e finanças, datas de programas e actualizações legislativas — directamente no seu email." lineAnime stagger={0.16} style={{ display: 'block' }} classname="" />
            </div>
            <Link href="mailto:info@dbaacademy.co.mz" className="btn-primary">
              Receber novidades
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
