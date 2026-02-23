import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function UpcomingEventSection() {
	return (
		<section className="py-30">
			<div className="container">
				<div className="w-full rounded-[24px] border border-border-slate-soft bg-surface-slate-medium px-4 md:px-6 py-4">
					<div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
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

					<div className="aspect-video w-full overflow-hidden rounded-3xl bg-[#06060e]">
						<Image
							alt="Event banner"
							className="h-full w-full object-cover"
							height={663}
							src="/images/event-banner.png"
							width={1268}
						/>
					</div>

					<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 py-6 md:py-4">
						<span className="type-body-m text-white text-base md:text-lg">
							Crypto Event of the year - July 12 – 18, 2026
						</span>
						<Button variant="gradient" className="w-full md:w-auto">
							Event Details <ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
