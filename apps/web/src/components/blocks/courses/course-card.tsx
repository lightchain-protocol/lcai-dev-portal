import Image from "next/image";

export function CourseCard({
	duration,
	title,
	desc,
	image,
}: {
	duration: string;
	title: string;
	desc: string;
	image: string;
}) {
	return (
		<div className="rounded-3xl border border-border-slate-medium bg-surface-slate-strong">
			<div className="relative">
				<Image
					alt={title}
					className="h-full w-full object-cover"
					height={225}
					src={image}
					width={385}
				/>
			</div>
			<div className="p-6">
				<span className="type-caption mb-4 inline-block rounded-[8px] bg-surface-slate-light px-2.5 py-1 text-center text-white">
					{duration}
				</span>
				<h3 className="heading-4 mb-1.5 text-white">{title}</h3>
				<p className="type-body-s text-white">{desc}</p>
			</div>
		</div>
	);
}
