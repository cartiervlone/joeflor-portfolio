import { useMemo } from 'react'

type Tool = { name: string }

export const tools: Tool[] = [
  { name: 'DaVinci Resolve' },
  { name: 'Adobe Premiere Pro' },
  { name: 'Adobe After Effects' },
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...tools, ...tools], [])
  return (
    <section className="tools-marquee" aria-label="Editing tools">
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => (
          <div key={tool.name + i} className="tools-marquee__item">
            <span className="tools-marquee__tile" />
            <span className="tools-marquee__label">{tool.name}</span>
          </div>
        ))}
      </div>
      <ul className="sr-only">{tools.map((t) => <li key={t.name}>{t.name}</li>)}</ul>
    </section>
  )
}
