import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeTicker from "@/components/MarqueeTicker";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SITE_URL, whatsappLink } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

const title = "Wholesale Pokémon Supplier Canada | Markhor Extreme Inc.";
const description =
  "Bulk Pokémon booster boxes, Elite Trainer Boxes, sealed cases and graded cards. Canada-based wholesaler exporting worldwide. Bulk deals on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords:
    "wholesale Pokémon cards, Pokémon distributor, Pokémon wholesale supplier, bulk Pokémon booster boxes, Pokémon ETB wholesale, Pokémon sealed cases, graded Pokémon cards wholesale, Pokémon exporter, Canada Pokémon wholesale",
  alternates: { canonical: "/" },
  icons: { icon: "/logo-icon.svg" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Markhor Extreme Inc.",
    title,
    description,
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MarqueeTicker />
        <main>{children}</main>
        <Footer />
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp for bulk deals"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white flex items-center justify-center shadow-elegant transition-transform duration-300 hover:scale-110"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      </body>
    </html>
  );
}
