// FAQ. Same fields as the "FAQ" CMS collection in Framer.
// showOnHome picks the questions on the home page; each product page shows its own.

export type FaqItem = { question: string; answer: string; product: string; showOnHome: boolean; order: number };

export const faq: FaqItem[] = [
  { order: 1, product: "fieldpay-partners", showOnHome: true, question: "Do I need experience to become a partner?", answer: "No. Each assignment comes with its steps in the app, and you can start with simpler ones like card activations." },
  { order: 2, product: "fieldpay-partners", showOnHome: true, question: "Why do I need to pass a KYC check?", answer: "Providers need to know who is visiting their customers. The check confirms your identity once, and you won’t repeat it for each assignment." },
  { order: 3, product: "fieldpay-partners", showOnHome: true, question: "When do I get paid?", answer: "You’re paid for each assignment once the provider approves it. The money reaches your bank account within 2 working days of approval." },
  { order: 4, product: "fieldpay-partners", showOnHome: false, question: "What happens if an assignment isn’t approved?", answer: "You’ll see the reason in the app and what to fix. Most assignments can be corrected and sent for review again." },
  { order: 5, product: "fieldpay-checkout", showOnHome: false, question: "When does the money reach my bank account?", answer: "Payments arrive in your bank account within 2 working days. Each payment in your history shows the date it’s due." },
  { order: 6, product: "fieldpay-checkout", showOnHome: false, question: "What happens if a payment fails?", answer: "No money moves, and both you and your customer see that it didn’t go through. Your customer can try again straight away or pay another way." },
  { order: 7, product: "fieldpay-checkout", showOnHome: false, question: "How do I give a refund?", answer: "Open the payment in your history and tap Refund. The money goes back to the customer’s original payment method, and you both get a confirmation." },
  { order: 8, product: "fieldpay-checkout", showOnHome: false, question: "Which phones does it work on?", answer: "Checkout works on recent iPhone and Android phones. Your customers don’t need the app; they only need a phone that can scan a code." },
  { order: 9, product: "fieldpay-campus", showOnHome: false, question: "Who decides who gets a card?", answer: "Your campus team does. They add students, set where cards work and can pause or replace a card at any time." },
  { order: 10, product: "fieldpay-campus", showOnHome: true, question: "What can parents see?", answer: "Parents see the card balance and the top-ups they’ve made. They don’t see where the card is used or any other student information." },
  { order: 11, product: "fieldpay-campus", showOnHome: false, question: "What happens if a card is lost?", answer: "The student or campus team can pause it in the app straight away, so nobody else can use the balance. The campus office then issues a new card with the same balance." },
  { order: 12, product: "fieldpay-campus", showOnHome: false, question: "Does the student need a phone?", answer: "No. The card works on its own at the gate, canteen and library. The app is optional, for checking the balance." },
  { order: 13, product: "fieldpay-invest", showOnHome: true, question: "Is my money guaranteed?", answer: "No. Investments can lose value, and you may get back less than you put in." },
  { order: 14, product: "fieldpay-invest", showOnHome: false, question: "Will my partner tell me what to invest in?", answer: "No. Your partner explains how a product works and what it costs, but the choice is yours. For personal advice, speak to a licensed financial adviser." },
  { order: 15, product: "fieldpay-invest", showOnHome: false, question: "How often are my values updated?", answer: "Values update once each working day, and each screen shows when it was last refreshed. The yearly change is measured from 1 January." },
  { order: 16, product: "fieldpay-invest", showOnHome: false, question: "Can I take my money out?", answer: "You can ask to sell your holdings at any time in the app. It can take up to 3 working days for the money to reach your bank account, and you may receive less than you invested." },
];
