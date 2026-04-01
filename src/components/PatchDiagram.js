/**
 * PatchDiagram — data-driven SVG signal-flow renderer.
 *
 * Usage:
 *   <PatchDiagram modules={[...]} wires={[...]} note="..." />
 *
 * Module shape:
 *   { id, label, sublabel?, x, y, w, h, highlight? boolean,
 *     jacks: [{ id, label, type, x, y }] }
 *
 *   Jack types: 'out' | 'in' | 'gate-out' | 'gate-in' | 'cv-in'
 *   Jack x/y are RELATIVE to the module's x/y.
 *
 * Wire shape (pick one routing method):
 *   { from: 'moduleId.jackId', to: 'moduleId.jackId', type: 'audio'|'mod'|'gate'|'cv' }
 *     → auto bezier between the two jack centres
 *
 *   { ..., via: [[x,y], [x,y], ...] }
 *     → orthogonal path: from-jack → waypoints → to-jack (absolute SVG coords)
 *
 *   { ..., d: 'M… C… L…' }
 *     → raw SVG path string (escape hatch for complex routing)
 */

const JACK_CLASS = {
  'out':      'jack-out',
  'in':       'jack-in',
  'gate-out': 'jack-gate-out',
  'gate-in':  'jack-gate-in',
}

// cv-in uses a custom purple that has no CSS class — handled inline
const CV_IN_STYLE = { fill: '#1e1e1e', stroke: '#b040ff', strokeWidth: 1.5 }

const WIRE = {
  audio: { className: 'wire-audio', strokeWidth: 2,   strokeDasharray: undefined, marker: 'arrow-audio' },
  mod:   { className: 'wire-mod',   strokeWidth: 1.5, strokeDasharray: '4,3',     marker: 'arrow-mod'   },
  gate:  { className: 'wire-gate',  strokeWidth: 1.5, strokeDasharray: undefined, marker: 'arrow-gate'  },
  cv:    { className: 'wire-cv',    strokeWidth: 1.5, strokeDasharray: '4,3',     marker: 'arrow-cv'   },
}

// Arrow marker definitions — one per wire color
const MARKERS = [
  { id: 'arrow-audio', color: '#fb923c' },
  { id: 'arrow-mod',   color: '#a78bfa' },
  { id: 'arrow-gate',  color: '#34d399' },
  { id: 'arrow-cv',    color: '#60a5fa' },
]

// Smooth polyline: rounds each intermediate corner with a quadratic bezier.
// r = corner radius in SVG units.
function smoothPolyline(pts, r) {
  if (pts.length < 2) return ''
  if (pts.length === 2) return `M${pts[0][0]},${pts[0][1]} L${pts[1][0]},${pts[1][1]}`

  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1]
    const [cx, cy] = pts[i]
    const [nx, ny] = pts[i + 1]
    const d1 = Math.sqrt((cx - px) ** 2 + (cy - py) ** 2)
    const d2 = Math.sqrt((nx - cx) ** 2 + (ny - cy) ** 2)
    const r1 = Math.min(r, d1 / 2)
    const r2 = Math.min(r, d2 / 2)
    // approach point (just before corner)
    const ax = cx - ((cx - px) / d1) * r1
    const ay = cy - ((cy - py) / d1) * r1
    // exit point (just after corner)
    const ex = cx + ((nx - cx) / d2) * r2
    const ey = cy + ((ny - cy) / d2) * r2
    d += ` L${ax},${ay} Q${cx},${cy} ${ex},${ey}`
  }
  d += ` L${pts[pts.length - 1][0]},${pts[pts.length - 1][1]}`
  return d
}

function buildPath(from, to, via, rawD, yOffset = 0) {
  if (rawD) return rawD
  if (!from || !to) return ''
  if (via && via.length > 0) {
    // yOffset spreads parallel corridor wires apart vertically
    const adjustedVia = via.map(([x, y]) => [x, y + yOffset])
    const pts = [[from.x, from.y], ...adjustedVia, [to.x, to.y]]
    return smoothPolyline(pts, 15)
  }
  // Auto bezier with a horizontal bias
  const dx = to.x - from.x
  const bend = Math.max(40, Math.abs(dx) * 0.45)
  return `M${from.x},${from.y} C${from.x + bend},${from.y} ${to.x - bend},${to.y} ${to.x},${to.y}`
}

export default function PatchDiagram({ modules = [], wires = [], width = 700, height = 220, note }) {
  // Build absolute jack position lookup: 'moduleId.jackId' → {x, y}
  const jackMap = {}
  for (const m of modules) {
    for (const j of (m.jacks || [])) {
      jackMap[`${m.id}.${j.id}`] = { x: m.x + j.x, y: m.y + j.y }
    }
  }

  // Spread via-routed wires vertically within the corridor so parallel wires
  // don't share the same y segment. Spread is symmetric around the original y.
  const SPREAD_STEP = 4
  const viaIndices = wires.reduce((acc, w, i) => { if (w.via) acc.push(i); return acc }, [])
  const halfSpread = ((viaIndices.length - 1) * SPREAD_STEP) / 2
  const yOffsetByIndex = {}
  viaIndices.forEach((wireIdx, rank) => { yOffsetByIndex[wireIdx] = rank * SPREAD_STEP - halfSpread })

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        {MARKERS.map(({ id, color }) => (
          <marker key={id} id={id} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill={color} />
          </marker>
        ))}
      </defs>

      {/* ── Modules ── */}
      {modules.map(m => (
        <g key={m.id}>
          <rect
            x={m.x} y={m.y} width={m.w} height={m.h} rx={2}
            className={m.highlight ? 'module-box-highlight' : 'module-box'}
          />
          <text x={m.x + m.w / 2} y={m.y + 18} className="mod-text" textAnchor="middle">
            {m.label}
          </text>
          {m.sublabel && (
            <text x={m.x + m.w / 2} y={m.y + 30} className="jack-label" textAnchor="middle">
              {m.sublabel}
            </text>
          )}
          {(m.jacks || []).map(j => {
            const ax = m.x + j.x
            const ay = m.y + j.y
            const isCvIn = j.type === 'cv-in'
            return (
              <g key={j.id}>
                <circle
                  cx={ax} cy={ay} r={5}
                  className={isCvIn ? undefined : JACK_CLASS[j.type]}
                  style={isCvIn ? CV_IN_STYLE : undefined}
                />
                <text x={ax} y={ay + 16} className="jack-label" textAnchor="middle">
                  {j.label}
                </text>
              </g>
            )
          })}
        </g>
      ))}

      {/* ── Wires: pass 1 — knockout casing so crossings show over/under ── */}
      {wires.map((w, i) => {
        const yOffset = yOffsetByIndex[i] ?? 0
        const d = buildPath(jackMap[w.from], jackMap[w.to], w.via, w.d, yOffset)
        const style = WIRE[w.type] || WIRE.audio
        return (
          <path
            key={`casing-${i}`}
            d={d}
            fill="none"
            stroke="#141414"
            strokeWidth={style.strokeWidth + 4}
            strokeDasharray={style.strokeDasharray}
          />
        )
      })}

      {/* ── Wires: pass 2 — colored wire on top ── */}
      {wires.map((w, i) => {
        const yOffset = yOffsetByIndex[i] ?? 0
        const d = buildPath(jackMap[w.from], jackMap[w.to], w.via, w.d, yOffset)
        const style = WIRE[w.type] || WIRE.audio
        return (
          <path
            key={i}
            d={d}
            fill="none"
            className={style.className}
            strokeWidth={style.strokeWidth}
            strokeDasharray={style.strokeDasharray}
            markerEnd={style.marker ? `url(#${style.marker})` : undefined}
          />
        )
      })}

      {/* ── Legend note ── */}
      {note && (
        <text x={width / 2} y={height - 8} className="patch-note" textAnchor="middle">
          {note}
        </text>
      )}
    </svg>
  )
}
