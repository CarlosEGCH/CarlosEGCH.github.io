import { useState, useEffect, useRef } from 'react'
import { GLogoSmall } from '../GLogo'
import { Icon } from '../icons'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, scrolled, mobileOpen, setMobileOpen }) {
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const linksRef = useRef(null)

  useEffect(() => {
    const updatePill = () => {
      if (!linksRef.current) return
      const activeLink = linksRef.current.querySelector(`[data-section="${activeSection}"]`)
      if (activeLink) {
        const rect = activeLink.getBoundingClientRect()
        const containerRect = linksRef.current.getBoundingClientRect()
        setPillStyle({ left: rect.left - containerRect.left, width: rect.width, opacity: 1 })
      } else {
        setPillStyle((p) => ({ ...p, opacity: 0 }))
      }
    }
    updatePill()
    window.addEventListener('resize', updatePill)
    return () => window.removeEventListener('resize', updatePill)
  }, [activeSection])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`}>
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo" onClick={() => setMobileOpen(false)}>
            <GLogoSmall size={32} />
            <span className="nav-name">Carlos Gomes</span>
          </a>
          <div className="nav-links" ref={linksRef}>
            <span className="nav-pill" style={pillStyle} />
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-section={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <a className="btn btn-primary" href="/cv.pdf" download>
              <Icon.Download /> CV
            </a>
            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setMobileOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="/cv.pdf" download onClick={() => setMobileOpen(false)}>Download CV</a>
      </div>
    </>
  )
}
