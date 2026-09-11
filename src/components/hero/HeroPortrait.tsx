import Image from "next/image";
import { profile } from "@/content/profile";
import styles from "../sections/Hero.module.css";

export function HeroPortrait() {
  return (
    <div className={styles.portrait}>
      <Image src={profile.portrait.src} alt={profile.portrait.alt} width={960} height={1442}
        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 720px"
        preload className={styles.portraitImage} />
    </div>
  );
}
