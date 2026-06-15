'use client'

import { useReveal } from '@/hooks/use-reveal'
import { ExternalLink } from 'lucide-react'
import { Github } from '@/components/brand-icons'
import { PROJECTS } from '@/lib/portfolio-data'

export function ProjectsSection() {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <section id="projetos" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-3xl font-bold sm:text-4xl">
          Projetos em Destaque <span>💻</span>
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Alguns dos projetos que desenvolvi e coloquei em produção.
        </p>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Acessar
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
