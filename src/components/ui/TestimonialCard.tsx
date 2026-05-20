import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={`test-card${testimonial.highlight ? ' t-highlight' : ''}`}>
      <div className="test-stars">★★★★★</div>
      <p className="test-text">{testimonial.text}</p>
      <div className="test-author">
        <div className="test-avatar" />
        <div>
          <div className="test-name">{testimonial.name}</div>
          <div className="test-from">{testimonial.from}</div>
        </div>
      </div>
    </div>
  );
}
