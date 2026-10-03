import { Link } from 'react-router-dom'
import { FolderOpen, Stack, User, ChatCircleDots, type Icon } from '@/components/slab'

type HomeCard = {
  to: string
  title: string
  desc: string
  slides: string[]
  Icon: Icon
  slideCount: 4
}

const YOUTUBE_SLIDES = [
  'https://i.ytimg.com/vi/OT6A2AwJSNQ/hqdefault.jpg',
  'https://i.ytimg.com/vi/hmMa4F01CUI/hqdefault.jpg',
  'https://i.ytimg.com/vi/BlgqEU2CyBM/hqdefault.jpg',
  'https://i.ytimg.com/vi/5KH3tDAdIso/hqdefault.jpg',
]

const SERVICES_SLIDES = [
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  'https://images.unsplash.com/photo-1695218716405-5b813000e994?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  'https://images.unsplash.com/photo-1757845524683-611470b2d7ce?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&fm=jpg&q=80&w=1600',
]

const ABOUT_SLIDES = [
  'https://res.cloudinary.com/wsshir2f/image/upload/v1791002886/abt3.jpg',
  'https://res.cloudinary.com/wsshir2f/image/upload/v1791002885/abt2.jpg',
  'https://res.cloudinary.com/wsshir2f/image/upload/v1791002886/abt1.jpg',
  'https://res.cloudinary.com/wsshir2f/image/upload/v1791002886/abt3.jpg',
]

const LETS_WORK_SLIDES = [
  'https://images.unsplash.com/photo-1764664035154-379971f0e936?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  'https://images.unsplash.com/photo-1761850215840-2775d7229cad?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  'https://images.unsplash.com/photo-1764664035176-8e92ff4f128e?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&fm=jpg&q=80&w=1600',
]

const CARDS: HomeCard[] = [
  {
    to: '/projects',
    title: 'Selected Work',
    desc: 'Gaming, podcasts, YouTube, social, and cinematic edits.',
    slides: YOUTUBE_SLIDES,
    Icon: FolderOpen,
    slideCount: 4,
  },
  {
    to: '/services',
    title: 'Services',
    desc: 'Editing built around the format, audience, and story.',
    slides: SERVICES_SLIDES,
    Icon: Stack,
    slideCount: 4,
  },
  {
    to: '/about',
    title: 'About Me',
    desc: 'How gaming montages grew into freelance post-production work.',
    slides: ABOUT_SLIDES,
    Icon: User,
    slideCount: 4,
  },
  {
    to: '/contact',
    title: 'Let’s Work',
    desc: 'Message @plordinary with your next project.',
    slides: LETS_WORK_SLIDES,
    Icon: ChatCircleDots,
    slideCount: 4,
  },
]

function AutoSlideshow({ slides }: { slides: string[] }) {
  const isThree = slides.length === 3

  return (
    <div className="bento__slideshow" aria-hidden="true">
      <div className={isThree ? 'bento__slideshow-track bento__slideshow-track--three' : 'bento__slideshow-track'}>
        {[...slides, slides[0]].map((src, index) => (
          <div className="bento__slide" key={src + '-' + index}>
            <img src={src} alt="" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
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
