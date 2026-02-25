import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import EventGlow from "../ui/svgs/event-glow";

export default function UpcomingEventSection() {
  return (
    <section className="py-10 md:py-20 xl:py-30">
      <div className="mx-auto max-w-335 px-4">
        <div className="w-full rounded-[32px] md:border border-border-slate-soft md:p-5">
          <div className="relative w-full overflow-hidden rounded-xl md:rounded-[24px] border border-border-slate-soft bg-surface-slate-medium px-4 py-4 md:px-6">
            <div
              className="absolute top-0 left-0"
              style={{ willChange: "filter" }}
            >
              <EventGlow />
            </div>
            <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-0">
              <h4 className="text-content-slate-medium">Upcoming Event</h4>
              <a
                className="inline-flex items-center gap-1 font-bold text-[#CCCEEF] text-base leading-none transition-colors hover:text-content-slate-strong"
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

            <div className="flex flex-col justify-between gap-4 px-2 pt-2 pb-1 md:flex-row md:items-center">
              <span className="type-body-m text-base text-white md:text-lg">
                Crypto Event of the year - July 12 – 18, 2026
              </span>
              <Button className="w-full md:w-auto" variant="gradient">
                Event Details <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
