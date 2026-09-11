import { profile } from "@/content/profile";
import styles from "../sections/Hero.module.css";

export function CareerMetrics() {
  return (
    <dl className={styles.metrics}>
      {profile.metrics.map((metric) => (
        <div key={metric.label} className={styles.metric}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
