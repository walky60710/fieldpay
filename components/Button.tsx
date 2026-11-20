import Link from "next/link";
import styles from "./Button.module.css";

// Framer component "Button": variants Primary and Secondary.
type Props = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ label, href, variant = "primary" }: Props) {
  const className = `${styles.button} ${styles[variant]} ui-button`;
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return <a className={className} href={href}>{label}</a>;
  }
  return <Link className={className} href={href}>{label}</Link>;
}
