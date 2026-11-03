export default function MarqueeTicker() {
  const items = [
    "🟡 Pokémon 151 Booster Box",
    "✨ Prismatic Evolutions ETB",
    "👑 Crown Zenith Booster Box",
    "🌑 Paldean Fates ETB",
    "⚡ Surging Sparks Booster Box",
    "🌟 Stellar Crown Sealed Case",
    "🕐 Temporal Forces Booster Box",
    "🎭 Twilight Masquerade ETB",
    "🔥 Obsidian Flames Booster Box",
    "🌀 Paradox Rift Sealed Case",
    "🌺 Paldea Evolved Booster Box",
    "🔮 Shrouded Fable ETB",
    "⚔️ Evolving Skies Booster Box",
    "💫 Brilliant Stars Booster Box",
    "🌙 Silver Tempest ETB",
    "🌊 Fusion Strike Booster Box",
    "❄️ Chilling Reign Booster Box",
    "🌸 Shining Fates Premium Collection",
    "🗡️ Battle Styles Booster Box",
    "🌌 Astral Radiance ETB",
    "👁️ Lost Origin Booster Box",
    "🏆 Hidden Fates Ultra-Premium Collection",
    "📦 Vintage Base Set Packs",
    "🃏 Base Set Booster Pack",
    "🌿 Jungle Set Packs",
    "🦴 Fossil Set Packs",
    "🚀 Team Rocket Set Packs",
    "🌐 XY Evolutions Booster Box",
    "💥 XY Roaring Skies Booster Box",
    "⚙️ XY Phantom Forces Booster Box",
    "🏔️ XY Primal Clash Booster Box",
    "🎖️ XY Fates Collide Booster Box",
    "🔱 Scarlet & Violet Booster Box",
    "🚂 Journey Together ETB",
    "⚔️ Destined Rivals Booster Box",
    "🏅 PSA 10 Graded Cards",
    "🥇 BGS Black Label Cards",
    "💎 CGC Pristine Graded Cards",
    "🎴 Pokémon V / VMAX Cards",
    "🌟 Full Art & Alt Art Cards",
  ];

  const allItems = [...items, ...items];

  return (
    <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 py-3 overflow-hidden border-y border-primary-500/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-semibold text-white px-8"
          >
            {item}
            <span className="text-yellow-300 text-xs">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
