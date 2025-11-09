
import React from 'react'

export default function StatsStrip(){
  const items = [
    { label: 'average client rating', number: '5/5', icon: '🤝' },
    { label: 'to launch your app', number: '10 weeks', icon: '🚀' },
    { label: 'products', number: '100+', icon: '🏆' },
  ]
  return (
    <section className="relative py-12 md:py-16">
      <div className="absolute inset-0 katak-overlay" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {items.map((it)=>(
          <div key={it.label} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-3xl md:text-4xl font-semibold">{it.number}</div>
            <div className="text-slate-300">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
