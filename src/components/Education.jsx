const EDU_STEPS = [
  { step: 'Step 01', year: '2020', title: 'University of Madeira', desc: 'Started a Software Engineering degree. First contact with programming, mostly through Python.' },
  { step: 'Step 02', year: '2021', title: 'DSA & Self-taught Web', desc: 'Took on Data Structures and Algorithms. Began learning web development on my own outside of class.' },
  { step: 'Step 03', year: '2022', title: 'First Real Projects', desc: 'Shipped two websites for early clients. Went deeper on React and modern front-end tooling.' },
  { step: 'Step 04', year: '2023', title: 'Graduated', desc: 'Finished the degree, levelled up my front-end skills, and stepped into the industry as a developer.' },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">05 / Education</span>
          <h2>How I got here.</h2>
          <p>Four years of figuring out what I actually wanted to build.</p>
        </div>
        <div className="edu-timeline">
          <div className="edu-line" />
          <div className="edu-steps">
            {EDU_STEPS.map((s, i) => (
              <div key={i} className="edu-step">
                <div className="step-label">{s.step}</div>
                <span className="year">{s.year}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="edu-vertical reveal-stagger">
          {EDU_STEPS.map((s, i) => (
            <div key={i} className="edu-step-v">
              <div className="step-label" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-warm)', marginBottom: 6 }}>{s.step}</div>
              <span className="year" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, padding: '3px 10px', borderRadius: 999, background: 'var(--accent-primary)', color: '#fff', marginBottom: 10 }}>{s.year}</span>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, margin: '0 0 6px' }}>{s.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
