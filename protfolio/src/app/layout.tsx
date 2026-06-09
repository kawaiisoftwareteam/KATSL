import type { Metadata } from "next";
import { Alfa_Slab_One, Black_Ops_One, Montserrat } from "next/font/google";
import ScrollRevealInitializer from "./components/ScrollRevealInitializer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-black-ops-one",
  display: "swap",
});

const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alfa-slab-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kawaii Advance Technology & Solution Limited | Enterprise Software & Digital Products",
  description: "Kawaii Advance Technology & Solution Limited builds scalable web applications, mobile products, cloud architectures, and custom AI integrations for global enterprises.",
  keywords: "Kawaii Advance Technology, KATSL, software engineering, enterprise software, app development, cloud infrastructure, AI solutions, web applications",
  openGraph: {
    title: "Kawaii Advance Technology & Solution Limited",
    description: "Building scalable digital products that drive growth. Enterprise-level custom software development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${blackOpsOne.variable} ${alfaSlabOne.variable}`}>
      <body className={montserrat.className}>
        <ScrollRevealInitializer />
        {children}
      </body>
    </html>
  );
}

