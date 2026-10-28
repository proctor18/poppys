import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "@fontsource/pinyon-script/latin-400.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/dm-sans/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://poppysyeg.vercel.app"),
  title: "Poppy's | Coffee & Juice in Downtown Edmonton",
  description:
    "A new little corner for thoughtfully prepared coffee, fresh-pressed juice, food, and quiet moments. Find Poppy's in downtown Edmonton at 10621 100 Avenue NW.",
  openGraph: {
    title: "Poppy's Coffee & Juice | Edmonton",
    description: "Coffee, juice, and good company. Coming soon to downtown Edmonton.",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/images/poppys-interior-main.webp", width: 846, height: 493 }],
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#193e31",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
