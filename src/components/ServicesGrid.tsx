import { FilmSlate, Microphone, YoutubeLogo, GameController, MonitorPlay, type Icon } from '@/components/slab'

const SERVICES: Array<[string, string, string, Icon]> = [
  ['01', 'Podcast & Interview Editing', 'Multicam editing, dialogue cleanup, pacing, sync, split-cam layouts, and polished long-form episodes.', Microphone],
  ['02', 'YouTube Video Editing', 'Story-focused editing that keeps long-form videos clear, engaging, and visually consistent.', YoutubeLogo],
  ['03', 'Short-form Reels', 'Punchy social edits built from longer content, with strong hooks, captions, rhythm, and visual emphasis.', MonitorPlay],
  ['04', 'Gaming Montage Editing', 'High-energy montage editing with music sync, effects, transitions, and timing shaped around gameplay.', GameController],
  ['05', 'Film & Cinematic Editing', 'Narrative editing focused on story, pacing, atmosphere, composition, and intentional visual flow.', FilmSlate],
]

export default function ServicesGrid() {
  return (
    <section className="pgrid longcard" aria-labelledby="services-title">
      <div className="home__glass longcard__shell longcard--services">
        <header className="longcard__head">
          <span className="longcard__eyebrow">Services</span>
          <h1 className="longcard__title" id="services-title">From raw footage to a finished story.</h1>
          <p className="longcard__lede">I adapt the editing approach to the content instead of forcing every project into the same style.</p>
        </header>

        <div className="longcard__visual servicevisual" aria-label="Services">
          {SERVICES.map(([index, title, , Icon]) => (
            <div className="servicevisual__tile" key={index}>
              <span className="servicevisual__icon"><Icon size={42} weight="duotone" /></span>
              <span className="servicevisual__name">{title}</span>
            </div>
          ))}
        </div>

        <div className="longcard__bottom">
          <span className="longcard__bottom-title">What I edit</span>
          <span className="longcard__bottom-copy">Choose the format. I shape the edit around it.</span>
        </div>
      </div>
    </section>
  )
}
