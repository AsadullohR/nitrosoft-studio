import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-16 bg-cyan-700 text-slate-200">
      <div className="absolute inset-0 katak-overlay" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-8">
        <div>
          <img
            src="/assets/logo.svg"
            className="h-10 mb-3"
            alt="Nitrosoft logo"
          />
          <p className="text-slate-300/80 max-w-sm">
            AI‑driven web & mobile development crafted in Uzbekistan. We build
            fast, beautiful, and scalable products.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="font-semibold text-white">Explore</div>
            <a href="#works" className="block hover:text-white">
              Portfolio
            </a>
            <a href="#services" className="block hover:text-white">
              Services
            </a>
            <a href="#why" className="block hover:text-white">
              Why us
            </a>
            <a href="#faq" className="block hover:text-white">
              FAQ
            </a>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-white">Contact</div>
            <a
              href="mailto:hello@nitrosoft.studio"
              className="block hover:text-white"
            >
              hello@nitrosoft.studio
            </a>
            <a href="tel:+48736679191" className="block hover:text-white">
              +48 736 679 191 (WhatsApp)
            </a>
            <a href="#" className="block hover:text-white"></a>
            <span className="block">Tashkent, Uzbekistan</span>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white">Social</div>
          <div className="mt-2 flex gap-3">
            <a
              href="https://pl.linkedin.com/company/nitrosoft-xyz"
              aria-label="LinkedIn"
              className="hover:opacity-80"
            >
              <img src="/assets/linkedin-logo-2430.svg" className="h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-slate-400 flex items-center justify-between">
          <span>© 2019 – {year} Nitrosoft Studio. All rights reserved.</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
