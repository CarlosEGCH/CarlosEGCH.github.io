export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">01 / About</span>
          <h2>The short version.</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a software engineer based in Madeira, currently focused on backend development —
              especially anything involving SQL, where I work with DB2 for i in production every day.
            </p>
            <p>
              In my free time I build for the web, mess around with game dev, and pick up new
              languages and tools whenever something catches my eye. I like making things that work
              cleanly under the hood and feel polished on top.
            </p>
          </div>
          <div className="about-meta reveal-stagger">
            <div className="about-card">
              <div className="label">Based in</div>
              <div className="value">Madeira, <span className="accent">PT</span></div>
            </div>
            <div className="about-card">
              <div className="label">Currently</div>
              <div className="value">Core Banking Dev</div>
            </div>
            <div className="about-card">
              <div className="label">Focus</div>
              <div className="value">Backend & SQL</div>
            </div>
            <div className="about-card">
              <div className="label">Side stack</div>
              <div className="value">React · Game Dev</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
