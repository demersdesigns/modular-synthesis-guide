'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { id: 'system', label: 'Your System' },
  { id: 'concepts', label: 'Core Concepts' },
  { id: 'patches', label: 'Patch Ideas', href: '/patches' },
  { id: 'techniques', label: 'Techniques' },
  { id: 'grandmother', label: 'Grandmother', href: '/grandmother' },
  { id: 'reference', label: 'Module Reference' },
]

const SCROLL_ITEMS = NAV_ITEMS.filter(i => !i.href)

export default function Nav() {
  const pathname = usePathname()
  const [scrollActive, setScrollActive] = useState('system')

  useEffect(() => {
    if (pathname !== '/') return
    const handleScroll = () => {
      const sections = SCROLL_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean)
      let current = 'system'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setScrollActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const isActive = (item) => {
    if (item.href) return pathname === item.href
    if (pathname !== '/') return false
    return scrollActive === item.id
  }

  const handleScrollClick = (id) => {
    const target = document.getElementById(id)
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 48
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  return (
    <nav>
      {NAV_ITEMS.map(item => {
        const active = isActive(item)
        if (item.href) {
          return (
            <Link key={item.id} href={item.href} className={`nav-btn${active ? ' active' : ''}`}>
              {item.label}
            </Link>
          )
        }
        if (pathname === '/') {
          return (
            <button key={item.id} className={`nav-btn${active ? ' active' : ''}`} onClick={() => handleScrollClick(item.id)}>
              {item.label}
            </button>
          )
        }
        return (
          <Link key={item.id} href={`/#${item.id}`} className={`nav-btn${active ? ' active' : ''}`}>
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
