import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <section id="contact" className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold">Thank you!</h3>
          <p className="text-slate-300 mt-2">
            We received your message and will get back within 48 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl bg-cyan-700 p-8 text-white overflow-hidden custom-grid">
          <div
            className="absolute inset-0 katak-overlay"
            aria-hidden="true"
          ></div>
          <h3 className="relative text-3xl font-extrabold">
            Partner with a top‑tier agency
          </h3>
          <p className="relative mt-3">
            Schedule a meeting via the form — you’ll connect directly with our
            product director, no salespeople.
          </p>
          <p className="relative mt-4">
            Prefer to talk now? Call{" "}
            <a href="tel:+48736679191" className="underline">
              +48 736 679 191 (WhatsApp)
            </a>
          </p>
          <div className="relative mt-10 flex gap-3 opacity-80">
            {/* <img
              src="/assets/badge-clutch.png"
              className="h-10"
              alt="Clutch 4.9"
            /> */}
          </div>
        </div>
        <form
          className="rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          data-netlify="true"
          name="contact"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <input
              name="firstName"
              required
              placeholder="First name"
              className="bg-transparent border border-white/20 rounded px-3 py-2"
            />
            <input
              name="lastName"
              required
              placeholder="Last name"
              className="bg-transparent border border-white/20 rounded px-3 py-2"
            />
          </div>
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="bg-transparent border border-white/20 rounded px-3 py-2"
          />
          <input
            name="phone"
            placeholder="Your phone number"
            className="bg-transparent border border-white/20 rounded px-3 py-2"
          />
          <textarea
            name="help"
            rows="4"
            placeholder="What do you need help with?"
            className="bg-transparent border border-white/20 rounded px-3 py-2"
          ></textarea>
          <select
            name="budget"
            className="bg-transparent border border-white/20 rounded px-3 py-2"
          >
            <option>$1k–$5k</option>
            <option>$5k–$10k</option>
            <option>$10k–$25k</option>
            <option>$25k–$50k</option>
            <option>$50k–$100k</option>
            <option>$100k–$250k</option>
            <option>$250k+</option>
          </select>
          <button className="mt-2 rounded-lg bg-cyan-700 hover:bg-cyan-800 px-6 py-3 border border-white/10">
            Submit
          </button>
          <p className="text-xs text-slate-400">
            By submitting this form you consent to be contacted by Nitrosoft
            Studio and acknowledge our Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}
