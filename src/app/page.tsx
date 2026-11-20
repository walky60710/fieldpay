import Link from "next/link";
import { products } from "@/content/products";
import { testimonials } from "@/content/testimonials";
import { faq } from "@/content/faq";
import { Button } from "@/components/Button";
import { Phone } from "@/components/Phone";
import { WhoDoesWhat } from "@/components/WhoDoesWhat";
import { Faq } from "@/components/Faq";
import { Newsletter } from "@/components/Newsletter";
import { RevealObserver } from "@/components/Reveal";
import styles from "./home.module.css";

const steps = [
  { title: "See an assignment.", body: "Open the app and take an assignment that is already approved for you." },
  { title: "Finish the work.", body: "Complete the steps on the assignment. Its status moves from pending to approved." },
  { title: "See the payout.", body: "The amount for that assignment shows on the same screen. No separate earnings page." },
];

export default function Home() {
  const featured = testimonials.find((t) => t.featured)!;
  const others = testimonials.filter((t) => !t.featured).sort((a, b) => a.order - b.order);
  const homeFaq = faq.filter((f) => f.showOnHome).sort((a, b) => a.order - b.order);
  const productName = (slug: string) => products.find((p) => p.slug === slug)?.name ?? "";

  return (
    <>
      <RevealObserver />

      {/* Hero */}
      <section className={styles.heroWrap}>
        <div className={styles.hero}>
          <picture className={styles.heroImage}>
            <source media="(max-width: 809.98px)" srcSet="/hero-1280.webp" />
            <img src="/hero.webp" alt="" fetchPriority="high" />
          </picture>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={`text-eyebrow ${styles.enter}`}>Partner app · Financial products</p>
            <h1 className={`heading-h1 ${styles.enter}`} style={{ "--d": "60ms" } as React.CSSProperties}>Get paid for financial-product assignments.</h1>
            <p className={`text-lead ${styles.enter}`} style={{ "--d": "120ms" } as React.CSSProperties}>Register, finish KYC, take an assignment and see the payout in the same app.</p>
            <div className={`${styles.actions} ${styles.enter}`} style={{ "--d": "180ms" } as React.CSSProperties}>
              <Button label="Become a partner" href="/products/fieldpay-partners" />
              <Button label="Explore products" href="#products" variant="secondary" />
            </div>
          </div>
          <div className={styles.devices}>
            <div className={`${styles.device} ${styles.side} ${styles.left}`}><Phone screen="checkout" /></div>
            <div className={`${styles.device} ${styles.middle}`}><Phone screen="partners" /></div>
            <div className={`${styles.device} ${styles.side} ${styles.right}`}><Phone screen="invest" /></div>
          </div>
        </div>
      </section>

      <WhoDoesWhat />

      {/* How it works */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-header" data-reveal>
            <p className="text-eyebrow">How it works</p>
            <h2 className="heading-h2">See the work. Finish it. Get paid.</h2>
            <p className="text-lead">Three steps. One partner app.</p>
          </div>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title} className={styles.step} data-reveal style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}>
                <span className={`${styles.stepNum} tabular`}>{i + 1}</span>
                <h3 className="heading-h3">{s.title}</h3>
                <p className="text-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section">
        <div className="container">
          <div className="section-header left" data-reveal>
            <p className="text-eyebrow">Products</p>
            <h2 className="heading-h2">Everything a partner needs to move money.</h2>
            <p className="text-lead">Four products, one partner account.</p>
          </div>
          <ul className={styles.products}>
            {products.map((p, i) => (
              <li key={p.slug} data-reveal style={{ "--reveal-delay": `${(i % 2) * 60}ms` } as React.CSSProperties}>
                <Link href={`/products/${p.slug}`} className={styles.productCard}>
                  <div className={styles.cover}><div className={styles.coverPhone}><Phone screen={p.screen} /></div></div>
                  <div className={styles.productText}>
                    <p className={styles.productName}>
                      <span className="heading-h3">{p.name}</span>
                      {p.status === "soon" && <span className={styles.soon}>Coming soon</span>}
                    </p>
                    <p className="text-body">{p.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Customers */}
      <section id="customers" className="section">
        <div className="container">
          <div className="section-header left" data-reveal>
            <p className="text-eyebrow">Customers</p>
            <h2 className="heading-h2">The partner does the work. The app keeps the record.</h2>
            <p className="text-lead">What partners, providers, merchants and campuses say after switching.</p>
          </div>
          <div className={styles.quotes}>
            <figure className={styles.featured} data-reveal>
              <p className={`${styles.metric} tabular`}>{featured.metric}</p>
              <p className="text-small">{featured.metricLabel}</p>
              <blockquote className="text-quote">“{featured.quote}”</blockquote>
              <Person t={featured} as="figcaption" />
            </figure>
            <ul className={styles.quoteList}>
              {others.map((t, i) => (
                <li key={t.name} className={styles.quote} data-reveal style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}>
                  <div className={styles.quoteHead}>
                    <span className={styles.tag}>{productName(t.product)}</span>
                    <span className="text-caption tabular"><strong className={styles.strong}>{t.metric}</strong> {t.metricLabel}</span>
                  </div>
                  <blockquote className="text-body">“{t.quote}”</blockquote>
                  <Person t={t} small />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className={`container ${styles.faq}`}>
          <div className="section-header left" data-reveal>
            <p className="text-eyebrow">Questions</p>
            <h2 className="heading-h2">Common questions</h2>
            <p className="text-lead">Short answers about assignments, payments and privacy. Each product page has its own questions too.</p>
          </div>
          <div data-reveal><Faq items={homeFaq} /></div>
        </div>
      </section>

      <section className="section"><Newsletter /></section>
    </>
  );
}

function Person({ t, small, as: Tag = "div" }: { t: (typeof testimonials)[number]; small?: boolean; as?: "div" | "figcaption" }) {
  return (
    <Tag className={styles.person}>
      {/* Remote photo from Unsplash at its display size; the grey circle shows while it loads. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- 44 px avatar, already sized by the Unsplash URL */}
      <img src={t.photo} alt={`Portrait of ${t.name}`} width={small ? 36 : 44} height={small ? 36 : 44} className={styles.avatar} loading="lazy" />
      <span>
        <span className={styles.name}>{t.name}</span>
        <span className="text-caption">{t.role}</span>
      </span>
    </Tag>
  );
}
