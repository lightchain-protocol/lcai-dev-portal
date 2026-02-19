"use client";

import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

interface FieldProps {
	label: string;
	value: string;
	className?: string;
}

export function Field({ label, value, className }: FieldProps) {
	const handleCopy = () => {
		navigator.clipboard.writeText(value);
		toast.success(`${label} copied to clipboard`);
	};

	return (
		<div className={className}>
			<p className="type-caption mb-1 text-content-slate-light">{label}</p>

			<div className="flex items-center gap-3">
				<span className="type-body-m break-all text-content-slate-strong">
					{value}
				</span>
				<button
					className="shrink-0 cursor-pointer p-0 transition-colors hover:text-white"
					onClick={handleCopy}
					title="Copy"
					type="button"
				>
					<CopyIcon className="text-content-slate-soft" size={16} />
				</button>
			</div>
		</div>
	);
}
