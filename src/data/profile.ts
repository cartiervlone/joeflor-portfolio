import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Joeflor Hinobiada',
  firstName: 'Joeflor',
  handle: '@plordinary',
  role: 'Video Editor · Podcast Video Editor · Post-Production Specialist · Content Creator · Multimedia Editor',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Portfolio profile',
  email: 'jooplor2015@gmail.com',
  location: 'Cebu City, Philippines · Freelance',
  stats: [
    { value: '3+ yrs', label: 'Editing', Icon: Briefcase },
    { value: '5K–18K', label: 'Montage views', Icon: SealCheck },
    { value: '2026', label: 'Freelance', Icon: Clock },
  ],
  displayName: { line1: 'Video that flows.', line2: 'Stories that connect.' },
  hero: {
    body: 'I edit podcasts, YouTube videos, social content, gaming montages, and narrative projects with a focus on rhythm, clean transitions, sound, and cinematic flow.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Joeflor Hinobiada',
  },
  socials: [
    { label: 'Instagram profile', href: 'https://www.instagram.com/plordinary', iconPath: '/icons/instagram.svg' },
    { label: 'YouTube channel', href: 'https://www.youtube.com/@amyhooligan', iconPath: '/icons/youtube.svg' },
  ],
}
