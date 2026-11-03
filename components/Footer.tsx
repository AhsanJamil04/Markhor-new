import Image from "next/image";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom pt-12 pb-24 md:pb-12 md:pr-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image src="/logo-icon.svg" alt="Markhor Extreme Inc. Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                MARKHOR
              </span>
              <span className="text-xs font-semibold text-primary-400 leading-tight">EXTREME INC.</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center max-w-md">
            Canada-based wholesale Pokémon supplier, exporting to retailers, resellers and distributors worldwide.
          </p>
          <div className="flex flex-col gap-2">
            {WHATSAPP_NUMBERS.map((wa) => (
              <a
                key={wa.number}
                href={whatsappLink(wa.number)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#25D366] text-sm font-semibold transition-colors"
              >
                <WhatsAppIcon />
                {wa.display}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Markhor Extreme Inc. All rights reserved.</p>
          <p>Wholesale Only · Exporting Worldwide</p>
        </div>
        <p className="mt-6 text-xs text-gray-500 text-center md:text-left">
          Markhor Extreme Inc. is an independent distributor and is not affiliated with, endorsed or sponsored by
          Nintendo, Creatures Inc., GAME FREAK inc. or The Pokémon Company. Pokémon and all related names are
          trademarks of their respective owners.
        </p>
      </div>
    </footer>
  );
}
