import Image from "next/image";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SITE_URL, WHATSAPP_NUMBERS, whatsappLink } from "@/lib/site";

const exportCountries = [
  "United States", "Canada", "United Kingdom", "Ireland", "Germany", "France", "Netherlands",
  "Italy", "Spain", "UAE", "Saudi Arabia", "Qatar", "Pakistan", "India", "Singapore",
  "Malaysia", "Philippines", "Hong Kong", "Australia", "New Zealand", "Mexico", "Brazil",
];

// Business details in schema.org format so search engines can show them in results.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  name: "Markhor Extreme Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Canada-based wholesale supplier of authentic Pokémon trading card products, exporting booster boxes, Elite Trainer Boxes, sealed cases and graded cards worldwide.",
  address: { "@type": "PostalAddress", addressCountry: "CA" },
  areaServed: "Worldwide",
  telephone: WHATSAPP_NUMBERS[0].display,
  contactPoint: WHATSAPP_NUMBERS.map((wa) => ({
    "@type": "ContactPoint",
    telephone: wa.display,
    contactType: "sales",
    url: whatsappLink(wa.number),
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  })),
};

const categories = [
  { icon: "🃏", label: "Booster Packs", desc: "Singles & bulk packs" },
  { icon: "📦", label: "Booster Boxes", desc: "Factory sealed" },
  { icon: "🎁", label: "Elite Trainer Boxes", desc: "ETBs in bulk" },
  { icon: "🎀", label: "Booster Bundles", desc: "6-pack bundles" },
  { icon: "🏭", label: "Sealed Cases", desc: "Full case quantities" },
  { icon: "🏅", label: "Graded Cards", desc: "PSA · BGS · CGC" },
];

const gallery = [
  { src: "/30th-Celebration-PC-ETB.webp", alt: "30th Celebration Pokémon Center Elite Trainer Box" },
  { src: "/30th-Celebration-UPC.png", alt: "30th Celebration Ultra-Premium Collection" },
  { src: "/30th-Celebration-ETB-Bundle-2Pack.webp", alt: "30th Celebration Elite Trainer Box & Booster Bundle 2-Pack" },
  { src: "/Delta-Reign-ETB.webp", alt: "Mega Evolution Delta Reign Elite Trainer Box" },
  { src: "/Delta-Reign-Booster-Box.webp", alt: "Mega Evolution Delta Reign Booster Box" },
  { src: "/151-Booster-Bundle.avif", alt: "Pokémon 151 Booster Bundle" },
  { src: "/Prismatic-ETB.jpg", alt: "Prismatic Evolutions Elite Trainer Box" },
  { src: "/Surging-Pack.webp", alt: "Surging Sparks booster pack" },
  { src: "/Destined-Pack.jpeg", alt: "Destined Rivals booster pack" },
];

const reasons = [
  {
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: "100% Authentic",
    desc: "Sourced from authorized distributors and inspected before every shipment.",
  },
  {
    icon: <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    title: "Bulk Quantities",
    desc: "From 10 boxes to 100 cases — we source and fulfil large wholesale orders.",
  },
  {
    icon: (
      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: "Worldwide Export",
    desc: "Tracked international shipping with customs paperwork handled for you.",
  },
];

const steps = [
  { step: "01", title: "Message Us", desc: "Tell us the products and quantities you need on WhatsApp." },
  { step: "02", title: "Get a Quote", desc: "We reply with wholesale pricing and availability." },
  { step: "03", title: "We Ship", desc: "Your order is inspected, packed and shipped worldwide." },
];

function WhatsAppButton({ label, number, className = "" }: { label: string; number?: string; className?: string }) {
  return (
    <a
      href={whatsappLink(number)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold rounded-xl shadow-elegant transition-all duration-300 transform hover:scale-105 active:scale-95 ${className}`}
    >
      <WhatsAppIcon className="w-6 h-6" />
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <div className="animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow opacity-20" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container-custom relative z-10 text-center animate-slide-up">
          <span className="badge-primary text-sm px-6 py-3 mb-6 shadow-glow">🇨🇦 Canada-Based · Exporting Worldwide</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight text-shadow-lg">
            Wholesale Pokémon Products,<br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent">
              Shipped All Over the World
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-50 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Markhor Extreme Inc. supplies authentic Pokémon products in bulk to retailers, resellers and distributors in every corner of the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton label="Bulk Deals on WhatsApp" className="text-lg px-10 py-4" />
            <a
              href="#products"
              className="text-white/90 hover:text-white border-2 border-white/30 hover:border-white/60 px-10 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              What We Supply
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "100%", label: "Authentic Products" },
              { value: "B2B", label: "Wholesale Only" },
              { value: "Global", label: "Worldwide Export" },
              { value: "Fast", label: "WhatsApp Replies" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl py-5 px-4 border border-white/20">
                <div className="text-2xl font-bold text-yellow-300 mb-1">{stat.value}</div>
                <div className="text-sm text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4">What We Supply</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
              Wholesale <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The full range of sealed and graded Pokémon products, in trade quantities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-12">
            {categories.map((cat) => (
              <div key={cat.label} className="card p-6 text-center">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1">{cat.label}</h3>
                <p className="text-xs text-gray-500">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {gallery.map((img) => (
              <div key={img.src} className="card p-4 flex flex-col">
                <div className="relative aspect-square">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-contain" />
                </div>
                <p className="mt-3 text-center text-sm font-semibold text-gray-800">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section id="why-us" className="section-padding bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Trusted by Buyers <span className="gradient-text">Worldwide</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((item) => (
              <div key={item.title} className="card p-8">
                <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where We Export ── */}
      <section id="worldwide" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10">
            <span className="badge-primary mb-4">Worldwide Export</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
              Pokémon Wholesale, <span className="gradient-text">Delivered Globally</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Markhor Extreme Inc. is a Canadian Pokémon wholesale distributor supplying card shops, online resellers,
              live-stream sellers and distributors around the world. We export sealed booster boxes, Elite Trainer Boxes,
              booster bundles, sealed cases and graded cards with tracked international shipping and customs paperwork
              handled for you.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {exportCountries.map((country) => (
              <span key={country} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700">
                {country}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-sm font-semibold text-primary-700">
              + many more
            </span>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">How Bulk Orders Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-300 font-bold text-lg">{p.step}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-primary-100 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="card max-w-3xl mx-auto p-10 md:p-14 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Looking for a <span className="gradient-text">Bulk Deal?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
              Message us on WhatsApp with the products and quantities you need, and we&apos;ll get back to you with a wholesale quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {WHATSAPP_NUMBERS.map((wa) => (
                <WhatsAppButton key={wa.number} number={wa.number} label={wa.display} className="text-lg px-8 py-4" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
