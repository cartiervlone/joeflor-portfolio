import { ArrowUpRight, InstagramLogo } from '@/components/slab'
import { profile } from '@/data/profile'

export default function ContactGrid() {
  return (
    <section className="pgrid longcard" aria-labelledby="contact-title">
      <div className="home__glass longcard__shell longcard--contact">
        <header className="longcard__head">
          <span className="longcard__eyebrow">Contact</span>
          <h1 className="longcard__title" id="contact-title">Have a project in mind? Let’s talk.</h1>
          <p className="longcard__lede">Tell me what you’re making, what footage you have, and what you want the finished edit to feel like.</p>
        </header>

        <div className="longcard__visual">
          <div className="longcard__contactbody">
            <InstagramLogo size={42} weight="duotone" color="var(--orange)" />
            <h2>Let’s talk about your edit.</h2>
            <p>For project inquiries, send me a message on Instagram or email me directly at <strong>{profile.email}</strong>.</p>
            <div className="longcard__contactlinks">
              <a href="https://www.instagram.com/plordinary" target="_blank" rel="noopener noreferrer">Open Instagram <ArrowUpRight size={15} weight="bold" /></a>
              <a href={`mailto:${profile.email}`}>Send Email <ArrowUpRight size={15} weight="bold" /></a>
            </div>
          </div>
        </div>

        <div className="longcard__bottom">
          <span className="longcard__bottom-title">Start here</span>
          <span className="longcard__bottom-copy">A good edit starts with a clear idea. Send the brief and we can take it from there.</span>
        </div>
      </div>
    </section>
  )
}
