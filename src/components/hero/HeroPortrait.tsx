import Image from "next/image";
import { profile } from "@/content/profile";
import styles from "../sections/Hero.module.css";

export function HeroPortrait() {
  return (
    <div className={styles.portrait}>
      <Image src={profile.portrait.src} alt={profile.portrait.alt} width={1117} height={1408}
        sizes="(max-width: 487px) calc(100vw - 40px), (max-width: 900px) 448px, (max-width: 1199px) 432px, 544px"
        preload className={styles.portraitImage} />
    </div>
  );
}
