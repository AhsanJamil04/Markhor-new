"use client";

import Image from "next/image";
import { useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-xl shadow-elegant sticky top-0 z-50 border-b border-gray-200/50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image src="/logo-icon.svg" alt="Markhor Extreme Inc. Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text leading-tight">MARKHOR</span>
              <span className="text-xs font-semibold text-primary-700 leading-tight">EXTREME INC.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all duration-300 whitespace-nowrap"
            >
              <WhatsAppIcon />
              Bulk Deals
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-1 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white font-bold mt-2"
              onClick={() => setIsOpen(false)}
            >
              <WhatsAppIcon />
              Bulk Deals on WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
