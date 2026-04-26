import { env } from "@lc-dev-portal/env/web";

import type { RawNavConfig } from "./types";

export async function fetchNavConfig(): Promise<RawNavConfig[]> {
	const res = await fetch(env.NEXT_PUBLIC_NAV_CONFIG_URL, {
		next: { revalidate: 3600 },
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch nav config: ${res.status}`);
	}
	return res.json() as Promise<RawNavConfig[]>;
}
