import { site } from "@/content/site";
import { profile } from "@/content/profile";
import { contact } from "@/content/resume";

export function ProfileStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/#profile`,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    mainEntity: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: "Huỳnh Minh Chiến",
      alternateName: "Chien Huynh",
      url: `${site.url}/`,
      image: `${site.url}${profile.portrait.src}`,
      jobTitle: ["Frontend Engineer", "Delivery Lead", "Team Lead"],
      sameAs: [site.github, contact.linkedin],
      knowsAbout: ["React", "Next.js", "React Native", "TypeScript", "Frontend development", "Payment interfaces"],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
