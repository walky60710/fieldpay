import Link from "next/link";
import { products } from "@/content/products";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className="ui-logo">Fieldpay</Link>
          <p className="text-small">Assignments, campus cards and merchant payments in one partner app.</p>
        </div>
        <nav className={styles.cols} aria-label="Footer">
          <div>
            <p className="text-eyebrow">Products</p>
            <ul>{products.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`} className={styles.link}>{p.name}</Link></li>)}</ul>
          </div>
          <div>
            <p className="text-eyebrow">On this page</p>
            <ul>
              <li><Link href="/#who-does-what" className={styles.link}>Who does what</Link></li>
              <li><Link href="/#how-it-works" className={styles.link}>How it works</Link></li>
              <li><Link href="/#customers" className={styles.link}>Customers</Link></li>
              <li><Link href="/#faq" className={styles.link}>Questions</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={`${styles.bottom} text-caption`}>
        <span>© 2026 Fieldpay. A fictional product, built as a design and code sample.</span>
        <a href="mailto:hello@example.com" className={styles.link}>hello@example.com</a>
      </div>
    </footer>
  );
}
