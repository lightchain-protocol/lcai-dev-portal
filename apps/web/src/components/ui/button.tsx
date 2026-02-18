import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group/button cursor-pointer inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-[10px] text-button-label outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:opacity-90",
				gradient:
					"bg-linear-to-r from-brand-secondary to-brand-primary text-white hover:from-accent-purple hover:to-accent-blue",
				primary: "bg-brand-primary text-white hover:opacity-90",
				dark: "bg-brand-dark text-white hover:opacity-90",
				secondary: "bg-content-slate-medium text-white hover:opacity-90",
				outline:
					"border border-border bg-background hover:bg-muted hover:text-foreground",
				ghost: "hover:bg-muted hover:text-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-11 gap-2 px-4 font-bold text-body-m",
				xs: "h-8 gap-1 px-3 font-bold text-body-s",
				sm: "h-9 gap-1.5 px-4 font-bold text-body-s",
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
