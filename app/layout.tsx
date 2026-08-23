import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CookieConsent } from "@/components/analytics/cookie-consent";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { STUDIO_INFO } from "@/lib/content/studio-info";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const DESCRIPTION =
  "Consulenza fiscale, societaria e aziendale per imprese e privati. Oltre 13 anni di esperienza al servizio delle PMI italiane. Palma Campania, Napoli.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Studio Mascia — Commercialisti e Revisori Legali",
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    siteName: SITE_NAME,
    locale: "it_IT",
    type: "website",
    title: "Studio Mascia — Commercialisti e Revisori Legali",
    description: DESCRIPTION,
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Mascia — Commercialisti e Revisori Legali",
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: STUDIO_INFO.name,
  founder: STUDIO_INFO.founder,
  foundingDate: String(STUDIO_INFO.foundedYear),
  url: SITE_URL,
  email: STUDIO_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: STUDIO_INFO.address,
    postalCode: STUDIO_INFO.cap,
    addressLocality: "Palma Campania",
    addressRegion: "NA",
    addressCountry: "IT",
  },
  areaServed: "IT",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-white text-ink flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MetaPixel />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
