import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://AhmadMujtaba.com"),
  title: {
    default: "Ahmad Mujtaba | Shopify Developer",
    template: "%s | Ahmad Mujtaba",
  },
  description:
    "Ahmad Mujtaba is a Shopify Developer and CRO-focused problem solver building fast, conversion-minded Shopify stores.",
  keywords: [
    "Ahmad Mujtaba",
    "Shopify Developer",
    "Shopify Custom Coding",
    "Shopify CRO",
    "Shopify Theme Customization",
  ],
  authors: [{ name: "Ahmad Mujtaba", url: "https://AhmadMujtaba.com" }],
  creator: "Ahmad Mujtaba",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ahmad Mujtaba | Shopify Developer",
    description:
      "Shopify custom coding, theme customization, bug fixes, CRO improvements, and API integrations.",
    url: "https://AhmadMujtaba.com",
    siteName: "AhmadMujtaba.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Mujtaba | Shopify Developer",
    description:
      "Shopify Developer and CRO-focused problem solver for fast, high-converting stores.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
