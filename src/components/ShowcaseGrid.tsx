import { CheckCircle, FilmSlate, Waveform, Lightning, ArrowsClockwise, type Icon } from '@/components/slab'

const POINTS: Array<[string, string, string, Icon]> = [
  ['01', 'Rhythm', 'Cuts, pauses, music, and movement work together instead of fighting each other.', Waveform],
  ['02', 'Pacing', 'Fast when the moment needs energy. Slower when the story needs space.', ArrowsClockwise],
  ['03', 'Visual flow', 'Transitions and effects support the edit rather than becoming the whole edit.', FilmSlate],
  ['04', 'Sound', 'Dialogue, music, and sound design are treated as part of the storytelling.', Lightning],
]

export default function ShowcaseGrid() {
  return (
    <section className="pgrid longcard" aria-labelledby="showcase-title">
      <div className="home__glass longcard__shell">
        <header className="longcard__head">
          <span className="longcard__eyebrow">Editing Style</span>
          <h1 className="longcard__title" id="showcase-title">Smooth, clean, cinematic — without losing the story.</h1>
          <p className="longcard__lede">My approach is less about stacking effects and more about making every cut feel intentional.</p>
        </header>

        <div className="longcard__visual longcard__textvisual">
          <div className="longcard__textvisual-inner">
            <span className="longcard__textvisual-kicker">What guides the edit</span>
            <h2 className="longcard__textvisual-title">Every project gets<br /><span>the style it actually needs.</span></h2>
            <p className="longcard__textvisual-body">A gaming montage should hit differently from a podcast conversation. A narrative film needs room to breathe. I adapt the edit to the content.</p>
          </div>
        </div>

        <div className="longcard__bottom">
          <div className="longcard__list">
            {POINTS.map(([index, title, body, Icon]) => (
              <div className="longcard__item" key={index}>
                <span className="longcard__item-index">{index}</span>
                <span className="longcard__item-title"><Icon size={17} weight="duotone" /> {title}.</span>
                <span className="longcard__item-body">{body}</span>
                <span className="longcard__item-body"><CheckCircle size={13} /> Intentional</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
