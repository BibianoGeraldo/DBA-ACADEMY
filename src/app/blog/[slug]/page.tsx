import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import { team } from '@/data/team';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — dBA Academy Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const authorInitials = post.author
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');
  const authorPhoto = team.find((m) => m.name === post.author)?.photo ?? null;

  return (
    <main className="page-main">
      {/* ── Post Header ── */}
      <section className="post-hero">
        <div
          className="post-hero-cover"
          style={{
            background: `linear-gradient(135deg, ${post.gradientFrom} 0%, ${post.gradientTo} 100%)`,
          }}
        />
        <div className="post-hero-inner from-left">
<div className="post-meta-top">
            <span className="blog-cat-tag">{post.category}</span>
            <span className="blog-date">{post.dateDisplay}</span>
            <span className="blog-read">{post.readTime} de leitura</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
          <div className="post-author-row">
            <div className="blog-author-avatar lg" style={{ position: 'relative', overflow: 'hidden' }}>
              {authorPhoto ? (
                <Image src={authorPhoto} alt={post.author} fill sizes="56px" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              ) : authorInitials}
            </div>
            <div>
              <div className="blog-author-name">{post.author}</div>
              <div className="blog-author-role">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Content ── */}
      <section className="post-content-section">
        <div className="post-content-inner">
          <article className="post-article fade-up">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>

          {/* Author box */}
          <div className="post-author-box fade-up">
            <div className="blog-author-avatar lg" style={{ position: 'relative', overflow: 'hidden' }}>
              {authorPhoto ? (
                <Image src={authorPhoto} alt={post.author} fill sizes="56px" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
              ) : authorInitials}
            </div>
            <div className="post-author-box-info">
              <div className="post-author-box-name">{post.author}</div>
              <div className="post-author-box-role">{post.authorRole}</div>
              <p className="post-author-box-bio">
                Membro da equipa dBA Academy, com experiência em formação intensiva
                e no mercado de tecnologia moçambicano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="blog-grid-section post-related-section" style={{ paddingTop: '5rem' }}>
          <div className="section-inner">
            <div className="section-head fade-up">
              <h2 className="s-title">Artigos Relacionados</h2>
            </div>
            <div className="blog-grid blog-grid-2 stagger">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="blog-card">
                  <div
                    className="blog-card-cover"
                    style={{
                      position: 'relative',
                      background: `linear-gradient(135deg, ${rel.gradientFrom} 0%, ${rel.gradientTo} 100%)`,
                    }}
                  >
                    <Image
                      src={`https://picsum.photos/seed/${rel.slug}/800/400`}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <span className="blog-cover-cat" style={{ position: 'relative', zIndex: 1 }}>{rel.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span className="blog-date">{rel.dateDisplay}</span>
                      <span className="blog-read">{rel.readTime}</span>
                    </div>
                    <h3 className="blog-card-title">{rel.title}</h3>
                    <p className="blog-card-excerpt">{rel.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section-prog-cta">
        <div className="section-inner">
          <div className="prog-cta-inner fade-up">
            <div className="prog-cta-text">
              <h2>Pronto para dar o próximo passo?</h2>
              <p>
                Consulte os programas disponíveis e reserve o seu lugar
                na próxima turma da dBA Academy.
              </p>
            </div>
            <Link href="/programas" className="btn-primary">
              Ver programas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
