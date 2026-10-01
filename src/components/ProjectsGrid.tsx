import { ArrowUpRight } from '@/components/slab'

type Project = {
  index: string
  title: string
  type: string
  description: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Gaming Montage',
    type: 'Personal Work',
    description: 'Fast-paced gaming edits built around music, timing, motion, effects, and visual rhythm. My own montages have reached 5K–18K views.',
  },
  {
    index: '02',
    title: 'Podcast & Interview',
    type: 'Long-form Video',
    description: 'Host-and-guest editing with multicam workflows, dialogue cleanup, pacing, visual consistency, and polished split-cam layouts.',
  },
  {
    index: '03',
    title: 'Podcast Reels',
    type: 'Short-form Content',
    description: 'Short-form cuts shaped for attention: tighter pacing, captions, visual emphasis, clean transitions, and moments that stand on their own.',
  },
  {
    index: '04',
    title: 'YouTube Content',
    type: 'Content Editing',
    description: 'Long-form content edited for clarity and retention, balancing story, pacing, music, sound design, and visual variety.',
  },
  {
    index: '05',
    title: 'Film & Narrative',
    type: 'Cinematic Editing',
    description: 'School film and narrative work focused on storytelling, pacing, cinematic composition, and intentional scene transitions.',
  },
  {
    index: '06',
    title: 'Post-Production',
    type: 'Editing Workflow',
    description: 'A structured post-production approach covering sync, organization, dialogue cleanup, color workflow, multicam editing, and final polish.',
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Selected Work</span>
        <h1 className="pgrid__title" id="projects-title">Editing built around rhythm, story, and flow.</h1>
        <p className="pgrid__lede">A mix of gaming, podcast, YouTube, social, and cinematic editing. Project visuals can be added as the portfolio grows.</p>
      </header>

      <div className="home__glass pgrid__glass">
        <div className="bento bento--projects">
          {PROJECTS.map((p) => (
            <article key={p.index} className="bento__card">
              <div className="bento__head">
                <span className="bento__logos">
                  <span className="bento__logo">{p.index}</span>
                </span>
                <span className="bento__title">{p.title}</span>
                <span className="bento__desc">{p.description}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </div>
              <div className="bento__media bento__reel">
                <div className="bento__shot bento__shot--editorial" aria-hidden="true">
                  <span className="bento__visual-index">{p.index}</span>
                  <span className="bento__visual-title">{p.title}</span>
                  <span className="bento__visual-type">{p.type}</span>
                  <span className="bento__visual-line" />
                </div>
              </div>
              <span className="pgrid__eyebrow">{p.type}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
