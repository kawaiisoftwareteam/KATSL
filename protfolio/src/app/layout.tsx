import type { Metadata } from "next";
import { Alfa_Slab_One, Black_Ops_One, Montserrat } from "next/font/google";
import ScrollRevealInitializer from "./components/ScrollRevealInitializer";
import { LanguageProvider } from "@/lib/i18n";
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
  title: {
    default: "Kawaii Advanced Technology & Solution Ltd | KATSL | Kawaii Advanced",
    template: "%s | KATSL",
  },
  description:
    "Kawaii Advanced Technology & Solution Ltd (KATSL), also known as Kawaii Advanced and Kawaii Advanced Technology, is a Japan-Bangladesh software company for custom web, mobile, cloud, AI, and offshore development. Official website: kawaiitech.net.",
  keywords: [
    "Kawaii Advanced Technology & Solution Ltd",
    "Kawaii Advanced Technology and Solution Ltd",
    "Kawaii Advanced Technology",
    "Kawaii Advanced",
    "KATSL",
    "Kawaii Tech",
    "kawaiitech.net",
    "Kawaii Advanced Technology Bangladesh",
    "Kawaii Advanced Technology Japan",
  ],
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
    siteName: "Kawaii Advanced Technology & Solution Ltd (KATSL)",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://kawaiitech.net/#organization",
                  name: "Kawaii Advanced Technology & Solution Ltd",
                  legalName: "Kawaii Advanced Technology & Solution Ltd",
                  alternateName: [
                    "KATSL",
                    "Kawaii Advanced",
                    "Kawaii Advanced Technology",
                    "Kawaii Advanced Technology and Solution Ltd",
                    "Kawaii Advance Technology & Solution Limited",
                  ],
                  url: "https://kawaiitech.net",
                  logo: "https://kawaiitech.net/icon.png",
                  image: "https://kawaiitech.net/icon.png",
                  email: "info@kawaiibd.com",
                  telephone: "+8801901850570",
                  sameAs: ["https://www.linkedin.com/company/katsl/"],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Suite-2A, House # 11, Block-B, Main Road, Banasree, Rampura",
                    addressLocality: "Dhaka",
                    postalCode: "1219",
                    addressCountry: "BD",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://kawaiitech.net/#website",
                  url: "https://kawaiitech.net",
                  name: "Kawaii Advanced Technology & Solution Ltd",
                  alternateName: ["KATSL", "Kawaii Advanced", "Kawaii Advanced Technology"],
                  publisher: { "@id": "https://kawaiitech.net/#organization" },
                  inLanguage: "en",
                },
              ],
            }),
          }}
        />
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

