import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Lightchain AI | Developer Portal",
	description:
		"Advanced developer tools and documentation for the Lightchain Protocol.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={inter.variable} lang="en" suppressHydrationWarning>
			<body className="select-none font-sans antialiased">
				<Providers>
					<div className="grid h-svh grid-rows-[auto_1fr]">
						<Header />
						<main>{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
