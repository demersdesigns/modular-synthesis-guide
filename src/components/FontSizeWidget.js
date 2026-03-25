'use client'
import { useState } from 'react'

const MIN = 16
const MAX = 24
const DEFAULT = 17

export default function FontSizeWidget() {
  const [size, setSize] = useState(DEFAULT)

  const update = (next) => {
    const clamped = Math.min(MAX, Math.max(MIN, next))
    setSize(clamped)
    document.documentElement.style.fontSize = clamped + 'px'
  }

  return (
    <div className="font-size-widget">
      <button onClick={() => update(size - 1)} disabled={size <= MIN} aria-label="Decrease font size">A−</button>
      <span>{size}px</span>
      <button onClick={() => update(size + 1)} disabled={size >= MAX} aria-label="Increase font size">A+</button>
    </div>
  )
}
