import { embeddedPayments } from "@/content/work";
import styles from "../sections/SelectedWork.module.css";

export function EmbeddedArchitecture() {
  const project = embeddedPayments;

  return (
    <figure className={styles.architecture} aria-labelledby="embedded-scope-title">
      <figcaption className={styles.caption}>
        <h4 id="embedded-scope-title">{project.scopeTitle}</h4>
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
