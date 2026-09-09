import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '../data/content'

type Props = {
  items: FaqItem[]
  title?: string
  eyebrow?: string
  className?: string
}

export default function FaqAccordion({ items, title, eyebrow, className = '' }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={className}>
      {(eyebrow || title) && (
        <div className="mb-8">
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era">{eyebrow}</p>
          )}
          {title && (
            <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">{title}</h2>
          )}
        </div>
      )}
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="rounded-xl border border-charcoal/10 bg-white">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-charcoal">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-era transition ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <p className="border-t border-charcoal/5 px-5 py-4 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
