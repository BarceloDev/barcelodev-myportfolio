'use client'

import { ArrowDown } from 'lucide-react'
import { Github, Instagram, Linkedin } from '@/components/brand-icons'
import { SOCIALS } from '@/lib/portfolio-data'

const socialLinks = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIALS.github, label: 'GitHub', Icon: Github },
]

export function HeroSection() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28"
    >
      {/* Padrão geométrico de fundo + brilhos sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 70% 70% at 50% 30%, black 40%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="reveal is-visible relative mx-auto w-full max-w-4xl text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
          Desenvolvedor em formação
        </span>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Olá <span className="inline-block">👋</span>! Me chamo{' '}
          <span className="text-gradient">Guilherme Barcelo.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tenho 17 anos e sou estudante do curso Técnico de Desenvolvimento de
          Sistemas. Sou desenvolvedor em formação com foco em backend e práticas
          DevOps. Atualmente possuo conhecimento em React com TypeScript e
          Tailwind CSS para frontend e Laravel com PostgreSQL para backend.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#jornada"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Conheça minha jornada
          </a>
        </div>
      </div>
    </section>
  )
}
