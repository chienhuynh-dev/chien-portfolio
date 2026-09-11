import { contact } from "@/content/resume";
import { profile } from "@/content/profile";
import styles from "./Resume.module.css";

export function Contact() {
  return (
    <section id="contact" className={`page-container ${styles.section} ${styles.contact}`} aria-labelledby="contact-title">
      <p className={styles.eyebrow}>07 / CONTACT</p>
      <h2 id="contact-title">Let’s talk.</h2>
      <a className={styles.email} href={`mailto:${contact.email}`}>{contact.email}<span aria-hidden="true"> ↗</span></a>
      <div className={styles.contactLinks}>
        <a href={contact.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
        <a href={contact.phoneHref}>{contact.phone}</a>
        <a href={profile.cv.href} download={profile.cv.filename}>Download CV <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className={`page-container ${styles.footer}`}>
      <p>Huỳnh Minh Chiến</p>
      <nav aria-label="Footer navigation"><a href="#products">All products</a><a href="#contact">Contact</a><a href="#main">Back to top ↑</a></nav>
    </footer>
  );
}
