import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa';
import Logo from '../components/Logo';
import { footerLinks, contactInfo, socialLinks } from '../data/content';
import styles from './Footer.module.css';

const socialIcons = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  github: FaGithub,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo variant="horizontal" />
            <p className={styles.description}>
              Artois Technology Limited is a Dhaka-based IT firm providing software development,
              artificial intelligence, automation, and digital transformation services to
              corporate and institutional clients in Bangladesh and abroad.
            </p>
            <div className={styles.social}>
              {socialLinks.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <a
                    key={icon}
                    href={href}
                    className={styles.socialLink}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.links}>
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact</h4>
            <ul>
              <li>
                <span className={styles.contactLabel}>Email</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Phone</span>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Address</span>
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Artois Technology Limited. All rights reserved.</p>
          <p>A registered IT company operating from Dhaka, Bangladesh.</p>
        </div>
      </div>
    </footer>
  );
}
