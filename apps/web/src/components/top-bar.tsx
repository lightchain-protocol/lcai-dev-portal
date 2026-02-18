import { ArrowRight } from "lucide-react";
import { Link } from "@/components/ui/link";

export default function TopBar() {
	return (
		<div
			className="relative flex w-full items-center justify-center border-border-slate-strong border-b bg-brand-dark/50 py-2 text-center backdrop-blur-md"
			style={{
				backgroundImage: "url('/images/top-banner-bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<p className="type-body-s relative z-10 font-medium text-content-slate-medium">
				🏟️ BUIDL where legends play. Join our LightchainAI at Parc des Princes,
				Paris – July 2025 •
				<Link
					className="relative ml-1 inline-flex cursor-pointer items-center gap-[0.5em] border-none px-0 pt-[0.1em] pb-[0.15em] no-underline"
					href="/register"
				>
					{/* Bottom accent line */}
					<span className="absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-[#FF12FB] via-[#7064E9] to-[#CCCEEF]" />

					{/* Text */}
					<span className="translate-all relative bg-linear-[90deg,#FF12FB_0%,#7064E9_10%,#E3C1F3_100%] bg-clip-text text-body-s text-transparent tracking-[0.02em] duration-300 ease-out">
						Register Now
					</span>

					{/* Arrow */}
					<span className="translate-all relative inline-block text-body-s duration-300 ease-out">
						<ArrowRight />
					</span>
				</Link>
			</p>
		</div>
	);
}
