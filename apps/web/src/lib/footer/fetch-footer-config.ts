import { env } from "@lc-dev-portal/env/web";

import type { RawFooterConfig } from "./types";

export async function fetchFooterConfig(): Promise<RawFooterConfig> {
	const res = await fetch(env.NEXT_PUBLIC_FOOTER_CONFIG_URL, {
		next: { revalidate: 3600 },
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch footer config: ${res.status}`);
	}
	return res.json();
}
