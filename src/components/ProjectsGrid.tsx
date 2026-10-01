type Project = {
  title: string
  description: string
  videoId: string
}

const PROJECTS: Project[] = [
  { title: '[METRO] 777 GLOOKS [GTA IN DESC]', description: 'A personal gaming montage focused on music sync, timing, motion, effects, and cinematic pacing.', videoId: 'OT6A2AwJSNQ' },
  { title: 'metro rp // wutitdo! ft. palmsu', description: 'Gaming montage work built around rhythm, gameplay highlights, transitions, and visual energy.', videoId: 'hmMa4F01CUI' },
  { title: 'IMRP // gta in desc', description: 'A gameplay edit showcasing fast cuts, timing, effects, and music-driven visual flow.', videoId: 'BlgqEU2CyBM' },
  { title: '[MGCRP] Two Headed Goat ft. Rocco', description: 'Another personal montage demonstrating pacing, sound sync, visual emphasis, and cinematic editing.', videoId: '5KH3tDAdIso' },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid longcard" aria-labelledby="projects-title">
      <div className="home__glass longcard__shell longcard--work">
        <header className="longcard__head">
          <span className="longcard__eyebrow">Selected Work</span>
          <h1 className="longcard__title" id="projects-title">Actual edits. Real videos. My style.</h1>
          <p className="longcard__lede">A selection of my gaming montage work. These are personal edits published on my YouTube channel, built around rhythm, music, timing, effects, and cinematic flow.</p>
        </header>

        <div className="longcard__visual">
          <div className="workslider" aria-label="Selected work slideshow">
            <div className="workslider__track">
              {PROJECTS.map((p) => (
                <article className="workslider__slide" key={p.videoId}>
                  <a href={`https://www.youtube.com/watch?v=${p.videoId}`} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${p.title} on YouTube`}>
                    <img src={`https://i.ytimg.com/vi/${p.videoId}/hqdefault.jpg`} alt={`${p.title} YouTube thumbnail`} loading="lazy" />
                    <span className="workslider__caption">{p.title}</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="longcard__bottom">
          <span className="longcard__bottom-title">YouTube · Gaming Montage</span>
          <span className="longcard__bottom-copy">{PROJECTS[0].description}</span>
        </div>
      </div>
    </section>
  )
}
