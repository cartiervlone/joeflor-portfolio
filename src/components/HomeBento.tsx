import { Link } from 'react-router-dom'
import { FolderOpen, Stack, User, ChatCircleDots, type Icon } from '@/components/slab'

type HomeCard = {
  to: string
  title: string
  desc: string
  slides: string[]
  Icon: Icon
}

const PLACEHOLDER_SLIDES = [
  'https://i.ytimg.com/vi/OT6A2AwJSNQ/hqdefault.jpg',
  'https://i.ytimg.com/vi/hmMa4F01CUI/hqdefault.jpg',
  'https://i.ytimg.com/vi/BlgqEU2CyBM/hqdefault.jpg',
  'https://i.ytimg.com/vi/5KH3tDAdIso/hqdefault.jpg',
  'https://i.ytimg.com/vi/OT6A2AwJSNQ/maxresdefault.jpg',
]

const CARDS: HomeCard[] = [
  {
    to: '/projects',
    title: 'Selected Work',
    desc: 'Gaming, podcasts, YouTube, social, and cinematic edits.',
    slides: PLACEHOLDER_SLIDES,
    Icon: FolderOpen,
  },
  {
    to: '/services',
    title: 'Services',
    desc: 'Editing built around the format, audience, and story.',
    slides: PLACEHOLDER_SLIDES,
    Icon: Stack,
  },
  {
    to: '/about',
    title: 'About Me',
    desc: 'How gaming montages grew into freelance post-production work.',
    slides: PLACEHOLDER_SLIDES,
    Icon: User,
  },
  {
    to: '/contact',
    title: 'Let’s Work',
    desc: 'Message @plordinary with your next project.',
    slides: PLACEHOLDER_SLIDES,
    Icon: ChatCircleDots,
  },
]

function AutoSlideshow({ slides }: { slides: string[] }) {
  const loop = [...slides, slides[0]]

  return (
    <div className="bento__slideshow" aria-hidden="true">
      <div className="bento__slideshow-track">
        {loop.map((src, index) => (
          <div className="bento__slide" key={`${src}-${index}`}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento bento--home" aria-label="Explore the portfolio">
      {CARDS.map(({ to, title, desc, slides, Icon }) => (
        <Link key={to} to={to} className="bento__card bento__card--home">
          <span className="bento__home-top">
            <span className="bento__home-icon" aria-hidden="true"><Icon size={24} weight="duotone" /></span>
            <span className="bento__home-title">{title}</span>
          </span>

          <AutoSlideshow slides={slides} />

          <span className="bento__desc">{desc}</span>
        </Link>
      ))}
    </nav>
  )
}
