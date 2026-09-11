export const products = [
  { name: "Hello Clever Landing Page", category: "Marketing website", description: "Built the marketing website’s initial structure, UI and reusable components. Continued code reviews, production fixes and performance work after handing over maintenance.", technologies: ["Next.js", "Tailwind CSS"] },
  { name: "Merchant Dashboard", category: "Merchant operations", description: "Built frontend interfaces for payment links, transactions, multi-currency balances, transfers and settlement requests. Continued delivery oversight and reviews after team handover.", technologies: ["React", "TypeScript", "Ant Design", "Tailwind CSS", "easy-peasy", "SSE"], href: "#merchant-dashboard" },
  { name: "Internal Admin Portal", category: "Internal operations", description: "Built administrative interfaces for merchant and payment management, unmatched payments, payout monitoring, fund allocation, settlement tasks, treasury transactions, blacklist management and merchant balance top-ups.", technologies: [] },
  { name: "Hello Clever Consumer Mobile App", category: "Consumer mobile", description: "Developed mobile features for identity verification (KYC), card management, cashback redemption and deal discovery, with push notifications, deep links, biometric authentication and location services.", technologies: ["React Native", "easy-peasy"] },
  { name: "Payment Gateway v1 & v2", category: "AUD hosted checkout", description: "Developed and maintained hosted checkout interfaces for AUD payments, including PayID, cards, Apple Pay and Google Pay. Integrated merchant configuration and payment-status polling across both versions.", technologies: ["React", "TypeScript", "Tailwind CSS", "Ant Design", "easy-peasy"] },
  { name: "Payment Gateway v3", category: "Multi-currency checkout", description: "Led frontend development from the ground up for multilingual, multi-currency checkout, with dynamic selection of payment methods and providers, plus live payment-status updates.", technologies: ["React", "TypeScript", "Zustand", "SSE"], href: "#gateway" },
  { name: "Clever Card", category: "Card entry", description: "Developed a card-entry module for adding cards and initiating payments, with Visa, Mastercard and JCB support, plus Apple Pay and Google Pay payment and card-registration integrations.", technologies: [] },
  { name: "Payframe", category: "Embedded & hosted checkout", description: "Built embedded and hosted checkout integrations, including tokenization, 3D Secure, saved cards and callbacks.", technologies: ["iframe"], href: "#embedded-payments" },
  { name: "Merchant SDK", category: "Merchant integration", description: "Reworked transaction logic in the existing SDK, covering merchant authentication, transaction creation, checkout iframe integration and postMessage communication. Prepared integration documentation and examples for handover.", technologies: ["JavaScript", "postMessage", "CDN"], href: "#embedded-payments" },
] as const;

export const leadership = [
  { title: "Architecture", text: "Established frontend structure, coding conventions, reusable components and design-system standards across product work." },
  { title: "Delivery", text: "Coordinated scope, priorities, task allocation, dependencies and delivery risks with product managers, backend engineers and QA in a 10–12-person product team." },
  { title: "People", text: "Directly mentored six frontend engineers through regular catch-ups, technical guidance and code reviews." },
  { title: "Quality", text: "Reviewed changes and supported production hotfixes, performance work and release quality after product handovers." },
] as const;

export const principles = [
  { title: "Shared foundations", text: "Use reusable components and coding conventions to keep implementation consistent across products." },
  { title: "Clear handovers", text: "Pair implementation with documentation, integration examples and continued code reviews." },
  { title: "Ongoing maintenance", text: "Include production fixes and maintainability in delivery responsibilities." },
] as const;

export const skills = [
  { category: "Frontend", items: "React · Next.js · React Native · TypeScript · JavaScript · HTML5 · CSS3 · Vite" },
  { category: "State management", items: "Zustand · Redux Toolkit · easy-peasy" },
  { category: "UI & design", items: "Tailwind CSS · Ant Design · shadcn/ui · Design systems · Figma" },
  { category: "Integration", items: "Internationalization (i18n) · Server-Sent Events · iframe integration · postMessage · CDN-delivered SDKs" },
  { category: "Services & monitoring", items: "Firebase · Sentry" },
  { category: "Development tools", items: "Git · Jenkins" },
  { category: "AI tools", items: "Codex · GPT · Claude" },
] as const;

export const contact = {
  email: "chien10295@gmail.com",
  phone: "+84 905 306 269",
  phoneHref: "tel:+84905306269",
  linkedin: "https://www.linkedin.com/in/chi%E1%BA%BFn-h-004802240/",
} as const;
