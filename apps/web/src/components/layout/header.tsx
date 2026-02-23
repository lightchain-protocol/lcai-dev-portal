import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import SocialLinks from "./social-links";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md">
			<div className="flex h-20 md:h-23 items-center justify-between px-6 md:px-12.5">
				{/* Left: Logo */}
				<Logo />

				{/* Center: Navigation (Desktop only) */}
				<NavMenu />

				{/* Right: Actions */}
				<div className="flex items-center gap-4 md:gap-8">
					<div className="hidden lg:flex items-center gap-8">
						<SocialLinks />
					</div>
					<Button className="hidden md:flex px-5" size="default" variant="gradient">
						Build On LCAI
					</Button>
					
					{/* Mobile Menu Toggle */}
					<button className="flex lg:hidden text-white" aria-label="Open menu">
						<Menu size={24} />
					</button>
				</div>
			</div>
		</header>
	);
}
