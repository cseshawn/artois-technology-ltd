import { motion } from 'framer-motion';
import { HiShieldCheck, HiDocumentText, HiLocationMarker } from 'react-icons/hi';
import { trustedSectors } from '../data/content';
import styles from './TrustedBy.module.css';

const indicators = [
  { Icon: HiShieldCheck, label: 'Secure Development Practices' },
  { Icon: HiDocumentText, label: 'Documented Project Delivery' },
  { Icon: HiLocationMarker, label: 'Bangladesh-Based Operations' },
];

export default function TrustedBy() {
  return (
    <section className={styles.trusted}>
      <div className="container">
        <p className={styles.label}>Sectors We Serve</p>

        <div className={styles.sectors}>
          {trustedSectors.map((sector, i) => (
            <motion.div
              key={sector}
              className={`${styles.sector} surface-card`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {sector}
            </motion.div>
          ))}
        </div>

        <div className={styles.indicators}>
          {indicators.map(({ Icon, label }) => (
            <div key={label} className={styles.indicator}>
              <Icon className={styles.indicatorIcon} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
