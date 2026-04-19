import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_IDS = ['about', 'experience', 'projects', 'skills', 'education', 'contact']

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean)
      const y = window.scrollY + window.innerHeight * 0.35
      let active = sections[0]?.id
      sections.forEach((section) => { if (section.offsetTop <= y) active = section.id })
      setActiveSection(active)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Adds .in to .reveal/.reveal-stagger elements as they scroll into view
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-stagger')
    const vh = window.innerHeight
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < vh * 0.95) element.classList.add('in')
    })
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target) }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    )
    elements.forEach((element) => { if (!element.classList.contains('in')) io.observe(element) })
    return () => io.disconnect()
  }, [])

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2400)
  }, [])

  return (
    <>
      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>
    </>
  )
}
