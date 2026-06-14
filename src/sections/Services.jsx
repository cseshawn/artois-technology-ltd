import SectionHeader from '../components/SectionHeader';
import { services } from '../data/content';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <SectionHeader
          tag="Services"
          title="End-to-End Technology Services"
          subtitle="We offer a full range of software development, AI, automation, and advisory services delivered through structured project management and documented deliverables."
        />

        <div className={styles.list}>
          {services.map((category) => (
            <article key={category.category} className={`${styles.category} surface-card`}>
              <header className={styles.categoryHeader}>
                <h3>{category.category}</h3>
              </header>
              <ul className={styles.items}>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
