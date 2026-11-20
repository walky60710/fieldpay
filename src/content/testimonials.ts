// Testimonials. Same fields as the "Testimonials" CMS collection in Framer.
// Keep exactly one item with featured: true.

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo: string;
  product: string; // product slug
  metric: string;
  metricLabel: string;
  featured: boolean;
  order: number;
};

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?w=192&h=192&fit=crop&crop=faces&q=80&auto=format`;

export const testimonials: Testimonial[] = [
  {
    name: "Sam Okafor",
    role: "Fieldpay partner in Riverside",
    quote:
      "I started with two card activations a week to see how it worked. Now I plan my week around the assignments in the app, and I can see what each one pays before I say yes.",
    photo: photo("photo-1600603406200-5b2a104684ac"),
    product: "fieldpay-partners",
    metric: "140",
    metricLabel: "assignments in 6 months",
    featured: true,
    order: 1,
  },
  {
    name: "Dana Whitfield",
    role: "Operations lead at Alder Credit",
    quote:
      "Fieldpay gives our partners the assignment list, the steps for each job and the payout on one screen. After 12,000 assignments, handoffs between partners and our team are much clearer.",
    photo: photo("photo-1573496359142-b8d87734a5a2"),
    product: "fieldpay-partners",
    metric: "12,000",
    metricLabel: "assignments in 9 months",
    featured: false,
    order: 2,
  },
  {
    name: "Priya Nair",
    role: "Owner of Corner Bakery",
    quote:
      "During the Checkout pilot, customers paid from their phones and we both saw the same screen. No more asking whether a payment went through.",
    photo: photo("photo-1670609506497-88667fdce4cf"),
    product: "fieldpay-checkout",
    metric: "6 weeks",
    metricLabel: "in the Checkout pilot",
    featured: false,
    order: 3,
  },
  {
    name: "Marcus Ojo",
    role: "Campus services at Westbrook College",
    quote:
      "One card now covers student ID, campus payments and the parent view. We issued 4,800 cards in the first term and retired three separate ID systems.",
    photo: photo("photo-1755519024555-a660fefc8dc3"),
    product: "fieldpay-campus",
    metric: "4,800",
    metricLabel: "cards issued in the first term",
    featured: false,
    order: 4,
  },
];
