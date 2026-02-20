import Image from "next/image";

interface IconProps {
	name: string;
	size?: number;
	className?: string;
}

/**
 * Unified Icon component that uses standalone SVG assets from /public/icons
 * Provides a clean syntax like <Icon name="shield" /> while maintaining
 * the performance benefits of Next.js Image.
 */
export function Icon({ name, size = 32, className }: IconProps) {
	return (
		<Image
			alt={`${name} icon`}
			className={className}
			height={size}
			src={`/icons/${name}.svg`}
			width={size}
		/>
	);
}

// Convenience wrappers for common icons
export const Shield = (props: Omit<IconProps, "name">) => (
	<Icon name="shield" {...props} />
);
export const Rocket = (props: Omit<IconProps, "name">) => (
	<Icon name="rocket" {...props} />
);
export const Bolt = (props: Omit<IconProps, "name">) => (
	<Icon name="bolt" {...props} />
);
export const Brain = (props: Omit<IconProps, "name">) => (
	<Icon name="brain" {...props} />
);
export const Lock = (props: Omit<IconProps, "name">) => (
	<Icon name="lock" {...props} />
);
