import { HiStar } from 'react-icons/hi';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/content';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader
          tag="Client Testimonials"
          title="What Our Clients Say"
          subtitle="Feedback from organisations we have supported across finance, healthcare, and manufacturing sectors in Bangladesh."
        />

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className={`${styles.card} surface-card`}>
              <div className={styles.stars} aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <HiStar key={j} className={styles.star} aria-hidden="true" />
                ))}
              </div>
              <p className={styles.text}>&ldquo;{testimonial.text}&rdquo;</p>
              <footer className={styles.author}>
                <cite className={styles.name}>{testimonial.name}</cite>
                <span className={styles.role}>{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
