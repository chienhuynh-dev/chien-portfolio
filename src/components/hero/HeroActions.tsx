import { profile } from "@/content/profile";
import styles from "../sections/Hero.module.css";

export function HeroActions() {
  return (
    <div className={styles.actions}>
      <a href={profile.actions.workHref} className={`${styles.button} ${styles.primary}`}>
        {profile.actions.work}<span aria-hidden="true">↗</span>
      </a>
      <a href={profile.cv.href} download={profile.cv.filename} className={`${styles.button} ${styles.secondary}`}>
        {profile.actions.cv}
      </a>
    </div>
  );
}
