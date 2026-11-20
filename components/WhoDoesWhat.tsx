"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, HandCoins, Landmark, Smartphone, User, Users } from "lucide-react";
import styles from "./WhoDoesWhat.module.css";

const roles = [
  { icon: Landmark, title: "Provider", body: "A bank, college or merchant that needs work done for its customers, like ID checks or card activations." },
  { icon: Smartphone, title: "Fieldpay", body: "Lists each assignment with its steps and payout, and holds the payment until the work is approved.", accent: true },
  { icon: User, title: "Partner", body: "Takes an assignment nearby, follows the steps in the app and is paid for each approved assignment." },
  { icon: Users, title: "Customer", body: "Gets the service in person, from a partner who has passed an ID check." },
];

/*
  Copied from the Palmer "Client" pattern:
  - Desktop (1200 px and up): the section pins while the four cards turn past in 3D.
    Scrolling the 1000 px track turns the carousel 180° and lifts it 480 px.
  - Tablet, phone, or "reduce motion" turned on: a plain list of cards with arrows.
*/
export function WhoDoesWhat() {
  const trackRef = useRef<HTMLDivElement>(null);
  const helixRef = useRef<HTMLOListElement>(null);
  const [is3d, setIs3d] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px) and (prefers-reduced-motion: no-preference)");
    const update = () => setIs3d(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!is3d) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const track = trackRef.current, helix = helixRef.current;
        if (!track || !helix) return;
        const r = track.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        const p = Math.min(1, Math.max(0, -r.top / total));
        helix.style.transform = `translateY(${240 - 480 * p}px) rotateY(${90 - 180 * p}deg)`;
        setActive(Math.round(p * (roles.length - 1)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [is3d]);

  const header = (
    <div className="section-header" data-reveal>
      <p className="text-eyebrow">How the money moves</p>
      <h2 id="wdw-title" className="heading-h2">Who does what</h2>
      <p className="text-lead">Four roles, one flow of work and money. Here’s who does each part.</p>
    </div>
  );

  return (
    <section id="who-does-what" className={`section ${styles.section} ${is3d ? styles.is3d : ""}`} aria-labelledby="wdw-title">
      <div ref={trackRef} className={styles.track}>
        <div className={styles.sticky}>
          {header}
          <div className={styles.stage}>
            <ol ref={helixRef} className={styles.flow}>
              {roles.map((r, i) => (
                <li key={r.title} className={styles.row} style={{ "--i": i } as React.CSSProperties}>
                  <article className={`${styles.card} ${r.accent ? styles.accent : ""}`} aria-current={is3d && active === i ? "step" : undefined} data-reveal={is3d ? undefined : ""} style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}>
                    <span className={styles.icon}><r.icon size={22} strokeWidth={1.75} aria-hidden /></span>
                    <h3 className="heading-h3">{r.title}</h3>
                    <p className="text-body">{r.body}</p>
                  </article>
                  {i < roles.length - 1 && <span className={styles.arrow} aria-hidden><ArrowRight size={20} strokeWidth={1.75} /></span>}
                </li>
              ))}
            </ol>
          </div>
          {is3d && (
            <p className={`text-caption ${styles.progress}`} aria-hidden>
              {active + 1} of {roles.length} · {roles[active].title}
            </p>
          )}
        </div>
      </div>
      <p className={`text-small ${styles.note}`} data-reveal>
        <HandCoins size={20} strokeWidth={1.75} aria-hidden className={styles.noteIcon} />
        Work moves from the provider to the customer. Money moves back: the provider pays Fieldpay, and Fieldpay pays the partner once the work is approved.
      </p>
    </section>
  );
}
