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

function buildPath(from, to, via, rawD) {
  if (rawD) return rawD
  if (!from || !to) return ''
  if (via && via.length > 0) {
    const pts = [[from.x, from.y], ...via, [to.x, to.y]]
    return pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
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

      {/* ── Wires ── */}
      {wires.map((w, i) => {
        const d = buildPath(jackMap[w.from], jackMap[w.to], w.via, w.d)
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
