'use client'
import { useState, useEffect, useRef } from 'react'

const MIN_SCALE = 0.5
const MAX_SCALE = 3.0
const STEP = 0.25

export default function DiagramLightbox({ diagram, title, onClose }) {
  const [scale, setScale] = useState(1)
  const closeRef = useRef(null)

  // Lock body scroll and handle Escape
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const zoom = (delta) =>
    setScale(s => Math.min(MAX_SCALE, Math.max(MIN_SCALE, +(s + delta).toFixed(2))))

  return (
    <div className="dlb-overlay" onClick={onClose}>
      <div className="dlb-panel" onClick={e => e.stopPropagation()}>
        <div className="dlb-toolbar">
          <span className="dlb-title">{title}</span>
          <div className="dlb-zoom-controls">
            <button onClick={() => zoom(-STEP)} disabled={scale <= MIN_SCALE} aria-label="Zoom out">−</button>
            <span>{Math.round(scale * 100)}%</span>
            <button onClick={() => zoom(+STEP)} disabled={scale >= MAX_SCALE} aria-label="Zoom in">+</button>
          </div>
          <button className="dlb-close" ref={closeRef} onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="dlb-scroll">
          <div className="dlb-canvas" style={{ transform: `scale(${scale})` }}>
            {diagram}
          </div>
        </div>
      </div>
    </div>
  )
}
