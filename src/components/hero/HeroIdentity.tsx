import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import styles from "../sections/Hero.module.css";

export function HeroIdentity() {
  return (
    <div>
      <h1 className={styles.name} lang="vi" aria-label={profile.name}>
        {profile.nameLines.map((line, index) => <Reveal as="span" key={line} delay={0.2 + index * 0.1} className="block">{line}</Reveal>)}
      </h1>
      <Reveal delay={0.45}><p className={styles.role}>{profile.role}</p></Reveal>
      <Reveal delay={0.55}><p className={styles.statement}>{profile.statement}</p></Reveal>
    </div>
  );
}
