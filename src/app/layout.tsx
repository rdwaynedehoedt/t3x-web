import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/ui/CustomCursor";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Script from "next/script";
import { ThemeProvider } from "../components/ui/ThemeProvider";
import { NextThemesProvider } from "../components/ui/NextThemesProvider";
import FloatingElements from "../components/ui/FloatingElements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://t3x.lk'),
  title: {
    default: "T3X - Technology Solutions Sri Lanka | Web Development & Business Systems",
    template: "%s | T3X Technology Solutions Sri Lanka"
  },
  description: "T3X is a premier digital solutions provider in Sri Lanka, offering website development, business systems, POS solutions, and technical support services to help businesses grow and succeed.",
  keywords: [
    "website development Sri Lanka", 
    "business systems Colombo", 
    "POS systems Sri Lanka", 
    "digital solutions Sri Lanka", 
    "technical support Sri Lanka", 
    "Sri Lanka tech company", 
    "ecommerce solutions Sri Lanka", 
    "custom software development Colombo", 
    "web design Sri Lanka", 
    "mobile apps Sri Lanka",
    "IT services Sri Lanka",
    "business technology solutions",
    "digital transformation Sri Lanka"
  ],
  authors: [{ name: "T3X Team", url: "https://www.linkedin.com/company/t3xlanka/" }],
  creator: "T3X Technology Solutions",
  publisher: "T3X",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/logo (2).png" }
    ],
    apple: [
      { url: "/logo (2).png" }
    ]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://t3x.lk",
    siteName: "T3X Technology Solutions Sri Lanka",
    title: "T3X - Technology Solutions Sri Lanka | Web Development & Business Systems",
    description: "Premier digital solutions provider in Sri Lanka, offering website development, business systems, POS solutions, and technical support services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "T3X Technology Solutions Sri Lanka"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "T3X - Technology Solutions Sri Lanka | Web Development & Business Systems",
    description: "Premier digital solutions provider in Sri Lanka, offering website development, business systems, POS solutions, and technical support services.",
    images: ["/og-image.jpg"],
    creator: "@t3xlanka"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://t3x.lk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/logo (2).png" />
        <Script
          id="schema-org-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "T3X Technology Solutions",
              "url": "https://t3x.lk",
              "logo": "https://t3x.lk/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/t3xlanka/",
                "https://www.instagram.com/t3x.lk/"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Colombo",
                "addressLocality": "Colombo",
                "addressRegion": "Western Province",
                "postalCode": "",
                "addressCountry": "Sri Lanka"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "6.9271",
                "longitude": "79.8612"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+94-77-218-6241",
                  "contactType": "customer service",
                  "email": "info@t3x.lk",
                  "availableLanguage": ["English", "Sinhala", "Tamil"],
                  "areaServed": "Sri Lanka"
                }
              ],
              "description": "T3X is a premier digital solutions provider in Sri Lanka, offering website development, business systems, POS solutions, and technical support services to help businesses grow and succeed.",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Dwayne Dehoedt",
                  "jobTitle": "Co-Founder & Lead Developer",
                  "sameAs": "https://www.linkedin.com/in/dwaynedehoedt/"
                },
                {
                  "@type": "Person",
                  "name": "Sachi Fernando",
                  "jobTitle": "Co-Founder & Designer"
                },
                {
                  "@type": "Person",
                  "name": "Vihanga Jayamanna",
                  "jobTitle": "CTO & Solutions Architect"
                }
              ],
              "keywords": "website development Sri Lanka, business systems Colombo, POS systems Sri Lanka, digital solutions Sri Lanka, technical support Sri Lanka",
              "areaServed": {
                "@type": "Country",
                "name": "Sri Lanka"
              }
            })
          }}
        />
        <Script src="/redirect.js" strategy="beforeInteractive" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <NextThemesProvider>
            <CustomCursor />
            <FloatingElements />
            <Navbar />
            <main className="min-h-screen flex flex-col pt-20">
              {children}
            </main>
            <Footer />
          </NextThemesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
