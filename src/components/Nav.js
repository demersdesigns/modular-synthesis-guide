'use client'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'system', label: 'Your System' },
  { id: 'concepts', label: 'Core Concepts' },
  { id: 'patches', label: 'Patch Ideas' },
  { id: 'techniques', label: 'Techniques' },
  { id: 'grandmother', label: 'Grandmother' },
  { id: 'reference', label: 'Module Reference' },
]

export default function Nav() {
  const [active, setActive] = useState('system')

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean)
      let current = 'system'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const target = document.getElementById(id)
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 48
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  return (
    <nav>
      {NAV_ITEMS.map(item => (
        <button
          key={item.id}
          className={`nav-btn${active === item.id ? ' active' : ''}`}
          onClick={() => scrollTo(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
