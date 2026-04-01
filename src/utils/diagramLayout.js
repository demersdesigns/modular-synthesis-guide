/**
 * diagramLayout.js
 *
 * place(specs) — builds a modules[] array for <PatchDiagram> from a list of
 * lightweight spec objects, filling in label/sublabel/w/highlight from
 * moduleLibrary so each diagram only has to declare what's unique to it.
 *
 * Spec shape:
 *   {
 *     key:        string          — key into LIB (e.g. 'OSIRIS')
 *     id:         string          — unique id used in wire from/to refs
 *     x:          number          — absolute SVG x
 *     y:          number          — absolute SVG y
 *     jacks:      Jack[]          — array of jack objects (see PatchDiagram)
 *     // optional overrides:
 *     label?:     string
 *     sublabel?:  string
 *     w?:         number
 *     h?:         number          — defaults to 70
 *     highlight?: boolean
 *   }
 *
 * Jack y conventions (relative to module top):
 *   Single-label modules  → y = 35   (abs = module.y + 35)
 *   Double-label modules  → y = 40   (abs = module.y + 40)
 *   LINE OUT              → y = 45   (abs = module.y + 45)
 *
 * Cross-row wire routing:
 *   Use via: [[x, 108], [x2, 108]] to route through the inter-row gap.
 *   Top row modules sit at y=20 (bottom edge y=90).
 *   Bottom row modules sit at y=120 (top edge y=120).
 *   Gap corridor: y=90–120, route at y=108.
 */
import { LIB } from './moduleLibrary'

export function place(specs) {
  return specs.map(spec => {
    const def = LIB[spec.key] || {}
    return {
      id:        spec.id,
      label:     spec.label     ?? def.label,
      sublabel:  spec.sublabel  ?? def.sublabel,
      x:         spec.x,
      y:         spec.y,
      w:         spec.w         ?? def.w,
      h:         spec.h         ?? 70,
      highlight: spec.highlight ?? def.highlight,
      jacks:     spec.jacks     ?? [],
    }
  })
}

export const NOTE = "Dashed = CV modulation · Solid = audio · Yellow = gate/trigger"
