import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AGENT } from '../data/content'
import { IMG } from '../data/assets'

function isFormField(el: EventTarget | null) {
  if (!(el instanceof HTMLElement) || !el.closest('form')) return false
  const tag = el.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable
}

export default function SmsFab() {
  const { pathname } = useLocation()
  const [formFocused, setFormFocused] = useState(false)

  useEffect(() => {
    const onIn = (e: FocusEvent) => {
      if (isFormField(e.target)) setFormFocused(true)
    }
    const onOut = () => {
      window.setTimeout(() => {
        if (!isFormField(document.activeElement)) setFormFocused(false)
      }, 80)
    }
    document.addEventListener('focusin', onIn)
    document.addEventListener('focusout', onOut)
    return () => {
      document.removeEventListener('focusin', onIn)
      document.removeEventListener('focusout', onOut)
    }
  }, [])

  const onContact = pathname === '/contact' || pathname.endsWith('/contact') || formFocused
  const pos = onContact
    ? 'bottom-28 right-3 sm:bottom-8 sm:right-6'
    : 'bottom-6 right-3 sm:bottom-6 sm:right-6'

  if (formFocused) return null

  return (
    <a
      href={AGENT.phoneSms}
      className={`group fixed z-40 flex flex-col items-end gap-1 pb-[env(safe-area-inset-bottom)] ${pos}`}
      aria-label="Text Ashley now"
    >
      <span className="rounded-full bg-charcoal px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg opacity-90 transition group-hover:opacity-100">
        Text Ashley
      </span>
      <span className="relative flex h-14 w-14 overflow-hidden rounded-full bg-era text-white shadow-xl shadow-era/30 ring-2 ring-white transition group-hover:scale-105">
        <img
          src={IMG.introAvatarCircle}
          alt=""
          className="h-full w-full object-cover object-top"
          aria-hidden
        />
      </span>
    </a>
  )
}
