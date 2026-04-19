import { Icon } from '../icons'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-left">
          <div className="hero-kicker">
            <span className="dot" />
            <span>Software Developer · Madeira, Portugal</span>
          </div>
          <h1>
            Backend-leaning <span className="accent">developer</span>{' '}
            who still loves <span className="accent-purple">the&nbsp;web</span>.
          </h1>
          <p className="hero-tagline">
            I'm <strong>Carlos Gomes</strong> a <span className="accent">Software 
            Developer</span> with <span className="accent">three years of experience</span> in core banking systems,
            who's also into building web projects, side coding experiments and learning new technologies. <br />
            - Curious about every new tool that crosses my path.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              See my work <Icon.ArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact me
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
