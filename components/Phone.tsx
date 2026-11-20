import { Bell, Check } from "lucide-react";
import type { PhoneScreen } from "@/content/products";
import styles from "./Phone.module.css";

// Framer component "Phone": one variant per product screen.
// Sample data only; it is decorative, so screen readers skip it.
export function Phone({ screen }: { screen: PhoneScreen }) {
  const dark = screen === "invest";
  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={`${styles.screen} ${dark ? styles.dark : ""}`}>
        <div className={styles.status}>
          <span>9:41</span>
          <span className={styles.notch} />
          <span className={styles.signal} />
        </div>
        {screen === "partners" && <Partners />}
        {screen === "checkout" && <Checkout />}
        {screen === "campus" && <Campus />}
        {screen === "invest" && <Invest />}
      </div>
    </div>
  );
}

function Partners() {
  const bars = [44, 62, 40, 70, 58, 80, 100];
  return (
    <div className={styles.body}>
      <div className={styles.appbar}>
        <span className={styles.avatar}>AM</span>
        <span className={styles.title}>My work</span>
        <Bell size={16} strokeWidth={1.75} className={styles.push} />
      </div>
      <p className={styles.label}>Earned this week</p>
      <p className={`${styles.figure} tabular`}>$1,284<span className={styles.cents}>.50</span></p>
      <p className={styles.change}><span className={styles.pill}>+$212.40</span> vs last week</p>
      <div className={styles.chart}>
        {bars.map((h, i) => (
          <div key={i} className={styles.barCol}>
            <div className={`${styles.bar} ${i === 6 ? styles.barOn : ""}`} style={{ height: `${h}%` }} />
            <span>{"MTWTFSS"[i]}</span>
          </div>
        ))}
      </div>
      <div className={styles.item}>
        <div><p className={styles.itemTitle}>KYC visit</p><p className={styles.label}>Riverside · 2 steps left</p></div>
        <div className={styles.right}><p className={`${styles.itemTitle} tabular`}>$24.00</p><span className={styles.tag}>Pending</span></div>
      </div>
      <div className={styles.item}>
        <div><p className={styles.itemTitle}>Card activation</p><p className={styles.label}>Elm Street · done</p></div>
        <div className={styles.right}><p className={`${styles.itemTitle} tabular`}>$18.00</p><span className={`${styles.tag} ${styles.ok}`}>Approved</span></div>
      </div>
    </div>
  );
}

function Checkout() {
  return (
    <div className={`${styles.body} ${styles.center}`}>
      <span className={styles.checkIcon}><Check size={28} strokeWidth={2} /></span>
      <p className={styles.title}>Payment received</p>
      <p className={`${styles.figure} tabular`}>$50<span className={styles.cents}>.00</span></p>
      <p className={styles.label}>From Jordan P. · 2:14 PM</p>
      <dl className={styles.rows}>
        <div><dt>Merchant</dt><dd>Corner Bakery</dd></div>
        <div><dt>Method</dt><dd>Fieldpay Checkout</dd></div>
        <div><dt>Fee</dt><dd className="tabular">$0.00</dd></div>
      </dl>
      <span className={styles.done}>Done</span>
    </div>
  );
}

function Campus() {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <p className={styles.cardTitle}>Campus card</p>
        <p className={styles.cardSub}>Westbrook College</p>
        <p className={`${styles.cardNum} tabular`}>•••• •••• •••• 4821</p>
        <p className={styles.cardSub}>Alex Morgan</p>
      </div>
      <p className={styles.label}>Balance</p>
      <p className={`${styles.figure} tabular`}>$124<span className={styles.cents}>.00</span></p>
      <p className={styles.change}><span className={styles.pill}>Parent view on</span></p>
      {[
        ["Canteen", "−$6.50"],
        ["Library print", "−$2.00"],
        ["Top-up from parent", "+$40.00"],
      ].map(([a, b]) => (
        <div key={a} className={styles.item}>
          <p className={styles.itemTitle}>{a}</p>
          <p className={`${styles.itemTitle} tabular`}>{b}</p>
        </div>
      ))}
    </div>
  );
}

function Invest() {
  const rows = [
    ["Bonds", "$20,000", "var(--accent-primary)"],
    ["Vehicle", "$12,000", "#dce7fc"],
    ["Home", "$10,000", "#9a9a9a"],
  ];
  return (
    <div className={styles.body}>
      <p className={styles.label}>Total holdings</p>
      <p className={`${styles.figure} tabular`}>$42,000<span className={styles.cents}>.00</span></p>
      <p className={styles.change}><span className={styles.pill}>+3.2%</span> this year</p>
      <div className={styles.split}>
        <span style={{ flex: 20, background: rows[0][2] }} />
        <span style={{ flex: 12, background: rows[1][2] }} />
        <span style={{ flex: 10, background: rows[2][2] }} />
      </div>
      {rows.map(([a, b, c]) => (
        <div key={a} className={styles.item}>
          <p className={styles.itemTitle}><i style={{ background: c }} className={styles.dot} />{a}</p>
          <p className={`${styles.itemTitle} tabular`}>{b}</p>
        </div>
      ))}
    </div>
  );
}
