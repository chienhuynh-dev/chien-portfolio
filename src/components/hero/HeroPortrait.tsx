import Image from "next/image";
import { profile } from "@/content/profile";
import styles from "../sections/Hero.module.css";

export function HeroPortrait() {
  return (
    <div className={styles.portrait}>
      <Image src={profile.portrait.src} alt={profile.portrait.alt} width={1290} height={1219}
        sizes="(max-width: 583px) calc(100vw - 40px), (max-width: 900px) 544px, (max-width: 1199px) calc(52vw - 8px), (max-width: 1439px) calc(58vw + 80px), 916px"
        preload className={styles.portraitImage} />
    </div>
  );
}
