import { Icon } from '../icons'

const PROJECTS = [
  {
    name: 'Helpdesk for UMa Students',
    desc: 'A ticketing platform built for students at the University of Madeira to log, track and resolve issues across departments.',
    stack: ['React', 'Node.js', 'MongoDB'],
    thumbClass: 'thumb-helpdesk',
    art: 'HD',
    github: 'https://github.com/CarlosEGCH',
    live: null,
  },
  {
    name: 'Personal Portfolio v1',
    desc: 'The first iteration of this portfolio — single-page site with anchor navigation, scroll animations, and a custom contact form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    thumbClass: 'thumb-anon',
    art: 'P1',
    github: 'https://github.com/CarlosEGCH',
    live: null,
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">03 / Selected Work</span>
          <h2>Things I've shipped.</h2>
          <p>A small selection of public projects — the rest live in private repos or as offline experiments.</p>
        </div>
        <div className="projects-grid reveal-stagger">
          {PROJECTS.map((p, i) => (
            <article key={i} className="project-card">
              <div className={`project-thumb ${p.thumbClass}`}>
                <div className="project-thumb-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="thumb-art">{p.art}</span>
                </div>
                <span className="thumb-label">project · {String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="chips">
                  {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
                <div className="project-foot">
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {p.live ? 'Live' : 'Code only'}
                  </span>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub"><Icon.Github /></a>
                    <a href={p.live || '#'} className={`icon-btn ${!p.live ? 'disabled' : ''}`} aria-label="Live demo"><Icon.External /></a>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <a href="https://github.com/CarlosEGCH" target="_blank" rel="noreferrer" className="github-card" style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon.Github />
              </div>
              <div>
                <h3>More on GitHub</h3>
                <p>Side experiments, half-finished ideas, and small tools.</p>
              </div>
            </div>
            <span className="arrow" style={{ marginLeft: 'auto' }}>github.com/CarlosEGCH <Icon.ArrowRight /></span>
          </a>
        </div>

        <a href="https://github.com/CarlosEGCH" target="_blank" rel="noreferrer" className="blog-strip">
          <div className="blog-left">
            <div className="blog-icon"><Icon.Pen /></div>
            <div className="blog-text">
              <div className="label">Writing</div>
              <h3>The Blog</h3>
              <p>Occasional notes on backend, side projects, and things I'm learning.</p>
            </div>
          </div>
          <span className="mono" style={{ color: 'var(--accent-warm)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
            Read on GitHub <Icon.ArrowRight />
          </span>
        </a>
      </div>
    </section>
  )
}
