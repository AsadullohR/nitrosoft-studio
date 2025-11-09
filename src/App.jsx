
import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import StatsStrip from './sections/StatsStrip.jsx'
import SelectedWorks from './sections/SelectedWorks.jsx'
import HowWeWork from './sections/HowWeWork.jsx'
import WhyUs from './sections/WhyUs.jsx'
import Testimonials from './sections/Testimonials.jsx'
import CTA from './sections/CTA.jsx'
import Team from './sections/Team.jsx'
import Contact from './sections/Contact.jsx'
import FAQ from './sections/FAQ.jsx'

export default function App(){
  const [lang, setLang] = useState('en')
  return (
    <div className="relative">
      <Header lang={lang} onLang={setLang} />
      <main>
        <Hero lang={lang} />
        <StatsStrip lang={lang} />
        <SelectedWorks lang={lang} />
        <HowWeWork lang={lang} />
        <WhyUs lang={lang} />
        <Testimonials lang={lang} />
        <CTA lang={lang} />
        <Team lang={lang} />
        <Contact lang={lang} />
        <FAQ lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}
