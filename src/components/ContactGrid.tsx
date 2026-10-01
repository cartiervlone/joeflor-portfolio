import { ArrowUpRight, InstagramLogo, CheckCircle } from '@/components/slab'
import { profile } from '@/data/profile'

export default function ContactGrid() {
  return (
    <section className="pgrid cgrid" aria-labelledby="contact-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Contact</span>
        <h1 className="pgrid__title" id="contact-title">Have a project in mind? Let’s talk.</h1>
        <p className="pgrid__lede">Tell me what you’re making, what footage you have, and what you want the finished edit to feel like.</p>
      </header>

      <div className="home__glass cgrid__glass">
        <div className="cgrid__aside">
          <div className="cgrid__aside-head">
            <span className="cgrid__eyebrow">Start here</span>
            <h2 className="cgrid__aside-title">A good edit starts with a clear idea.<br /><span>Send the brief and we can take it from there.</span></h2>
          </div>
          <ul className="cgrid__faqs" role="list">
            {[
              'What are you editing?',
              'What format is it for?',
              'What footage or assets do you already have?',
              'What style or references do you like?',
            ].map((q, i) => (
              <li key={q} className="cgrid__faq is-open">
                <div className="cgrid__faq-q">
                  <span className="cgrid__step-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cgrid__faq-text">{q}</span>
                  <CheckCircle size={14} weight="duotone" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="cgrid__panel">
          <div className="cgrid__done">
            <span className="cgrid__done-mark" aria-hidden="true"><InstagramLogo size={30} weight="fill" /></span>
            <h2 className="cgrid__done-title">Let’s talk about your edit.</h2>
            <p className="cgrid__done-body">For project inquiries, send me a message on Instagram or email me directly at <strong>{profile.email}</strong>.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a className="cgrid__again" href="https://www.instagram.com/plordinary" target="_blank" rel="noopener noreferrer">
                Open Instagram <ArrowUpRight size={15} weight="bold" />
              </a>
              <a className="cgrid__again" href={`mailto:${profile.email}`}>
                Send Email <ArrowUpRight size={15} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}