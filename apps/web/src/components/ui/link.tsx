"use client";

import NextLink from "next/link";
import type { Route } from "next";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * A global Link component that handles both internal (Next.js Typed Routes)
 * and external links.
 */
interface LinkProps extends Omit<React.ComponentPropsWithoutRef<typeof NextLink>, "href"> {
	href: string | Route;
	children: React.ReactNode;
	className?: string;
	isExternal?: boolean;
}



const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ href, isExternal, className, children, ...props }, ref) => {
		const strHref = typeof href === "string" ? href : (href as any).toString();

		const isExternalUrl = isExternal || strHref.startsWith("http") || strHref.startsWith("//") || strHref.startsWith("mailto:") || strHref.startsWith("tel:");

		if (isExternalUrl) {
			return (
				<a
					className={cn(className)}
					href={strHref}
					ref={ref}
					rel="noopener noreferrer"
					target="_blank"
					{...props}
				>
					{children}
				</a>
			);
		}

		return (
			<NextLink
				className={cn(className)}
				href={href as Route}
				ref={ref}
				{...props}
			>
				{children}
			</NextLink>
		);
	}
);

Link.displayName = "Link";

export { Link };
export type { LinkProps };
