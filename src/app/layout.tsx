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
    default: "Wenthura — Driving the Digital Revolution",
    template: "%s · Wenthura",
  },
  description:
    "Wenthura delivers groundbreaking Payment & Fintech, ERP and Digital Transformation solutions — cloud-ready, platform-agnostic, and seamlessly interoperable.",
  openGraph: {
    title: "Wenthura — Driving the Digital Revolution",
    description:
      "Next-generation technology solutions in Payment & Fintech, ERP and Digital Transformation.",
    url: "https://wenthura.lk",
    siteName: "Wenthura",
    images: [{ url: "/cover.png", width: 1200, height: 630, alt: "Wenthura" }],
    type: "website",
  },
  icons: { icon: "/logo.jpg" },
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
