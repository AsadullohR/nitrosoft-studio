import React, { useMemo, useState, useEffect, useRef } from "react";

/** 3-phone auto slider, floating in air, no buttons */
function PhoneShowcase({ images = [] }) {
  const slides = useMemo(
    () =>
      images.length
        ? images
        : [
            "/assets/Mobile-showcase-2.png",
            "/assets/Mobile-showcase-2.png",
            "/assets/Mobile-showcase-2.png",
          ],
    [images]
  );

  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  // Auto-rotate (mobile & desktop)
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      3500
    );
    return () => clearInterval(id);
  }, [slides.length]);

  // Simple touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 48; // px
    if (touchDeltaX.current > threshold) {
      setIndex((i) => (i - 1 + slides.length) % slides.length);
    } else if (touchDeltaX.current < -threshold) {
      setIndex((i) => (i + 1) % slides.length);
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // Center (big), right (smaller), left (smaller)
  const posFor = (i) => {
    const n = slides.length;
    const rel = (((i - index) % n) + n) % n; // 0..n-1
    if (rel === 0) {
      return {
        zIndex: 30,
        transform: "translateX(0) translateY(0) scale(1)",
        opacity: 1,
        filter: "none",
      };
    }
    if (rel === 1) {
      return {
        zIndex: 20,
        transform: "translateX(32%) translateY(8%) scale(0.86)",
        opacity: 0.92,
        filter: "brightness(0.95)",
      };
    }
    return {
      zIndex: 10,
      transform: "translateX(-32%) translateY(8%) scale(0.86)",
      opacity: 0.92,
      filter: "brightness(0.95)",
    };
  };

  return (
    <div className="w-full md:w-[520px] lg:w-[560px] xl:w-[620px] select-none">
      {/* Floating stack */}
      <div
        className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* subtle floating animation */}
        <div className="absolute inset-0 flex items-center justify-center animate-[floaty_6s_ease-in-out_infinite]">
          {slides.map((src, i) => (
            <div
              key={i}
              className="absolute transition-all duration-500 ease-out will-change-transform"
              style={posFor(i)}
            >
              <img
                src={src}
                alt={`App mockup ${i + 1}`}
                className="h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] drop-shadow-2xl pointer-events-none"
                draggable={false}
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* soft oval shadow to sell the “hovering” effect */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-56 sm:w-64 md:w-72 h-8 rounded-full blur-2xl bg-black/40 opacity-60 animate-[shadowpulse_3.5s_ease-in-out_infinite]" />

        {/* passive dots (no buttons) */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:bottom-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-5 rounded-full bg-white/20 transition-colors ${
                i === index ? "bg-white/70" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Local keyframes (scoped to this component file) */}
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shadowpulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.6; }
          50% { transform: translateX(-50%) scale(0.96); opacity: 0.45; }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative  bg-gradient-to-b from-[#0b1220] to-[#0b1a2a] pt-20d custom-grid">
      <svg
        class="absolute -z-10 w-screen -mt-40 md:mt-0"
        width="1440"
        height="676"
        viewBox="0 0 1440 676"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-92"
          y="-948"
          width="1624"
          height="1624"
          rx="812"
          fill="url(#a)"
        />
        <defs>
          <radialGradient
            id="a"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 428 292)scale(812)"
          >
            <stop offset=".63" stop-color="#372AAC" stop-opacity="0" />
            <stop offset="1" stop-color="#372AAC" />
          </radialGradient>
        </defs>
      </svg>
      {/* <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300/90">
            AI‑driven web & mobile development
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            AI‑driven web & mobile development{" "}
            <span className="text-cyan-300">With Nitrosoft Studio.</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            We craft modern products with intelligent UX, crisp performance, and
            scalable architecture.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="rounded-full bg-cyan-600 hover:bg-cyan-700 px-6 py-3 border border-white/10"
            >
              Get a proposal
            </a>
            <a
              href="#works"
              className="rounded-full border border-white/20 hover:bg-white/5 px-6 py-3"
            >
              View work
            </a>
          </div>
        </div>

        {/* Showcase: right on desktop, below content on mobile */}
        <div className="md:absolute md:right-0 md:bottom-0 md:flex md:justify-end md:items-end mt-10 md:mt-0">
          <PhoneShowcase
            images={[
              "/assets/iphone-vb.png",
              "/assets/iphone-2.png",
              "/assets/iphone-3.png",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
