import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, Stack, User, ChatCircleDots } from '@/components/slab'
import { profile } from '@/data/profile'

const CARDS = [
  { to: '/projects', title: 'Selected Work', desc: 'Gaming, podcasts, YouTube, social, and cinematic edits.', Icon: FolderOpen },
  { to: '/services', title: 'Services', desc: 'Editing built around the format, audience, and story.', Icon: Stack },
  { to: '/about', title: 'About Me', desc: 'How gaming montages grew into freelance post-production work.', Icon: User },
  { to: '/contact', title: 'Let’s Work', desc: 'Message ' + profile.handle + ' with your next project.', Icon: ChatCircleDots },
]

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {CARDS.map(({ to, title, desc, Icon }) => (
        <Link key={to} to={to} className="bento__card">
          <span className="bento__head">
            <span className="bento__icon"><Icon size={20} weight="duotone" /></span>
            <span className="bento__title">{title}</span>
            <span className="bento__desc">{desc}</span>
            <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
          </span>
        </Link>
      ))}
    </nav>
  )
}
