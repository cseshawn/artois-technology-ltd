import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ tag, title, subtitle, align = 'left' }) {
  return (
    <motion.header
      className={`${styles.header} ${styles[align]}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
    >
      {tag && <span className={styles.tag}>{tag}</span>}
      <div className={styles.rule} aria-hidden="true" />
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.header>
  );
}
