import React from "react";

const works = [
  {
    brand: "Clapper",
    tags: ["Social"],
    gradient: ["#f8d7df", "#f0e2ea"],
    mock: "/assets/work1.png",
    link: "#",
  },
  {
    brand: "Open",
    tags: ["Health", "Lifestyle"],
    gradient: ["#d9e2ff", "#e8ecff"],
    mock: "/assets/work2.png",
    link: "#",
  },
  {
    brand: "Forbes Councils",
    tags: ["Business", "Education"],
    gradient: ["#0f2233", "#0f2233"],
    mock: "/assets/work3.png",
    link: "#",
    dark: true,
  },
  {
    brand: "Nitrosoft Internal",
    tags: ["AI", "Tooling"],
    gradient: ["#111", "#000"],
    mock: "/assets/work4.png",
    link: "#",
    dark: true,
  },
];

export default function SelectedWorks() {
  return (
    <section id="works" className="relative py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Selected Projects
          </h2>
          <a href="/works" className="text-sm text-cyan-300 hover:underline">
            View all →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {works.map((w, idx) => (
            <a
              key={idx}
              href={w.link}
              className="relative rounded-2xl overflow-hidden border border-white/10 group"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, ${w.gradient[0]}, ${w.gradient[1]})`,
                }}
              ></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold flex items-center gap-2">
                    <span>🟠</span> {w.brand}
                  </div>
                  <span className="opacity-60 group-hover:translate-x-1 transition">
                    ↗
                  </span>
                </div>
                <div className="mt-2 flex gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded border border-black/20 bg-white/50 text-black text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <img src={w.mock} alt="" className="h-56 object-contain" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
