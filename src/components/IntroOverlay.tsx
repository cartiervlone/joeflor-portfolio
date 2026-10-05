import { useEffect, useRef, useState } from 'react'
import { profile } from '@/data/profile'

/**
 * IntroOverlay — a restrained neumorphic hero entrance.
 *
 * The headline rises like a physical object, settles with a tiny overshoot,
 * catches one ambient edge highlight, then hands off to the real hero.
 */

const LINES = [profile.displayName.line1, profile.displayName.line2]
const ENTER_MS = 1050
const SETTLE_MS = 650
const EASE_CAMERA = 'cubic-bezier(0.76, 0, 0.24, 1)'

const shouldRun =
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  window.location.pathname === '/'

if (shouldRun) document.documentElement.classList.add('is-intro', 'is-intro-head')

const release = () => {
  document.documentElement.classList.remove('is-intro', 'is-intro-head', 'is-intro-breathe')
}

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

    document.documentElement.classList.add('is-intro', 'is-intro-head', 'is-intro-breathe')

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

      const start = `translate3d(${sx}px, ${sy + 34 * scale}px, 0) scale(${scale})`
      const settle = `translate3d(${sx}px, ${sy}px, 0) scale(${scale})`
      const overshoot = `translate3d(${sx}px, ${sy - 4 * scale}px, 0) scale(${scale * 1.008})`

      title.style.width = `${width}px`
      title.style.transform = start
      title.style.opacity = '1'

      const lines = Array.from(title.querySelectorAll<HTMLElement>('.boot__line-in'))
      lines.forEach((line, index) => {
        const animation = line.animate(
          [
            { opacity: 0, transform: 'translate3d(0, 24px, 0) scale(.985)' },
            { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
          ],
          {
            duration: 700,
            delay: index * 155,
            fill: 'both',
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          },
        )
        anims.push(animation)
      })

      const lift = title.animate(
        [
          { transform: start, filter: 'blur(9px)', opacity: 0 },
          { transform: settle, filter: 'blur(0)', opacity: 1, offset: .86 },
          { transform: overshoot, filter: 'blur(0)', opacity: 1, offset: .94 },
          { transform: settle, filter: 'blur(0)', opacity: 1 },
        ],
        { duration: ENTER_MS, fill: 'both', easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
      )
      anims.push(lift)

      await wait(ENTER_MS)
      if (cancelled) return

      title.classList.add('boot__title--sweep')

      await wait(SETTLE_MS)
      if (cancelled) return

      if (rect) {
        const handoff = title.animate(
          [
            { transform: settle, opacity: 1 },
            { transform: `translate3d(${rect.left}px, ${rect.top}px, 0) scale(1)`, opacity: 1 },
          ],
          { duration: 680, fill: 'both', easing: EASE_CAMERA },
        )
        anims.push(handoff)
        await handoff.finished
      }

      if (cancelled) return
      release()
      await wait(40)
      if (cancelled) return
      releaseHead()
      setGone(true)

      // A nearly imperceptible 1–2px physical response remains on the real title.
      const liveTitle = document.querySelector<HTMLElement>('.home__title')
      if (liveTitle && window.matchMedia('(pointer: fine)').matches) {
        const onMove = (event: PointerEvent) => {
          const bounds = liveTitle.getBoundingClientRect()
          const x = (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width
          const y = (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height
          liveTitle.style.setProperty('--hero-mx', `${Math.max(-1, Math.min(1, x)) * 2}px`)
          liveTitle.style.setProperty('--hero-my', `${Math.max(-1, Math.min(1, y)) * 2}px`)
        }
        const reset = () => {
          liveTitle.style.setProperty('--hero-mx', '0px')
          liveTitle.style.setProperty('--hero-my', '0px')
        }
        liveTitle.addEventListener('pointermove', onMove)
        liveTitle.addEventListener('pointerleave', reset)
        liveTitle.style.setProperty('--hero-mx', '0px')
        liveTitle.style.setProperty('--hero-my', '0px')
      }
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
        {LINES.map((line, index) => (
          <span className="boot__line" key={line}>
            <span className="boot__line-in">{line}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
