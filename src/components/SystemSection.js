'use client'

function scrollToModule(refId) {
  const target = document.getElementById(refId)
  if (!target) return
  const offset = target.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top: offset, behavior: 'smooth' })
  target.style.transition = 'border-color 0.1s, box-shadow 0.1s'
  target.style.borderColor = 'var(--accent)'
  target.style.boxShadow = '0 0 0 2px rgba(232,255,64,0.3)'
  setTimeout(() => {
    target.style.borderColor = ''
    target.style.boxShadow = ''
  }, 1800)
}

function RackModule({ flex, title, type, label, refId }) {
  return (
    <div
      className="rack-module"
      style={{ flex }}
      title={title}
      onClick={refId ? () => scrollToModule(refId) : undefined}
    >
      <div className={`mod-type type-${type}`}></div>
      {label}
      {refId && <span className="rack-link-hint">→ ref</span>}
    </div>
  )
}

export default function SystemSection() {
  return (
    <section id="system">
      <h2>YOUR <span className="accent">SYSTEM</span></h2>
      <p className="section-intro">A visual map of your eurorack system. Hover any module to see its function. Understanding how your modules relate to each other is the foundation of good patching.</p>

      <div className="rack">
        <div className="rack-label">ROW 1 — 1U UTILITIES (Intellijel)</div>
        <div className="rack-row">
          <RackModule flex={4} type="util" label="USB Power" title="USB power" />
          <RackModule flex={14} type="util" label="Buff Mult 1U" title="Passive buffered multiple — duplicate signals without voltage loss" refId="ref-buffmult" />
          <RackModule flex={28} type="seq" label="Steppy 1U" title="4-track step sequencer — 1U powerhouse for gate patterns" refId="ref-steppy" />
          <RackModule flex={28} type="util" label="Quadratt 1U" title="4x attenuverter/mixer — scale, invert, and mix CV signals" refId="ref-quadratt" />
          <RackModule flex={8} type="util" label="Stereo Out 1U" title="Stereo line out — send your patch to your audio interface" refId="ref-stereoout" />
        </div>

        <div className="rack-label" style={{ marginTop: 8 }}>ROW 2 — CLOCKING / MODULATION</div>
        <div className="rack-row">
          <RackModule flex={4} type="util" label="Light Rail" title="Light rail" />
          <RackModule flex={6} type="util" label="Univer Inter" title="MIDI-to-CV, CV-to-MIDI, utility interface" refId="ref-univinter" />
          <RackModule flex={8} type="seq" label="Pamela's PRO" title="Advanced master clock / LFO with euclidean rhythms, probability, envelopes" refId="ref-pamelaspro" />
          <RackModule flex={8} type="env" label="A-101-2v LPG" title="Doepfer A-101-2v: Vactrol-based low pass gate — organic, natural decay" refId="ref-lpg" />
          <RackModule flex={12} type="lfo" label="Quad PLFO" title="4ms Quad Pingable LFO — 4 LFOs that can sync to tap tempo or CV" refId="ref-quadplfo" />
          <RackModule flex={18} type="env" label="ForeCastle" title="Quad AR/AD envelope generator — 4 independent envelopes" refId="ref-forecastle" />
          <RackModule flex={12} type="vca" label="Quad VCA" title="Quad VCA — 4 VCAs in 12hp, essential for all signal routing" refId="ref-quadvca" />
          <RackModule flex={16} type="vca" label="MEGA-TANG" title="4-channel linear VCA and stereo mixer" refId="ref-megatang" />
        </div>

        <div className="rack-label" style={{ marginTop: 8 }}>ROW 3 — VOICE / FX</div>
        <div className="rack-row">
          <RackModule flex={16} type="seq" label="Bloom" title="Bloom: Fractal sequencer — generative melodic sequences" refId="ref-bloom" />
          <RackModule flex={12} type="osc" label="Osiris" title="Osiris: Wavetable oscillator with morphing" refId="ref-osiris" />
          <RackModule flex={12} type="env" label="Generate 3" title="Generate 3: Triple function generator" refId="ref-generate3" />
          <RackModule flex={14} type="sample" label="Rample" title="Rample: 4-channel sample player" refId="ref-rample" />
          <RackModule flex={4} type="util" label="Clep Diaz" title="Clep Diaz: Random stepped voltage generator" refId="ref-clepdiaz" />
          <RackModule flex={10} type="seq" label="Mimetic D." title="Mimetic Digitalis: 4-channel CV sequencer with 16 steps per channel" refId="ref-mimetic" />
          <RackModule flex={6} type="fx" label="Squawk D." title="Squawk Dirty: Resonant filter with distortion" refId="ref-squawk" />
          <RackModule flex={10} type="fx" label="Dual FX" title="Dual FX: Dual effects processor — reverb, delay, chorus, flanger, etc." refId="ref-dualfx" />
        </div>
      </div>

      <div style={{ fontSize: 14, color: 'var(--text-dim)', letterSpacing: '0.05em', marginTop: 8 }}>
        ↑ CLICK ANY MODULE TO JUMP TO ITS REFERENCE ENTRY
      </div>

      <div className="signal-legend">
        <div className="sig-item"><div className="sig-line" style={{ background: 'var(--cv)' }}></div> CV (pitch, mod)</div>
        <div className="sig-item"><div className="sig-line" style={{ background: 'var(--audio)' }}></div> Audio signal</div>
        <div className="sig-item"><div className="sig-line" style={{ background: 'var(--gate)' }}></div> Gate / trigger</div>
        <div className="sig-item"><div className="sig-line" style={{ background: 'var(--mod)' }}></div> Modulation</div>
        <div className="sig-item"><div className="mod-type type-seq" style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block' }}></div> Sequencer</div>
        <div className="sig-item"><div className="mod-type type-osc" style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block' }}></div> Oscillator</div>
        <div className="sig-item"><div className="mod-type type-env" style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block' }}></div> Envelope / LPG</div>
        <div className="sig-item"><div className="mod-type type-fx" style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block' }}></div> FX</div>
      </div>

      <div className="callout">
        <strong>System Strengths:</strong> Your system excels at generative and rhythmic patching. With Bloom + Mimetic Digitalis + Steppy 1U + Pamela&apos;s PRO, you have an exceptional sequencing ecosystem. Rample handles percussion, Osiris is your primary voice oscillator, and you have an extraordinary envelope ecosystem: ForeCastle (quad AR/AD) + Generate 3 (triple function generator) + A-101-2v LPG give you 8 independent envelope/LFO sources — far more than most systems.
      </div>

      {/* Erebus RE */}
      <h2 style={{ fontSize: 32, marginTop: 48 }}>DREADBOX <span className="accent">EREBUS RE</span></h2>
      <p className="section-intro" style={{ marginBottom: 24 }}>A fully analog paraphonic desktop synthesizer — a faithful reissue of the original Erebus, eurorack-compatible at 42HP, USB-powered, with MIDI in and 18 CV/Gate patch points.</p>

      <div className="concept-grid">
        {[
          { icon: '〰', title: 'Two Paraphonic VCOs', body: 'Two analog oscillators, each with two waveforms. OSC 1: sawtooth and square. OSC 2: sawtooth and triangle. Both can hard-sync (OSC 2 to OSC 1). Paraphonic operation means two notes can play simultaneously — both share the single filter and VCA, but have independent CV inputs and independent glide.' },
          { icon: '🪜', title: '2-Pole Low Pass Filter', body: "Dreadbox's own 12dB/oct low-pass filter with resonance up to self-oscillation. More open and characterful than the Moog Ladder — where the Grandmother's filter is smooth and warm, the Erebus filter is rawer and more aggressive. Pre-fed design means the signal is slightly overdriven before hitting the filter for built-in saturation character." },
          { icon: '📐', title: 'Dual Envelopes + LFO', body: 'ADSR envelope (for the filter) and an A/R envelope (for the VCA). The ADSR can loop, effectively becoming a second LFO with ADSR-shaped waveform. Wide-range LFO with triangle and square waves, goes into audio rate.' },
          { icon: '📡', title: '18 Patch Points + Lo-Fi Delay', body: 'CV outs: LFO, Envelope, Mod Wheel, Gate, CV1 (OSC 1 1V/oct), CV2 (OSC 2 1V/oct). CV ins: OSC 1, OSC 2, both OSCs together, Gate, Filter Cutoff, Echo Time, LFO Rate, Pulse Width, VCA. The lo-fi delay adds gritty spatial depth.' },
        ].map((c) => (
          <div key={c.title} className="concept-card">
            <div className="concept-icon">{c.icon}</div>
            <div className="concept-title">{c.title}</div>
            <div className="concept-body">{c.body}</div>
          </div>
        ))}
      </div>

      <div className="callout">
        <strong>Eurorack Integration:</strong> The Erebus RE can be removed from its case and mounted directly in your eurorack as a 42HP module. Its CV outputs (LFO, Envelope, Gate, CV1, CV2) are all eurorack-compatible. This makes it an excellent dual-oscillator voice with its own filter and delay that can be clocked and modulated from your rack, while simultaneously receiving MIDI pitch information from the Play or Digitakt.
      </div>

      <details>
        <summary>Erebus RE Integration Patches</summary>
        <div>
          <div className="steps" style={{ marginTop: 16 }}>
            {[
              <><strong>Play or Digitakt → Erebus via MIDI:</strong> Connect MIDI out from Play or Digitakt → Erebus RE MIDI in (3.5mm TRS-A). Assign a MIDI track on Play/Digitakt to the Erebus MIDI channel. The Erebus responds to pitch and gate — you can sequence the Erebus as a full melodic voice from your MIDI sequencer.</>,
              <>Patch Erebus LFO out → <span className="module-ref">Quadratt</span> → <span className="module-ref">Osiris</span> MORPH CV. The Erebus LFO at audio rate creates unusual FM-like timbral effects on your eurorack oscillator from a completely independent source.</>,
              <>Patch Erebus ADSR out → <span className="module-ref">Squawk Dirty To Me</span> CUTOFF CV. As you play notes on the Erebus (via MIDI), its envelope simultaneously modulates the filter on your eurorack voice.</>,
              <>Patch <span className="module-ref">Pamela's PRO</span> gate output → Erebus GATE CV input. Clock the Erebus envelopes from your eurorack master clock, independent of any MIDI input.</>,
              <>Patch Erebus audio output → <span className="module-ref">Squawk Dirty To Me</span> filter input → <span className="module-ref">MEGA-TANG</span>. Run the Erebus sound through your eurorack filter stack for a dual-filtered, heavily processed analog voice.</>,
            ].map((text, i) => (
              <div key={i} className="step"><div className="step-text">{text}</div></div>
            ))}
          </div>
          <div className="tip-box" style={{ marginTop: 16 }}>
            <strong>🎛 Tip</strong>
            In paraphonic mode, two MIDI notes play OSC 1 and OSC 2 independently. Sequence the Erebus from a chord-capable MIDI track on the Play and you get a genuine two-voice analog chord synthesizer through a single shared filter.
          </div>
        </div>
      </details>

      {/* Polyend Play */}
      <div className="divider" style={{ margin: '48px 0' }}></div>
      <h2 style={{ fontSize: 32 }}>POLYEND <span className="accent">PLAY</span> — MIDI SEQUENCER</h2>
      <p className="section-intro" style={{ marginBottom: 24 }}>The Play is a sample groovebox with 8 audio tracks and 8 dedicated polyphonic MIDI tracks. As a MIDI sequencer, its grid-based workflow, generative tools, and per-track CC mapping make it a powerful and immediate hub for your whole system.</p>

      <h3>Play MIDI Architecture</h3>
      <div className="concept-grid">
        {[
          { icon: '🎛', title: '8 Polyphonic MIDI Tracks', body: 'Switch to MIDI mode with [Shift] + [Patterns/Audio/MIDI]. Each of the 8 MIDI tracks can target a different MIDI channel and has its own independent step length (1–64), BPM multiplier/divider, swing value, and play mode.' },
          { icon: '🎹', title: 'Per-Step Note, Velocity & CC', body: "Every step on a MIDI track can have its own note (pitch), velocity, and up to the full range of mapped CCs. The 15 touch-capacitive knobs on Play can each be mapped to a specific CC for a particular MIDI track — Play's equivalent of Elektron's parameter locking." },
          { icon: '🎲', title: 'Chance, Randomize & Fill', body: 'The Chance parameter (0–100%) on any MIDI step determines the probability it fires. The Randomize function can randomize pitch (octave), velocity, and CC values across selected steps at a set percentage.' },
          { icon: '🎼', title: 'Chords, Scales & Arpeggios', body: 'Each MIDI step can output a chord (select from preset chord types, or build custom chords). A global scale filter constrains all MIDI note output to a chosen musical scale. Play modes include arpeggiation modes that automatically arpeggiate programmed chord steps.' },
        ].map((c) => (
          <div key={c.title} className="concept-card">
            <div className="concept-icon">{c.icon}</div>
            <div className="concept-title">{c.title}</div>
            <div className="concept-body">{c.body}</div>
          </div>
        ))}
      </div>

      {/* Elektron Digitakt */}
      <div className="divider" style={{ margin: '48px 0' }}></div>
      <h2 style={{ fontSize: 32 }}>ELEKTRON <span className="accent">DIGITAKT</span> — MIDI SEQUENCER</h2>
      <p className="section-intro" style={{ marginBottom: 24 }}>The Digitakt is an 8-track sample drum computer with a further 8 dedicated MIDI tracks. Its defining features as a MIDI sequencer are per-step parameter locking (p-locking), conditional trigs, two LFOs per MIDI track, micro-timing, and pattern chaining.</p>

      <h3>Digitakt MIDI Architecture</h3>
      <div className="concept-grid">
        {[
          { icon: '🔒', title: 'Parameter Locking (P-Locking)', body: 'P-locking is Elektron\'s signature feature: hold a trig button and turn any parameter knob to set a unique value for that specific step. On MIDI tracks, every step can have its own note, velocity, length, and any of 8 assignable CC values.' },
          { icon: '🎲', title: 'Conditional Trigs', body: 'Every trig on a MIDI track can have a condition: 1:2 (fires every other pass), 1:4 (every 4th), A (fires if previous trig fired), FILL (fires only in fill mode), PROBABILITY (fires at set %), and more.' },
          { icon: '🌀', title: '2 LFOs per MIDI Track', body: 'Each of the 8 MIDI tracks has 2 dedicated LFOs with selectable waveform, speed, depth, and destination. Destinations include note pitch, velocity, CC1–CC8 (your assigned CCs).' },
          { icon: '⏱', title: 'Micro-Timing & Pattern Chain', body: 'Each trig can be nudged ±23/384ths of a step in micro-timing — enough to create swing, humanization, or Afrobeat-style rhythmic feel. Pattern chaining links patterns end-to-end for song arrangement.' },
        ].map((c) => (
          <div key={c.title} className="concept-card">
            <div className="concept-icon">{c.icon}</div>
            <div className="concept-title">{c.title}</div>
            <div className="concept-body">{c.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
