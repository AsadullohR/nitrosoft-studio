import React from "react";

export default function Header({ lang, onLang }) {
  const t = {
    en: { quote: "Free Quote" },
    ru: { quote: "Бесплатный расчёт" },
    uz: { quote: "Bepul taklif" },
  }[lang];

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[#0b1220]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.svg" className="h-8" alt="Nitrosoft Studio" />
          {/* <span className="font-semibold tracking-wide">Nitrosoft Studio</span> */}
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#works" className="hover:text-white">
            Works
          </a>
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#why" className="hover:text-white">
            Why Us
          </a>
          <a href="#team" className="hover:text-white">
            Team
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <select
            className="bg-transparent border border-white/20 rounded px-2 py-1 text-sm"
            value={lang}
            onChange={(e) => onLang(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
          <a
            href="#contact"
            className="rounded-full px-4 py-2 bg-cyan-700 hover:bg-emeraldDarker transition border border-white/10"
          >
            {t.quote}
          </a>
        </div>
      </div>
    </header>
  );
}
