import { ArrowUpRight } from '@/components/slab'

type Project = {
  index: string
  title: string
  type: string
  description: string
  image: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Gaming Montage',
    type: 'Personal Work',
    description: 'Fast-paced gaming edits built around music, timing, motion, effects, and visual rhythm. My own montages have reached 5K–18K views.',
    image: '/placeholders/project-1.jpg',
  },
  {
    index: '02',
    title: 'Podcast & Interview',
    type: 'Long-form Video',
    description: 'Host-and-guest editing with multicam workflows, dialogue cleanup, pacing, visual consistency, and polished split-cam layouts.',
    image: '/placeholders/project-2.jpg',
  },
  {
    index: '03',
    title: 'Podcast Reels',
    type: 'Short-form Content',
    description: 'Short-form cuts shaped for attention: tighter pacing, captions, visual emphasis, clean transitions, and moments that stand on their own.',
    image: '/placeholders/project-3.jpg',
  },
  {
    index: '04',
    title: 'YouTube Content',
    type: 'Content Editing',
    description: 'Long-form content edited for clarity and retention, balancing story, pacing, music, sound design, and visual variety.',
    image: '/placeholders/project-4.jpg',
  },
  {
    index: '05',
    title: 'Film & Narrative',
    type: 'Cinematic Editing',
    description: 'School film and narrative work focused on storytelling, pacing, cinematic composition, and intentional scene transitions.',
    image: '/placeholders/project-1.jpg',
  },
  {
    index: '06',
    title: 'Post-Production',
    type: 'Editing Workflow',
    description: 'A structured post-production approach covering sync, organization, dialogue cleanup, color workflow, multicam editing, and final polish.',
    image: '/placeholders/project-2.jpg',
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Selected Work</span>
        <h1 className="pgrid__title" id="projects-title">Editing built around rhythm, story, and flow.</h1>
        <p className="pgrid__lede">A mix of gaming, podcast, YouTube, social, and cinematic editing. Real project media can be added as the portfolio grows.</p>
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
                <div className="bento__shot">
                  <img src={p.image} alt="" loading="lazy" decoding="async" />
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
