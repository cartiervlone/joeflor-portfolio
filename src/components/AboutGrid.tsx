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
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">Hi, I’m {profile.firstName}.</h1>
        <p className="pgrid__lede">Video Editor, Post-Production Specialist, Content Creator, and Podcast Video Editor.</p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build edits that feel <strong>smooth, intentional, and cinematic.</strong>
            <span> The style changes with the story.</span>
          </p>

          <p className="agrid__note">
            My editing started with gaming montages and grew into freelance work across podcasts, YouTube, social content, and film. I work primarily in DaVinci Resolve and Adobe Premiere Pro, while developing my After Effects skills.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map(([index, title]) => (
              <li key={index} className="agrid__cap">
                <span className="agrid__cap-marks"><span className="agrid__mark"><span>{index}</span></span></span>
                <span className="agrid__cap-title">{title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">DaVinci Resolve</span>
                <span className="agrid__cell-meta">Primary editing workflow</span>
              </span>
            </span>
            <span className="agrid__cell">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Adobe Premiere Pro</span>
                <span className="agrid__cell-meta">Editing & multicam</span>
              </span>
            </span>
            <span className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Adobe After Effects</span>
                <span className="agrid__cell-meta">Currently learning & expanding post-production skills</span>
              </span>
            </span>
          </div>

          <div className="agrid__bar">
            <span className="agrid__cell agrid__cell--wide">
              <MapPin size={16} weight="fill" aria-hidden="true" />
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Open to freelance editing projects</span>
              </span>
            </span>
          </div>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Cebu Eastern College</span>
                <span className="agrid__cell-meta">B.S. Information Technology · 2022–2026</span>
              </span>
            </span>
            <span className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Vestahomes Commercial Inc.</span>
                <span className="agrid__cell-meta">Technical & production support internship · 2025</span>
              </span>
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img src={profile.portraitSrc} alt={profile.portraitAlt} loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
