export interface RawFooterLink {
	text: string;
	href: string;
	target?: "_blank";
}

export interface RawFooterColumn {
	title: string;
	style: "top" | "bottom";
	links: RawFooterLink[];
}

export interface RawSocialLink {
	text: string;
	href: string;
	target: "_blank";
	iconKey: string;
}

export interface RawFooterConfig {
	columns: RawFooterColumn[];
	social: RawSocialLink[];
}
