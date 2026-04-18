import { Icon } from '../icons'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-left reveal-stagger" style={{ margin: '0px' }}>
          <div className="hero-kicker">
            <span className="dot" />
            <span>Software Engineer · Madeira, Portugal</span>
          </div>
          <h1>
            Backend-leaning <span className="accent">developer</span>{' '}
            who still loves <span className="accent-purple">the&nbsp;web</span>.
          </h1>
          <p className="hero-tagline">
            I'm <strong>Carlos Gomes</strong> — three years deep in core banking systems by day,
            building web projects, side experiments and the occasional game by night.
            Curious about every new tool that crosses my path.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              See my work <Icon.ArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>
      </div>
      {/* Scroll cue: "Scroll" label + animated down arrow */}
      <a href="#about" className="scroll-indicator">
        <span>Scroll</span>
        {/* Arrow built from two lines meeting at a point — rotated 45° each side */}
        <svg className="scroll-arrow" width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
          <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="2,11 8,18 14,11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </a>
    </section>
  )
}
