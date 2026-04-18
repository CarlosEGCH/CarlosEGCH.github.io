import { Icon } from '../icons'

const SKILLS = [
  { title: 'Backend', icon: 'Code', warm: true, items: ['RPGLE', 'SQLRPGLE', 'Node.js', 'Express', 'REST APIs', 'Unit Testing'] },
  { title: 'Databases', icon: 'Database', warm: false, items: ['DB2 for i', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQL'] },
  { title: 'Frontend & Web', icon: 'Layout', warm: false, items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'] },
  { title: 'Tools & Platforms', icon: 'Tools', warm: true, items: ['IBM i', '5250', 'Git', 'VS Code', 'Postman', 'Linux'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">04 / Stack</span>
          <h2>What I work with.</h2>
          <p>The tools I reach for daily, plus the ones I keep sharp on the side.</p>
        </div>
        <div className="skills-grid reveal-stagger">
          {SKILLS.map((s, i) => {
            const IconComp = Icon[s.icon]
            return (
              <div key={i} className={`skill-card ${s.warm ? 'warm' : ''}`}>
                <div className="skill-head">
                  <div className="skill-icon"><IconComp /></div>
                  <h3>{s.title}</h3>
                </div>
                <div className="skill-chips">
                  {s.items.map((it) => <span key={it} className="skill-chip">{it}</span>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
