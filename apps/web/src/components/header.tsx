import Logo from "./logo";
import NavMenu from "./nav-menu";
import SocialLinks from "./social-links";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-white/5 border-b bg-background-default/80 backdrop-blur-xl">
			<div className="flex h-20 items-center justify-between px-12.5">
				{/* Left: Logo */}
				<Logo />

				{/* Center: Navigation */}
				<NavMenu />

				{/* Right: Actions */}
				<div className="flex items-center gap-8">
					<SocialLinks />
					<Button className="px-5" size="default" variant="gradient">
						Build On LCAI
					</Button>
				</div>
			</div>
		</header>
	);
}
