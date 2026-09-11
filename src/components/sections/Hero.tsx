import { HeroIdentity } from "@/components/hero/HeroIdentity";
import { HeroActions } from "@/components/hero/HeroActions";
import { HeroPortrait } from "@/components/hero/HeroPortrait";
import { PaymentStatus } from "@/components/hero/PaymentStatus";
import { CareerMetrics } from "@/components/hero/CareerMetrics";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`page-container ${styles.hero}`} aria-label="Introduction">
      <div className={styles.copy}>
        <HeroIdentity />
        <Reveal delay={0.7}><HeroActions /></Reveal>
      </div>
      <div className={styles.visual}>
        <div className={styles.grid} aria-hidden="true" />
        <HeroPortrait />
        <PaymentStatus />
      </div>
      <Reveal delay={0.8} className={styles.metricsArea}><CareerMetrics /></Reveal>
    </section>
  );
}
