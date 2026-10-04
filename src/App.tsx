import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TabBar from '@/components/TabBar'
import Rail from '@/components/Rail'
import IntroOverlay from '@/components/IntroOverlay'
import CursorRing from '@/components/CursorRing'
import AccessMenu from '@/components/AccessMenu'
import { useLenis, SCROLLER_ID } from '@/hooks/useLenis'
import { useIsPhone } from '@/hooks/useMediaQuery'

/**
 * The shell. It owns everything that outlives a route change: the contour
 * shader, the intro, the profile rail and the one scrolling panel. Each route
 * renders its view into that panel through the Outlet.
 *
 * Home is the route that shaped the layout: it is sized to the panel box and
 * must not scroll, which is what `data-fixed` switches off. Projects,
 * Testimonials, About and Contact are built to the same budget and join it.
 */
export default function App() {
  useLenis()

  const { pathname } = useLocation()
  // All portfolio views scroll naturally. Long sections and card grids must
  // be allowed to grow with their content instead of being forced into one
  // viewport-height box and overflowing their glass panels.
  const FIXED_ROUTES: string[] = []
  const isFixed = FIXED_ROUTES.includes(pathname)
  // Below the shell breakpoint the rail is gone: a bottom tab bar navigates,
  // the QuickMenu (theme + accessibility) floats top-right on every page but
  // Home (whose profile header carries it), and the visits widget folds into
  // that header.
  const phone = useIsPhone()
  const panelRef = useRef<HTMLElement>(null)

  // The panel is the scroller, so a route change has to reset it by hand -
  // the browser only restores scroll on the document.
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0, behavior: 'auto' })
    // Lenis owns the desktop panel scroll. Tell it the route content changed
    // so its cached dimensions and ScrollTrigger measurements are rebuilt.
    window.dispatchEvent(new Event('portfolio:route-change'))
  }, [pathname])

  // From the first route change on, a page that mounts rises into place
  // (mobile-pass.css). Not on the first load: the intro owns that arrival.
  // Layout effect: set before paint, or the new page shows for one frame at
  // full opacity and then jumps back to start its rise.
  const firstPath = useRef(pathname)
  useLayoutEffect(() => {
    if (pathname !== firstPath.current) document.documentElement.classList.add('has-navigated')
  }, [pathname])



  return (
    <>
      <IntroOverlay />
      <CursorRing />
      <a href={`#${SCROLLER_ID}`} className="skip-link">Skip to main content</a>
      <div className="shell">
        <Rail />
        <main
          ref={panelRef}
          id={SCROLLER_ID}
          className="shell__panel"
          data-fixed={isFixed ? 'true' : 'false'}
        >
          <div className="shell__content">
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </div>
      {phone && <TabBar />}
      <AccessMenu />
    </>
  )
}
