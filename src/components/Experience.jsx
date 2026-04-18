const EXPERIENCE = [
  {
    company: 'AssecoPST',
    role: 'Core Banking Junior Developer',
    dates: '2023 — Present',
    location: 'Madeira, PT',
    bullets: [
      'Building and maintaining backend services on IBM i — APIs, business logic, and integrations for a core banking platform.',
      'Writing and debugging RPGLE / SQLRPGLE against DB2 for i; covering features with unit tests before they ship.',
      'Triaging user-reported tickets — bugs, edge cases, and improvements on existing functionality.',
      'Designing 5250 screens that turn dense terminal flows into something users can actually move through quickly.',
    ],
    stack: ['IBM i', 'RPGLE', 'SQLRPGLE', 'DB2 for i', '5250'],
  },
  {
    company: 'Freelance & Personal',
    role: 'Web Developer',
    dates: '2022 — Present',
    location: 'Remote',
    bullets: [
      'Built websites for early clients during the final year of university — stack mostly React + Node.',
      'Ongoing personal projects across web development, side tools, and small game-dev experiments.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">02 / Experience</span>
          <h2>Where I've been working.</h2>
          <p>Three years in a banking codebase, plus the side projects that keep things interesting.</p>
        </div>
        <div className="exp-timeline reveal-stagger">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="exp-entry">
              <div className="exp-card">
                <div className="exp-head">
                  <div>
                    <span className="exp-company">{e.company}</span>
                    <h3>{e.role}</h3>
                  </div>
                  <div className="exp-meta">{e.dates} · {e.location}</div>
                </div>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="chips">
                  {e.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
