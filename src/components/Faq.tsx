import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/faq";
import styles from "./Faq.module.css";

// Framer component "FAQ item": Closed and Open. Uses <details> so it works without JavaScript.
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((f) => (
        <details key={f.question} className={styles.item}>
          <summary className={styles.q}>
            <span>{f.question}</span>
            <Plus size={20} strokeWidth={1.75} className={styles.icon} aria-hidden />
          </summary>
          <p className={`text-body ${styles.a}`}>{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
