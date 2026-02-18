import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group/button text-button-label inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-xl outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:opacity-90",
				gradient: "bg-linear-to-r from-brand-secondary to-brand-primary text-white hover:opacity-90",
				primary: "bg-brand-primary text-white hover:opacity-90",
				dark: "bg-brand-dark text-white hover:opacity-90",
				secondary: "bg-content-slate-medium text-white hover:opacity-90",
				outline: "border-border border bg-background hover:bg-muted hover:text-foreground",
				ghost: "hover:bg-muted hover:text-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-11 px-6 gap-2",
				xs: "h-7 px-3 text-[10px] gap-1",
				sm: "h-9 px-4 gap-1.5",
				lg: "h-12 px-8 gap-3",
				icon: "size-11",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({
	className,
	variant = "default",
	size = "default",
	...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
	return (
		<ButtonPrimitive
			className={cn(buttonVariants({ variant, size, className }))}
			data-slot="button"
			{...props}
		/>
	);
}

export { Button, buttonVariants };
