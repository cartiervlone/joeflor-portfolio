import type { CSSProperties } from 'react'
import { CheckCircle, FilmSlate, Microphone, YoutubeLogo, GameController, MonitorPlay } from '@/components/slab'

const SERVICES = [
  ['01', 'Podcast & Interview Editing', 'Multicam editing, dialogue cleanup, pacing, sync, split-cam layouts, and polished long-form episodes.', Microphone, ['Multicam', 'Dialogue', 'Pacing']],
  ['02', 'YouTube Video Editing', 'Story-focused editing that keeps long-form videos clear, engaging, and visually consistent.', YoutubeLogo, ['Story', 'Retention', 'Sound']],
  ['03', 'Short-form Reels', 'Punchy social edits built from longer content, with strong hooks, captions, rhythm, and visual emphasis.', MonitorPlay, ['Hooks', 'Captions', 'Rhythm']],
  ['04', 'Gaming Montage Editing', 'High-energy montage editing with music sync, effects, transitions, and timing shaped around gameplay.', GameController, ['Music sync', 'Effects', 'Timing']],
  ['05', 'Film & Cinematic Editing', 'Narrative editing focused on story, pacing, atmosphere, composition, and intentional visual flow.', FilmSlate, ['Story', 'Cinematic', 'Flow']],
] as const

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">From raw footage to a finished story.</h1>
        <p className="pgrid__lede">I adapt the editing approach to the content instead of forcing every project into the same style.</p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My editing process</span>
            <h2 className="sgrid__method-title">Clean the footage.<br /><span>Shape the story. Polish the final.</span></h2>
            <p className="sgrid__method-sub">The goal is a smooth viewing experience where pacing, sound, visuals, and transitions feel intentional.</p>
          </div>
          <ol className="sgrid__stages" role="list">
            {[
              ['01', 'Understand', 'Learn the footage, the message, the audience, and the intended style.'],
              ['02', 'Build', 'Cut for clarity and rhythm, then shape the visual and audio flow.'],
              ['03', 'Polish', 'Clean the details, refine the sound and visuals, and prepare the final export.'],
            ].map(([index, label, body], i) => (
              <li key={index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                <span className="sgrid__stage-ghost" aria-hidden="true">{index}</span>
                <span className="sgrid__stage-icon" aria-hidden="true"><CheckCircle size={22} weight="duotone" /></span>
                <h3 className="sgrid__stage-label">{label}.</h3>
                <p className="sgrid__stage-body">{body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I edit</h2>
            <p className="sgrid__offers-sub">Choose the format. I shape the edit around it.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map(([index, title, description, Icon, chips]) => (
              <li key={title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="bento__logos"><span className="bento__logo"><Icon size={20} weight="duotone" /></span></span>
                  <span className="bento__title">{title}</span>
                  <span className="bento__desc">{description}</span>
                </span>
                <span className="sgrid__chip">{index}</span>
                <ul className="sgrid__bullets" role="list">
                  {chips.map((chip) => <li key={chip} className="sgrid__bullet"><CheckCircle size={15} weight="duotone" /><span>{chip}</span></li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
