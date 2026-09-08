import type { Metadata } from "next";
import "./globals.css";
import { SiteRuntime } from "@/components/motion/site-runtime";

// Set NEXT_PUBLIC_SITE_URL for a future hosted environment.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3017";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Himanshu Raj Verma — Creative Developer",
  description: "Creative developer and frontend engineer building refined digital products and interactive web experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Himanshu Raj Verma — Creative Developer",
    description: "An index of digital experiences across design, motion and engineering.",
    url: "/",
    siteName: "Himanshu Raj Verma",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Himanshu Raj Verma — Creative Developer",
    description: "An index of digital experiences across design, motion and engineering.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Himanshu Raj Verma",
    url: siteUrl,
    email: "mailto:himanshurajverma549@gmail.com",
    jobTitle: "Creative Developer / Frontend Developer",
    homeLocation: { "@type": "Country", name: "India" },
    sameAs: ["https://linkedin.com/in/himanshu-raj-verma", "https://github.com/himanshuraj524"],
    knowsAbout: ["Frontend development", "Creative development", "UI engineering", "Interactive web experiences"],
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body><SiteRuntime />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} /></body>
    </html>
  );
}
