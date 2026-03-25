export default function GrandmotherSection() {
  const patchPoints = [
    { name: 'KB CV OUT', body: "Keyboard pitch CV (1V/oct). Send to your eurorack to play Osiris from Grandmother's keys.", badge: { label: 'CV OUT', color: 'var(--cv)' } },
    { name: 'KB GATE OUT', body: 'Gate output — high when a key is held. Use to trigger ForeCastle or Generate 3 envelopes from the keyboard.', badge: { label: 'GATE OUT', color: 'var(--gate)' } },
    { name: 'KB VEL OUT', body: 'Velocity CV — higher for harder keystrikes. Patch to CUTOFF IN for velocity-sensitive filter. 32-note keyboard is velocity sensitive.', badge: { label: 'CV OUT', color: 'var(--cv)' } },
    { name: 'OSC 1 / OSC 2 WAVE OUT', body: "Individual oscillator audio outputs. Patch into eurorack audio inputs to process Grandmother's oscillators through your modules.", badge: { label: 'AUDIO OUT', color: 'var(--audio)' } },
    { name: 'OSC 1 / OSC 2 PITCH IN', body: "External pitch CV inputs. Patch eurorack CV here to control Grandmother's oscillators from your sequencers.", badge: { label: 'CV IN', color: 'var(--cv)' } },
    { name: 'FILTER INPUT / OUTPUT', body: 'Patch any external audio into the Ladder filter. Patch the filter output to reroute it through HPF or into eurorack FX.', badge: { label: 'AUDIO I/O', color: 'var(--mod)' } },
    { name: 'CUTOFF IN', body: 'External CV control of filter cutoff. Patch ForeCastle ENV, Quad PLFO, or Clep Diaz here for filter modulation from your rack.', badge: { label: 'CV IN', color: 'var(--cv)' } },
    { name: '+ ENV OUT / − ENV OUT', body: "Normal and inverted ADSR envelope outputs. Send to eurorack to use Grandmother's ADSR as an additional envelope source.", badge: { label: 'CV OUT', color: 'var(--cv)' } },
    { name: 'ENVELOPE TRIGGER IN', body: "External trigger to fire the ADSR. Patch Pamela's PRO or Steppy gate here to trigger Grandmother's envelope from your rack clock.", badge: { label: 'GATE IN', color: 'var(--gate)' } },
    { name: 'LFO OUT (multiple)', body: 'LFO waveform outputs and S&H output. Send to eurorack as additional modulation sources. The S&H output is particularly useful as a slow random CV.', badge: { label: 'CV OUT', color: 'var(--mod)' } },
    { name: 'VCA IN / VCA OUT', body: 'Patch into the VCA to reroute audio through it. VCA OUT can feed external FX before final output.', badge: { label: 'AUDIO I/O', color: 'var(--audio)' } },
  ]

  const integrationPatches = [
    {
      title: 'Grandmother as Keyboard Controller',
      subtitle: "Use Grandmother's keyboard to play your eurorack voice",
      steps: [
        'Patch <span class="module-ref">Grandmother KB CV OUT</span> → <span class="module-ref">Osiris</span> V/OCT in your eurorack. Grandmother\'s keyboard now controls Osiris pitch at 1V/octave.',
        'Patch <span class="module-ref">Grandmother KB GATE OUT</span> → <span class="module-ref">ForeCastle</span> GATE 1 and GATE 2 (via <span class="module-ref">Buff Mult 1U</span>). Pressing a key fires your eurorack envelopes.',
        'Patch <span class="module-ref">Grandmother KB VEL OUT</span> → <span class="module-ref">Squawk Dirty To Me</span> CUTOFF CV through <span class="module-ref">Quadratt</span>. Harder keystrikes open the filter more.',
        'Eurorack audio path: <span class="module-ref">Osiris</span> → Quad VCA → Squawk Dirty → <span class="module-ref">MEGA-TANG</span> → <span class="module-ref">Dual FX</span> → <span class="module-ref">Stereo Line Out 1U</span>.',
        "Use Grandmother's GLIDE knob for portamento on the eurorack voice — the KB CV OUT slides between pitches when GLIDE is turned up, and your eurorack follows automatically.",
        "Enable Grandmother's built-in arpeggiator (PLAY button) or program a sequence (up to 256 notes). The KB CV and GATE outputs transmit arp/sequence data — your eurorack plays the arpeggio.",
      ],
      tip: "Grandmother's arpeggiator is a huge workflow accelerator for eurorack. Set it to UP or RANDOM mode, hold a chord on the keyboard, and your Osiris voice arpeggios through those pitches — no sequencer programming needed.",
      tags: ['melodic', 'beginner'],
    },
    {
      title: "Eurorack Audio Through Grandmother's Filter",
      subtitle: 'Use the Moog Ladder filter as a eurorack insert effect',
      steps: [
        'Patch <span class="module-ref">Osiris</span> audio out → <span class="module-ref">Grandmother FILTER INPUT</span> patch point. This bypasses Grandmother\'s internal mixer and sends your wavetable oscillator directly into the Moog Ladder filter.',
        "Set Grandmother's CUTOFF, RESONANCE, and ENVELOPE AMT as desired. The ADSR on Grandmother is now your filter envelope.",
        'For extra modulation: patch <span class="module-ref">Quad PLFO</span> output → <span class="module-ref">Quadratt</span> (attenuate) → <span class="module-ref">Grandmother CUTOFF IN</span>. Your eurorack LFO now modulates the Moog filter cutoff.',
        'Patch <span class="module-ref">Grandmother FILTER OUTPUT</span> → <span class="module-ref">Grandmother VCA IN</span> to pass filtered audio through Grandmother\'s own VCA. Then patch VCA OUT → <span class="module-ref">MEGA-TANG</span>.',
        'Optionally patch <span class="module-ref">Grandmother FILTER OUTPUT</span> directly → <span class="module-ref">MEGA-TANG</span> and use <span class="module-ref">ForeCastle</span> ENV → MEGA-TANG Level CV for amplitude control.',
      ],
      tip: "Set Grandmother's RESONANCE very high and sweep the CUTOFF slowly — at certain resonance levels the Ladder filter will self-oscillate, producing a pure sine wave tone in addition to filtering your signal.",
      tags: ['melodic', 'techno', 'intermediate'],
    },
    {
      title: 'Dual Voice: Grandmother + Osiris',
      subtitle: 'Two completely independent voices from one keyboard',
      steps: [
        'Patch <span class="module-ref">Grandmother KB CV OUT</span> → <span class="module-ref">Buff Mult 1U</span>. Send one copy → <span class="module-ref">Osiris</span> V/OCT, leave Grandmother\'s internal oscillators receiving keyboard CV normally.',
        'Patch <span class="module-ref">Grandmother KB GATE OUT</span> → <span class="module-ref">Buff Mult</span>. One copy fires Grandmother\'s own ADSR. Send another copy → <span class="module-ref">ForeCastle</span> GATE 1 for the eurorack voice envelope.',
        "Set Grandmother's voice with one character: e.g. OSC 1 sawtooth + OSC 2 narrow pulse, filter half-open, medium resonance, spring reverb at ~30%. This is the \"warm, vintage\" voice.",
        'Set <span class="module-ref">Osiris</span> to a complementary wavetable character — something more digital or complex. Route Osiris → <span class="module-ref">Squawk Dirty To Me</span> → <span class="module-ref">Dual FX</span>.',
        'Mix both voices: Grandmother\'s output to one monitoring path. Osiris eurorack path → <span class="module-ref">MEGA-TANG</span> → <span class="module-ref">Stereo Line Out 1U</span>. Balance the two voices to taste.',
      ],
      tip: "Detune Osiris by +5 cents from Grandmother's oscillators. The two voices will chorus against each other even when playing in unison — a much thicker combined sound than either alone.",
      tags: ['melodic', 'intermediate'],
    },
  ]

  return (
    <section id="grandmother">
      <h2>MOOG <span className="accent">GRANDMOTHER</span></h2>
      <p className="section-intro">Your Grandmother is a semi-modular analog synthesizer with 41 patch points — a self-contained instrument that also integrates deeply with your eurorack system.</p>

      <div className="callout">
        <strong>Semi-Modular means:</strong> The Grandmother has a built-in signal path (OSC → Mixer → Filter → VCA → Reverb → Output) that works without any patching. Inserting a patch cable into any input <em>breaks</em> the internal normalling at that point, allowing you to override or extend the default routing.
      </div>

      <h3>Grandmother Architecture</h3>
      <div className="concept-grid">
        {[
          { icon: '〰', title: 'Dual VCOs', body: "Two analog oscillators, each with Triangle, Sawtooth, Square, and Narrow Pulse waveforms. OSC 1 has octave settings at 32', 16', 8', 4'. OSC 2 has 16', 8', 4', 2' and a FREQUENCY knob for detuning ±7 semitones. Hard sync available (OSC 2 syncs to OSC 1)." },
          { icon: '🪜', title: 'Moog Ladder Filter', body: 'Classic -24dB/octave 4-pole low pass ladder filter, 10Hz–20kHz. RESONANCE up to self-oscillation (use as a sine wave source with KBD TRACK 1:1). ENVELOPE AMT is bipolar — positive opens the filter on attack, negative closes it.' },
          { icon: '📐', title: 'ADSR Envelope', body: 'Full Attack, Decay, Sustain, Release envelope. Outputs both + ENV OUT and − ENV OUT (inverted). Triggered internally by the keyboard gate, or via external TRIGGER IN patch point. Normalled to both the VCA and filter ENVELOPE AMT simultaneously.' },
          { icon: '🌀', title: 'LFO + Sample & Hold', body: 'Wide-range LFO (slow to audio rate) with sine, triangle, square, and sawtooth outputs, plus a dedicated SAMPLE & HOLD output that samples the LFO at a clock rate. LFO can sync to external clock via SYNC IN.' },
          { icon: '🌊', title: 'Spring Reverb', body: 'Onboard analog 6" spring reverb tank — a genuine physical spring, not a digital simulation. Mix knob blends dry and wet. Spring reverb has a distinctive "boing" character especially when hit with a sharp transient.' },
          { icon: '🔧', title: 'Utilities', body: 'A 4-point mult (1 input → 3 outputs, DC coupled), a bipolar attenuator with its own input and output, a 1-pole high pass filter (patchable), and a NOISE source accessible via patch point.' },
        ].map((c) => (
          <div key={c.title} className="concept-card">
            <div className="concept-icon">{c.icon}</div>
            <div className="concept-title">{c.title}</div>
            <div className="concept-body">{c.body}</div>
          </div>
        ))}
      </div>

      <h3>Key Patch Points (Front Panel)</h3>
      <div className="module-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))' }}>
        {patchPoints.map((pp) => (
          <div key={pp.name} className="module-card">
            <div className="module-name">{pp.name}</div>
            <div className="module-function">{pp.body}</div>
            <span className="module-role-badge" style={{ color: pp.badge.color, borderColor: pp.badge.color }}>{pp.badge.label}</span>
          </div>
        ))}
      </div>

      <h3>Grandmother + Eurorack Integration Patches</h3>

      {integrationPatches.map((patch) => (
        <div key={patch.title} className="patch-card">
          <div className="patch-header">
            <div>
              <div className="patch-title">{patch.title}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{patch.subtitle}</div>
            </div>
            <div className="patch-tags">
              {patch.tags.map(t => <span key={t} className={`tag tag-${t}`}>{t}</span>)}
            </div>
          </div>
          <div className="patch-body">
            <div className="steps">
              {patch.steps.map((s, i) => (
                <div key={i} className="step"><div className="step-text" dangerouslySetInnerHTML={{ __html: s }} /></div>
              ))}
            </div>
            {patch.tip && (
              <div className="tip-box">
                <strong>🎛 Tip</strong>
                {patch.tip}
              </div>
            )}
          </div>
        </div>
      ))}

      <h3>Grandmother Standalone Techniques</h3>

      <details open>
        <summary>Self-Patching the Grandmother</summary>
        <div>
          <p>Grandmother&apos;s 41 patch points make it a fully patchable modular instrument on its own. Here are the most musically productive internal patches:</p>
          <div className="concept-grid" style={{ marginTop: 16 }}>
            {[
              { title: 'Velocity → Filter Cutoff', body: 'Patch KB VEL OUT → CUTOFF IN. No internal normalling exists for velocity, so this must be patched manually. Result: harder keystrikes open the filter — an expressive, dynamic response like a real instrument.' },
              { title: 'Dual Filter Mode', body: 'Patch MIXER OUTPUT → High Pass Filter INPUT → High Pass Filter OUTPUT → Low Pass Filter INPUT. Now both filters are in series. Use the HPF to thin out the bass end before the LPF shapes the top end.' },
              { title: 'Filter Self-Oscillation as OSC', body: 'Turn OSCILLATOR 1 and 2 levels to zero in the Mixer. Turn RESONANCE fully up, CUTOFF to about 10 o\'clock. Set KBD TRACK to 1:1. The filter now self-oscillates as a pure sine wave oscillator that tracks your keyboard at 1V/oct.' },
              { title: 'LFO → OSC 2 LIN FM', body: 'Patch LFO SINE OUT → OSC 2 LIN FM IN. With OSC 2 SYNC enabled, this creates a sweeping FM timbre locked to OSC 1\'s pitch. At faster LFO rates, the sound becomes metallic and bell-like.' },
              { title: 'Inverted Envelope to Filter', body: 'Patch − ENV OUT → CUTOFF IN. Set ENVELOPE AMT to center (no envelope from the knob). Now the filter closes on each note attack and opens during decay — the opposite of the typical filter envelope, great for bass sounds.' },
              { title: 'S&H as Stepped Pitch', body: 'Patch LFO S&H OUT → OSC 2 PITCH IN (through the bipolar attenuator, set to a small amount). OSC 2 steps through random pitch offsets in time with the LFO clock, while OSC 1 stays on pitch.' },
            ].map((c) => (
              <div key={c.title} className="concept-card">
                <div className="concept-title">{c.title}</div>
                <div className="concept-body">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </details>

      <details>
        <summary>Using Grandmother as an External Audio Processor</summary>
        <div>
          <p>Grandmother&apos;s rear panel includes a 1/4&quot; INSTRUMENT IN jack and the front panel MIXER inputs accept external signals. This makes it an excellent analog processor for any sound source.</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: 14, paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><strong style={{ color: 'var(--text)' }}>Via rear panel INSTRUMENT IN:</strong> Connect any line/instrument-level source. It enters the mixer at the NOISE channel position. Use the NOISE knob to control its level.</li>
            <li><strong style={{ color: 'var(--text)' }}>Via FILTER INPUT:</strong> Patch any eurorack audio directly into the Moog Ladder filter input, bypassing the mixer entirely. This is the cleanest way to use just the filter on an external source.</li>
            <li><strong style={{ color: 'var(--text)' }}>Processing Rample:</strong> Patch Rample stereo mix → Grandmother FILTER INPUT. Run drum samples through the Moog Ladder filter — adjust CUTOFF and RESONANCE for that characteristic Moog warmth on your percussion.</li>
          </ul>
        </div>
      </details>
    </section>
  )
}
