import { profile } from "@/content/profile";
import styles from "../sections/Hero.module.css";

export function PaymentStatus() {
  return (
    <ol className={styles.payment} aria-hidden="true">
      {profile.paymentStates.map((state) => (
        <li key={state} className={state === profile.activePaymentState ? styles.authorized : undefined}>
          <span className={styles.node} />
          <span>{state}</span>
        </li>
      ))}
    </ol>
  );
}
