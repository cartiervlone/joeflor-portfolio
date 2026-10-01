import { ArrowUpRight } from '@/components/slab'

type Project = {
  index: string
  title: string
  type: string
  description: string
  videoId: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: '[METRO] 777 GLOOKS [GTA IN DESC]',
    type: 'Personal Work',
    description: 'A personal gaming montage focused on music sync, timing, motion, effects, and cinematic pacing.',
    videoId: 'OT6A2AwJSNQ',
  },
  {
    index: '02',
    title: 'metro rp // wutitdo! ft. palmsu',
    type: 'Personal Work',
    description: 'Gaming montage work built around rhythm, gameplay highlights, transitions, and visual energy.',
    videoId: 'hmMa4F01CUI',
  },
  {
    index: '03',
    title: 'IMRP // gta in desc',
    type: 'Personal Work',
    description: 'A gameplay edit showcasing fast cuts, timing, effects, and music-driven visual flow.',
    videoId: 'BlgqEU2CyBM',
  },
  {
    index: '04',
    title: '[MGCRP] Two Headed Goat ft. Rocco',
    type: 'Personal Work',
    description: 'Another personal montage demonstrating pacing, sound sync, visual emphasis, and cinematic editing.',
    videoId: '5KH3tDAdIso',
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Selected Work</span>
        <h1 className="pgrid__title" id="projects-title">Actual edits. Real videos. My style.</h1>
        <p className="pgrid__lede">A selection of my gaming montage work. These are personal edits published on my YouTube channel, built around rhythm, music, timing, effects, and cinematic flow.</p>
      </header>

      <div className="home__glass pgrid__glass">
        <div className="bento bento--projects">
          {PROJECTS.map((p) => (
            <article
              key={p.videoId}
              className="bento__card pgrid__video-card"
            >
              <a
                className="pgrid__card-hit"
                href={`https://www.youtube.com/watch?v=${p.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${p.title} on YouTube`}
              />
              <div className="bento__head">
                <span className="bento__logos">
                  <span className="bento__logo">{p.index}</span>
                </span>
                <span className="bento__title">{p.title}</span>
                <span className="bento__desc">{p.description}</span>
                <a
                  className="pgrid__video-link"
                  href={`https://www.youtube.com/watch?v=${p.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${p.title} on YouTube`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                </a>
              </div>
              <div className="bento__media bento__reel pgrid__video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${p.videoId}`}
                  title={p.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <span className="pgrid__eyebrow">YouTube · Gaming Montage</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
