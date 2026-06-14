import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { aboutContent } from '../data/content';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          tag="About the Company"
          title="An Established Technology Partner in Bangladesh"
          subtitle={aboutContent.intro}
        />

        <div className={styles.grid}>
          <GlassCard className={styles.mainCard}>
            <h3>{aboutContent.mission.title}</h3>
            <p>{aboutContent.mission.text}</p>
          </GlassCard>

          <GlassCard className={styles.mainCard} delay={0.05}>
            <h3>{aboutContent.vision.title}</h3>
            <p>{aboutContent.vision.text}</p>
          </GlassCard>
        </div>

        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>Core Values</h3>
          <div className={styles.valuesGrid}>
            {aboutContent.values.map((value, i) => (
              <GlassCard key={value.title} delay={i * 0.04} className={styles.valueCard}>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
