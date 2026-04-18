import { GLogoSmall } from '../GLogo'
import { Icon } from '../icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <GLogoSmall size={24} />
          <span>Carlos Gomes</span>
        </div>
        <div className="footer-copy">© 2026 — Designed & built with care.</div>
        <a href="#hero" className="back-top">Back to top <Icon.ArrowUp /></a>
      </div>
    </footer>
  )
}
