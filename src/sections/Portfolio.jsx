import SectionHeader from '../components/SectionHeader';
import { portfolioProjects } from '../data/content';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionHeader
          tag="Portfolio"
          title="Selected Project References"
          subtitle="Representative engagements demonstrating our capability across healthcare, finance, manufacturing, and public-sector domains."
        />

        <div className={styles.grid}>
          {portfolioProjects.map((project) => (
            <article key={project.title} className={`${styles.card} surface-card`}>
              <header className={styles.header}>
                <span className={styles.category}>{project.category}</span>
                <h3>{project.title}</h3>
              </header>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
