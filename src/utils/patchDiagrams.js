/**
 * patchDiagrams.js
 *
 * All patch signal-flow diagrams, expressed as declarative <PatchDiagram>
 * elements. No hand-coded SVG coordinates — modules are placed with place()
 * and wires describe semantic connections.
 *
 * Wire routing helpers:
 *   Cross-row (top ↔ bottom): via: [[x_from, 108], [x_to, 108]]
 *   Same-row y mismatch (e.g. squawk at y=60 vs y=55): d: 'M…'
 *   Feedback arcs / cascade arcs: d: 'M… C…'
 */
import PatchDiagram from '../components/PatchDiagram'
import { place, NOTE } from './diagramLayout'

// ─── Ambient / Drone ──────────────────────────────────────────────────────────

export const AMBIENT_TEXTURE_LOOP = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'PAMELAS',  id: 'pam',     x: 10,  y: 20,  jacks: [
      { id: 'eu',    label: 'EU',    type: 'gate-out', x: 20, y: 35 },
      { id: 'div16', label: '÷16',   type: 'gate-out', x: 52, y: 35 },
    ]},
    { key: 'RAMPLE',   id: 'rample',  x: 112, y: 20,  jacks: [
      { id: 't1',    label: 'T1',    type: 'gate-in',  x: 12, y: 35 },
      { id: 't2',    label: 'T2',    type: 'gate-in',  x: 30, y: 35 },
      { id: 'start', label: 'START', type: 'cv-in',    x: 52, y: 35 },
      { id: 'out',   label: 'OUT',   type: 'out',      x: 75, y: 35 },
    ]},
    { key: 'QUAD_VCA', id: 'qvca',    x: 220, y: 20,  jacks: [
      { id: 'in1',   label: 'IN1',   type: 'in',       x: 12, y: 35 },
      { id: 'in2',   label: 'IN2',   type: 'in',       x: 32, y: 35 },
      { id: 'cv',    label: 'CV',    type: 'cv-in',    x: 55, y: 35 },
      { id: 'out',   label: 'OUT',   type: 'out',      x: 75, y: 35 },
    ]},
    { key: 'DUALFX',   id: 'dualfx',  x: 325, y: 20,  jacks: [
      { id: 'inl',   label: 'INL',   type: 'in',       x: 12, y: 35 },
      { id: 'outl',  label: 'OUTL',  type: 'out',      x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',  id: 'lineout', x: 418, y: 20,  jacks: [
      { id: 'inl',   label: 'INL',   type: 'in',       x: 15, y: 45 },
    ]},
    { key: 'CLEP',     id: 'clep',    x: 10,  y: 120, jacks: [
      { id: 'out',   label: 'OUT',   type: 'out',      x: 42, y: 35 },
    ]},
    { key: 'OSIRIS',   id: 'osiris',  x: 112, y: 120, jacks: [
      { id: 'out',   label: 'OUT',   type: 'out',      x: 65, y: 35 },
    ]},
    { key: 'QUAD_PLFO',id: 'plfo',    x: 220, y: 120, jacks: [
      { id: 'out',   label: 'OUT',   type: 'out',      x: 47, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.eu',      to: 'rample.t1',   type: 'gate'  },
    { from: 'pam.div16',   to: 'rample.t2',   type: 'gate'  },
    { from: 'clep.out',    to: 'rample.start', type: 'mod',  via: [[52, 108], [164, 108]] },
    { from: 'osiris.out',  to: 'qvca.in2',    type: 'audio', via: [[177, 108], [252, 108]] },
    { from: 'plfo.out',    to: 'qvca.cv',     type: 'mod',   via: [[267, 108], [275, 108]] },
    { from: 'rample.out',  to: 'qvca.in1',    type: 'audio' },
    { from: 'qvca.out',    to: 'dualfx.inl',  type: 'audio' },
    { from: 'dualfx.outl', to: 'lineout.inl', type: 'audio', d: 'M393,55 L413,55 L413,65 L433,65' },
  ]} />
)

export const ENVELOPE_CASCADE_SHIMMER = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'PAMELAS',   id: 'pam',     x: 10,  y: 20, jacks: [
      { id: 'div32', label: '÷32', type: 'gate-out', x: 35, y: 35 },
    ]},
    { key: 'FORECASTLE', id: 'fc',     x: 108, y: 20, w: 115, jacks: [
      { id: 'g1',  label: 'G1',  type: 'gate-in',  x: 15, y: 35 },
      { id: 'g2',  label: 'G2',  type: 'gate-in',  x: 33, y: 35 },
      { id: 'g3',  label: 'G3',  type: 'gate-in',  x: 51, y: 35 },
      { id: 'e1',  label: 'E1',  type: 'out',      x: 80, y: 35 },
      { id: 'e2',  label: 'E2',  type: 'out',      x: 100, y: 35 },
    ]},
    { key: 'OSIRIS',    id: 'osiris',  x: 246, y: 20, jacks: [
      { id: 'morph', label: 'MORPH', type: 'cv-in', x: 30, y: 35 },
      { id: 'out',   label: 'OUT',   type: 'out',   x: 65, y: 35 },
    ]},
    { key: 'LPG',       id: 'lpg',     x: 350, y: 20, jacks: [
      { id: 'in',   label: 'IN',   type: 'in',    x: 12, y: 40 },
      { id: 'ctrl', label: 'CTRL', type: 'cv-in', x: 38, y: 40 },
      { id: 'out',  label: 'OUT',  type: 'out',   x: 73, y: 40 },
    ]},
    { key: 'MEGATANG',  id: 'mega',    x: 458, y: 20, jacks: [
      { id: 'in',    label: 'IN',     type: 'in',    x: 12, y: 35 },
      { id: 'lvlcv', label: 'LVL CV', type: 'cv-in', x: 40, y: 35 },
      { id: 'mix',   label: 'MIX',    type: 'out',   x: 78, y: 35 },
    ]},
    { key: 'DUALFX',    id: 'dualfx',  x: 560, y: 20, jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.div32', to: 'fc.g1',     type: 'gate' },
    // Cascade arcs (EoC self-patching) drawn above module
    { from: 'fc.g1', to: 'fc.g2', type: 'gate', d: 'M123,20 C123,5 141,5 141,20' },
    { from: 'fc.g2', to: 'fc.g3', type: 'gate', d: 'M141,20 C141,5 159,5 159,20' },
    { from: 'fc.e1', to: 'lpg.ctrl',    type: 'mod',   d: 'M188,55 L188,98 L388,98 L388,60' },
    { from: 'fc.e2', to: 'osiris.morph', type: 'mod',   d: 'M208,55 L208,108 L276,108 L276,55' },
    { from: 'fc.e2', to: 'mega.lvlcv',  type: 'mod',   d: 'M208,55 L208,112 L498,112 L498,55' },
    { from: 'osiris.out', to: 'lpg.in', type: 'audio', d: 'M311,55 L340,55 L340,60 L362,60' },
    { from: 'lpg.out',   to: 'mega.in', type: 'audio', d: 'M423,60 L447,60 L447,55 L470,55' },
    { from: 'mega.mix',  to: 'dualfx.inl', type: 'audio' },
  ]} />
)

export const CLOCKED_WAVETABLE_MEDITATION = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'PAMELAS',   id: 'pam',     x: 10,  y: 20,  jacks: [
      { id: 'clk',   label: 'CLK', type: 'gate-out', x: 20, y: 35 },
      { id: 'div8',  label: '÷8',  type: 'gate-out', x: 55, y: 35 },
    ]},
    { key: 'MIMETIC',   id: 'mimetic', x: 112, y: 20,  jacks: [
      { id: 'clk',   label: 'CLK',  type: 'gate-in',  x: 15, y: 35 },
      { id: 'ch1',   label: 'CH1',  type: 'out',      x: 40, y: 35 },
      { id: 'ch2',   label: 'CH2',  type: 'out',      x: 63, y: 35 },
      { id: 'gate',  label: 'GATE', type: 'gate-out', x: 85, y: 35 },
    ]},
    { key: 'OSIRIS',    id: 'osiris',  x: 230, y: 20,  jacks: [
      { id: 'voct',  label: 'V/OCT', type: 'cv-in', x: 15, y: 35 },
      { id: 'morph', label: 'MORPH', type: 'cv-in', x: 38, y: 35 },
      { id: 'out',   label: 'OUT',   type: 'out',   x: 65, y: 35 },
    ]},
    { key: 'QUAD_VCA',  id: 'qvca',    x: 333, y: 20,  jacks: [
      { id: 'in',    label: 'IN',    type: 'in',    x: 12, y: 35 },
      { id: 'cv',    label: 'CV',    type: 'cv-in', x: 42, y: 35 },
      { id: 'out',   label: 'OUT',   type: 'out',   x: 72, y: 35 },
    ]},
    { key: 'DUALFX',    id: 'dualfx',  x: 430, y: 20,  jacks: [
      { id: 'inl',   label: 'INL',   type: 'in',  x: 12, y: 35 },
      { id: 'outl',  label: 'OUTL',  type: 'out', x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',   id: 'lineout', x: 524, y: 20,  jacks: [
      { id: 'inl',   label: 'INL',   type: 'in',  x: 15, y: 45 },
    ]},
    { key: 'FORECASTLE',id: 'fc',      x: 10,  y: 120, w: 95, jacks: [
      { id: 'g1',    label: 'GATE1', type: 'gate-in', x: 15, y: 35 },
      { id: 'e1',    label: 'ENV1',  type: 'out',     x: 67, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.clk',    to: 'mimetic.clk', type: 'gate'  },
    { from: 'pam.div8',   to: 'fc.g1',       type: 'gate',  via: [[65, 108], [25, 108]] },
    { from: 'mimetic.ch1', to: 'osiris.voct', type: 'audio' },
    { from: 'mimetic.ch2', to: 'osiris.morph',type: 'mod'   },
    { from: 'fc.e1',      to: 'qvca.cv',     type: 'mod',   via: [[77, 108], [375, 108]] },
    { from: 'osiris.out', to: 'qvca.in',     type: 'audio' },
    { from: 'qvca.out',   to: 'dualfx.inl',  type: 'audio' },
    { from: 'dualfx.outl',to: 'lineout.inl', type: 'audio', d: 'M498,55 L515,55 L515,65 L539,65' },
  ]} />
)

// ─── Techno / Industrial ──────────────────────────────────────────────────────

// CORRECTED: Steppy has gate outputs only (no CV).
// Mimetic Digitalis now provides pitch CV to Osiris V/OCT.
export const INDUSTRIAL_TECHNO_DRIVE = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'STEPPY',   id: 'steppy',  x: 10,  y: 20,  jacks: [
      { id: 'clk', label: 'CLK', type: 'gate-in',  x: 15, y: 35 },
      { id: 'g1',  label: 'G1',  type: 'gate-out', x: 58, y: 35 },
    ]},
    { key: 'OSIRIS',   id: 'osiris',  x: 112, y: 20,  jacks: [
      { id: 'voct', label: 'V/OCT', type: 'cv-in', x: 15, y: 35 },
      { id: 'out',  label: 'OUT',   type: 'out',   x: 65, y: 35 },
    ]},
    { key: 'SQUAWK',   id: 'squawk',  x: 214, y: 20,  jacks: [
      { id: 'in',     label: 'IN',     type: 'in',    x: 12, y: 40 },
      { id: 'cutoff', label: 'CUTOFF', type: 'cv-in', x: 38, y: 40 },
      { id: 'out',    label: 'OUT',    type: 'out',   x: 83, y: 40 },
    ]},
    { key: 'MEGATANG', id: 'mega',    x: 332, y: 20,  jacks: [
      { id: 'in1',  label: 'IN1',  type: 'in',  x: 12, y: 35 },
      { id: 'in2',  label: 'IN2',  type: 'in',  x: 32, y: 35 },
      { id: 'mix',  label: 'MIX',  type: 'out', x: 78, y: 35 },
    ]},
    { key: 'DUALFX',   id: 'dualfx',  x: 445, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',  id: 'lineout', x: 540, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
    ]},
    { key: 'PAMELAS',  id: 'pam',     x: 10,  y: 120, jacks: [
      { id: 'clk',  label: 'CLK',  type: 'gate-out', x: 20, y: 35 },
      { id: 'kick', label: 'KICK', type: 'gate-out', x: 60, y: 35 },
    ]},
    { key: 'MIMETIC',  id: 'mimetic', x: 112, y: 120, jacks: [
      { id: 'clk', label: 'CLK', type: 'gate-in', x: 15, y: 35 },
      { id: 'ch1', label: 'CH1', type: 'out',     x: 60, y: 35 },
    ]},
    { key: 'GENERATE3',id: 'gen3',    x: 230, y: 120, jacks: [
      { id: 'trig', label: 'TRIG', type: 'gate-in', x: 15, y: 35 },
      { id: 'env',  label: 'ENV',  type: 'out',     x: 65, y: 35 },
    ]},
    { key: 'RAMPLE',   id: 'rample',  x: 342, y: 120, jacks: [
      { id: 't1',  label: 'T1',  type: 'gate-in', x: 12, y: 35 },
      { id: 'out', label: 'OUT', type: 'out',     x: 72, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.clk',    to: 'steppy.clk',   type: 'gate',  via: [[30, 108], [25, 108]] },
    { from: 'pam.clk',    to: 'mimetic.clk',  type: 'gate',  d: 'M30,155 L127,155' },
    { from: 'pam.kick',   to: 'rample.t1',    type: 'gate',  via: [[70, 108], [354, 108]] },
    { from: 'steppy.g1',  to: 'gen3.trig',    type: 'gate',  via: [[68, 108], [245, 108]] },
    { from: 'mimetic.ch1',to: 'osiris.voct',  type: 'audio', via: [[172, 108], [127, 108]] },
    { from: 'gen3.env',   to: 'squawk.cutoff',type: 'mod',   via: [[295, 108], [252, 108]] },
    { from: 'osiris.out', to: 'squawk.in',    type: 'audio', d: 'M177,55 L205,55 L205,60 L226,60' },
    { from: 'squawk.out', to: 'mega.in1',     type: 'audio', d: 'M297,60 L319,60 L319,55 L344,55' },
    { from: 'rample.out', to: 'mega.in2',     type: 'audio', via: [[414, 108], [364, 108]] },
    { from: 'mega.mix',   to: 'dualfx.inl',   type: 'audio' },
    { from: 'dualfx.outl',to: 'lineout.inl',  type: 'audio', d: 'M513,55 L533,55 L533,65 L555,65' },
  ]} />
)

export const POLYRHYTHMIC_RAMPLE = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'PAMELAS',   id: 'pam',     x: 10,  y: 20,  w: 90, jacks: [
      { id: 'out1', label: '1', type: 'gate-out', x: 13, y: 35 },
      { id: 'out2', label: '2', type: 'gate-out', x: 30, y: 35 },
      { id: 'out3', label: '3', type: 'gate-out', x: 47, y: 35 },
      { id: 'out4', label: '4', type: 'gate-out', x: 64, y: 35 },
      { id: 'out5', label: '5', type: 'gate-out', x: 81, y: 35 },
    ]},
    { key: 'RAMPLE',    id: 'rample',  x: 122, y: 20,  w: 90, jacks: [
      { id: 't1',   label: 'T1',  type: 'gate-in', x: 13, y: 35 },
      { id: 't2',   label: 'T2',  type: 'gate-in', x: 30, y: 35 },
      { id: 't3',   label: 'T3',  type: 'gate-in', x: 47, y: 35 },
      { id: 't4',   label: 'T4',  type: 'gate-in', x: 64, y: 35 },
      { id: 'spd',  label: 'SPD', type: 'cv-in',   x: 79, y: 35 },
      { id: 'out',  label: 'OUT', type: 'out',     x: 80, y: 23 },
    ]},
    { key: 'MEGATANG',  id: 'mega',    x: 234, y: 20,  jacks: [
      { id: 'in',    label: 'IN',     type: 'in',    x: 12, y: 35 },
      { id: 'lvlcv', label: 'LVL CV', type: 'cv-in', x: 35, y: 35 },
      { id: 'mix',   label: 'MIX',    type: 'out',   x: 78, y: 35 },
    ]},
    { key: 'DUALFX',    id: 'dualfx',  x: 342, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',   id: 'lineout', x: 436, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
    ]},
    { key: 'CLEP',      id: 'clep',    x: 10,  y: 120, jacks: [
      { id: 'out',  label: 'OUT',  type: 'out', x: 42, y: 35 },
    ]},
    { key: 'FORECASTLE',id: 'fc',      x: 122, y: 120, w: 90, jacks: [
      { id: 'gate', label: 'GATE', type: 'gate-in', x: 20, y: 35 },
      { id: 'env',  label: 'ENV',  type: 'out',     x: 68, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.out1', to: 'rample.t1', type: 'gate', d: 'M23,55 L23,90 L135,90 L135,55' },
    { from: 'pam.out2', to: 'rample.t2', type: 'gate', d: 'M40,55 L40,95 L152,95 L152,55' },
    { from: 'pam.out3', to: 'rample.t3', type: 'gate', d: 'M57,55 L57,100 L169,100 L169,55' },
    { from: 'pam.out4', to: 'rample.t4', type: 'gate', d: 'M74,55 L74,105 L186,105 L186,55' },
    { from: 'pam.out5', to: 'fc.gate',   type: 'gate', via: [[91, 108], [142, 108]] },
    { from: 'clep.out', to: 'rample.spd',type: 'mod',  via: [[52, 108], [201, 108]] },
    { from: 'fc.env',   to: 'mega.lvlcv',type: 'mod',  via: [[190, 108], [269, 108]] },
    { from: 'rample.out',to: 'mega.in',  type: 'audio', d: 'M202,43 L220,43 L220,55 L246,55' },
    { from: 'mega.mix', to: 'dualfx.inl',type: 'audio' },
    { from: 'dualfx.outl',to:'lineout.inl',type:'audio', d: 'M410,55 L427,55 L427,65 L451,65' },
  ]} />
)

// CORRECTED: Steppy is gate-only. Mimetic Digitalis now provides pitch CV.
// Pamela's clock drives both Steppy and Mimetic D.
export const DARK_MINIMAL_BASSLINE = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'STEPPY',   id: 'steppy',  x: 10,  y: 20,  jacks: [
      { id: 'clk', label: 'CLK', type: 'gate-in',  x: 15, y: 35 },
      { id: 'g1',  label: 'G1',  type: 'gate-out', x: 58, y: 35 },
    ]},
    { key: 'OSIRIS',   id: 'osiris',  x: 112, y: 20,  jacks: [
      { id: 'voct', label: 'V/OCT', type: 'cv-in', x: 15, y: 35 },
      { id: 'out',  label: 'OUT',   type: 'out',   x: 65, y: 35 },
    ]},
    { key: 'QUAD_VCA', id: 'qvca',    x: 214, y: 20,  jacks: [
      { id: 'in',   label: 'IN',    type: 'in',    x: 12, y: 35 },
      { id: 'cv',   label: 'CV',    type: 'cv-in', x: 38, y: 35 },
      { id: 'out',  label: 'OUT',   type: 'out',   x: 72, y: 35 },
    ]},
    { key: 'SQUAWK',   id: 'squawk',  x: 320, y: 20,  jacks: [
      { id: 'in',     label: 'IN',     type: 'in',    x: 12, y: 40 },
      { id: 'cutoff', label: 'CUTOFF', type: 'cv-in', x: 38, y: 40 },
      { id: 'out',    label: 'OUT',    type: 'out',   x: 83, y: 40 },
    ]},
    { key: 'MEGATANG', id: 'mega',    x: 440, y: 20,  jacks: [
      { id: 'in',  label: 'IN',  type: 'in',  x: 12, y: 35 },
      { id: 'mix', label: 'MIX', type: 'out', x: 78, y: 35 },
    ]},
    { key: 'DUALFX',   id: 'dualfx',  x: 553, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'PAMELAS',  id: 'pam',     x: 10,  y: 120, jacks: [
      { id: 'clk', label: 'CLK', type: 'gate-out', x: 35, y: 35 },
    ]},
    { key: 'MIMETIC',  id: 'mimetic', x: 112, y: 120, jacks: [
      { id: 'clk', label: 'CLK', type: 'gate-in', x: 15, y: 35 },
      { id: 'ch1', label: 'CH1', type: 'out',     x: 60, y: 35 },
    ]},
    { key: 'FORECASTLE',id: 'fc',     x: 230, y: 120, w: 100, jacks: [
      { id: 'g1',  label: 'G1',  type: 'gate-in', x: 12, y: 35 },
      { id: 'e1',  label: 'E1',  type: 'out',     x: 38, y: 35 },
      { id: 'e2',  label: 'E2',  type: 'out',     x: 63, y: 35 },
      { id: 'e3',  label: 'E3',  type: 'out',     x: 85, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.clk',    to: 'steppy.clk',   type: 'gate',  via: [[45, 108], [25, 108]] },
    { from: 'pam.clk',    to: 'mimetic.clk',  type: 'gate',  d: 'M45,155 L127,155' },
    { from: 'steppy.g1',  to: 'fc.g1',        type: 'gate',  via: [[68, 108], [242, 108]] },
    { from: 'mimetic.ch1',to: 'osiris.voct',  type: 'audio', via: [[172, 108], [127, 108]] },
    { from: 'fc.e1',      to: 'osiris.voct',  type: 'mod',   via: [[268, 108], [127, 108]] },
    { from: 'fc.e2',      to: 'qvca.cv',      type: 'mod',   via: [[293, 108], [252, 108]] },
    { from: 'fc.e3',      to: 'squawk.cutoff',type: 'mod',   via: [[315, 108], [358, 108]] },
    { from: 'osiris.out', to: 'qvca.in',      type: 'audio' },
    { from: 'qvca.out',   to: 'squawk.in',    type: 'audio', d: 'M286,55 L308,55 L308,60 L332,60' },
    { from: 'squawk.out', to: 'mega.in',      type: 'audio', d: 'M403,60 L425,60 L425,55 L452,55' },
    { from: 'mega.mix',   to: 'dualfx.inl',   type: 'audio' },
  ]} />
)

// ─── Generative / Algorithmic ─────────────────────────────────────────────────

export const BLOOM_FRACTAL_MELODY = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'PAMELAS',   id: 'pam',     x: 10,  y: 20,  jacks: [
      { id: 'clk',  label: 'CLK', type: 'gate-out', x: 40, y: 35 },
    ]},
    { key: 'BLOOM',     id: 'bloom',   x: 112, y: 20,  jacks: [
      { id: 'clk',  label: 'CLK',  type: 'gate-in',  x: 15, y: 35 },
      { id: 'cv',   label: 'CV',   type: 'out',      x: 42, y: 35 },
      { id: 'gate', label: 'GATE', type: 'gate-out', x: 65, y: 35 },
    ]},
    { key: 'OSIRIS',    id: 'osiris',  x: 210, y: 20,  jacks: [
      { id: 'voct', label: 'V/OCT', type: 'cv-in', x: 15, y: 35 },
      { id: 'out',  label: 'OUT',   type: 'out',   x: 68, y: 35 },
    ]},
    { key: 'LPG',       id: 'lpg',     x: 312, y: 20,  jacks: [
      { id: 'in',   label: 'IN',   type: 'in',    x: 12, y: 40 },
      { id: 'ctrl', label: 'CTRL', type: 'cv-in', x: 38, y: 40 },
      { id: 'out',  label: 'OUT',  type: 'out',   x: 73, y: 40 },
    ]},
    { key: 'DUALFX',    id: 'dualfx',  x: 420, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',   id: 'lineout', x: 515, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
    ]},
    { key: 'FORECASTLE',id: 'fc',      x: 10,  y: 120, w: 95, jacks: [
      { id: 'g1',   label: 'GATE1',type: 'gate-in', x: 15, y: 35 },
      { id: 'e1',   label: 'ENV1', type: 'out',     x: 67, y: 35 },
    ]},
    { key: 'QUAD_PLFO', id: 'plfo',    x: 125, y: 120, jacks: [
      { id: 'out',  label: 'OUT',  type: 'out', x: 47, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.clk',    to: 'bloom.clk',  type: 'gate'  },
    { from: 'bloom.cv',   to: 'osiris.voct',type: 'audio' },
    { from: 'bloom.gate', to: 'fc.g1',      type: 'gate',  via: [[177, 108], [25, 108]] },
    { from: 'fc.e1',      to: 'lpg.ctrl',   type: 'mod',   via: [[77, 108], [350, 108]] },
    { from: 'plfo.out',   to: 'osiris.voct',type: 'mod',   via: [[172, 108], [225, 108]] },
    { from: 'osiris.out', to: 'lpg.in',     type: 'audio', d: 'M278,55 L305,55 L305,60 L324,60' },
    { from: 'lpg.out',    to: 'dualfx.inl', type: 'audio', d: 'M385,60 L412,60 L412,55 L432,55' },
    { from: 'dualfx.outl',to: 'lineout.inl',type: 'audio', d: 'M488,55 L508,55 L508,65 L530,65' },
  ]} />
)

// CORRECTED: Steppy drives Rample gates (not Osiris V/OCT — Steppy has no CV output).
// Bloom handles pitch for Osiris. Mimetic D. handles filter and level modulation.
export const THREE_SEQUENCER_POLYRHYTHM = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'PAMELAS',  id: 'pam',     x: 10,  y: 20,  jacks: [
      { id: 'clk',  label: 'CLK', type: 'gate-out', x: 40, y: 35 },
    ]},
    { key: 'BUFFMULT', id: 'buff',    x: 100, y: 20,  jacks: [
      { id: 'in',  label: 'IN', type: 'gate-in',  x: 12, y: 35 },
      { id: 'a',   label: 'A',  type: 'gate-out', x: 32, y: 35 },
      { id: 'b',   label: 'B',  type: 'gate-out', x: 52, y: 35 },
      { id: 'c',   label: 'C',  type: 'gate-out', x: 73, y: 35 },
    ]},
    { key: 'OSIRIS',   id: 'osiris',  x: 195, y: 20,  jacks: [
      { id: 'voct', label: 'V/OCT', type: 'cv-in', x: 15, y: 35 },
      { id: 'out',  label: 'OUT',   type: 'out',   x: 65, y: 35 },
    ]},
    { key: 'SQUAWK',   id: 'squawk',  x: 285, y: 20,  jacks: [
      { id: 'in',     label: 'IN',     type: 'in',    x: 12, y: 40 },
      { id: 'cutoff', label: 'CUTOFF', type: 'cv-in', x: 38, y: 40 },
      { id: 'out',    label: 'OUT',    type: 'out',   x: 83, y: 40 },
    ]},
    { key: 'MEGATANG', id: 'mega',    x: 390, y: 20,  jacks: [
      { id: 'in1',   label: 'IN1',    type: 'in',    x: 12, y: 35 },
      { id: 'lvlcv', label: 'LVL CV', type: 'cv-in', x: 40, y: 35 },
      { id: 'mix',   label: 'MIX',    type: 'out',   x: 78, y: 35 },
    ]},
    { key: 'DUALFX',   id: 'dualfx',  x: 490, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'BLOOM',    id: 'bloom',   x: 10,  y: 120, jacks: [
      { id: 'clk', label: 'CLK', type: 'gate-in',  x: 15, y: 35 },
      { id: 'cv',  label: 'CV',  type: 'out',      x: 45, y: 35 },
    ]},
    { key: 'STEPPY',   id: 'steppy',  x: 100, y: 120, jacks: [
      { id: 'clk', label: 'CLK', type: 'gate-in',  x: 15, y: 35 },
      { id: 'g1',  label: 'G1',  type: 'gate-out', x: 55, y: 35 },
    ]},
    { key: 'MIMETIC',  id: 'mimetic', x: 190, y: 120, jacks: [
      { id: 'clk', label: 'CLK', type: 'gate-in', x: 15, y: 35 },
      { id: 'ch1', label: 'CH1', type: 'out',     x: 42, y: 35 },
      { id: 'ch2', label: 'CH2', type: 'out',     x: 67, y: 35 },
    ]},
    { key: 'RAMPLE',   id: 'rample',  x: 295, y: 120, jacks: [
      { id: 't1',  label: 'T1',  type: 'gate-in', x: 12, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.clk',     to: 'buff.in',       type: 'gate'  },
    { from: 'buff.a',      to: 'bloom.clk',     type: 'gate',  via: [[132, 108], [25, 108]] },
    { from: 'buff.b',      to: 'steppy.clk',    type: 'gate',  via: [[152, 108], [115, 108]] },
    { from: 'buff.c',      to: 'mimetic.clk',   type: 'gate',  via: [[173, 108], [205, 108]] },
    { from: 'bloom.cv',    to: 'osiris.voct',   type: 'audio', via: [[55, 108], [210, 108]] },
    { from: 'steppy.g1',   to: 'rample.t1',     type: 'gate',  via: [[155, 108], [307, 108]] },
    { from: 'mimetic.ch1', to: 'squawk.cutoff', type: 'mod',   via: [[232, 108], [323, 108]] },
    { from: 'mimetic.ch2', to: 'mega.lvlcv',    type: 'mod',   via: [[257, 108], [430, 108]] },
    { from: 'osiris.out',  to: 'squawk.in',     type: 'audio', d: 'M260,55 L278,55 L278,60 L297,60' },
    { from: 'squawk.out',  to: 'mega.in1',      type: 'audio', d: 'M368,60 L385,60 L385,55 L402,55' },
    { from: 'mega.mix',    to: 'dualfx.inl',    type: 'audio' },
  ]} />
)

// ─── Melodic / Harmonic ───────────────────────────────────────────────────────

export const DUAL_OSCILLATOR_LEAD = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'UNIVINTER', id: 'uni',     x: 10,  y: 20,  jacks: [
      { id: 'cv',   label: 'CV',   type: 'out',      x: 12, y: 40 },
      { id: 'gate', label: 'GATE', type: 'gate-out', x: 47, y: 40 },
      { id: 'mod',  label: 'MOD',  type: 'out',      x: 82, y: 40 },
    ]},
    { key: 'OSIRIS',    id: 'osiris',  x: 128, y: 20,  jacks: [
      { id: 'voct',  label: 'V/OCT', type: 'cv-in', x: 15, y: 35 },
      { id: 'morph', label: 'MORPH', type: 'cv-in', x: 37, y: 35 },
      { id: 'out',   label: 'OUT',   type: 'out',   x: 72, y: 35 },
    ]},
    { key: 'QUAD_VCA',  id: 'qvca',    x: 232, y: 20,  jacks: [
      { id: 'in',   label: 'IN',    type: 'in',    x: 12, y: 35 },
      { id: 'cv',   label: 'CV',    type: 'cv-in', x: 36, y: 35 },
      { id: 'out',  label: 'OUT',   type: 'out',   x: 72, y: 35 },
    ]},
    { key: 'SQUAWK',    id: 'squawk',  x: 335, y: 20,  jacks: [
      { id: 'in',     label: 'IN',     type: 'in',    x: 12, y: 40 },
      { id: 'cutoff', label: 'CUTOFF', type: 'cv-in', x: 38, y: 40 },
      { id: 'out',    label: 'OUT',    type: 'out',   x: 83, y: 40 },
    ]},
    { key: 'DUALFX',    id: 'dualfx',  x: 453, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',   id: 'lineout', x: 547, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
    ]},
    { key: 'FORECASTLE',id: 'fc',      x: 10,  y: 120, w: 95, jacks: [
      { id: 'g1',   label: 'GATE1', type: 'gate-in', x: 15, y: 35 },
      { id: 'e1',   label: 'ENV1',  type: 'out',     x: 48, y: 35 },
      { id: 'e2',   label: 'ENV2',  type: 'out',     x: 80, y: 35 },
    ]},
  ])} wires={[
    { from: 'uni.cv',     to: 'osiris.voct',   type: 'audio' },
    { from: 'uni.gate',   to: 'fc.g1',         type: 'gate',  via: [[57, 108], [25, 108]] },
    { from: 'uni.mod',    to: 'osiris.morph',  type: 'mod'   },
    { from: 'fc.e1',      to: 'qvca.cv',       type: 'mod',   via: [[58, 108], [268, 108]] },
    { from: 'fc.e2',      to: 'squawk.cutoff', type: 'mod',   via: [[90, 108], [373, 108]] },
    { from: 'osiris.out', to: 'qvca.in',       type: 'audio' },
    { from: 'qvca.out',   to: 'squawk.in',     type: 'audio', d: 'M304,55 L325,55 L325,60 L347,60' },
    { from: 'squawk.out', to: 'dualfx.inl',    type: 'audio', d: 'M418,60 L443,60 L443,55 L465,55' },
    { from: 'dualfx.outl',to: 'lineout.inl',   type: 'audio', d: 'M521,55 L539,55 L539,65 L562,65' },
  ]} />
)

export const SAMPLE_SYNTH_UNISON = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'BLOOM',     id: 'bloom',   x: 10,  y: 20,  jacks: [
      { id: 'clk',  label: 'CLK',  type: 'gate-in',  x: 15, y: 35 },
      { id: 'cv',   label: 'CV',   type: 'out',      x: 45, y: 35 },
      { id: 'gate', label: 'GATE', type: 'gate-out', x: 65, y: 35 },
    ]},
    { key: 'BUFFMULT',  id: 'buff',    x: 112, y: 20,  jacks: [
      { id: 'in',  label: 'IN', type: 'in',  x: 12, y: 35 },
      { id: 'a',   label: 'A',  type: 'out', x: 35, y: 35 },
      { id: 'b',   label: 'B',  type: 'out', x: 60, y: 35 },
    ]},
    { key: 'OSIRIS',    id: 'osiris',  x: 220, y: 20,  jacks: [
      { id: 'voct', label: 'V/OCT', type: 'cv-in', x: 15, y: 35 },
      { id: 'out',  label: 'OUT',   type: 'out',   x: 65, y: 35 },
    ]},
    { key: 'MEGATANG',  id: 'mega',    x: 325, y: 20,  jacks: [
      { id: 'in1',  label: 'IN1',  type: 'in',  x: 12, y: 35 },
      { id: 'in2',  label: 'IN2',  type: 'in',  x: 35, y: 35 },
      { id: 'mix',  label: 'MIX',  type: 'out', x: 78, y: 35 },
    ]},
    { key: 'DUALFX',    id: 'dualfx',  x: 440, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',   id: 'lineout', x: 535, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
    ]},
    { key: 'RAMPLE',    id: 'rample',  x: 10,  y: 120, jacks: [
      { id: 'pitch',label: 'PITCH',type: 'cv-in', x: 15, y: 35 },
      { id: 'out',  label: 'OUT',  type: 'out',   x: 65, y: 35 },
    ]},
    { key: 'FORECASTLE',id: 'fc',      x: 112, y: 120, w: 90, jacks: [
      { id: 'g1',   label: 'GATE1',type: 'gate-in', x: 15, y: 35 },
      { id: 'e1',   label: 'ENV1', type: 'out',     x: 75, y: 35 },
    ]},
    { key: 'QUAD_VCA',  id: 'qvca',    x: 230, y: 120, jacks: [
      { id: 'in',   label: 'IN',   type: 'in',    x: 12, y: 35 },
      { id: 'cv',   label: 'CV',   type: 'cv-in', x: 37, y: 35 },
      { id: 'out',  label: 'OUT',  type: 'out',   x: 72, y: 35 },
    ]},
  ])} wires={[
    { from: 'bloom.cv',   to: 'buff.in',     type: 'audio' },
    { from: 'bloom.gate', to: 'fc.g1',       type: 'gate',  via: [[75, 108], [127, 108]] },
    { from: 'buff.a',     to: 'osiris.voct', type: 'audio' },
    { from: 'buff.b',     to: 'rample.pitch',type: 'audio', via: [[172, 108], [25, 108]] },
    { from: 'fc.e1',      to: 'qvca.cv',     type: 'mod',   d: 'M187,155 L267,155' },
    { from: 'osiris.out', to: 'mega.in1',    type: 'audio' },
    { from: 'rample.out', to: 'qvca.in',     type: 'audio', d: 'M75,155 L242,155' },
    { from: 'qvca.out',   to: 'mega.in2',    type: 'audio', via: [[302, 108], [360, 108]] },
    { from: 'mega.mix',   to: 'dualfx.inl',  type: 'audio' },
    { from: 'dualfx.outl',to: 'lineout.inl', type: 'audio', d: 'M508,55 L525,55 L525,65 L550,65' },
  ]} />
)

// ─── Percussive / Rhythmic ────────────────────────────────────────────────────

export const LPG_DRUM_MACHINE = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'PAMELAS',   id: 'pam',     x: 10,  y: 20,  jacks: [
      { id: 'kick', label: 'KICK', type: 'gate-out', x: 20, y: 35 },
      { id: 'perc', label: 'PERC', type: 'gate-out', x: 55, y: 35 },
    ]},
    { key: 'OSIRIS',    id: 'osiris',  x: 112, y: 20,  jacks: [
      { id: 'voct', label: 'V/OCT', type: 'cv-in', x: 15, y: 35 },
      { id: 'out',  label: 'OUT',   type: 'out',   x: 65, y: 35 },
    ]},
    { key: 'LPG',       id: 'lpg',     x: 215, y: 20,  jacks: [
      { id: 'in',   label: 'IN',   type: 'in',    x: 12, y: 40 },
      { id: 'ctrl', label: 'CTRL', type: 'cv-in', x: 38, y: 40 },
      { id: 'out',  label: 'OUT',  type: 'out',   x: 73, y: 40 },
    ]},
    { key: 'QUAD_VCA',  id: 'qvca',    x: 325, y: 20,  jacks: [
      { id: 'in1',  label: 'IN1',  type: 'in',  x: 12, y: 35 },
      { id: 'in2',  label: 'IN2',  type: 'in',  x: 35, y: 35 },
      { id: 'out',  label: 'OUT',  type: 'out', x: 72, y: 35 },
    ]},
    { key: 'DUALFX',    id: 'dualfx',  x: 428, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',   id: 'lineout', x: 522, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
    ]},
    { key: 'FORECASTLE',id: 'fc',      x: 10,  y: 120, w: 95, jacks: [
      { id: 'g1',   label: 'GATE1',type: 'gate-in', x: 15, y: 35 },
      { id: 'e1',   label: 'ENV1', type: 'out',     x: 75, y: 35 },
    ]},
    { key: 'RAMPLE',    id: 'rample',  x: 130, y: 120, jacks: [
      { id: 't1',   label: 'T1',   type: 'gate-in', x: 15, y: 35 },
      { id: 'out',  label: 'OUT',  type: 'out',     x: 68, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.kick',  to: 'fc.g1',     type: 'gate',  via: [[30, 108], [25, 108]] },
    { from: 'pam.kick',  to: 'lpg.ctrl',  type: 'gate',  d: 'M30,55 L30,40 L253,40 L253,60' },
    { from: 'pam.perc',  to: 'rample.t1', type: 'gate',  via: [[65, 108], [145, 108]] },
    { from: 'fc.e1',     to: 'osiris.voct',type: 'mod',  via: [[85, 108], [127, 108]] },
    { from: 'osiris.out',to: 'lpg.in',    type: 'audio', d: 'M177,55 L208,55 L208,60 L227,60' },
    { from: 'lpg.out',   to: 'qvca.in1',  type: 'audio', d: 'M288,60 L313,60 L313,55 L337,55' },
    { from: 'rample.out',to: 'qvca.in2',  type: 'audio', via: [[198, 108], [360, 108]] },
    { from: 'qvca.out',  to: 'dualfx.inl',type: 'audio' },
    { from: 'dualfx.outl',to:'lineout.inl',type:'audio', d: 'M496,55 L513,55 L513,65 L537,65' },
  ]} />
)

export const FORECASTLE_PERCUSSION = (
  <PatchDiagram note={NOTE} modules={place([
    { key: 'PAMELAS',   id: 'pam',     x: 10,  y: 20,  jacks: [
      { id: 'k',   label: 'K',   type: 'gate-out', x: 13, y: 35 },
      { id: 's',   label: 'S',   type: 'gate-out', x: 30, y: 35 },
      { id: 'hh',  label: 'HH',  type: 'gate-out', x: 47, y: 35 },
      { id: 'acc', label: 'ACC', type: 'gate-out', x: 65, y: 35 },
    ]},
    { key: 'RAMPLE',    id: 'rample',  x: 112, y: 20,  w: 85, jacks: [
      { id: 't1',  label: 'T1',  type: 'gate-in', x: 12, y: 35 },
      { id: 't2',  label: 'T2',  type: 'gate-in', x: 28, y: 35 },
      { id: 't3',  label: 'T3',  type: 'gate-in', x: 43, y: 35 },
      { id: 't4',  label: 'T4',  type: 'gate-in', x: 58, y: 35 },
      { id: 'out', label: 'OUT', type: 'out',     x: 78, y: 23 },
    ]},
    { key: 'MEGATANG',  id: 'mega',    x: 220, y: 20,  jacks: [
      { id: 'in',    label: 'IN',     type: 'in',    x: 15, y: 35 },
      { id: 'lvlcv', label: 'LVL CV', type: 'cv-in', x: 40, y: 35 },
      { id: 'mix',   label: 'MIX',    type: 'out',   x: 78, y: 35 },
    ]},
    { key: 'DUALFX',    id: 'dualfx',  x: 330, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
      { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
    ]},
    { key: 'LINEOUT',   id: 'lineout', x: 425, y: 20,  jacks: [
      { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
    ]},
    { key: 'FORECASTLE',id: 'fc',      x: 10,  y: 120, w: 110, jacks: [
      { id: 'g1',  label: 'G1',  type: 'gate-in', x: 15, y: 35 },
      { id: 'g2',  label: 'G2',  type: 'gate-in', x: 35, y: 35 },
      { id: 'g3',  label: 'G3',  type: 'gate-in', x: 55, y: 35 },
      { id: 'g4',  label: 'G4',  type: 'gate-in', x: 75, y: 35 },
      { id: 'e4',  label: 'E4',  type: 'out',     x: 98, y: 35 },
    ]},
    { key: 'SQUAWK',    id: 'squawk',  x: 145, y: 120, jacks: [
      { id: 'in',  label: 'IN',  type: 'in',  x: 12, y: 40 },
      { id: 'out', label: 'OUT', type: 'out', x: 83, y: 40 },
    ]},
    { key: 'QUAD_VCA',  id: 'qvca',    x: 265, y: 120, jacks: [
      { id: 'in',  label: 'IN',  type: 'in',  x: 12, y: 35 },
      { id: 'out', label: 'OUT', type: 'out', x: 72, y: 35 },
    ]},
  ])} wires={[
    { from: 'pam.k',   to: 'rample.t1', type: 'gate', d: 'M23,55 L23,90 L124,90 L124,55' },
    { from: 'pam.s',   to: 'rample.t2', type: 'gate', d: 'M40,55 L40,95 L140,95 L140,55' },
    { from: 'pam.hh',  to: 'rample.t3', type: 'gate', d: 'M57,55 L57,100 L155,100 L155,55' },
    { from: 'pam.acc', to: 'rample.t4', type: 'gate', d: 'M75,55 L75,105 L170,105 L170,55' },
    { from: 'pam.k',   to: 'fc.g1',     type: 'gate', via: [[23, 108], [25, 108]] },
    { from: 'pam.s',   to: 'fc.g2',     type: 'gate', via: [[40, 108], [45, 108]] },
    { from: 'pam.hh',  to: 'fc.g3',     type: 'gate', via: [[57, 108], [65, 108]] },
    { from: 'pam.acc', to: 'fc.g4',     type: 'gate', via: [[75, 108], [85, 108]] },
    { from: 'fc.e4',   to: 'mega.lvlcv',type: 'mod',  via: [[108, 108], [260, 108]] },
    { from: 'rample.out',to:'mega.in',  type: 'audio', d: 'M190,43 L213,43 L213,55 L235,55' },
    { from: 'squawk.out',to:'qvca.in',  type: 'audio', d: 'M228,163 L250,163 L250,155 L277,155' },
    { from: 'qvca.out', to: 'mega.in',  type: 'audio', via: [[337, 108], [235, 108]] },
    { from: 'mega.mix', to: 'dualfx.inl',type: 'audio' },
    { from: 'dualfx.outl',to:'lineout.inl',type:'audio', d: 'M398,55 L416,55 L416,65 L440,65' },
  ]} />
)

// ─── Experimental ─────────────────────────────────────────────────────────────

export const SELF_PATCHING_FEEDBACK = (
  <PatchDiagram
    note="Dashed = CV modulation · Solid = audio · Feedback loop arcs above Osiris"
    modules={place([
      { key: 'OSIRIS',    id: 'osiris',  x: 10,  y: 20,  jacks: [
        { id: 'fm',   label: 'FM',   type: 'cv-in', x: 15, y: 35 },
        { id: 'out',  label: 'OUT',  type: 'out',   x: 65, y: 35 },
      ]},
      { key: 'QUADRATT',  id: 'qratt',   x: 120, y: 20,  jacks: [
        { id: 'in',   label: 'IN',   type: 'in',  x: 12, y: 35 },
        { id: 'out',  label: 'OUT',  type: 'out', x: 73, y: 35 },
      ]},
      { key: 'QUAD_VCA',  id: 'qvca',    x: 230, y: 20,  jacks: [
        { id: 'in1',  label: 'IN1',  type: 'in',    x: 12, y: 35 },
        { id: 'in2',  label: 'IN2',  type: 'in',    x: 32, y: 35 },
        { id: 'cv',   label: 'CV',   type: 'cv-in', x: 55, y: 35 },
        { id: 'out',  label: 'OUT',  type: 'out',   x: 75, y: 35 },
      ]},
      { key: 'DUALFX',    id: 'dualfx',  x: 335, y: 20,  jacks: [
        { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
        { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
      ]},
      { key: 'LINEOUT',   id: 'lineout', x: 430, y: 20,  jacks: [
        { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
      ]},
      { key: 'MEGATANG',  id: 'mega',    x: 10,  y: 120, jacks: [
        { id: 'in',    label: 'IN',     type: 'in',    x: 15, y: 35 },
        { id: 'lvlcv', label: 'LVL CV', type: 'cv-in', x: 45, y: 35 },
        { id: 'mix',   label: 'MIX',    type: 'out',   x: 80, y: 35 },
      ]},
      { key: 'GENERATE3', id: 'gen3',    x: 130, y: 120, jacks: [
        { id: 'env',  label: 'ENV',  type: 'out', x: 48, y: 35 },
      ]},
      { key: 'QUAD_PLFO', id: 'plfo',    x: 250, y: 120, jacks: [
        { id: 'out',  label: 'OUT',  type: 'out', x: 47, y: 35 },
      ]},
    ])} wires={[
      { from: 'osiris.out', to: 'qratt.in',   type: 'audio' },
      // Feedback loop — arc drawn above the Osiris module
      { from: 'qratt.out',  to: 'osiris.fm',  type: 'audio', d: 'M193,55 C220,5 50,5 25,55' },
      { from: 'osiris.out', to: 'mega.in',    type: 'audio', d: 'M75,55 L105,55 L105,108 L25,108 L25,155' },
      { from: 'qratt.out',  to: 'qvca.in1',  type: 'audio' },
      { from: 'mega.mix',   to: 'qvca.in2',  type: 'audio', via: [[90, 108], [262, 108]] },
      { from: 'gen3.env',   to: 'qvca.cv',   type: 'mod',   via: [[178, 108], [285, 108]] },
      { from: 'plfo.out',   to: 'qvca.cv',   type: 'mod',   via: [[297, 108], [285, 108]] },
      { from: 'qvca.out',   to: 'dualfx.inl',type: 'audio' },
      { from: 'dualfx.outl',to: 'lineout.inl',type:'audio', d: 'M403,55 L420,55 L420,65 L445,65' },
    ]}
  />
)

export const MODULATION_CROSSFADE = (
  <PatchDiagram
    note="4 LFOs at different rates crossfade 4 sources · Dashed = CV · Solid = audio"
    modules={place([
      { key: 'QUAD_PLFO', id: 'plfo',    x: 10,  y: 20,  w: 100, highlight: true, jacks: [
        { id: 'out1', label: '0.05Hz', type: 'out', x: 13, y: 35 },
        { id: 'out2', label: '0.07Hz', type: 'out', x: 35, y: 35 },
        { id: 'out3', label: '0.11Hz', type: 'out', x: 58, y: 35 },
        { id: 'out4', label: '0.13Hz', type: 'out', x: 90, y: 35 },
      ]},
      { key: 'QUADRATT',  id: 'qratt',   x: 130, y: 20,  jacks: [
        { id: 'in1',  label: 'IN1',  type: 'in',  x: 12, y: 28 },
        { id: 'in2',  label: 'IN2',  type: 'in',  x: 33, y: 28 },
        { id: 'in3',  label: 'IN3',  type: 'in',  x: 54, y: 28 },
        { id: 'in4',  label: 'IN4',  type: 'in',  x: 70, y: 28 },
        { id: 'out1', label: '1',    type: 'out', x: 12, y: 54 },
        { id: 'out2', label: '2',    type: 'out', x: 33, y: 54 },
        { id: 'out3', label: '3',    type: 'out', x: 54, y: 54 },
        { id: 'out4', label: '4',    type: 'out', x: 70, y: 54 },
      ]},
      { key: 'MEGATANG',  id: 'mega',    x: 240, y: 20,  jacks: [
        { id: 'in1',  label: 'IN1',  type: 'in',    x: 15, y: 28 },
        { id: 'in2',  label: 'IN2',  type: 'in',    x: 32, y: 28 },
        { id: 'in3',  label: 'IN3',  type: 'in',    x: 50, y: 28 },
        { id: 'in4',  label: 'IN4',  type: 'in',    x: 68, y: 28 },
        { id: 'l1',   label: 'L1',   type: 'cv-in', x: 15, y: 54 },
        { id: 'l2',   label: 'L2',   type: 'cv-in', x: 32, y: 54 },
        { id: 'l3',   label: 'L3',   type: 'cv-in', x: 50, y: 54 },
        { id: 'l4',   label: 'L4',   type: 'cv-in', x: 68, y: 54 },
        { id: 'mix',  label: 'MIX',  type: 'out',   x: 82, y: 35 },
      ]},
      { key: 'DUALFX',    id: 'dualfx',  x: 358, y: 20,  jacks: [
        { id: 'inl',  label: 'INL',  type: 'in',  x: 12, y: 35 },
        { id: 'outl', label: 'OUTL', type: 'out', x: 68, y: 35 },
      ]},
      { key: 'LINEOUT',   id: 'lineout', x: 452, y: 20,  jacks: [
        { id: 'inl',  label: 'INL',  type: 'in',  x: 15, y: 45 },
      ]},
      { key: 'OSIRIS',    id: 'osiris',  x: 10,  y: 120, jacks: [
        { id: 'out',  label: 'OUT',  type: 'out', x: 40, y: 35 },
      ]},
      { key: 'RAMPLE',    id: 'rample',  x: 115, y: 120, jacks: [
        { id: 'out',  label: 'OUT',  type: 'out', x: 40, y: 35 },
      ]},
      { key: 'SQUAWK',    id: 'squawk',  x: 220, y: 120, jacks: [
        { id: 'out',  label: 'OUT',  type: 'out', x: 47, y: 40 },
      ]},
      { key: 'GENERATE3', id: 'gen3',    x: 340, y: 120, jacks: [
        { id: 'out',  label: 'AUDIO', type: 'out', x: 45, y: 35 },
      ]},
    ])} wires={[
      // LFOs → Quadratt attenuverters
      { from: 'plfo.out1', to: 'qratt.in1', type: 'mod', d: 'M23,55 L23,43 L142,43 L142,48' },
      { from: 'plfo.out2', to: 'qratt.in2', type: 'mod', d: 'M45,55 L45,38 L163,38 L163,48' },
      { from: 'plfo.out3', to: 'qratt.in3', type: 'mod', d: 'M68,55 L68,33 L184,33 L184,48' },
      { from: 'plfo.out4', to: 'qratt.in4', type: 'mod', d: 'M100,55 L100,28 L200,28 L200,48' },
      // Quadratt outputs → MEGA-TANG level CVs
      { from: 'qratt.out1', to: 'mega.l1', type: 'mod', d: 'M142,74 L142,95 L255,95 L255,74' },
      { from: 'qratt.out2', to: 'mega.l2', type: 'mod', d: 'M163,74 L163,98 L272,98 L272,74' },
      { from: 'qratt.out3', to: 'mega.l3', type: 'mod', d: 'M184,74 L184,102 L290,102 L290,74' },
      { from: 'qratt.out4', to: 'mega.l4', type: 'mod', d: 'M200,74 L200,106 L308,106 L308,74' },
      // Audio sources → MEGA-TANG inputs
      { from: 'osiris.out', to: 'mega.in1', type: 'audio', via: [[50, 108], [255, 108]] },
      { from: 'rample.out', to: 'mega.in2', type: 'audio', via: [[155, 108], [272, 108]] },
      { from: 'squawk.out', to: 'mega.in3', type: 'audio', via: [[267, 108], [290, 108]] },
      { from: 'gen3.out',   to: 'mega.in4', type: 'audio', via: [[385, 108], [308, 108]] },
      // Output chain
      { from: 'mega.mix',   to: 'dualfx.inl',  type: 'audio' },
      { from: 'dualfx.outl',to: 'lineout.inl', type: 'audio', d: 'M426,55 L444,55 L444,65 L467,65' },
    ]}
  />
)
