import { Icon } from '../icons.jsx'

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
              I'm a software engineer based in Madeira, currently focused on backend development. 
              I have a strong interest in databases and data management,
              especially anything involving SQL, since I work with DB2 for i in production every day.
            </p>
            <p>
              In my free time I build for the web, mess around with new technologies, and try to learn something new every day.
              I always try to keep up with the latest trends in software development, and I'm an enthusiastic learner for anything related to programming.
            </p>
          </div>
          <div className="about-meta reveal-stagger">
            <div className="about-card">
              <div className="label">Based in</div>
              <div className="value">Madeira, <span className="accent">Portugal</span></div>
            </div>
            <div className="about-card">
              <div className="label">Role</div>
              <div className="value">Software Developer at <span className="accent">Asseco PST</span></div>
            </div>
            <div className="about-card">
              <div className="label">Daily stack</div>
              <div className="value about-card-w-icon"><Icon.Database />DB2 for i <span className="accent">|</span> RPGLE</div>
            </div>
            <div className="about-card">
              <div className="label">Side stack</div>
              <div className="value about-card-w-icon"><Icon.Code />React <span className="accent">|</span> Typescript</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
