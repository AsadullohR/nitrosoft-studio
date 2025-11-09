import React from "react";

export default function CTA() {
  return (
    <section className="relative bg-cyan-700 py-14 text-center custom-grid">
      <div className="absolute inset-0 katak-overlay" aria-hidden="true"></div>
      <h3 className="relative text-3xl font-extrabold tracking-wide">
        READY TO START?
      </h3>
      <p className="relative mt-2 text-slate-100/90">
        Fill out our quick form and schedule a discovery meeting — we’ll send
        the best proposal in less than 48 hours.
      </p>
      <a
        href="#contact"
        className="relative inline-block mt-6 rounded-lg border border-white/30 px-6 py-3 hover:bg-white/10"
      >
        Contact us
      </a>
    </section>
  );
}
