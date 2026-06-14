import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { contactInfo } from '../data/content';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.item}>
            <HiOutlineLocationMarker aria-hidden="true" />
            {contactInfo.address}
          </span>
          <span className={styles.divider} aria-hidden="true">|</span>
          <span className={styles.item}>
            Sun – Thu: 9:00 AM – 6:00 PM (BST)
          </span>
        </div>
        <div className={styles.right}>
          <a href={`mailto:${contactInfo.email}`} className={styles.link}>
            <HiOutlineMail aria-hidden="true" />
            {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className={styles.link}>
            <HiOutlinePhone aria-hidden="true" />
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
