import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Urbanist, JetBrains_Mono, Sora, Instrument_Serif, Condiment, Space_Grotesk, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { EasterEggs } from "@/components/EasterEggs";
import { CardGlow } from "@/components/CardGlow";


const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});
const condiment = Condiment({
  subsets: ["latin"],
  variable: "--font-condiment",
  display: "swap",
  weight: ["400"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: ["400"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wenthura.lk"),
  title: {
    default: "Wenthura — Disruptive Digital Solutions",
    template: "%s · Wenthura",
  },
  description:
    "Purpose-built software platforms, dedicated engineering teams, and expert talent acquisition. Wenthura builds intelligent platforms and scalable teams for education, automotive, and enterprise.",
  openGraph: {
    title: "Wenthura — Disruptive Digital Solutions",
    description:
      "Purpose-built platforms, dedicated engineering teams, and expert talent acquisition — precision-engineered for outcomes that last.",
    url: "https://wenthura.lk",
    siteName: "Wenthura Solutions",
    images: [{ url: "/img/autoflow.png", width: 1200, height: 630, alt: "Wenthura" }],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/img/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${urbanist.variable} ${mono.variable} ${sora.variable} ${instrumentSerif.variable} ${condiment.variable} ${spaceGrotesk.variable} ${inter.variable} ${bebasNeue.variable}`}
    >
      <body className="font-sans">
        <ScrollProgress />
        <Preloader />
        <EasterEggs />
        <CardGlow />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
