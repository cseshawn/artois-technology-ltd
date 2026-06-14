import SectionHeader from '../components/SectionHeader';
import { whyChooseUs } from '../data/content';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeader
          tag="Why Artois Technology"
          title="Reasons Clients Choose Us"
          subtitle="Our approach is built on professional standards, clear communication, and dependable delivery — aligned with the expectations of Bangladesh's corporate and institutional clients."
        />

        <div className={styles.grid}>
          {whyChooseUs.map((item, i) => (
            <article key={item.title} className={`${styles.card} surface-card`}>
              <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
