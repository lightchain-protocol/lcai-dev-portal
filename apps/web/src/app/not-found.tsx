import type { Metadata } from "next";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Page not found | Lightchain AI Developer Portal",
};

export default function NotFound() {
	return (
		<section className="container flex h-full flex-col items-center justify-center gap-6 py-20 text-center">
			<p
				aria-hidden="true"
				className="bg-linear-to-r from-brand-secondary to-brand-primary bg-clip-text font-bold font-sans text-9xl text-transparent"
			>
				404
			</p>
			<h1 className="type-hero">Page not found</h1>
			<p className="type-body-l max-w-prose text-content-slate-medium">
				The page you're looking for doesn't exist or has been moved.
			</p>
			<div className="mt-2 flex flex-wrap items-center justify-center gap-3">
				<Link className={cn(buttonVariants({ variant: "gradient" }))} href="/">
					Back to home
				</Link>
				<Link
					className={cn(buttonVariants({ variant: "outline" }))}
					href="https://docs.lightchain.ai"
					isExternal
				>
					Read docs
					<span className="sr-only"> (opens in a new tab)</span>
				</Link>
			</div>
		</section>
	);
}
