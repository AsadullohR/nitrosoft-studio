import React from "react";

const rows = [
  ["Average timeline", "6 months", "10 weeks"],
  ["Proposal given in", "1–2 weeks", "1–2 days"],
  ["HQ", "Overseas", "Uzbekistan based"],
  ["Talk to", "Sales people", "Product consultant"],
  ["Flexibility", "Bureaucratic approach", "Boutique approach"],
  ["Budget type", "Hourly", "Scope based"],
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-6">Why us</h2>
        <div className="rounded-3xl border-2 border-cyan-700 overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] text-sm bg-white/5">
            <div className="px-6 py-4 font-semibold"> </div>
            <div className="px-6 py-4 font-semibold flex items-center gap-2">
              Other agencies
            </div>
            <div className="px-6 py-4 font-semibold flex items-center gap-2">
              Nitrosoft Studio
            </div>
          </div>
          <div className="divide-y divide-white/10 bg-white/5">
            {rows.map(([label, a, b]) => (
              <div key={label} className="grid grid-cols-[1.2fr_1fr_1fr]">
                <div className="px-6 py-4 text-slate-200">{label}</div>
                <div className="px-6 py-4 flex items-center gap-2">
                  <span className="text-red-400">✕</span>
                  {a}
                </div>
                <div className="px-6 py-4 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
