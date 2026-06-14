import { motion } from 'framer-motion';
import styles from './GlassCard.module.css';

export default function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`${styles.card} surface-card ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay }}
    >
      {children}
    </motion.div>
  );
}
