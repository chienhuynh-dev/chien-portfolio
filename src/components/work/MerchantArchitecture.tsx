import { merchantDashboard } from "@/content/work";
import styles from "../sections/SelectedWork.module.css";

export function MerchantArchitecture() {
  return (
    <figure className={styles.architecture} aria-labelledby="merchant-map-title">
      <figcaption className={styles.caption}>
        <h4 id="merchant-map-title">{merchantDashboard.mapTitle}</h4>
        <p>{merchantDashboard.mapCaption}</p>
      </figcaption>
      <p className={styles.merchantRoot}>{merchantDashboard.name}</p>
      <ul className={styles.merchantAreas}>
        {merchantDashboard.areas.map((area) => (
          <li key={area.name} className={styles.merchantArea}>
            <p className={styles.areaName}>{area.name}</p>
            <ul className={styles.capabilities}>
              {area.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
          </li>
        ))}
      </ul>
      <dl className={styles.platformAccess}>
        <dt>{merchantDashboard.access.label}</dt>
        <dd>{merchantDashboard.access.detail}</dd>
      </dl>
      <ol className={styles.ownership} aria-label="Ownership progression">
        {merchantDashboard.ownership.map((stage) => <li key={stage}>{stage}</li>)}
      </ol>
    </figure>
  );
}
