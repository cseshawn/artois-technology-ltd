import SectionHeader from '../components/SectionHeader';
import { processSteps } from '../data/content';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          tag="Our Process"
          title="Structured Project Delivery"
          subtitle="Every engagement follows a defined methodology with documented milestones, review points, and client sign-off at each stage."
        />

        <ol className={styles.timeline}>
          {processSteps.map((step) => (
            <li key={step.title} className={`${styles.step} surface-card`}>
              <span className={styles.stepNumber}>{step.step}</span>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
