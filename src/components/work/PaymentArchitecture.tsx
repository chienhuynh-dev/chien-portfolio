import { selectedWork } from "@/content/work";
import styles from "../sections/SelectedWork.module.css";

export function PaymentArchitecture() {
  const project = selectedWork.project;

  return (
    <figure className={styles.architecture} aria-labelledby="payment-scope-title">
      <figcaption className={styles.caption}>
        <h4 id="payment-scope-title">{project.scopeTitle}</h4>
        <p>{project.scopeCaption}</p>
      </figcaption>
      <dl className={styles.scope}>
        {project.scope.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.detail}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
