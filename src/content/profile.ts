export const profile = {
  name: "HUỲNH MINH CHIẾN",
  nameLines: ["HUỲNH", "MINH CHIẾN"],
  shortName: "CHIEN",
  role: "Frontend Engineer · Delivery Lead · Team Lead",
  statement: "I build payment experiences, frontend systems and teams that scale.",
  portrait: { src: "/images/portrait.png", alt: "Portrait of Huỳnh Minh Chiến" },
  cv: { href: "/cv/huynh-minh-chien-cv.pdf", filename: "huynh-minh-chien-cv.pdf" },
  navigation: [
    { label: "WORK", href: "#", mobile: false },
    { label: "ABOUT", href: "#", mobile: false },
    { label: "CV", href: "/cv/huynh-minh-chien-cv.pdf", mobile: true },
  ],
  actions: { work: "Selected work", workHref: "#", cv: "Download CV" },
  metrics: [
    { value: "09", label: "Products" },
    { value: "10–12", label: "Team" },
    { value: "06", label: "Engineers Mentored" },
  ],
  paymentStates: ["CREATED", "PROCESSING", "AUTHORIZED", "SETTLED"],
  activePaymentState: "AUTHORIZED",
} as const;
