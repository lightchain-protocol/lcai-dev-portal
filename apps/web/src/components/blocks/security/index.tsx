import { SecurityGrid } from "./security-grid";

export default function SecuritySection() {
	return (
		<section className="flex flex-col items-center gap-14 bg-[#0a0a0f] px-6 py-20 text-white">
			<h2 className="max-w-3xl text-center font-bold text-3xl text-white md:text-5xl">
				Security and responsible disclosure
			</h2>

			<SecurityGrid />
		</section>
	);
}
