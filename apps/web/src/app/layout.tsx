import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../index.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/header/header";
import Providers from "@/components/shared/providers";
import { fetchNavConfig } from "@/lib/nav/fetchNavConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lightchain AI | Developer Portal",
  description:
    "Advanced developer tools and documentation for the Lightchain Protocol.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rawMenus = await fetchNavConfig();

  return (
    <html className={inter.variable} lang="en" suppressHydrationWarning>
      <body className="select-none font-sans antialiased">
        <Providers>
          <div className="grid h-svh grid-rows-[auto_1fr]">
            <Header rawMenus={rawMenus} />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
