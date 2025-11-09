import React, { useState } from "react";

const qs = [
  [
    "I’ve got an idea, where do I start?",
    "Book a quick discovery call and we’ll validate scope, timeline and budget together.",
  ],
  [
    "Why should we use Nitrosoft Studio over another agency?",
    "Senior team, clear timelines (10 weeks to launch), and boutique attention from Uzbekistan.",
  ],
  [
    "How long will it take to build and launch my app?",
    "Typical MVPs launch in 8–12 weeks depending on scope.",
  ],
  [
    "What platforms do you develop for?",
    "iOS, Android, web (React), and backend (Node/Go) with cloud-native infra.",
  ],
  [
    "What programming languages and frameworks do you use?",
    "React, React Native, Next.js, Node.js, Go, PostgreSQL, DJango, Laravel, Flutter and more.",
  ],
  [
    "How will I secure my app?",
    "We apply OWASP best practices, code reviews, and managed secrets with role-based access.",
  ],
  [
    "Do you provide ongoing support, maintenance, and updates?",
    "Yes. We offer retainers for continuous delivery, monitoring, and improvements.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {qs.map((q, i) => (
            <button
              key={q[0]}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-5 py-4 hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center size-7 rounded-full bg-cyan-700">
                  +
                </span>
                <span className="font-medium">{q[0]}</span>
              </div>
              {open === i && <p className="mt-2 text-slate-300">{q[1]}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
