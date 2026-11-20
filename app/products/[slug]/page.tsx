import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/content/products";
import { faq } from "@/content/faq";
import { Button } from "@/components/Button";
import { Phone } from "@/components/Phone";
import { Faq } from "@/components/Faq";
import { ProductIcon } from "@/components/Icon";
import { RevealObserver } from "@/components/Reveal";
import styles from "./product.module.css";

// One page per product, like the Framer CMS detail page "/products/:slug".
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return p ? { title: `${p.name}: ${p.tagline}`, description: p.summary } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const questions = faq.filter((f) => f.product === p.slug).sort((a, b) => a.order - b.order);

  return (
    <>
      <RevealObserver key={p.slug} />
      <section className={`section ${styles.top}`}>
        <div className={`container ${styles.header}`}>
          <div className={styles.headText}>
            <p className={styles.kicker}>
              <span className={styles.icon}><ProductIcon name={p.icon} size={18} /></span>
              <span className="text-small">{p.name}</span>
              {p.status === "soon" && <span className={styles.soon}>Coming soon</span>}
            </p>
            <h1 className="heading-h1">{p.tagline}</h1>
            <p className="text-lead">{p.summary}</p>
            <div className={styles.cta}>
              <Button label={p.buttonLabel} href={p.buttonLink} />
              {p.buttonNote && <p className="text-caption">{p.buttonNote}</p>}
            </div>
          </div>
          <div className={styles.visual}><div className={styles.visualPhone}><Phone screen={p.screen} /></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header left" data-reveal>
            <p className="text-eyebrow">How it works</p>
            <h2 className="heading-h2">Three steps</h2>
          </div>
          <ol className={styles.steps}>
            {p.steps.map((s, i) => (
              <li key={s.title} className={styles.step} data-reveal style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}>
                <span className={`${styles.num} tabular`}>{i + 1}</span>
                <h3 className="heading-h3">{s.title}</h3>
                <p className="text-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.fees}`}>
          <div className={styles.feesText} data-reveal>
            <p className="text-eyebrow">Fees and limits</p>
            <p className="text-quote">{p.fees}</p>
          </div>
          {p.note && (
            <aside className={styles.note} data-reveal>
              <h2 className="heading-h2-small">{p.note.title}</h2>
              <p className="text-body">{p.note.body}</p>
            </aside>
          )}
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.faq}`}>
          <div className="section-header left" data-reveal>
            <p className="text-eyebrow">Questions</p>
            <h2 className="heading-h2">About {p.name}</h2>
          </div>
          <div data-reveal><Faq items={questions} /></div>
        </div>
      </section>
    </>
  );
}
