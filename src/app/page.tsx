import { Analytics } from "@vercel/analytics/next";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";

import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { Resume } from "@/components/sections/Resume";
import { Contact, SiteFooter } from "@/components/sections/Contact";

import { PortfolioInteractions } from "@/components/motion/PortfolioInteractions";
import { FloatingNavigation } from "@/components/motion/FloatingNavigation";
import { PageAtmosphere } from "@/components/motion/PageAtmosphere";
import { ScrollEffects } from "@/components/motion/ScrollEffects";

import { ProfileStructuredData } from "@/components/sections/ProfileStructuredData";

export default function Home() {
	return (
		<>
			<Analytics />
			<ProfileStructuredData />
			<ScrollEffects />
			<PageAtmosphere />
			<PortfolioInteractions />
			<FloatingNavigation />
			<SiteHeader />
			<main id="main" tabIndex={-1}>
				<Hero />
				<SelectedWork />
				<ProductEcosystem />
				<Resume />
				<Contact />
			</main>
			<SiteFooter />
		</>
	);
}
