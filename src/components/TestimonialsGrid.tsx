import { FilmSlate, GameController, Microphone, YoutubeLogo, type Icon } from '@/components/slab'

const AREAS: Array<[string, string, string, Icon]> = [
  ['01', 'Gaming', 'Personal montage work with a focus on music sync, timing, effects, and high-energy pacing.', GameController],
  ['02', 'Podcasts', 'Current podcast video editing work covering long-form host and guest episodes, sync, multicam, dialogue cleanup, and split-cam presentation.', Microphone],
  ['03', 'YouTube', 'Story-driven edits that balance pacing, clarity, sound, and visual variety.', YoutubeLogo],
  ['04', 'Film', 'Narrative and cinematic editing developed through school film projects, plus earlier technical and audio-visual production support.', FilmSlate],
]

export default function TestimonialsGrid() {
  return (
    <section className="pgrid longcard" aria-labelledby="proof-title">
      <div className="home__glass longcard__shell">
        <header className="longcard__head">
          <span className="longcard__eyebrow">Experience</span>
          <h1 className="longcard__title" id="proof-title">The kind of work I’ve built my editing around.</h1>
          <p className="longcard__lede">I’m keeping this section focused on documented work and experience rather than invented testimonials or client claims.</p>
        </header>

        <div className="longcard__visual">
          <div className="longcard__list">
            {AREAS.map(([index, name, description, Icon]) => (
              <div className="longcard__item" key={index}>
                <span className="longcard__item-index">{index}</span>
                <span className="longcard__item-title"><Icon size={18} weight="duotone" /> {name}</span>
                <span className="longcard__item-body">{description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="longcard__bottom">
          <span className="longcard__bottom-title">Editing experience</span>
          <span className="longcard__bottom-copy">Different formats, one goal: make the finished video feel intentional.</span>
        </div>
      </div>
    </section>
  )
}
