import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function UpcomingEventSection() {
	return (
		<section className="py-30">
			<div className="container">
				<div className="w-full rounded-[24px] border border-border-slate-soft bg-surface-slate-medium px-6 py-4">
					<div className="mb-4 flex items-center justify-between">
						<h4 className="font-medium text-content-slate-medium">
							Upcoming Event
						</h4>
						<a
							className="inline-flex items-center gap-1 font-medium text-base text-content-slate-strong leading-none transition-colors hover:text-content-slate-strong"
							href="/"
						>
							All Events <ArrowRight className="h-4 w-4" />
						</a>
					</div>

					<div className="aspect-video overflow-hidden rounded-3xl bg-[#06060e]">
						<Image
							alt="Event banner"
							className="h-full w-full object-cover"
							height={663}
							src="/images/event-banner.png"
							width={1268}
						/>
					</div>

					<div className="flex items-center justify-between px-2 py-4">
						<span className="type-body-m text-white">
							Crypto Event of the year // July 12 – 18, 2026
						</span>
						<Button variant="gradient">
							Event Details <ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
