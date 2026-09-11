// Public overview based on the supplied CV and approved portfolio blueprint.
export const selectedWork = {
  id: "work",
  eyebrow: "01 / SELECTED WORK",
  heading: "Selected frontend projects.",
  project: {
    name: "Payment Gateway v3",
    category: "CHECKOUT FRONTEND",
    heading: "Frontend development for a multi-currency, multilingual checkout.",
    description: "I led frontend development for Payment Gateway v3 from the ground up, including dynamic payment method and provider selection.",
    technologies: ["React", "TypeScript", "Zustand", "SSE"],
    responsibilities: [
      { label: "Build", text: "Merchant-specific themes and checkout flows." },
      { label: "Live status", text: "Zustand and Server-Sent Events for real-time payment-status synchronization." },
      { label: "Handover", text: "Handed frontend development over to the team while continuing code reviews and quality oversight." },
    ],
    scopeTitle: "Checkout capabilities.",
    scopeCaption: "Frontend features and technologies used in Payment Gateway v3.",
    scope: [
      { label: "Merchant-specific checkout", detail: "Themes and checkout flows tailored to merchants." },
      { label: "Currencies and languages", detail: "Multi-currency and multilingual checkout interfaces." },
      { label: "Payment selection", detail: "Dynamic payment method and provider selection." },
      { label: "Payment-status synchronization", detail: "Zustand and Server-Sent Events for live status updates." },
    ],
  },
} as const;


export const merchantDashboard = {
  name: "Merchant Dashboard",
  category: "MERCHANT OPERATIONS",
  heading: "A dashboard for merchant payments, balances and settlement requests.",
  description: "I built the dashboard frontend from the ground up, including payment links, transaction views and transfer flows.",
  technologies: ["React", "TypeScript", "Ant Design", "Tailwind CSS", "easy-peasy", "SSE"],
  responsibilities: [
    { label: "Build", text: "Multi-currency balances, payment requests, shareable payment links, settlement requests and API key management." },
    { label: "Operate", text: "Transaction views and transfer flows for internal accounts and external destinations." },
    { label: "Lead", text: "After handing over day-to-day development to the team, I continued delivery coordination, code reviews, production hotfixes and performance optimization." },
  ],
  mapTitle: "Merchant dashboard capabilities.",
  mapCaption: "Features grouped by area of use.",
  areas: [
    { name: "Payments", capabilities: ["Payment requests", "Payment links", "Transactions"] },
    { name: "Balances", capabilities: ["Multi-currency", "Internal transfers", "External transfers"] },
    { name: "Settlements", capabilities: ["Settlement requests"] },
  ],
  access: { label: "Developer tools", detail: "API key management" },
  ownership: ["Built", "Handed over", "Continued quality oversight"],
} as const;

export const embeddedPayments = {
  name: "Payframe & Merchant SDK",
  category: "EMBEDDED CHECKOUT",
  heading: "Embedded and hosted checkout for merchant websites.",
  description: "I built Payframe for embedded and hosted checkout, and reworked the existing Merchant SDK’s transaction logic.",
  technologies: ["JavaScript", "iframe", "postMessage", "CDN"],
  responsibilities: [
    { label: "Embed", text: "Embedded and hosted Payframe integration, including tokenization, 3D Secure, saved cards and callbacks." },
    { label: "Integrate", text: "Merchant SDK functions for transaction creation, merchant authentication, checkout iframe integration and postMessage communication." },
    { label: "Handover", text: "Reworked SDK transaction logic and prepared integration documentation and examples for the team." },
  ],
  scopeTitle: "Two integration components.",
  scopeCaption: "Responsibilities across Payframe and the Merchant SDK.",
  scope: [
    { label: "Payframe · checkout", detail: "Embedded and hosted checkout, tokenization, 3D Secure, saved cards and callbacks." },
    { label: "Merchant SDK · integration", detail: "Merchant authentication, transaction creation, checkout iframe integration and postMessage communication." },
    { label: "Merchant SDK · handover", detail: "Reworked transaction logic, integration documentation and examples." },
  ],
} as const;
