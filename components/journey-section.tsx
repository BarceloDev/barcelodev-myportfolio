'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { JOURNEY } from '@/lib/portfolio-data'

export function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight
      // Progresso de 0 a 1 conforme a seção atravessa a viewport
      const total = rect.height + viewport * 0.6
      const scrolled = viewport * 0.8 - rect.top
      const value = Math.min(1, Math.max(0, scrolled / total))
      setProgress(value)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="jornada" ref={sectionRef} className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-center text-3xl font-bold sm:text-4xl">
          Minha Jornada <span>🚀</span>
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Role para acompanhar minha evolução ao longo dos anos.
        </p>

        {/* Barra de progresso */}
        <div className="sticky top-20 z-10 mt-8">
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan via-primary to-accent transition-[width] duration-150 ease-out"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="mt-2 block text-right font-mono text-xs text-muted-foreground">
            {Math.round(progress * 100)}%
          </span>
        </div>

        {/* Timeline */}
        <ol className="relative mt-10 space-y-12 border-l-2 border-border pl-8">
          {JOURNEY.map((item) => (
            <TimelineItem key={item.year} item={item} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
}: {
  item: (typeof JOURNEY)[number]
}) {
  const ref = useRef<HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <li
      ref={ref}
      className={`relative transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <span className="absolute -left-[42px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
      </span>

      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <span className="font-mono text-sm font-bold text-primary">
          {item.year}
        </span>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {item.link ? (
            <>
              {item.text.split(item.link.label)[0]}
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline"
              >
                {item.link.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              {item.text.split(item.link.label)[1]}
            </>
          ) : (
            item.text
          )}
        </p>
      </div>
    </li>
  )
}
