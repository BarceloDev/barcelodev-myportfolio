'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, Send } from 'lucide-react'
import { SOCIALS } from '@/lib/portfolio-data'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(): Errors {
    const next: Errors = {}
    if (!name.trim()) next.name = 'Por favor, informe seu nome.'
    if (!email.trim()) {
      next.email = 'Por favor, informe seu email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Informe um email válido.'
    }
    if (!message.trim()) next.message = 'Escreva uma mensagem.'
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const subject = encodeURIComponent('Contato com Guilherme Barcelo')
    const body = encodeURIComponent(
      `Olá, vim pelo seu portfolio...\n\nNome: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const fieldClass =
    'w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

  return (
    <section id="contato" className="px-5 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance text-center text-3xl font-bold sm:text-4xl">
          Entre em Contato <span>📬</span>
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Tem uma ideia, oportunidade ou só quer trocar uma ideia? Me mande uma
          mensagem.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Nome
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className={fieldClass}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              className={fieldClass}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Olá, vim pelo seu portfolio..."
              className={`${fieldClass} resize-none`}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.99]"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-5 w-5" />
                Abrindo seu email...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Enviar mensagem
              </>
            )}
          </button>

          <a
            href={`mailto:${SOCIALS.email}`}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            {SOCIALS.email}
          </a>
        </form>
      </div>
    </section>
  )
}
