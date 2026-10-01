import { CheckCircle, FilmSlate, GameController, Microphone, YoutubeLogo } from '@/components/slab'

const AREAS = [
  ['01', 'Gaming', 'Personal montage work with a focus on music sync, timing, effects, and high-energy pacing.', GameController],
  ['02', 'Podcasts', 'Current podcast video editing work covering long-form host and guest episodes, sync, multicam, dialogue cleanup, and split-cam presentation.', Microphone],
  ['03', 'YouTube', 'Story-driven edits that balance pacing, clarity, sound, and visual variety.', YoutubeLogo],
  ['04', 'Film', 'Narrative and cinematic editing developed through school film projects, plus earlier technical and audio-visual production support.', FilmSlate],
]

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="proof-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience</span>
        <h1 className="pgrid__title" id="proof-title">The kind of work I’ve built my editing around.</h1>
        <p className="pgrid__lede">I’m keeping this section focused on documented work and experience rather than invented testimonials or client claims.</p>
      </header>

      <div className="home__glass tgrid__glass">
        <div className="tgrid__ledger" style={{ gridColumn: '1 / -1' }}>
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">Editing experience</h2>
            <p className="tgrid__ledger-sub">Different formats, one goal: make the finished video feel intentional.</p>
          </div>
          <ul className="tgrid__clients" role="list">
            {AREAS.map(([index, name, description, Icon]) => (
              <li key={index} className="tgrid__client">
                <span className="tgrid__client-ghost">{index}</span>
                <span className="tgrid__client-mark"><Icon size={22} weight="duotone" /></span>
                <span className="tgrid__client-body">
                  <span className="tgrid__client-head">
                    <span className="tgrid__client-name">{name}</span>
                    <span className="tgrid__client-role">Editing focus</span>
                  </span>
                  <span className="tgrid__client-daily">{description}</span>
                  <span className="tgrid__client-tags"><span className="tgrid__client-tag"><CheckCircle size={13} /> Editing</span></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
