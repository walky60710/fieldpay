# Fieldpay

A fictional fintech site: a partner app for assignments, campus cards, merchant payments and investments.
Designed first as a Framer template, then rebuilt here in Next.js with the same design system.

## Where things live

| You want to change | Edit this file |
| --- | --- |
| Colours, spacing, radius, text styles | `src/app/globals.css` |
| Product copy, steps, fees, notes | `src/content/products.ts` |
| Customer quotes | `src/content/testimonials.ts` |
| Questions and answers | `src/content/faq.ts` |
| Home page layout | `src/app/page.tsx` and `src/app/home.module.css` |
| Product pages | `src/app/products/[slug]/page.tsx` |
| Navigation and products menu | `src/components/Nav.tsx` |

## Design system: Framer name → code name

Every Framer style has a code twin with the same name, lower-cased with a dash.

| Framer | Code |
| --- | --- |
| Colour style `Accent/Primary` | `var(--accent-primary)` |
| Colour style `Surface/Subtle` | `var(--surface-subtle)` |
| Text style `Heading/H1` | class `heading-h1` |
| Text style `Text/Lead` | class `text-lead` |
| Component `Button`, variant `Secondary` | `<Button variant="secondary" />` |
| Component `Phone`, variant `Invest` | `<Phone screen="invest" />` |

Breakpoints match Framer: Desktop 1200–1439 px, Desktop 1440 (150 px side margins), Tablet 810–1199 px, Phone under 810 px.

## Motion

- One easing curve everywhere: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Sections rise 12 px over 300 ms as they scroll into view.
- "Who does what" is a pinned 3D carousel on desktop, copied from the Palmer template's client section. On tablet, phone, or when "reduce motion" is on, it is a plain list.

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
```

Every push to `main` deploys to Vercel. Every branch gets its own preview link.
