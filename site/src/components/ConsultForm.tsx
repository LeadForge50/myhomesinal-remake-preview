import { useMemo, useState, type FormEvent } from 'react'
import { AGENT, CONTACT_TIMES, INTERESTS } from '../data/content'

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

type Props = { dark?: boolean }

export default function ConsultForm({ dark = false }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState<(typeof INTERESTS)[number]>('Buying')
  const [time, setTime] = useState<(typeof CONTACT_TIMES)[number]>('Anytime')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'ready' | 'copied'>('idle')
  const [sending, setSending] = useState(false)

  const summary = useMemo(
    () =>
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone.trim() || '(not provided)'}`,
        `Interest: ${interest}`,
        `Preferred time: ${time}`,
        '',
        message.trim() || '(no additional details)',
      ].join('\n'),
    [name, email, phone, interest, time, message],
  )

  function validate() {
    const next: Record<string, string> = {}
    if (!name.trim() || name.trim().length < 2) next.name = 'Please enter your full name.'
    if (!email.trim() || !isEmail(email)) next.email = 'Please enter a valid email.'
    if (phone.trim() && phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Phone looks incomplete — or leave it blank.'
    }
    if (!message.trim() || message.trim().length < 10) {
      next.message = 'Tell Ashley a bit more (at least a sentence).'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) {
      setStatus('idle')
      return
    }
    setSending(true)
    const subject = encodeURIComponent(`Consultation request — ${name.trim()} (${interest})`)
    const body = encodeURIComponent(
      `Hi Ashley,\n\nI'd like to connect.\n\n${summary}\n\nSent from the myhomesinal remake preview site.`,
    )
    window.location.href = `mailto:${AGENT.email}?subject=${subject}&body=${body}`
    setStatus('ready')
    setSending(false)
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary)
      setStatus('copied')
    } catch {
      setStatus('ready')
    }
  }

  const inputClass = dark
    ? 'w-full border-0 border-b border-white/25 bg-transparent px-0 py-2.5 text-white placeholder:text-white/40 outline-none focus:border-era'
    : 'w-full rounded-lg border border-charcoal/15 bg-white px-3 py-2.5 text-charcoal outline-none focus:border-era focus:ring-2 focus:ring-era/20'
  const labelClass = dark
    ? 'mb-1 block text-[11px] font-semibold uppercase tracking-widest text-white/50'
    : 'mb-1 block text-[11px] font-semibold uppercase tracking-widest text-muted'
  const chipBase = 'rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition'
  const chipOn = 'border-era bg-era text-white'
  const chipOff = dark
    ? 'border-white/25 text-white/80 hover:border-white/50'
    : 'border-charcoal/20 text-charcoal/80 hover:border-era/50'

  return (
    <div
      className={
        dark
          ? 'rounded-2xl bg-charcoal-soft p-6 sm:p-8'
          : 'rounded-2xl border border-charcoal/10 bg-cream p-6 sm:p-8'
      }
    >
      <h3 className={`mb-1 font-display text-2xl ${dark ? 'text-white' : 'text-charcoal'}`}>
        Schedule a <span className="text-era">Consultation</span>
      </h3>
      <p className={`mb-2 text-sm ${dark ? 'text-white/65' : 'text-muted'}`}>
        Real form — on submit we open your email app to message Ashley at {AGENT.email}, and show a
        confirmation with a copyable summary here.
      </p>
      <p className={`mb-6 text-xs ${dark ? 'text-white/45' : 'text-muted'}`}>
        Preview lead path until CRM is connected (Formspree / Follow Up Boss). See README for env setup.
      </p>

      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Full name
          </label>
          <input
            id="cf-name"
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-era-light">{errors.name}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-email" className={labelClass}>
              Email
            </label>
            <input
              id="cf-email"
              type="email"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              autoComplete="email"
            />
            {errors.email && <p className="mt-1 text-xs text-era-light">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="cf-phone" className={labelClass}>
              Phone <span className="normal-case tracking-normal opacity-70">(optional)</span>
            </label>
            <input
              id="cf-phone"
              type="tel"
              className={inputClass}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(256) 555-0100"
              autoComplete="tel"
            />
            {errors.phone && <p className="mt-1 text-xs text-era-light">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <p className={labelClass}>I'm interested in</p>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((item) => (
              <button
                key={item}
                type="button"
                className={`${chipBase} ${interest === item ? chipOn : chipOff}`}
                onClick={() => setInterest(item)}
                aria-pressed={interest === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className={labelClass}>Preferred contact time</p>
          <div className="flex flex-wrap gap-2">
            {CONTACT_TIMES.map((item) => (
              <button
                key={item}
                type="button"
                className={`${chipBase} ${time === item ? chipOn : chipOff}`}
                onClick={() => setTime(item)}
                aria-pressed={time === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="cf-msg" className={labelClass}>
            Tell me more
          </label>
          <textarea
            id="cf-msg"
            rows={4}
            className={`${inputClass} resize-y`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Budget, timeline, areas of interest..."
          />
          {errors.message && <p className="mt-1 text-xs text-era-light">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-full bg-era px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-era-dark disabled:opacity-60 sm:w-auto"
        >
          {sending ? 'Sending…' : 'Email Ashley'}
        </button>
      </form>

      {(status === 'ready' || status === 'copied') && (
        <div
          className={`mt-6 rounded-xl border p-4 ${
            dark ? 'border-white/15 bg-black/30 text-white' : 'border-era/20 bg-white text-charcoal'
          }`}
          role="status"
        >
          <p className="mb-2 text-sm font-semibold text-era">Confirmation — next step</p>
          <p className="mb-2 text-sm font-medium">
            Your mail app should have opened with a pre-filled message to {AGENT.email}.
          </p>
          <p className={`mb-3 text-xs ${dark ? 'text-white/60' : 'text-muted'}`}>
            If nothing opened, copy the summary below and email Ashley yourself. This preview uses mailto
            until CRM (Formspree / Follow Up Boss) is wired.
          </p>
          <pre
            className={`mb-3 max-h-48 overflow-auto rounded-lg p-3 text-xs whitespace-pre-wrap ${
              dark ? 'bg-black/40 text-white/80' : 'bg-cream-dark text-charcoal/80'
            }`}
          >
            {summary}
          </pre>
          <button
            type="button"
            onClick={copySummary}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
              dark
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-charcoal/20 hover:border-era hover:text-era'
            }`}
          >
            {status === 'copied' ? 'Copied!' : 'Copy summary'}
          </button>
        </div>
      )}
    </div>
  )
}
