import { useEffect, useRef, useState } from 'react'
import { profile } from '@/data/profile'

/**
 * IntroOverlay — a restrained neumorphic hero entrance.
 *
 * The headline rises out of the page with soft physical depth, catches one
 * quiet light sweep, then settles into the real home headline. The animation
 * is intentionally short and controlled: no workflow diagram, no full-screen
 * overlay, no bouncing.
 */

const WORDS = `${profile.displayName.line1} ${profile.displayName.line2}`.split(' ')
const ENTER_MS = 1150
const SETTLE_MS = 850
const EASE_CAMERA = 'cubic-bezier(0.76, 0, 0.24, 1)'

const shouldRun =
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  window.location.pathname === '/'

if (shouldRun) document.documentElement.classList.add('is-intro', 'is-intro-head')

const release = () => document.documentElement.classList.remove('is-intro')
const releaseHead = () => document.documentElement.classList.remove('is-intro-head')

export default function IntroOverlay() {
  const [gone, setGone] = useState(!shouldRun)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldRun) {
      release()
      releaseHead()
      return
    }

    document.documentElement.classList.add('is-intro', 'is-intro-head')

    const title = titleRef.current
    if (!title) {
      release()
      releaseHead()
      setGone(true)
      return
    }

    let cancelled = false
    const timers: number[] = []
    const anims: Animation[] = []
    const wait = (ms: number) =>
      new Promise<void>((resolve) => timers.push(window.setTimeout(resolve, ms)))

    const run = async () => {
      if (document.fonts?.ready) await document.fonts.ready
      if (cancelled) return

      const target = document.querySelector<HTMLElement>('.home__title')
      const rect = target?.getBoundingClientRect()

      const width = rect?.width ?? Math.min(760, window.innerWidth * 0.86)
      const height = rect?.height ?? title.offsetHeight
      const scale = Math.min((window.innerWidth * 0.82) / width, 2.4)
      const w = width * scale
      const h = height * scale
      const sx = (window.innerWidth - w) / 2
      const sy = (window.innerHeight - h) / 2 - Math.min(24, window.innerHeight * 0.03)

      const start = `translate3d(${sx}px, ${sy + 28 * scale}px, 0) scale(${scale})`
      const settle = `translate3d(${sx}px, ${sy}px, 0) scale(${scale})`

      title.style.width = `${width}px`
      title.style.transform = start
      title.style.opacity = '1'

      const words = Array.from(title.querySelectorAll<HTMLElement>('.boot__word-in'))
      words.forEach((word, index) => {
        const delay = 100 + index * 95
        const animation = word.animate(
          [
            { opacity: 0, transform: 'translate3d(0, 22px, 0) scale(.985)' },
            { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
          ],
          { duration: 620, delay, fill: 'both', easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
        )
        anims.push(animation)
      })

      title.animate(
        [
          { transform: start, filter: 'blur(8px)', opacity: 0 },
          { transform: settle, filter: 'blur(0)', opacity: 1 },
        ],
        { duration: ENTER_MS, fill: 'both', easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
      )

      await wait(ENTER_MS)
      if (cancelled) return

      title.classList.add('boot__title--sweep', 'boot__title--settled')

      await wait(SETTLE_MS)
      if (cancelled) return

      if (rect) {
        const handoff = title.animate(
          [
            { transform: settle, opacity: 1 },
            { transform: `translate3d(${rect.left}px, ${rect.top}px, 0) scale(1)`, opacity: 1 },
          ],
          { duration: 720, fill: 'both', easing: EASE_CAMERA },
        )
        anims.push(handoff)
        await handoff.finished
      }

      if (cancelled) return
      release()

      const homeTitle = document.querySelector<HTMLElement>('.home__title')
      if (homeTitle) homeTitle.classList.add('home__title--intro-settled')

      await wait(40)
      if (cancelled) return
      releaseHead()
      setGone(true)
    }

    void run()

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
      anims.forEach((animation) => animation.cancel())
      release()
      releaseHead()
    }
  }, [])

  if (gone) return null

  return (
    <div className="boot" aria-hidden="true" role="presentation">
      <div className="boot__title" ref={titleRef}>
        {WORDS.map((word, index) => (
          <span className="boot__word" key={`${word}-${index}`}>
            <span className="boot__word-in">{word}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
