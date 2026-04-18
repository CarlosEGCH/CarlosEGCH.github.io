import { useState } from 'react'
import { Icon } from '../icons'

function validate(vals) {
  const e = {}
  if (!vals.name.trim()) e.name = 'Required'
  if (!vals.email.trim()) e.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) e.email = 'Invalid email'
  if (!vals.subject.trim()) e.subject = 'Required'
  if (!vals.message.trim()) e.message = 'Required'
  return e
}

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const onChange = (k) => (e) => {
    const v = { ...form, [k]: e.target.value }
    setForm(v)
    if (touched[k]) setErrors(validate(v))
  }

  const onBlur = (k) => () => {
    setTouched({ ...touched, [k]: true })
    setErrors(validate(form))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(errs).length === 0) {
      setSubmitting(true)
      setTimeout(() => {
        setSubmitting(false)
        showToast("Message sent — I'll get back to you soon!")
        setForm({ name: '', email: '', subject: '', message: '' })
        setTouched({})
      }, 900)
    }
  }

  const copyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard?.writeText('carlose_gomezch@hotmail.com')
    showToast('Email copied to clipboard')
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">06 / Contact</span>
          <h2>Let's chat.<br />Tell me about your project.</h2>
          <p>Drop me a line below, or reach out directly. I usually reply within a day or two.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal-stagger">
            <a href="mailto:carlose_gomezch@hotmail.com" className="contact-item">
              <div className="icon"><Icon.Mail /></div>
              <div>
                <span className="label">Email</span>
                <span className="value">carlose_gomezch@hotmail.com</span>
              </div>
              <button className="copy" onClick={copyEmail} aria-label="Copy email"><Icon.Copy /></button>
            </a>
            <a href="tel:+351926432597" className="contact-item">
              <div className="icon"><Icon.Phone /></div>
              <div>
                <span className="label">Phone</span>
                <span className="value">+351 926 432 597</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/carlos-gomes-61569321a/" target="_blank" rel="noreferrer" className="contact-item">
              <div className="icon"><Icon.Linkedin /></div>
              <div>
                <span className="label">LinkedIn</span>
                <span className="value">carlos-gomes-61569321a</span>
              </div>
            </a>
            <a href="https://github.com/CarlosEGCH" target="_blank" rel="noreferrer" className="contact-item">
              <div className="icon"><Icon.Github /></div>
              <div>
                <span className="label">GitHub</span>
                <span className="value">CarlosEGCH</span>
              </div>
            </a>
          </div>

          <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
            <div className={`field ${errors.name && touched.name ? 'error' : ''}`}>
              <input id="name" type="text" placeholder=" " value={form.name} onChange={onChange('name')} onBlur={onBlur('name')} />
              <label htmlFor="name">Your name</label>
              <div className="error-msg">{errors.name}</div>
            </div>
            <div className={`field ${errors.email && touched.email ? 'error' : ''}`}>
              <input id="email" type="email" placeholder=" " value={form.email} onChange={onChange('email')} onBlur={onBlur('email')} />
              <label htmlFor="email">Email address</label>
              <div className="error-msg">{errors.email}</div>
            </div>
            <div className={`field ${errors.subject && touched.subject ? 'error' : ''}`}>
              <input id="subject" type="text" placeholder=" " value={form.subject} onChange={onChange('subject')} onBlur={onBlur('subject')} />
              <label htmlFor="subject">Subject</label>
              <div className="error-msg">{errors.subject}</div>
            </div>
            <div className={`field ${errors.message && touched.message ? 'error' : ''}`}>
              <textarea id="message" placeholder=" " value={form.message} onChange={onChange('message')} onBlur={onBlur('message')} />
              <label htmlFor="message">Tell me about your project</label>
              <div className="error-msg">{errors.message}</div>
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Sending…' : <><Icon.Send /> Send message</>}
              </button>
              <span className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>or just say hi 👋</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
