'use client'

import { useReveal } from '@/hooks/use-reveal'
import { TECHNOLOGIES } from '@/lib/portfolio-data'

export function TechSection() {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <section id="tecnologias" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance text-center text-3xl font-bold sm:text-4xl">
          Tecnologias &amp; Ferramentas <span>🛠️</span>
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          As tecnologias com as quais trabalho e estudo no dia a dia.
        </p>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {TECHNOLOGIES.map(({ name, icon: Icon }, i) => (
            <div
              key={name}
              className={`group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 40}ms` : '0ms' }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
