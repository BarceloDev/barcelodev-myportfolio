import { Mail } from 'lucide-react'
import { Github, Instagram, Linkedin } from '@/components/brand-icons'
import { SOCIALS } from '@/lib/portfolio-data'

const links = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIALS.github, label: 'GitHub', Icon: Github },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10">
        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-lg font-bold transition-colors hover:text-primary"
        >
          {'<BarceloDev/>'}
        </a>

        <div className="flex items-center gap-3">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <a
          href={`mailto:${SOCIALS.email}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4" />
          {SOCIALS.email}
        </a>

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Guilherme Barcelo. Feito com React,
          TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
