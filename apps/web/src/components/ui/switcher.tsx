"use client";

import { cn } from "@/lib/utils";

export function SwitcherToggle({
	buttons,
	activeIndex,
	onChange,
	className,
}: {
	buttons: string[];
	activeIndex: number;
	onChange: (idx: number) => void;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"relative flex h-[36px] w-[180px] items-center rounded-[12px] bg-[#171E2E] p-1",
				className
			)}
		>
			<div
				className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-[12px] bg-[#5B4BFF] transition-all duration-300 ease-in-out"
				style={{
					transform: `translateX(${activeIndex * 100}%)`,
				}}
			/>
			{buttons.map((label, idx) => (
				<button
					className={cn(
						"type-body-s relative z-10 flex-1 cursor-pointer rounded-[12px] px-3 py-1.5 font-semibold capitalize transition-colors",
						activeIndex === idx ? "text-white" : "text-white/50"
					)}
					key={label}
					onClick={() => onChange(idx)}
					type="button"
				>
					{label}
				</button>
			))}
		</div>
	);
}
