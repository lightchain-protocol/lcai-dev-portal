import { ToolsGrid } from "./tools-grid";

export default function ToolsSection() {
	return (
		<section className="flex flex-col items-center gap-14 bg-[#0a0a0f] px-6 py-20 text-white">
			<h2 className="text-center font-bold text-3xl text-white md:text-4xl">
				Tools that don't fight you
			</h2>

			<ToolsGrid />
		</section>
	);
}
