import logo from '../assets/logo.png';
import styles from './Logo.module.css';

/**
 * Reusable Artois Technology logo component.
 * @param {'horizontal' | 'stacked' | 'compact'} variant - Layout variant
 * @param {string} className - Additional CSS classes
 */
export default function Logo({ variant = 'horizontal', className = '' }) {
  return (
    <a href="#home" className={`${styles.logo} ${styles[variant]} ${className}`} aria-label="Artois Technology LTD — Home">
      <img src={logo} alt="Artois Technology LTD" className={styles.image} />
    </a>
  );
}
