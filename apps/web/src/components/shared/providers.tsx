"use client";

import { Toaster } from "../ui/sonner";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			disableTransitionOnChange
			forcedTheme="dark"
		>
			{children}
			<Toaster richColors />
		</ThemeProvider>
	);
}
