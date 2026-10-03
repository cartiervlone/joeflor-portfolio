import { ArrowUpRight } from '@/components/slab'

type Project = {
  index: string
  title: string
  type: string
  description: string
  videoId: string
  thumbnail: string
}

const YOUTUBE_PROJECTS: Project[] = [
  {
    index: '01',
    title: '[METRO] 777 GLOOKS [GTA IN DESC]',
    type: 'Personal Work',
    description: 'A personal gaming montage focused on music sync, timing, motion, effects, and cinematic pacing.',
    videoId: 'OT6A2AwJSNQ',
    thumbnail: 'https://res.cloudinary.com/wsshir2f/image/upload/v1791007207/METRO_777.png',
  },
  {
    index: '02',
    title: 'metro rp // wutitdo! ft. palmsu',
    type: 'Personal Work',
    description: 'Gaming montage work built around rhythm, gameplay highlights, transitions, and visual energy.',
    videoId: 'hmMa4F01CUI',
    thumbnail: 'https://res.cloudinary.com/wsshir2f/image/upload/v1791007207/Wutitdo.png',
  },
  {
    index: '03',
    title: 'IMRP // gta in desc',
    type: 'Personal Work',
    description: 'A gameplay edit showcasing fast cuts, timing, effects, and music-driven visual flow.',
    videoId: 'BlgqEU2CyBM',
    thumbnail: 'https://res.cloudinary.com/wsshir2f/image/upload/v1791007207/IMRP.png',
  },
  {
    index: '04',
    title: '[MGCRP] Two Headed Goat ft. Rocco',
    type: 'Personal Work',
    description: 'Another personal montage demonstrating pacing, sound sync, visual emphasis, and cinematic editing.',
    videoId: '5KH3tDAdIso',
    thumbnail: 'https://res.cloudinary.com/wsshir2f/image/upload/v1791007205/COMRP.png',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const p = project

  return (
    <article className="bento__card pgrid__video-card">
      <a className="pgrid__card-hit" href={`https://www.youtube.com/watch?v=${p.videoId}`} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${p.title} on YouTube`} />
      <div className="pgrid__card-top">
        <span className="bento__logo">{p.index}</span>
        <a className="pgrid__video-link" href={`https://www.youtube.com/watch?v=${p.videoId}`} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${p.title} on YouTube`} onClick={(e) => e.stopPropagation()}>
          <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
        </a>
      </div>
      <div className="bento__media bento__reel pgrid__video">
        <img src={p.thumbnail} alt={`${p.title} YouTube thumbnail`} loading="lazy" decoding="async" />
        <span className="pgrid__play" aria-hidden="true">▶</span>
      </div>
      <div className="pgrid__card-copy">
        <span className="pgrid__eyebrow">{p.type} · YouTube · Gaming Montage</span>
        <span className="bento__title">{p.title}</span>
        <span className="bento__desc">{p.description}</span>
      </div>
    </article>
  )
}

function EmptyWorkSection({ label, title, description, variant }: {
  label: string
  title: string
  description: string
  variant: 'reels'
  }) {
  return (
    <div className={`home__glass pgrid__glass pgrid__glass--empty pgrid__glass--${variant}`}>
      <div className="pgrid__social-empty">
        <span className="pgrid__social-empty-label">{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

function TeaserWorkSection() {
  return (
    <div className="home__glass pgrid__glass pgrid__glass--teaser pgrid__teaser-card">
      <div className="pgrid__teaser-media">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=wsshir2f&public_id=SR_EP_38_Teaser"
          title="SR EP 38 Teaser"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="pgrid__teaser-copy">
        <span className="pgrid__social-empty-label">16:9 · Landscape</span>
        <h3>SR EP 38 Teaser</h3>
        <p>Podcast teaser edited for cinematic pacing, music, dialogue, and visual flow.</p>
      </div>
    </div>
  )
}

export default function ProjectsGrid({ youtubeOnly = false }: { youtubeOnly?: boolean }) {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Selected Work</span>
        <h1 className="pgrid__title" id="projects-title">Actual edits. Real videos. My style.</h1>
        <p className="pgrid__lede">
          A selection of my editing work across gaming, YouTube, reels, teasers, podcasts, and social content.
        </p>
      </header>

      <section className="pgrid__section" aria-labelledby="youtube-work-title">
        <div className="pgrid__section-head">
          <div>
            <span className="pgrid__section-kicker">01 · YouTube</span>
            <h2 className="pgrid__section-title" id="youtube-work-title">Gaming Montages</h2>
          </div>
          <p className="pgrid__section-note">Long-form gaming edits built around music, timing, effects, and cinematic pacing.</p>
        </div>
        <div className="home__glass pgrid__glass">
          <div className="bento bento--projects">
            {YOUTUBE_PROJECTS.map((project) => <ProjectCard key={project.videoId} project={project} />)}
          </div>
        </div>
      </section>

      {!youtubeOnly && (
        <>
          <section className="pgrid__section" aria-labelledby="reels-work-title">
            <div className="pgrid__section-head">
              <div>
                <span className="pgrid__section-kicker">02 · Reels</span>
                <h2 className="pgrid__section-title" id="reels-work-title">Short-Form Reels</h2>
              </div>
              <p className="pgrid__section-note">Vertical 9:16 social edits, reels, Shorts, and other short-form content.</p>
            </div>
            <EmptyWorkSection
              label="9:16 · Vertical"
              title="Short-form work goes here."
              description="This section is reserved for your vertical reels and Shorts. We'll play the videos directly in the portfolio once you add them."
              variant="reels"
            />
          </section>

          <section className="pgrid__section" aria-labelledby="teaser-work-title">
            <div className="pgrid__section-head">
              <div>
                <span className="pgrid__section-kicker">03 · Teasers</span>
                <h2 className="pgrid__section-title" id="teaser-work-title">Podcast &amp; Video Teasers</h2>
              </div>
              <p className="pgrid__section-note">Cinematic teasers and promotional cuts in the original landscape format.</p>
            </div>
            <TeaserWorkSection />
          </section>
        </>
      )}
    </section>
  )
}
