import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { heroStats } from '../data/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.layout}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.eyebrow}>Registered IT Firm — Dhaka, Bangladesh</p>
          <h1 className={styles.headline}>
            Transforming Ideas into Intelligent Digital Solutions
          </h1>
          <p className={styles.subheadline}>
            We provide structured software engineering, artificial intelligence, and business
            automation services to enterprises, financial institutions, and organisations across
            Bangladesh and international markets.
          </p>

          <div className={styles.buttons}>
            <Button href="#contact" variant="primary">
              Request Consultation
            </Button>
            <Button href="#services" variant="secondary">
              View Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          className={styles.brandPanel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className={`${styles.logoFrame} surface-card`}>
            <Logo variant="stacked" />
          </div>
        </motion.div>
      </div>

      <div className={styles.statsBar}>
        <div className={`container ${styles.statsInner}`}>
          {heroStats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
