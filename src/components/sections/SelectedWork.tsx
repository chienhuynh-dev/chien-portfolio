import { selectedWork, merchantDashboard, embeddedPayments } from "@/content/work";
import { PaymentArchitecture } from "@/components/work/PaymentArchitecture";
import { MerchantArchitecture } from "@/components/work/MerchantArchitecture";
import { EmbeddedArchitecture } from "@/components/work/EmbeddedArchitecture";
import styles from "./SelectedWork.module.css";

export function SelectedWork() {
  const projects = [
    { id: "gateway", project: selectedWork.project, visual: <PaymentArchitecture /> },
    { id: "merchant-dashboard", project: merchantDashboard, visual: <MerchantArchitecture /> },
    { id: "embedded-payments", project: embeddedPayments, visual: <EmbeddedArchitecture /> },
  ];

  return (
    <section id={selectedWork.id} className={`page-container ${styles.section}`} aria-labelledby="work-title" tabIndex={-1}>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>{selectedWork.eyebrow}</p>
        <h2 id="work-title">{selectedWork.heading}</h2>
        <p className={styles.description}>Examples of checkout development, merchant tools and website integrations. <a href="#products" className="underline underline-offset-4">Explore all nine products.</a></p>
      </header>
      {projects.map(({ id, project, visual }) => (
        <article key={id} id={id} className={styles.project} aria-labelledby={`${id}-title`}>
          <div className={styles.projectHeader} data-scroll-reveal>
            <p className={styles.projectName}>{project.name}</p>
            <p className={styles.category}>{project.category}</p>
          </div>
          <div className={styles.body}>
            <div className={styles.overview}>
              <h3 id={`${id}-title`}>{project.heading}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.technologies} aria-label="Technologies">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <dl className={styles.responsibilities}>
                {project.responsibilities.map((responsibility) => (
                  <div key={responsibility.label}>
                    <dt>{responsibility.label}</dt>
                    <dd>{responsibility.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className={styles.showcase} data-project-panel>{visual}</div>
          </div>
        </article>
      ))}
    </section>
  );
}
