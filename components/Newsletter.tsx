"use client";
import { useState } from "react";
import { framerImage } from "@/content/products";
import styles from "./Newsletter.module.css";

// The form isn't connected to an email service yet. It says so instead of pretending to sign you up.
export function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <div className={styles.wrap} data-reveal>
    <div className={styles.card}>
      <div className={styles.text}>
        <h2 className="heading-h2-small">Stay in the loop</h2>
        <p className="text-body">Product updates for partners and merchants, once a month.</p>
      </div>
      {sent ? (
        <p className="text-body" role="status">Thanks. This demo doesn’t store emails yet, so nothing was sent.</p>
      ) : (
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label className="sr-only" htmlFor="nl-email">Email address</label>
          <input id="nl-email" type="email" required placeholder="you@company.com" className={styles.input} autoComplete="email" />
          <button type="submit" className={`${styles.submit} ui-button`}>Subscribe</button>
        </form>
      )}
    </div>
    {/* eslint-disable-next-line @next/next/no-img-element -- served and resized by Framer's image CDN */}
    <img className={styles.image} src={framerImage("B39ARt8dSOm6vaqKFc83Mi3s.jpg", 2048)} srcSet={`${framerImage("B39ARt8dSOm6vaqKFc83Mi3s.jpg", 1024)} 1024w, ${framerImage("B39ARt8dSOm6vaqKFc83Mi3s.jpg", 2048)} 2048w`} sizes="(max-width: 1440px) 100vw, 1200px" alt="A field of wheat" loading="lazy" width={2048} height={680} />
    </div>
  );
}
