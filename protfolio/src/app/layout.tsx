import type { Metadata } from "next";
import ScrollRevealInitializer from "./components/ScrollRevealInitializer";
import "./globals.css";

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
    <html lang="en">
      <body>
        <ScrollRevealInitializer />
        {children}
      </body>
    </html>
  );
}

