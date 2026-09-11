import { leadership, principles, skills } from "@/content/resume";
import styles from "./Resume.module.css";

export function Resume() {
  return (
    <>
      <section id="about" className={`page-container ${styles.section}`} aria-labelledby="about-title" tabIndex={-1}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>03 / ABOUT & LEADERSHIP</p>
          <h2 id="about-title">Building interfaces.<br />Supporting the team behind them.</h2>
          <p className={styles.intro}>I’m Huỳnh Minh Chiến, a frontend engineer based in Ho Chi Minh City, Vietnam. At Hello Clever, my role grew from building interfaces to leading delivery and the Merchant Experience team.</p>
        </header>
        <div className={styles.grid}>
          {leadership.map((item) => <article key={item.title} data-scroll-reveal><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>
      <section id="principles" className={`page-container ${styles.section}`} aria-labelledby="principles-title">
        <header className={styles.heading}><p className={styles.eyebrow}>04 / ENGINEERING PRACTICE</p><h2 id="principles-title">How I approach the work.</h2></header>
        <dl className={styles.rows}>{principles.map((item) => <div key={item.title} data-scroll-reveal><dt>{item.title}</dt><dd>{item.text}</dd></div>)}</dl>
      </section>
      <section id="skills" className={`page-container ${styles.section}`} aria-labelledby="skills-title">
        <header className={styles.heading}><p className={styles.eyebrow}>05 / SKILLS</p><h2 id="skills-title">Tools and technologies.</h2></header>
        <dl className={styles.rows}>{skills.map((skill) => <div key={skill.category} data-scroll-reveal><dt>{skill.category}</dt><dd>{skill.items}</dd></div>)}</dl>
      </section>
      <section id="experience" className={`page-container ${styles.section}`} aria-labelledby="experience-title">
        <header className={styles.heading}><p className={styles.eyebrow}>06 / CAREER & EDUCATION</p><h2 id="experience-title">Experience and background.</h2></header>
        <div className={styles.career} data-scroll-reveal>
          <p className={styles.period}>JAN 2022 — PRESENT</p>
          <div><h3>Hello Clever Pty Ltd</h3><p className={styles.role}>Front-end Developer → Delivery Lead & Merchant Experience Team Lead</p><p>Frontend development across web, mobile and payment products, followed by team mentoring and cross-functional delivery coordination.</p></div>
        </div>
        <div className={styles.career} data-scroll-reveal>
          <p className={styles.period}>2013 — 2016</p>
          <div><h3>University of Economics Ho Chi Minh City</h3><p className={styles.role}>Bachelor’s Degree in Accounting · Major in Auditing</p></div>
        </div>
        <p className={styles.languages}>Languages <span>Vietnamese · English</span></p>
      </section>
    </>
  );
}
