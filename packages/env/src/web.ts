import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_NAV_CONFIG_URL: z
			.httpUrl()
			.default("https://docs.lightchain.ai/nav-config.json"),
		NEXT_PUBLIC_FOOTER_CONFIG_URL: z
			.httpUrl()
			.default("https://docs.lightchain.ai/footer-config.json"),
	},
	runtimeEnv: {
		NEXT_PUBLIC_NAV_CONFIG_URL: process.env.NEXT_PUBLIC_NAV_CONFIG_URL,
		NEXT_PUBLIC_FOOTER_CONFIG_URL: process.env.NEXT_PUBLIC_FOOTER_CONFIG_URL,
	},
	emptyStringAsUndefined: true,
});
