import type { Metadata } from "next";
import { Alfa_Slab_One, Black_Ops_One, Montserrat } from "next/font/google";
import ScrollRevealInitializer from "./components/ScrollRevealInitializer";
import { HERO_IMAGES, LOGO_SOURCE, optimizedSrc } from "@/lib/site-images";
import "@fontsource-variable/mozilla-headline/wght.css";
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
  metadataBase: new URL("https://kawaiitech.net"),
  title: "Kawaii Advanced Technology & Solution Ltd | KATSL | Enterprise Software Development",
  description: "Kawaii Advanced Technology & Solution Ltd (KATSL) is a Japan-Bangladesh joint venture specializing in custom software development, SaaS, ERP, mobile apps, AI/ML, and offshore team augmentation for global enterprises.",
  keywords: "Kawaii Advanced Technology & Solution Ltd, KATSL, Kawaii Advanced Technology, kawaii tech, software development Bangladesh, enterprise software, app development, cloud infrastructure, AI solutions, offshore development Japan Bangladesh",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/icon.png", sizes: "192x192" }],
  },
  openGraph: {
    title: "Kawaii Advanced Technology & Solution Ltd | KATSL",
    description: "Building scalable digital products that drive growth. Enterprise-level custom software development.",
    type: "website",
    locale: "en_US",
    url: "https://kawaiitech.net",
    siteName: "Kawaii Advanced Technology & Solution Ltd",
    images: [{ url: "/icon.png", width: 192, height: 192 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${blackOpsOne.variable} ${alfaSlabOne.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8B1DDD8151"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8B1DDD8151');
            `,
          }}
        />
        <link
          rel="preload"
          as="image"
          href={optimizedSrc(HERO_IMAGES[0].source)}
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={optimizedSrc(LOGO_SOURCE)}
          fetchPriority="high"
        />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <ScrollRevealInitializer />
        {children}
      </body>
    </html>
  );
}

