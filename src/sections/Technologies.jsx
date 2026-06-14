import SectionHeader from '../components/SectionHeader';
import { technologies } from '../data/content';
import styles from './Technologies.module.css';

export default function Technologies() {
  return (
    <section id="technologies" className="section section--alt">
      <div className="container">
        <SectionHeader
          tag="Technologies"
          title="Technical Stack & Platforms"
          subtitle="We employ established, industry-standard technologies selected for reliability, maintainability, and long-term support."
        />

        <div className={styles.grid}>
          {technologies.map((group) => (
            <div key={group.title} className={`${styles.group} surface-card`}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.badges}>
                {group.items.map((tech) => (
                  <span key={tech} className={styles.badge}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
