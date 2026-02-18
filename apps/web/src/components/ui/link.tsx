"use client";

import type { Route } from "next";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import {
	type ComponentPropsWithoutRef,
	type ReactNode,
	type Ref,
	useMemo,
} from "react";

import { cn } from "@/lib/utils";

/**
 * A global Link component that handles both internal (Next.js Typed Routes)
 * and external links.
 */
interface LinkProps
	extends Omit<ComponentPropsWithoutRef<typeof NextLink>, "href"> {
	href: string | NextLinkProps<Route>["href"];
	children: ReactNode;
	className?: string;
	isExternal?: boolean;
	ref?: Ref<HTMLAnchorElement>;
}

const Link = ({
	href,
	isExternal,
	className,
	children,
	ref,
	...props
}: LinkProps) => {
	const strHref = useMemo(() => {
		if (typeof href === "string") {
			return href;
		}
		if (href && typeof href === "object") {
			return href.pathname || "";
		}
		return "";
	}, [href]);

	const isExternalUrl =
		isExternal ||
		strHref.startsWith("http") ||
		strHref.startsWith("//") ||
		strHref.startsWith("mailto:") ||
		strHref.startsWith("tel:");

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
};

export { Link };
export type { LinkProps };
