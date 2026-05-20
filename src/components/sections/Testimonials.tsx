import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

export function Testimonials() {
  return (
    <section className="testimonials" id="testemunhos">
      <div className="test-scaler">
        <div className="test-head fade-up">
          <div className="s-eyebrow" style={{ color: 'rgba(0,229,255,0.55)', justifyContent: 'center' }}>
            Testemunhos
          </div>
          <h2 className="s-title" style={{ color: '#ffffff' }}>O que dizem os nossos alunos</h2>
        </div>
        <div className="test-grid stagger">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
