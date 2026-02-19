import { Button } from "../ui/button";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import SocialLinks from "./social-links";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full">
			<div className="flex h-23 items-center justify-between px-12.5">
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
