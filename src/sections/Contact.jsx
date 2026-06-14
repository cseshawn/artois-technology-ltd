import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { contactInfo } from '../data/content';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          tag="Contact"
          title="Enquire About Our Services"
          subtitle="Submit your enquiry and a member of our team will respond within one business day. For urgent matters, please contact us by telephone."
        />

        <div className={styles.grid}>
          <aside className={`${styles.info} surface-card`}>
            <h3>Contact Information</h3>
            <ul className={styles.contactList}>
              <li>
                <HiOutlineLocationMarker className={styles.contactIcon} aria-hidden="true" />
                <div>
                  <span className={styles.contactLabel}>Office</span>
                  <span>{contactInfo.office}</span>
                </div>
              </li>
              <li>
                <HiOutlineMail className={styles.contactIcon} aria-hidden="true" />
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </li>
              <li>
                <HiOutlinePhone className={styles.contactIcon} aria-hidden="true" />
                <div>
                  <span className={styles.contactLabel}>Telephone</span>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
                </div>
              </li>
            </ul>
            <p className={styles.note}>
              Business hours: Sunday to Thursday, 9:00 AM – 6:00 PM (BST)
            </p>
          </aside>

          <form className={`${styles.form} surface-card`} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Telephone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <Button type="submit" variant="primary">
              Submit Enquiry
            </Button>

            {submitted && (
              <p className={styles.success} role="status">
                Your enquiry has been received. We will contact you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
