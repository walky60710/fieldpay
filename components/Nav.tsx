"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { products } from "@/content/products";
import { Button } from "./Button";
import { ProductIcon } from "./Icon";
import { Phone } from "./Phone";
import styles from "./Nav.module.css";

const links = [
  { label: "Who does what", href: "/#who-does-what", wide: true },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Questions", href: "/#faq" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); // desktop products menu
  const [drawerOpen, setDrawerOpen] = useState(false); // phone menu
  const [preview, setPreview] = useState(products[0]);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenuOpen(false); setDrawerOpen(false); }
    };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  const open = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setMenuOpen(true); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setMenuOpen(false), 120); };

  return (
    <header className={styles.header}>
      <nav className={styles.bar} aria-label="Main">
        <Link href="/" className="ui-logo" onClick={() => setDrawerOpen(false)}>Fieldpay</Link>

        <div className={styles.links}>
          <div ref={wrapRef} className={styles.menuWrap} onMouseEnter={open} onMouseLeave={scheduleClose}>
            <button
              className={`${styles.link} ${styles.trigger}`}
              aria-expanded={menuOpen}
              aria-controls="products-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              Products <ChevronDown size={16} strokeWidth={1.75} className={menuOpen ? styles.chevOpen : styles.chev} aria-hidden />
            </button>
            <div id="products-menu" className={`${styles.panel} ${menuOpen ? styles.panelOpen : ""}`}>
              <div className={styles.panelList}>
                <ul>
                  {products.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/products/${p.slug}`}
                        className={`${styles.row} ${preview.slug === p.slug ? styles.rowOn : ""}`}
                        onMouseEnter={() => setPreview(p)}
                        onFocus={() => setPreview(p)}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className={styles.rowIcon}><ProductIcon name={p.icon} size={20} /></span>
                        <span className={styles.rowText}>
                          <span className={styles.rowName}>
                            <span className="ui-button">{p.name}</span>
                            {p.status === "soon" && <span className={styles.soon}>Coming soon</span>}
                          </span>
                          <span className="text-small">{p.menuBlurb}</span>
                          <span className={`text-caption ${styles.aud}`}>{p.audience}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className={styles.panelFoot}>
                  <Link href="/#who-does-what" className="text-small link-inline" onClick={() => setMenuOpen(false)}>New to Fieldpay? See who does what</Link>
                  <Link href="/#products" className="text-small link-inline" onClick={() => setMenuOpen(false)}>All products</Link>
                </div>
              </div>
              <div className={styles.preview}>
                <div className={styles.previewPhone}><Phone screen={preview.screen} /></div>
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`${styles.link} ${"wide" in l ? styles.wideOnly : ""}`}>{l.label}</Link>
          ))}
        </div>

        <div className={styles.cta}><Button label="Become a partner" href="/products/fieldpay-partners" /></div>

        <button className={styles.burger} aria-label={drawerOpen ? "Close menu" : "Open menu"} aria-expanded={drawerOpen} aria-controls="drawer" onClick={() => setDrawerOpen((v) => !v)}>
          {drawerOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </nav>

      <div id="drawer" className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`} hidden={!drawerOpen}>
        <p className="text-eyebrow">Products</p>
        <ul className={styles.drawerList}>
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`} className={styles.drawerRow} onClick={() => setDrawerOpen(false)}>
                <span className={styles.rowIcon}><ProductIcon name={p.icon} size={20} /></span>
                <span className={styles.rowText}><span className="ui-button">{p.name}</span><span className="text-caption">{p.audience}</span></span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.drawerList}>
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>{l.label}</Link></li>
          ))}
        </ul>
        <Button label="Become a partner" href="/products/fieldpay-partners" />
      </div>
    </header>
  );
}
