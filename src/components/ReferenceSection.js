const MODULES = {
  sequencers: [
    { id: 'ref-pamelaspro', name: "Pamela's PRO Workout", vendor: 'ALM Busy Circuits · 8hp', body: 'Master clock, clock divider/multiplier, euclidean rhythm generator, probabilistic gate source, and LFO. The timing brain of your system. Every rhythmic patch starts here.', badge: { label: 'CLOCK / MASTER', color: 'var(--accent)' } },
    { id: 'ref-steppy', name: 'Steppy 1U', vendor: 'Intellijel · 28hp · 1U', body: '4-track, 16-step gate sequencer with four gate outputs (no CV). Great for drum patterns, rhythmic triggers, and driving envelopes. Syncs to Pamela\'s clock.', badge: { label: 'SEQUENCER', color: 'var(--accent)' } },
    { id: 'ref-bloom', name: 'Bloom', vendor: 'Qu-Bit Electronix · 16hp', body: 'Fractal/generative melodic sequencer. Programs a seed sequence and generates evolving variations (branches). Has built-in quantizer. Outputs CV + Gate.', badge: { label: 'GENERATIVE SEQ', color: 'var(--accent)' } },
    { id: 'ref-mimetic', name: 'Mimetic Digitalis', vendor: 'Noise Engineering · 10hp', body: '4-channel, 16-step CV sequencer. No built-in gates — pure CV output on 4 channels simultaneously. Excellent for modulation sequencing and multi-parameter automation.', badge: { label: 'CV SEQUENCER', color: 'var(--accent)' } },
  ],
  oscillators: [
    { id: 'ref-osiris', name: 'Osiris', vendor: 'Modbap Modular · 12hp', body: 'Wavetable oscillator with rich wave morphing. Strong in tonal, melodic contexts. Has multiple waveform outputs and morph CV input. The sole voice oscillator in your system — the primary audio source for all melodic patches.', badge: { label: 'WAVETABLE OSC', color: 'var(--accent2)' } },
  ],
  envelopes: [
    { id: 'ref-forecastle', name: 'ForeCastle', vendor: 'Circuit Abbey · 18hp', body: 'Quad AR/AD envelope generator with 4 fully independent channels. Each has attack and decay rate knobs, a gate/trigger input, attack rate CV input, decay rate CV input, End-of-Attack output, and End-of-Cycle output. A 3-position switch selects AR, AD, or CYCLE (loops as an LFO). Combined with Generate 3, you have 7 independent envelope/LFO sources.', badge: { label: 'QUAD ENV / LFO', color: '#ff4488' } },
    { id: 'ref-generate3', name: 'Generate 3', vendor: 'Joranalogue · 12hp', body: '3 independent function generators — each can be an envelope (AD/ASR), LFO, or audio-rate oscillator. EOR/EOF trigger outputs allow cascading. One of the most versatile modules in your rack.', badge: { label: 'ENVELOPE / LFO', color: '#ff4488' } },
    { id: 'ref-lpg', name: 'A-101-2v (LPG)', vendor: 'Doepfer · 8hp', body: 'Vactrol-based Low Pass Gate. Responds to triggers with a natural, organic decay — no click, no harsh transients. Essential for plucked sounds, organic percussion, and natural-sounding amplitude control.', badge: { label: 'LOW PASS GATE', color: '#ff4488' } },
    { id: 'ref-quadvca', name: 'Quad VCA', vendor: 'Intellijel · 12hp', body: '4 VCAs in one module. Essential for controlling signal levels, mixing, and amplitude modulation. Use exponential mode for natural-sounding envelopes, linear for tremolo effects.', badge: { label: 'VCA × 4', color: 'var(--gate)' } },
    { id: 'ref-squawk', name: 'Squawk Dirty To Me', vendor: 'Endorphin.es · 6hp', body: 'Resonant filter with a characterful, dirty sound. High resonance creates self-oscillation (use as a sine oscillator). Adds grit and attitude to any audio signal. Excellent on bass and percussion.', badge: { label: 'FILTER', color: 'var(--mod)' } },
  ],
  fx: [
    { id: 'ref-megatang', name: 'MEGA-TANG', vendor: 'ALM Busy Circuits · 16hp', body: '4-channel linear VCA and stereo mixer. Each channel has a level knob with Level CV input (VCA), a send control for the mono effects send bus (with stereo return), a pan knob, and a soft-mute button with LED. Individual outputs pull a channel out of the main mix. The natural hub for collecting all voices into a stereo mix before output.', badge: { label: 'VCA / MIXER', color: 'var(--gate)' } },
    { id: 'ref-dualfx', name: 'Dual FX', vendor: 'Erica Synths · 10hp', body: 'Dual effects processor with reverb, delay, chorus, flanger, and more. Stereo I/O. Use as send/return FX for the whole mix or as an insert on individual voices. The reverb and delay algorithms are high quality.', badge: { label: 'REVERB / DELAY', color: 'var(--mod)' } },
  ],
  utilities: [
    { id: 'ref-quadplfo', name: 'Quad PLFO', vendor: '4ms Company · 12hp', body: '4 LFOs that can sync to tap tempo or CV clock. Each can run free or phase-locked to the others. Multiple waveform outputs. The modulation backbone of your system alongside Generate 3.', badge: { label: 'LFO × 4', color: 'var(--cv)' } },
    { id: 'ref-clepdiaz', name: 'Clep Diaz', vendor: 'Noise Engineering · 4hp', body: 'Random stepped voltage generator. Outputs a new random voltage on each clock input. Has SLEW for smoothing. Essential for generative patches, random melody, and humanizing any parameter.', badge: { label: 'RANDOM CV', color: 'var(--cv)' } },
    { id: 'ref-quadratt', name: 'Quadratt 1U', vendor: 'Intellijel · 28hp · 1U', body: '4 attenuverters with a summing mix output. Scale, invert, offset, and mix CV signals. A utility module used in virtually every patch to manage signal levels and CV ranges.', badge: { label: 'ATTENUVERTER', color: '#888' } },
    { id: 'ref-buffmult', name: 'Buff Mult 1U', vendor: 'Intellijel · 14hp · 1U', body: 'Buffered multiple — duplicates a signal to multiple outputs without voltage drop. Critical for distributing pitch CV to multiple oscillators while keeping them in tune.', badge: { label: 'BUFFERED MULT', color: '#888' } },
    { id: 'ref-univinter', name: 'Univer Inter', vendor: 'Noise Engineering · 6hp', body: 'MIDI-to-CV and CV-to-MIDI interface. Connects your eurorack to keyboards, DAWs, and other MIDI gear. Outputs V/OCT, gate, velocity, mod wheel, and more from MIDI input.', badge: { label: 'MIDI / CV', color: '#888' } },
    { id: 'ref-rample', name: 'Rample', vendor: 'Squarp Instruments · 14hp', body: '4-channel sample player. Load WAV files via SD card. Each channel has independent trigger, pitch CV, volume, and start point CV. The percussion and texture engine of your system.', badge: { label: 'SAMPLER', color: '#44ff88' } },
    { id: 'ref-stereoout', name: 'Stereo Line Out 1U', vendor: 'Intellijel · 8hp · 1U', body: 'The final destination of every patch. Converts eurorack levels (+/−5V) to line level for your audio interface, mixer, or monitors. Always the last module in your signal chain.', badge: { label: 'OUTPUT', color: '#888' } },
  ],
}

function ModuleCard({ id, name, vendor, body, badge }) {
  return (
    <div className="module-card" id={id}>
      <div className="module-name">{name}</div>
      <div className="module-vendor">{vendor}</div>
      <div className="module-function">{body}</div>
      <span className="module-role-badge" style={{ color: badge.color, borderColor: badge.color }}>{badge.label}</span>
    </div>
  )
}

export default function ReferenceSection() {
  return (
    <section id="reference">
      <h2>MODULE <span className="accent">REFERENCE</span></h2>
      <p className="section-intro">Quick-reference guide to every module in your system — what it does, how it fits into patches, and key inputs/outputs to know.</p>

      <h3>Sequencers &amp; Clocks</h3>
      <div className="module-grid">
        {MODULES.sequencers.map(m => <ModuleCard key={m.id} {...m} />)}
      </div>

      <h3>Oscillators</h3>
      <div className="module-grid">
        {MODULES.oscillators.map(m => <ModuleCard key={m.id} {...m} />)}
      </div>

      <h3>Envelopes, Dynamics &amp; Filters</h3>
      <div className="module-grid">
        {MODULES.envelopes.map(m => <ModuleCard key={m.id} {...m} />)}
      </div>

      <h3>FX &amp; Mixing</h3>
      <div className="module-grid">
        {MODULES.fx.map(m => <ModuleCard key={m.id} {...m} />)}
      </div>

      <h3>Utilities &amp; Modulation</h3>
      <div className="module-grid">
        {MODULES.utilities.map(m => <ModuleCard key={m.id} {...m} />)}
      </div>
    </section>
  )
}
