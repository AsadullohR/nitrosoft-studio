import React from "react";

const items = [
  {
    rating: 5,
    quote:
      "Nitrosoft quickly understood our needs and adapted to changes flawlessly.",
    who: "CEO, Labutena",
  },
  {
    rating: 5,
    quote: "They met deadlines and expectations — very satisfied.",
    who: "PM, Loreva",
  },
  {
    rating: 5,
    quote: "Great consulting beyond just engineering.",
    who: "Director, Comeor",
  },
  {
    rating: 5,
    quote: "Responsive and proactive — felt special as a client.",
    who: "CEO, Sade",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center">
          What people say about us
        </h2>
        <p className="text-center text-slate-300 mt-2">
          Don’t just take our word for it — here’s what our clients say.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {items.slice(0, 3).map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-yellow-400" aria-label={`${t.rating} stars`}>
                {"★".repeat(t.rating)}
              </div>
              <p className="mt-3 text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.who}</div>
              <div className="mt-3 text-xs text-emerald-300">
                ✔ Verified review
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/5"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
