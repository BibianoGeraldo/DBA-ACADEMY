import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import TextAnimation from '@/components/ui/scroll-text';

export function Testimonials() {
  return (
    <section className="testimonials" id="testemunhos">
      <div className="test-scaler">

        <div className="test-head">
          {/* Title — word by word, downward direction (from above) */}
          <TextAnimation
            as="h2"
            text="O que dizem os nossos alunos"
            classname="s-title"
            direction="down"
            stagger={0.08}
            style={{ color: '#ffffff', justifyContent: 'center' }}
          />
        </div>

        {/* Cards — scale-in with stagger */}
        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="scale-in"
              style={{ transitionDelay: `${0.08 + i * 0.12}s` }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
