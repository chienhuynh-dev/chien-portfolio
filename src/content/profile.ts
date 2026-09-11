export const profile = {
  name: "HUỲNH MINH CHIẾN",
  nameLines: ["HUỲNH", "MINH CHIẾN"],
  shortName: "CHIEN",
  role: "Frontend Engineer · Delivery Lead · Team Lead",
  statement: "I build frontend interfaces for payment products and coordinate product delivery.",
  portrait: { src: "/images/portrait.png", alt: "Portrait of Huỳnh Minh Chiến" },
  cv: { href: "/cv/huynh-minh-chien-cv.pdf", filename: "huynh-minh-chien-cv.pdf" },
  navigation: [
    { label: "WORK", href: "#work", mobile: true },
    { label: "ABOUT", href: "#about", mobile: true },
    { label: "CV", href: "/cv/huynh-minh-chien-cv.pdf", mobile: true },
  ],
  actions: { work: "Selected work", workHref: "#work", cv: "Download CV" },
  metrics: [
    { value: "09", label: "Products" },
    { value: "10–12", label: "Product team size" },
    { value: "06", label: "Frontend engineers mentored" },
  ],
} as const;
