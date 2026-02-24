import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import SocialLinks from "./social-links";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md">
			<div className="flex h-20 items-center justify-between px-6 md:h-23 md:px-12.5">
				{/* Left: Logo */}
				<Logo />

				{/* Center: Navigation (Desktop only) */}
				<NavMenu />

				{/* Right: Actions */}
				<div className="flex items-center gap-4 md:gap-8">
					<div className="hidden items-center gap-8 lg:flex">
						<SocialLinks />
					</div>
					<Button
						className="hidden px-5 md:flex"
						size="default"
						variant="gradient"
					>
						Build On LCAI
					</Button>

					{/* Mobile Menu Toggle */}
					<button
						aria-label="Open menu"
						className="flex text-white lg:hidden"
						type="button"
					>
						<Menu size={24} />
					</button>
				</div>
			</div>
		</header>
	);
}
