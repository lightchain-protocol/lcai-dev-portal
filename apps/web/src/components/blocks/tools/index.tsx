import { ToolsGrid } from "./tools-grid";

export default function ToolsSection() {
	return (
		<section className="py-30">
			<h2 className="text-center mb-6">
				Tools that don't fight you
			</h2>

			<ToolsGrid />
		</section>
	);
}
