import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ram Ashish Yadav | MERN Stack Developer Portfolio",
  description: "Senior MERN Stack Developer specializing in high-performance web applications using Next.js, React, Node.js, and Supabase.",
  keywords: ["Ram Ashish Yadav", "Full Stack Developer", "MERN Stack", "Next.js", "Portfolio", "Web Developer"],
  authors: [{ name: "Ram Ashish Yadav" }],
  creator: "Ram Ashish Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-nextjs-prky.vercel.app/",
    title: "Ram Ashish Yadav | MERN Stack Developer Portfolio",
    description: "Senior MERN Stack Developer specializing in high-performance web applications using Next.js, React, Node.js, and Supabase.",
    siteName: "Ram Ashish Yadav Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure you have an og-image.png in public folder or remove this line
        width: 1200,
        height: 630,
        alt: "Ram Ashish Yadav Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Ashish Yadav | MERN Stack Developer Portfolio",
    description: "Senior MERN Stack Developer specializing in high-performance web applications using Next.js, React, Node.js, and Supabase.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#030014] text-white min-h-screen selection:bg-purple-500/30 selection:text-purple-200`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
