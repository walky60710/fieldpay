// Products. Same fields as the "Products" CMS collection in Framer.
// Edit copy here; every page that lists products updates.

export type PhoneScreen = "partners" | "checkout" | "campus" | "invest";

export type Product = {
  slug: string;
  name: string;
  short: string; // Name without "Fieldpay"
  status: "live" | "soon";
  order: number;
  icon: "Briefcase" | "Store" | "GraduationCap" | "ChartPie";
  audience: string;
  screen: PhoneScreen;
  cover: string; // Framer image id, served from framerusercontent.com
  tagline: string;
  summary: string;
  menuBlurb: string;
  buttonLabel: string;
  buttonLink: string;
  buttonNote?: string;
  fees: string;
  note?: { title: string; body: string };
  steps: { title: string; body: string }[];
};

export const products: Product[] = [
  {
    slug: "fieldpay-partners",
    cover: "jWPPjapIf4HySeNfRJwsgsKlIRw.jpg",
    name: "Fieldpay Partners",
    short: "Partners",
    status: "live",
    order: 1,
    icon: "Briefcase",
    audience: "For partners",
    screen: "partners",
    tagline: "Take approved assignments and get paid for each",
    summary:
      "Pass a quick ID check, take assignments near you, finish each one step by step and see every payout in the same app.",
    menuBlurb: "Take assignments, finish the steps, see each payout",
    buttonLabel: "Become a partner",
    buttonLink: "/products/fieldpay-partners",
    fees:
      "Fieldpay doesn’t charge you to sign up or to take an assignment. Payouts go to the bank account in your name, and you can hold up to 5 open assignments at a time.",
    note: {
      title: "Earnings example",
      body: "Example: Alex Morgan finished 12 assignments in one week, mostly KYC visits at $24 each, and saw $268.00 in payouts that week. What you earn depends on the assignments available near you and how many you take.",
    },
    steps: [
      { title: "Verify your ID", body: "Pass a KYC check (Know Your Customer: a quick ID check) with a photo ID and a selfie. Most checks clear in a day." },
      { title: "Accept an assignment", body: "Pick from assignments that are approved for you, like a KYC visit or a card activation. Each one shows its payout first." },
      { title: "Finish and get paid", body: "Complete the steps in the app. Once the provider approves your work, the payout appears on the same screen." },
    ],
  },
  {
    slug: "fieldpay-checkout",
    cover: "tO9n4rMnnqMQun54SIHYV5iPfzE.jpg",
    name: "Fieldpay Checkout",
    short: "Checkout",
    status: "soon",
    order: 2,
    icon: "Store",
    audience: "For merchants",
    screen: "checkout",
    tagline: "Take payments from your customers’ phones",
    summary:
      "Customers pay from their phone and you both see the same confirmation: the amount, the time and a Done button.",
    menuBlurb: "Take phone payments with one shared confirmation",
    buttonLabel: "Join the waitlist",
    buttonLink: "mailto:hello@example.com?subject=Fieldpay%20Checkout%20waitlist",
    buttonNote: "We’ll email you once, when Checkout opens in your area.",
    fees: "Each payment costs 1.5%, and there’s no monthly charge. You can take up to $2,000 a day while your account is new.",
    steps: [
      { title: "Show your code", body: "Open Fieldpay and show your shop’s payment code at the counter, on screen or printed." },
      { title: "Customer pays", body: "Your customer scans the code, checks the amount and pays from their own phone." },
      { title: "Both see it", body: "You and your customer see the same screen with the amount and the time. Tap Done and serve the next person." },
    ],
  },
  {
    slug: "fieldpay-campus",
    cover: "beCgJ7AeyXgiqoYtSyTCYZPPMNI.jpg",
    name: "Fieldpay Campus",
    short: "Campus",
    status: "soon",
    order: 3,
    icon: "GraduationCap",
    audience: "For campuses",
    screen: "campus",
    tagline: "One card for ID, meals and the library",
    summary:
      "Give every student one card for ID, the canteen and the library, with an easy way for parents to top it up.",
    menuBlurb: "One student card for ID, campus payments and top-ups",
    buttonLabel: "Join the waitlist",
    buttonLink: "mailto:hello@example.com?subject=Fieldpay%20Campus%20waitlist",
    buttonNote: "We’ll contact your campus team once, when Campus opens for enrolment.",
    fees: "Pricing is set per campus, from $3 per student a month. There’s no charge for parents to top up a card.",
    note: {
      title: "Privacy",
      body: "Parents can see the card balance and the top-ups they’ve made. They can’t see where or when the card is used, or anything else on the student’s record.",
    },
    steps: [
      { title: "Add your students", body: "Upload your student list or add students one by one. Each student gets a card linked to their college record." },
      { title: "Set the rules", body: "Choose where the card works, set daily spending limits and decide which parents can top up." },
      { title: "Hand out cards", body: "Give students their cards at enrolment. They work at the gate, canteen and library from the first day." },
    ],
  },
  {
    slug: "fieldpay-invest",
    cover: "QeldFx0d27FfpRZzSQqPaCU0Pc.jpg",
    name: "Fieldpay Invest",
    short: "Invest",
    status: "soon",
    order: 4,
    icon: "ChartPie",
    audience: "For investors",
    screen: "invest",
    tagline: "See everything you hold in one place",
    summary:
      "A partner walks you through an investment product, then you see all your holdings, one total and how it has changed this year.",
    menuBlurb: "See your holdings, grouped by type, with one total",
    buttonLabel: "Join the waitlist",
    buttonLink: "mailto:hello@example.com?subject=Fieldpay%20Invest%20waitlist",
    buttonNote: "We’ll email you once, when Invest opens in your area.",
    fees: "Each product shows its fees before you invest, from 0.5% a year. You can ask to sell at any time, and money can take up to 3 working days to reach your bank.",
    note: {
      title: "Risks",
      body: "The value of investments can go down as well as up, so you may get back less than you put in. Past changes don’t tell you what will happen next.",
    },
    steps: [
      { title: "Meet a partner", body: "A Fieldpay partner explains an investment product in person: what it is, what it costs and what could go wrong." },
      { title: "Decide for yourself", body: "Take your time, ask questions and choose whether to invest. Nothing is bought until you confirm it in the app." },
      { title: "Follow your holdings", body: "See everything you hold, grouped by type, with one total and how it has changed this year." },
    ],
  },
];

// Image from the Framer file at a given width (512, 1024 or 2048).
export const framerImage = (id: string, width?: 512 | 1024 | 2048) =>
  `https://framerusercontent.com/images/${id}${width ? `?scale-down-to=${width}` : ""}`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
