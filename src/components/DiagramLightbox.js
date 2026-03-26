'use client'
import { useState, useEffect, useRef } from 'react'

const MIN_SCALE = 0.5
const MAX_SCALE = 3.0
const STEP = 0.25
const DIAGRAM_W = 700
const DIAGRAM_H = 220

export default function DiagramLightbox({ diagram, title, onClose }) {
  const [scale, setScale] = useState(1)
  const [dragging, setDragging] = useState(false)
  const closeRef = useRef(null)
  const scrollRef = useRef(null)
  const drag = useRef({ x: 0, y: 0, sl: 0, st: 0 })

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

  const onMouseDown = (e) => {
    setDragging(true)
    drag.current = { x: e.clientX, y: e.clientY, sl: scrollRef.current.scrollLeft, st: scrollRef.current.scrollTop }
  }
  const onMouseMove = (e) => {
    if (!dragging) return
    scrollRef.current.scrollLeft = drag.current.sl - (e.clientX - drag.current.x)
    scrollRef.current.scrollTop  = drag.current.st - (e.clientY - drag.current.y)
  }
  const onMouseUp = () => setDragging(false)

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

        {/* Scroll area with drag-to-pan */}
        <div
          className="dlb-scroll"
          ref={scrollRef}
          style={{ cursor: dragging ? 'grabbing' : 'grab' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {/*
            Spacer div sized to the actual scaled dimensions so the scroll
            container reserves the correct layout space — no left-side clipping.
            margin: 0 auto centres the spacer when it's narrower than the panel.
          */}
          <div style={{ width: DIAGRAM_W * scale, height: DIAGRAM_H * scale, margin: '0 auto', flexShrink: 0 }}>
            <div className="dlb-canvas" style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>
              {diagram}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
