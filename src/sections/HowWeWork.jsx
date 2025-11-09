import React from "react";

const steps = [
  {
    n: "01",
    title: "Initial Call",
    desc: "We’ll discuss your goals and make sure the team is the right fit.",
  },
  {
    n: "02",
    title: "Discovery Phase",
    desc: "We provide a project-based estimate and commit to it.",
  },
  {
    n: "03",
    title: "Development & App Launch",
    desc: "We develop meticulously and handle the entire launch process.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative bg-cyan-700 py-16 text-white custom-grid">
      <div className="absolute inset-0 katak-overlay" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">How we work</h2>
        <div className="space-y-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 pl-24 overflow-hidden"
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-6xl font-bold text-white/20">
                {s.n}
              </div>
              <div className="text-xl font-semibold">{s.title}</div>
              <div className="text-slate-200 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
