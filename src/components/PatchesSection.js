'use client'
import { useState, useRef } from 'react'
import PatchDiagram from './PatchDiagram'
import DiagramLightbox from './DiagramLightbox'
import {
  AMBIENT_TEXTURE_LOOP,
  ENVELOPE_CASCADE_SHIMMER,
  CLOCKED_WAVETABLE_MEDITATION,
  INDUSTRIAL_TECHNO_DRIVE,
  POLYRHYTHMIC_RAMPLE,
  DARK_MINIMAL_BASSLINE,
  BLOOM_FRACTAL_MELODY,
  THREE_SEQUENCER_POLYRHYTHM,
  DUAL_OSCILLATOR_LEAD,
  SAMPLE_SYNTH_UNISON,
  LPG_DRUM_MACHINE,
  FORECASTLE_PERCUSSION,
  SELF_PATCHING_FEEDBACK,
  MODULATION_CROSSFADE,
} from '../utils/patchDiagrams'

function PatchCard({ title, subtitle, tags, desc, steps, tip, variation, diagram }) {
  const [open, setOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const triggerRef = useRef(null)

  const openLightbox = () => setLightboxOpen(true)
  const closeLightbox = () => {
    setLightboxOpen(false)
    triggerRef.current?.focus()
  }

  // Normalize HTML string diagrams to React elements for DiagramLightbox
  const diagramEl = diagram
    ? (typeof diagram === 'string'
        ? <div dangerouslySetInnerHTML={{ __html: diagram }} />
        : diagram)
    : null
  return (
    <div className="patch-card">
      <div
        className="patch-header"
        onClick={() => setOpen(o => !o)}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <div>
          <div className="patch-title">{title}</div>
          {subtitle && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{subtitle}</div>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div className="patch-tags">
            {tags.map(t => <span key={t} className={`tag tag-${t}`}>{t}</span>)}
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1, flexShrink: 0 }}>
            {open ? '▲' : '▼'}
          </span>
        </div>
      </div>
      {open && <div className="patch-body">
        <p className="patch-desc">{desc}</p>
        {diagramEl && (
          <>
            <div
              className="patch-diagram patch-diagram-clickable"
              onClick={openLightbox}
              role="button"
              tabIndex={0}
              aria-label="Expand patch diagram"
              ref={triggerRef}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openLightbox() }}
            >
              {diagramEl}
            </div>
            {lightboxOpen && (
              <DiagramLightbox diagram={diagramEl} title={title} onClose={closeLightbox} />
            )}
          </>
        )}
        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} className="step"><div className="step-text" dangerouslySetInnerHTML={{ __html: s }} /></div>
          ))}
        </div>
        {tip && (
          <div className="tip-box">
            <strong>🎛 Tip</strong>
            {tip}
          </div>
        )}
        {variation && (
          <div className="tip-box variation">
            <strong>✦ Variation</strong>
            <span dangerouslySetInnerHTML={{ __html: variation }} />
          </div>
        )}
      </div>}
    </div>
  )
}

const AMBIENT_PATCHES = [
  {
    title: 'Slow Morphing Drone',
    subtitle: 'A layered, breathing drone that evolves over time',
    tags: ['ambient', 'drone', 'beginner'],
    desc: 'Two oscillators tuned a 5th apart, slowly modulated by LFOs, mixed through MEGA-TANG and sent through reverb. The A-101-2v LPG provides organic filtering as modulation sweeps through it.',
    diagram: <PatchDiagram
      note="Dashed = modulation CV · Solid = audio signal · Green = gate/trigger"
      modules={[
        { id: 'plfo', label: 'QUAD PLFO', x: 10, y: 20, w: 90, h: 70, highlight: true, jacks: [
          { id: 'out1', label: 'OUT1', type: 'out',  x: 18, y: 38 },
          { id: 'out2', label: 'OUT2', type: 'out',  x: 38, y: 38 },
          { id: 'out3', label: 'OUT3', type: 'out',  x: 58, y: 38 },
          { id: 'out4', label: 'OUT4', type: 'out',  x: 78, y: 38 },
        ]},
        { id: 'osiris', label: 'OSIRIS', x: 130, y: 20, w: 90, h: 70, highlight: true, jacks: [
          { id: 'voct',  label: 'V/OCT', type: 'cv-in', x: 18, y: 28 },
          { id: 'morph', label: 'MORPH', type: 'cv-in', x: 38, y: 28 },
          { id: 'out',   label: 'OUT',   type: 'out',   x: 63, y: 28 },
        ]},
        { id: 'fc', label: 'FORECASTLE', x: 130, y: 120, w: 90, h: 70, highlight: true, jacks: [
          { id: 'gate1', label: 'GATE1',  type: 'gate-in', x: 15, y: 43 },
          { id: 'atkcv', label: 'ATK CV', type: 'cv-in',   x: 38, y: 43 },
          { id: 'env1',  label: 'ENV1',   type: 'out',     x: 80, y: 43 },
        ]},
        { id: 'lpg', label: 'A-101-2v', sublabel: 'LPG', x: 260, y: 20, w: 80, h: 70, highlight: true, jacks: [
          { id: 'in',   label: 'IN',   type: 'in',    x: 10, y: 45 },
          { id: 'ctrl', label: 'CTRL', type: 'cv-in', x: 30, y: 45 },
          { id: 'out',  label: 'OUT',  type: 'out',   x: 70, y: 45 },
        ]},
        { id: 'mega', label: 'MEGA-TANG', x: 380, y: 20, w: 90, h: 70, highlight: true, jacks: [
          { id: 'in1', label: 'IN1', type: 'in',  x: 15, y: 35 },
          { id: 'mix', label: 'MIX', type: 'out', x: 82, y: 35 },
        ]},
        { id: 'dualfx', label: 'DUAL FX', x: 510, y: 20, w: 80, h: 70, highlight: true, jacks: [
          { id: 'inl',  label: 'INL',  type: 'in',  x: 10, y: 45 },
          { id: 'outl', label: 'OUTL', type: 'out', x: 60, y: 45 },
        ]},
        { id: 'lineout', label: 'LINE', sublabel: 'OUT 1U', x: 625, y: 20, w: 60, h: 70, jacks: [
          { id: 'inl', label: 'INL', type: 'in', x: 13, y: 45 },
        ]},
        { id: 'pams', label: "PAMELA'S", x: 260, y: 120, w: 80, h: 70, jacks: [
          { id: 'div64', label: '÷64', type: 'gate-out', x: 12, y: 38 },
        ]},
      ]}
      wires={[
        { from: 'plfo.out1', to: 'osiris.voct',  type: 'mod',   d: 'M28,53 C28,100 148,100 148,43' },
        { from: 'plfo.out2', to: 'osiris.morph', type: 'mod',   d: 'M48,53 C48,110 168,110 168,43' },
        { from: 'plfo.out3', to: 'fc.atkcv',     type: 'mod',   d: 'M68,53 C68,120 168,120 168,158' },
        { from: 'pams.div64', to: 'fc.gate1',    type: 'gate',  d: 'M272,153 L245,153 L245,163 L150,163' },
        { from: 'fc.env1',   to: 'lpg.ctrl',     type: 'mod',   d: 'M215,163 L245,163 L245,80 L285,80 L285,70' },
        { from: 'osiris.out', to: 'lpg.in',      type: 'audio', d: 'M198,43 L250,43 L250,65 L265,65' },
        { from: 'lpg.out',   to: 'mega.in1',     type: 'audio', via: [[375, 65], [375, 55]] },
        { from: 'mega.mix',  to: 'dualfx.inl',   type: 'audio', via: [[490, 55], [490, 65]] },
        { from: 'dualfx.outl', to: 'lineout.inl', type: 'audio', via: [[600, 65]] },
      ]}
    />,
    steps: [
      'Set <span class="module-ref">Quad PLFO</span> to very slow rates (0.1–0.01 Hz). These will be your gentle modulation sources throughout.',
      'Patch <span class="module-ref">Quad PLFO</span> <span class="jack-ref">OUT 1</span> → <span class="module-ref">Quadratt</span> → <span class="module-ref">Osiris</span> <span class="jack-ref">V/OCT</span>. Attenuate heavily so pitch drifts only ±0.2 semitones.',
      'Patch <span class="module-ref">Quad PLFO</span> <span class="jack-ref">OUT 2</span> → <span class="module-ref">Osiris</span> <span class="jack-ref">MORPH</span> CV. This slowly cycles through wavetable positions, animating the timbre over time.',
      'Set <span class="module-ref">ForeCastle</span> channel 1 to AR mode with a very long attack (2s) and long decay. Patch <span class="module-ref">Pamela\'s PRO</span> (÷64 gate) → <span class="module-ref">ForeCastle</span> GATE 1.',
      'Patch <span class="module-ref">Quad PLFO</span> OUT 3 → <span class="module-ref">ForeCastle</span> ATK CV input. The attack time now varies with the LFO — each drone swell takes a slightly different amount of time to bloom.',
      'Patch <span class="module-ref">ForeCastle</span> ENV 1 out → <span class="module-ref">A-101-2v LPG</span> CTRL input. Patch <span class="module-ref">Osiris</span> audio out → LPG audio in.',
      'Patch LPG audio out → <span class="module-ref">MEGA-TANG</span> channel 1. Use ForeCastle channel 2 (CYCLE mode) → MEGA-TANG Level CV 1 for additional breathing layer.',
      'Send <span class="module-ref">MEGA-TANG</span> stereo mix out → <span class="module-ref">Dual FX</span> set to a large hall reverb. Output → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: 'ForeCastle in CYCLE mode becomes an LFO. With attack and decay both at maximum (~2s each), you get a 4-second triangle LFO — perfect for drone work. You now have 4 of these plus 3 from Generate 3 plus 4 from Quad PLFO: that\'s 11 independent modulation sources simultaneously.',
    variation: 'Patch <span style="color:var(--accent3)">ForeCastle</span> End-of-Cycle from channel 1 → Gate input of channel 2. Channel 2 only fires after channel 1 completes — creating a long, multi-stage modulation sequence that can drive the LPG through two distinct phases before repeating.',
  },
  {
    title: 'Ambient Texture Loop',
    diagram: AMBIENT_TEXTURE_LOOP,
    subtitle: 'Layered samples + oscillator, triggered slowly',
    tags: ['ambient', 'intermediate'],
    desc: 'Use Rample to play atmospheric texture samples triggered at slow, irregular intervals by Pamela\'s euclidean outputs. Layer with Osiris for tonal grounding.',
    steps: [
      'In <span class="module-ref">Pamela\'s PRO Workout</span>, configure two outputs: one euclidean pattern (e.g. 3 hits over 16 steps at slow BPM), one slow clock (÷16 of a 50 BPM master).',
      'Patch the euclidean output → <span class="module-ref">Rample</span> trig input for channel 1. Load a texture/pad sample. Set decay long.',
      'Patch the ÷16 clock → <span class="module-ref">Rample</span> channel 2 trigger. Load a different texture sample. This creates two asynchronous layers.',
      'Patch <span class="module-ref">Clep Diaz</span> (clocked by another Pamela\'s output) → <span class="module-ref">Rample</span> START CV. This randomly shifts the sample playback start point.',
      'Mix Rample stereo outputs + Osiris through <span class="module-ref">Quad VCA</span>. Use a slow LFO from Quad PLFO to modulate VCA level for each channel independently.',
      'Send the mix → <span class="module-ref">Dual FX</span> (reverb + delay) → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: "In Pamela's PRO Workout, add probability to the trigger outputs (50–70%). This makes texture hits appear and disappear unpredictably, creating an organic, non-mechanical feel.",
  },
  {
    title: 'Envelope Cascade Shimmer',
    diagram: ENVELOPE_CASCADE_SHIMMER,
    subtitle: 'ForeCastle chain creates a cascading, harp-like bloom',
    tags: ['ambient', 'melodic', 'intermediate'],
    desc: "Use ForeCastle's End-of-Cycle chaining to fire four envelopes in sequence from a single trigger. Each envelope modulates a different parameter — the result is a rich, multi-layered bloom that unfolds over several seconds.",
    steps: [
      'Patch a very slow trigger from <span class="module-ref">Pamela\'s PRO</span> (÷32 or ÷64) → <span class="module-ref">ForeCastle</span> GATE 1. Set channel 1 to AD mode, attack ~500ms, decay ~1s.',
      'Patch <span class="module-ref">ForeCastle</span> End-of-Cycle 1 → GATE 2. Channel 2: attack ~300ms, decay ~800ms. Patch End-of-Cycle 2 → GATE 3. Channel 3: attack ~200ms, decay ~600ms.',
      'Route the four ENV outputs: ENV 1 → <span class="module-ref">A-101-2v LPG</span> CTRL. ENV 2 → <span class="module-ref">Osiris</span> MORPH CV through Quadratt. ENV 3 → <span class="module-ref">Squawk Dirty To Me</span> CUTOFF CV. ENV 4 → <span class="module-ref">MEGA-TANG</span> Level CV.',
      'Patch <span class="module-ref">Osiris</span> audio → LPG audio in. LPG out → Squawk Dirty → <span class="module-ref">MEGA-TANG</span> channel 1. Use <span class="module-ref">Steppy 1U</span> gates to trigger ForeCastle at occasional steps, or program a sparse gate pattern on a second Steppy track to trigger random note changes via <span class="module-ref">Mimetic Digitalis</span> CV → Osiris V/OCT.',
      'MEGA-TANG stereo mix → <span class="module-ref">Dual FX</span> (long reverb with high decay time). Out → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: 'Try patching ForeCastle ENV 2 output back into its own DCY CV input (through Quadratt, attenuated). The envelope shortens itself as it rises — a natural, logarithmic shape that sounds more acoustic than linear decay.',
  },
  {
    title: 'Clocked Wavetable Meditation',
    diagram: CLOCKED_WAVETABLE_MEDITATION,
    subtitle: 'Slow Mimetic sequence + morphing Osiris + long reverb',
    tags: ['ambient', 'generative', 'beginner'],
    desc: 'A beginner-friendly ambient patch: Mimetic Digitalis provides slow, programmed pitch changes while ForeCastle shapes each note with a long, lyrical envelope. The key is restraint — few notes, long reverb, gentle movement.',
    steps: [
      'Set <span class="module-ref">Pamela\'s PRO</span> to a very slow BPM (40–60). Configure one output as a ÷8 clock.',
      'Patch the ÷8 clock → <span class="module-ref">Mimetic Digitalis</span> clock. Program a slow, 8-step pitch sequence (try a pentatonic scale). Patch Mimetic CH1 → <span class="module-ref">Osiris</span> V/OCT.',
      'Patch the same ÷8 clock → <span class="module-ref">ForeCastle</span> GATE 1. Set to AR mode, attack ~2s, decay ~3s. ForeCastle ENV 1 → <span class="module-ref">Quad VCA</span> CV. Osiris audio → Quad VCA audio in.',
      'Patch <span class="module-ref">Mimetic Digitalis</span> CH2 (a separate curve sequence) → <span class="module-ref">Osiris</span> MORPH CV. The wavetable position changes with each step.',
      'Quad VCA out → <span class="module-ref">Dual FX</span> with reverb decay at maximum and dry/wet fully wet. Out → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: "Add Pamela's PRO probability (~60%) to the ÷8 gate output. Some steps stay silent, creating rests that make the notes that do sound feel intentional and meaningful.",
  },
]

const TECHNO_PATCHES = [
  {
    title: 'Industrial Techno Drive',
    diagram: INDUSTRIAL_TECHNO_DRIVE,
    subtitle: 'Hard kick + bass sequencing mixed through MEGA-TANG',
    tags: ['techno', 'rhythmic', 'intermediate'],
    desc: 'Rample drives the kick drum, Osiris handles the bass sequence via Steppy 1U, and MEGA-TANG mixes and pans all voices into a tight stereo output. Squawk Dirty To Me filters the bass with resonant dirt.',
    steps: [
      'Set <span class="module-ref">Pamela\'s PRO Workout</span> to 130–140 BPM. Configure: OUT 1 = master clock (16th notes), OUT 2 = ÷4 (quarter notes), OUT 3 = kick pattern.',
      'Patch Pamela\'s clock → <span class="module-ref">Steppy 1U</span> clock and <span class="module-ref">Mimetic Digitalis</span> clock. Program a bass gate pattern on Steppy (8–16 steps). Program matching pitch values on Mimetic Digitalis CH1. Patch Steppy GATE 1 → <span class="module-ref">Generate 3</span> trigger, Mimetic Digitalis CH1 → <span class="module-ref">Osiris</span> V/OCT.',
      '<span class="module-ref">Generate 3</span>: set a short sharp envelope (fast attack, medium decay, no sustain). Patch ENV output → <span class="module-ref">Quad VCA</span> CV.',
      'Patch <span class="module-ref">Osiris</span> audio out → <span class="module-ref">Squawk Dirty To Me</span> filter input, then out → <span class="module-ref">MEGA-TANG</span> channel 1.',
      'Patch Pamela\'s kick output → <span class="module-ref">Rample</span> T1 and T2. Load kick and snare. Mix Rample output into Quad VCA channel 2.',
      'Quad VCA mixed output → <span class="module-ref">Dual FX</span> (short, dark reverb) → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: 'For the classic acid-adjacent sound, patch Generate 3\'s ENV output → Squawk Dirty To Me\'s CUTOFF CV. As each note hits, the filter opens and closes — the iconic filter envelope sweep that defines this style.',
  },
  {
    title: 'Polyrhythmic Rample Workout',
    diagram: POLYRHYTHMIC_RAMPLE,
    subtitle: '4 drum channels at different euclidean densities',
    tags: ['techno', 'rhythmic', 'beginner'],
    desc: 'A focused percussion-only patch that exploits the full breadth of Pamela\'s rhythmic capabilities. Four Rample channels each receive a different euclidean or probabilistic gate pattern — no melodic content, just interlocking polyrhythmic groove.',
    steps: [
      'Set <span class="module-ref">Pamela\'s PRO</span> to 128–135 BPM. Configure 4 outputs: kick (4/4 euclidean, 90% probability), snare (2/4 euclidean, 85%), hi-hat (9/16 euclidean), perc (random, 40%).',
      'Patch OUT 1–4 directly → <span class="module-ref">Rample</span> T1–T4. Load kick, snare, closed hat, shaker to channels 1–4.',
      'Patch a 5th Pamela\'s output (÷16 slow gate, 30% probability) → <span class="module-ref">ForeCastle</span> GATE 1. ForeCastle ENV 1 → <span class="module-ref">MEGA-TANG</span> Level CV for a random accent swell.',
      'Patch <span class="module-ref">Clep Diaz</span> (clocked by Pamela\'s ÷4) → <span class="module-ref">Rample</span> SPEED CV for channel 3 (hi-hat). Subtle pitch variation makes it feel human.',
      'Rample stereo mix → <span class="module-ref">MEGA-TANG</span> (use pan controls for spatial placement) → <span class="module-ref">Dual FX</span> (tight room reverb) → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: "Once the pattern is running, try live-tweaking the Pamela's euclidean settings in real time — increasing the hi-hat hits from 9 to 13, or shifting the kick pattern offset. This is Pamela's as a live performance instrument.",
  },
  {
    title: 'Dark Minimal Bassline',
    diagram: DARK_MINIMAL_BASSLINE,
    subtitle: 'Steppy + Squawk Dirty + ForeCastle pitch-drop envelope',
    tags: ['techno', 'melodic', 'intermediate'],
    desc: 'A raw, minimalist bass patch designed for the dark end of the techno spectrum. Sparse Steppy gate patterns, heavy Squawk Dirty filter resonance, and ForeCastle\'s pitch-drop envelope give it an aggressive, sub-heavy character.',
    steps: [
      'Program <span class="module-ref">Steppy 1U</span> with a sparse gate pattern — only 3–4 active steps over 16. Patch the clock to both Steppy and <span class="module-ref">Mimetic Digitalis</span>. Program Mimetic Digitalis CH1 with low pitches (C1–C2 range, 3–4 values). Patch Steppy GATE 1 → <span class="module-ref">ForeCastle</span> GATE 1, Mimetic Digitalis CH1 → <span class="module-ref">Osiris</span> V/OCT.',
      '<span class="module-ref">ForeCastle</span> channel 1: AD mode, instant attack, medium decay (~300ms). ENV 1 → <span class="module-ref">Osiris</span> V/OCT through Quadratt (attenuate to ~0.3V). The note starts sharp and falls — a pitch-drop transient.',
      '<span class="module-ref">ForeCastle</span> channel 2: AD mode, fast attack, long decay (~600ms). ENV 2 → <span class="module-ref">Quad VCA</span> CV. This is the amplitude envelope.',
      'Patch <span class="module-ref">Osiris</span> audio → <span class="module-ref">Quad VCA</span> → <span class="module-ref">Squawk Dirty To Me</span>. Set filter to low cutoff with high resonance (~70%). ForeCastle channel 3 with fast envelope → Squawk Dirty CUTOFF CV.',
      'Squawk Dirty out → <span class="module-ref">MEGA-TANG</span>. Add <span class="module-ref">Rample</span> kick and hi-hat. MEGA-TANG stereo mix → <span class="module-ref">Dual FX</span> (minimal reverb — keep this dry) → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: "For maximum darkness, set Squawk Dirty's resonance just below self-oscillation. You'll hear the filter \"ring\" slightly on each note — a dissonant, industrial character that makes the bassline feel more alive.",
  },
]

const GENERATIVE_PATCHES = [
  {
    title: 'Bloom Fractal Melody',
    diagram: BLOOM_FRACTAL_MELODY,
    subtitle: "Self-evolving melodic sequence using Bloom's mutation engine",
    tags: ['generative', 'melodic', 'intermediate'],
    desc: 'Bloom generates evolving melodic variations from a seed pattern. Clep Diaz adds additional random pitch events. The result is a melody that sounds composed but never repeats.',
    steps: [
      'Patch <span class="module-ref">Pamela\'s PRO</span> clock output → <span class="module-ref">Bloom</span> clock input. Set Bloom to an 8-step sequence in a mode you like (try Dorian or Pentatonic).',
      'Set <span class="module-ref">Bloom</span> BRANCHES to 3–4 and LENGTH MUTATION slightly active. Patch Bloom CV → <span class="module-ref">Buff Mult 1U</span>.',
      'Send <span class="module-ref">Buff Mult</span> copy 1 → <span class="module-ref">Osiris</span> V/OCT. Patch <span class="module-ref">Bloom</span> GATE → <span class="module-ref">ForeCastle</span> GATE 1.',
      'Patch <span class="module-ref">ForeCastle</span> ENV 1 out → <span class="module-ref">A-101-2v LPG</span> CTRL input. LPG acts as an organic amplitude/filter gate per note. Patch <span class="module-ref">Osiris</span> audio → LPG audio in.',
      'Set <span class="module-ref">ForeCastle</span> channel 2 to CYCLE mode with a medium-slow rate. Patch its ENV output → <span class="module-ref">Quad PLFO</span> rate CV for one LFO.',
      'Osiris audio → LPG → <span class="module-ref">Dual FX</span> (lush reverb/delay) → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: "Bloom's MUTATION knob is the key control for how \"wild\" the generative variation gets. At low settings, you get predictable loops with occasional variation. Find a point where it still feels musical.",
  },
  {
    title: 'Three-Sequencer Polyrhythm',
    diagram: THREE_SEQUENCER_POLYRHYTHM,
    subtitle: 'Bloom, Steppy, and Mimetic D. at coprime lengths',
    tags: ['generative', 'rhythmic', 'advanced'],
    desc: 'Run Bloom at 12 steps, Steppy at 8 steps, and Mimetic Digitalis at 9 steps — all from the same clock. Because these lengths share no common factor, the sequences drift in and out of phase for a very long time before realigning.',
    steps: [
      'Set <span class="module-ref">Pamela\'s PRO</span> to a moderate tempo (90–110 BPM), 16th-note clock out. Mult the clock (via <span class="module-ref">Buff Mult 1U</span>) to all three sequencers.',
      'Set <span class="module-ref">Bloom</span> to 12 steps in a pentatonic scale. Bloom CV → <span class="module-ref">Osiris</span> V/OCT. Bloom GATE → <span class="module-ref">ForeCastle</span> GATE 1.',
      'Set <span class="module-ref">Steppy 1U</span> to 8 steps with a syncopated gate pattern. Steppy GATE 1 → <span class="module-ref">Rample</span> T1. Steppy GATE 2 → a second drum voice on Rample. Bloom CV already handles Osiris V/OCT.',
      'Set <span class="module-ref">Mimetic Digitalis</span> to 9 steps. Program CH1 as a slow filter curve, CH2 as volume automation. Route: CH1 → <span class="module-ref">Squawk Dirty</span> CUTOFF, CH2 → <span class="module-ref">MEGA-TANG</span> Level CV.',
      'ForeCastle ENV 1 → <span class="module-ref">Quad VCA</span> CV. Osiris audio → Quad VCA → Squawk Dirty → MEGA-TANG. Rample mix → MEGA-TANG. MEGA-TANG → Dual FX → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: 'The LCM of 8, 9, and 12 is 72 steps — at 90 BPM 16th notes, that\'s 48 seconds before the full pattern repeats. In practice, Bloom\'s mutation means it never truly repeats at all.',
  },
]

const MELODIC_PATCHES = [
  {
    title: 'Dual Oscillator Lead Voice',
    diagram: DUAL_OSCILLATOR_LEAD,
    subtitle: 'Classic dual-VCO voice with filter and envelope',
    tags: ['melodic', 'beginner'],
    desc: 'The most classic synthesizer voice: two oscillators, an envelope, a filter, and reverb. Your system has all the pieces for a powerful, expressive lead instrument.',
    steps: [
      'Connect MIDI keyboard/controller → <span class="module-ref">Univer Inter</span> via USB/MIDI. This will output CV (pitch) and Gate signals from your keyboard playing.',
      'Patch <span class="module-ref">Univer Inter</span> CV out → <span class="module-ref">Osiris</span> V/OCT. Patch GATE → <span class="module-ref">ForeCastle</span> GATE 1 and 2 simultaneously (via Buff Mult). Run two independent envelopes — one for amplitude, one for filter.',
      'Patch <span class="module-ref">ForeCastle</span> ENV 1 out → <span class="module-ref">Quad VCA</span> CV. Patch ENV 2 out → <span class="module-ref">Squawk Dirty To Me</span> CUTOFF CV. Set different attack and decay times on each.',
      'Patch <span class="module-ref">Osiris</span> audio out → <span class="module-ref">Quad VCA</span> audio in. Set ForeCastle channel 1 to AD mode: fast attack, medium decay for a classic plucky lead sound.',
      'Quad VCA out → <span class="module-ref">Squawk Dirty To Me</span> filter. ForeCastle ENV 2 → filter CUTOFF CV through Quadratt.',
      'Squawk Dirty output → <span class="module-ref">Dual FX</span> (short reverb + subtle delay) → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: 'For richer expression: patch Univer Inter MOD wheel output → Osiris MORPH CV through Quadratt. As you push the mod wheel, the wavetable morphs.',
  },
  {
    title: 'Sample + Synth Unison',
    diagram: SAMPLE_SYNTH_UNISON,
    subtitle: 'Rample pitched sample layered with Osiris for hybrid timbre',
    tags: ['melodic', 'intermediate'],
    desc: 'Layer a pitched sample from Rample with Osiris in unison. When both track the same pitch CV and are detuned slightly, the result is a rich hybrid sound that blends the character of a real instrument with the flexibility of a synthesizer.',
    steps: [
      'Load a pitched melodic sample to <span class="module-ref">Rample</span> channel 1 — a piano note, guitar pluck, mallet hit, or bowed string works best.',
      'Patch <span class="module-ref">Bloom</span> CV out → <span class="module-ref">Buff Mult 1U</span>. Send copy 1 → <span class="module-ref">Osiris</span> V/OCT. Copy 2 → <span class="module-ref">Rample</span> channel 1 PITCH CV.',
      'Detune <span class="module-ref">Osiris</span> by +7–12 cents relative to the sample. This creates a natural chorus-like beating — neither dominates, and the combined timbre is unlike either alone.',
      'Patch <span class="module-ref">Bloom</span> GATE → <span class="module-ref">ForeCastle</span> GATE 1. Set channel 1 to AR mode. ForeCastle ENV 1 → <span class="module-ref">Quad VCA</span> CV.',
      'Mix Rample channel 1 audio and Quad VCA output into <span class="module-ref">MEGA-TANG</span> channels 1 and 2. Balance at roughly 60% sample, 40% synth. → <span class="module-ref">Dual FX</span> → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: 'Patch a slow Quad PLFO output → Rample SPEED CV through Quadratt (very attenuated). The sample playback speed subtly varies, causing micro-pitch drift that reinforces the chorusing effect.',
  },
]

const PERCUSSIVE_PATCHES = [
  {
    title: 'LPG Drum Machine',
    diagram: LPG_DRUM_MACHINE,
    subtitle: 'Organic percussion using the A-101-2v Low Pass Gate',
    tags: ['rhythmic', 'intermediate'],
    desc: 'The A-101-2v LPG responds to triggers like a traditional acoustic instrument — no click, organic decay. Use it to make synthesized percussion that breathes naturally.',
    steps: [
      'Patch <span class="module-ref">Osiris</span> audio into <span class="module-ref">A-101-2v LPG</span> audio in. Tune Osiris low (bass range), set it to a sine or triangle wave.',
      'Patch a trigger from <span class="module-ref">Pamela\'s</span> (e.g. kick pattern) → <span class="module-ref">A-101-2v</span> trigger/control input. The LPG will "ping" open and naturally close — this sounds like a kick drum or tom.',
      'Patch the same trigger → <span class="module-ref">ForeCastle</span> GATE 1. Set channel 1 to AD mode with very fast attack and short decay. Patch ForeCastle ENV 1 → <span class="module-ref">Osiris</span> V/OCT through Quadratt for a classic kick pitch-drop transient.',
      'For a second percussion voice: patch <span class="module-ref">Osiris</span> (high pitch, noise or saw) → <span class="module-ref">Squawk Dirty To Me</span> with high resonance and low cutoff → short trigger from Pamela\'s.',
      'Mix both percussion voices + <span class="module-ref">Rample</span> (for hat/clap samples) via <span class="module-ref">Quad VCA</span>. Reverb from <span class="module-ref">Dual FX</span> → <span class="module-ref">Stereo Line Out</span>.',
    ],
    tip: 'The Doepfer A-101-2v is specifically a Vactrol-based LPG. Vactrol response is naturally slower than a transistor-based gate — this is a feature, not a bug. It gives all percussion a slightly "wet" natural quality like a hand drum.',
  },
  {
    title: 'ForeCastle Envelope Percussion',
    diagram: FORECASTLE_PERCUSSION,
    subtitle: 'All four ForeCastle channels driving four distinct drum voices',
    tags: ['rhythmic', 'intermediate'],
    desc: "Exploit ForeCastle's four independent channels to give each Rample channel its own custom envelope — controlling volume dynamics, pitch transients, and filter sweeps individually.",
    steps: [
      'Configure <span class="module-ref">Pamela\'s PRO</span> with 4 distinct rhythmic outputs: kick (4/4), snare (2+4), hi-hat (16th euclidean), slow accent (÷4, 40% probability). Patch each → <span class="module-ref">Rample</span> T1–T4 and simultaneously → <span class="module-ref">ForeCastle</span> GATE 1–4.',
      'ForeCastle channel 1 (kick): very fast attack, long decay (~500ms). ENV 1 → <span class="module-ref">Osiris</span> V/OCT through Quadratt — small pitch drop (0.3V) for kick depth enhancement.',
      'ForeCastle channel 2 (snare): fast attack, medium decay (~200ms). ENV 2 → <span class="module-ref">Squawk Dirty To Me</span> CUTOFF CV. Noise from Osiris → Squawk Dirty → synthesized snare layer.',
      'ForeCastle channel 3 (hi-hat): instant attack, very short decay (~50ms). ENV 3 → <span class="module-ref">Quad VCA</span> CV channel 3 for precise, punchy hat amplitude control.',
      'ForeCastle channel 4 (accent): slow attack (~200ms), long decay (~1s). ENV 4 → <span class="module-ref">MEGA-TANG</span> Level CV on the master bus. All audio → MEGA-TANG → <span class="module-ref">Dual FX</span> → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: "ForeCastle's global ATK CV and DCY CV inputs affect all four channels simultaneously. Patch a slow Quad PLFO output → global DCY CV to gradually lengthen all drum decay times over time.",
  },
]

const EXPERIMENTAL_PATCHES = [
  {
    title: 'Self-Patching Feedback Loop',
    diagram: SELF_PATCHING_FEEDBACK,
    subtitle: 'Audio-rate modulation and controlled chaos',
    tags: ['experimental', 'advanced'],
    desc: 'Route audio outputs back into CV inputs to create self-modulating systems. At audio rate, these create timbral complexity; at slow rates, they create unexpected emergent behavior.',
    steps: [
      '<span style="background:rgba(255,107,53,0.1);border-left:2px solid var(--accent2);padding:4px 8px;display:block;font-size:12px;color:var(--accent2)">⚠ Note: Feedback patches can get loud quickly. Keep your Quad VCA CV and master volume at low levels when first trying these patches.</span>',
      'Start simple: <span class="module-ref">Osiris</span> audio out → <span class="module-ref">Quadratt</span> (attenuate heavily, to ~10%) → <span class="module-ref">Osiris</span> FM input. The oscillator now modulates itself — this is FM synthesis. Change Quadratt amount to vary FM depth.',
      'Use <span class="module-ref">MEGA-TANG</span>\'s Level CV inputs to control feedback amplitude — patch a slowly cycling <span class="module-ref">Generate 3</span> envelope into a Level CV input so feedback swells in and out.',
      'Control the chaos: Use <span class="module-ref">Quad PLFO</span> to slowly modulate the Quadratt attenuverter position. The feedback depth becomes a modulated parameter itself.',
      'Gate the result: Patch the feedback chain\'s audio through <span class="module-ref">Quad VCA</span>, controlled by <span class="module-ref">Generate 3</span> envelopes triggered by <span class="module-ref">Steppy</span>. Feedback sounds become rhythmic events rather than constant noise.',
      'Add <span class="module-ref">Dual FX</span> with long reverb/freeze setting on the feedback chain output.',
    ],
    tip: 'For feedback FM, patch Osiris audio out → Quadratt (attenuate to ~5–10%) → Osiris FM input. The oscillator modulates itself. Use MEGA-TANG\'s Level CV on the final mixed signal to gate and shape the feedback bursts rhythmically.',
  },
  {
    title: 'Modulation Crossfade Network',
    diagram: MODULATION_CROSSFADE,
    subtitle: 'MEGA-TANG Level CVs create automated mix morphing',
    tags: ['experimental', 'ambient', 'intermediate'],
    desc: "MEGA-TANG's four Level CV inputs let you automate the relative balance between four audio sources simultaneously. By driving each with an out-of-phase LFO, you create a constantly morphing mix where different elements drift in and out.",
    steps: [
      'Prepare four audio sources: CH1 = <span class="module-ref">Osiris</span> (melodic). CH2 = <span class="module-ref">Rample</span> texture sample. CH3 = <span class="module-ref">Squawk Dirty</span> self-oscillating. CH4 = <span class="module-ref">Generate 3</span> in audio-rate cycle mode.',
      'Patch all four into <span class="module-ref">MEGA-TANG</span> channels 1–4 audio inputs. Turn all level knobs to zero — CV will control all amplitude.',
      'Set <span class="module-ref">Quad PLFO</span> to 4 outputs at different rates (e.g. 0.05, 0.07, 0.11, 0.13 Hz). Patch each → <span class="module-ref">Quadratt</span> (attenuate to 0–5V positive range), then → MEGA-TANG Level CV 1–4.',
      'Because each LFO runs at a different speed, no two channels peak at the same time. The mix constantly shifts emphasis between sources — sometimes only Osiris is heard, sometimes the texture dominates.',
      'MEGA-TANG stereo mix (use pan controls to spread sources spatially) → <span class="module-ref">Dual FX</span> (hall reverb, high mix) → <span class="module-ref">Stereo Line Out 1U</span>.',
    ],
    tip: "Replace the Quad PLFO sources with ForeCastle channels in CYCLE mode — each with manually set attack and decay times. ForeCastle's asymmetric waveform shapes create crossfade curves that feel more organic than a smooth sine wave.",
  },
]

const TABS = [
  { id: 'ambient', label: 'Ambient / Drone', patches: AMBIENT_PATCHES },
  { id: 'techno', label: 'Techno / Industrial', patches: TECHNO_PATCHES },
  { id: 'generative', label: 'Generative / Algorithmic', patches: GENERATIVE_PATCHES },
  { id: 'melodic', label: 'Melodic / Harmonic', patches: MELODIC_PATCHES },
  { id: 'percussive', label: 'Percussive / Rhythmic', patches: PERCUSSIVE_PATCHES },
  { id: 'experimental', label: 'Experimental', patches: EXPERIMENTAL_PATCHES },
]

export default function PatchesSection() {
  const [activeTab, setActiveTab] = useState('ambient')

  const currentTab = TABS.find(t => t.id === activeTab)

  return (
    <section id="patches">
      <h2>PATCH <span className="accent">IDEAS</span></h2>
      <p className="section-intro">Organized by musical theme. Each patch includes a signal flow diagram, step-by-step instructions, and variation ideas.</p>

      <div className="tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {currentTab.patches.map((patch, i) => (
          <PatchCard key={i} {...patch} />
        ))}
      </div>
    </section>
  )
}
