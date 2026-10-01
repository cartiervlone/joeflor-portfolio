import type { CSSProperties } from 'react'
import { CheckCircle, FilmSlate, Waveform, Lightning, ArrowsClockwise, type Icon } from '@/components/slab'

const POINTS: Array<[string, string, string, Icon]> = [
  ['01', 'Rhythm', 'Cuts, pauses, music, and movement work together instead of fighting each other.', Waveform],
  ['02', 'Pacing', 'Fast when the moment needs energy. Slower when the story needs space.', ArrowsClockwise],
  ['03', 'Visual flow', 'Transitions and effects support the edit rather than becoming the whole edit.', FilmSlate],
  ['04', 'Sound', 'Dialogue, music, and sound design are treated as part of the storytelling.', Lightning],
]

export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Editing Style</span>
          <h1 className="pgrid__title" id="showcase-title">Smooth, clean, cinematic — without losing the story.</h1>
          <p className="pgrid__lede">My approach is less about stacking effects and more about making every cut feel intentional.</p>
        </div>
      </header>

      <div className="home__glass ktools__glass">
        <div className="sgrid__method" style={{ height: '100%' }}>
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">What guides the edit</span>
            <h2 className="sgrid__method-title">Every project gets<br /><span>the style it actually needs.</span></h2>
            <p className="sgrid__method-sub">A gaming montage should hit differently from a podcast conversation. A narrative film needs room to breathe. I adapt the edit to the content.</p>
          </div>
          <ol className="sgrid__stages" role="list">
            {POINTS.map(([index, title, body, Icon], i) => (
              <li key={index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                <span className="sgrid__stage-ghost">{index}</span>
                <span className="sgrid__stage-icon"><Icon size={22} weight="duotone" /></span>
                <h3 className="sgrid__stage-label">{title}.</h3>
                <p className="sgrid__stage-body">{body}</p>
                <span className="sgrid__stage-chips"><span className="sgrid__stage-chip"><CheckCircle size={13} /> Intentional</span></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
