import { ToolsGrid } from "./tools-grid";

export default function ToolsSection() {
	return (
		<section className="py-10 md:py-20 xl:py-30">
			<h2 className="mb-6 text-center font-semibold text-3xl text-content-slate-medium leading-[1.16] tracking-[-0.48px] md:text-5xl">
				Tools that don't fight you
			</h2>

			<ToolsGrid />
		</section>
	);
}
