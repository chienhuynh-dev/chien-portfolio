import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";

export function SiteHeader() {
	return (
		<header className="page-container relative z-20">
			<Reveal
				delay={0.1}
				y={0}
				className="flex h-(--header-height) items-center justify-between">
				{/* <Link href="/" aria-label={`${profile.name} — home`} className="text-[1.75rem] leading-none font-semibold tracking-[-0.045em]">
        {profile.shortName}<span className="text-accent">.</span>
      </Link> */}
				<div />
				<nav
					aria-label="Main navigation"
					className="flex items-center gap-5 md:gap-12">
					{profile.navigation.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className={`${item.mobile ? "inline-flex" : "hidden md:inline-flex"} min-h-11 items-center text-sm font-normal tracking-[0.025em] text-secondary transition-colors duration-150 hover:text-foreground`}>
							{item.label}
						</a>
					))}
				</nav>
			</Reveal>
		</header>
	);
}
