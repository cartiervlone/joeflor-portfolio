import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

const CAPABILITIES = [
  ['01', 'Gaming Montage Editing'],
  ['02', 'Podcast & Interview Editing'],
  ['03', 'YouTube & Social Content'],
  ['04', 'Film & Cinematic Editing'],
]

export default function AboutGrid() {
  return (
    <section className="pgrid longcard" aria-labelledby="about-title">
      <div className="home__glass longcard__shell longcard--about">
        <header className="longcard__head">
          <span className="longcard__eyebrow">About</span>
          <h1 className="longcard__title" id="about-title">Hi, I’m {profile.firstName}.</h1>
          <p className="longcard__lede">Video Editor, Post-Production Specialist, Content Creator, and Podcast Video Editor.</p>
        </header>

        <div className="longcard__visual">
          <div className="longcard__portrait">
            <img src={profile.hero.portraitSrc} alt={profile.hero.portraitAlt} loading="eager" decoding="async" />
          </div>
          <div className="longcard__aboutcopy">
            <p>I build edits that feel <strong>smooth, intentional, and cinematic.</strong><span> The style changes with the story.</span></p>
            <p>My editing started with gaming montages and grew into freelance work across podcasts, YouTube, social content, and film. I work primarily in DaVinci Resolve and Adobe Premiere Pro, while developing my After Effects skills.</p>
            <p>Gaming Montage Editing · Podcast & Interview Editing · YouTube & Social Content · Film & Cinematic Editing</p>
          </div>
        </div>

        <div className="longcard__bottom">
          <span className="longcard__bottom-title">DaVinci Resolve · Adobe Premiere Pro · Adobe After Effects</span>
          <span className="longcard__bottom-copy">{profile.location} · Open to freelance editing projects</span>
        </div>
      </div>
    </section>
  )
}
