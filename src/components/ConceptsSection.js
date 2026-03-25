export default function ConceptsSection() {
  return (
    <section id="concepts">
      <h2>CORE <span className="accent">CONCEPTS</span></h2>
      <p className="section-intro">Essential modular synthesis concepts explained in the context of your specific modules.</p>

      <div className="concept-grid">
        {[
          { icon: '⚡', title: 'Voltage Control (CV)', body: 'Almost everything in your system can be controlled by voltage. Your Quadratt 1U is your CV management center — use it to scale, attenuate, or invert any CV before it reaches a destination. Pitch CV is typically 1V/octave. Modulation CV can be anything from −5V to +10V.' },
          { icon: '🔗', title: 'Signal Flow Fundamentals', body: 'Think in chains: Clock → Sequencer → Oscillator → VCA/LPG → FX → Output. Your Pamela\'s PRO Workout is the master clock that drives Steppy/Bloom/Mimetic D. Quad VCA controls amplitude. Stereo Line Out 1U is always the last stop.' },
          { icon: '🌊', title: 'Clocking & Sync', body: 'Pamela\'s PRO Workout is your timing god. It can output clocks at any division/multiplication, euclidean patterns, probability gates, and even LFO-style waveforms. Run its outputs into Steppy, Bloom, Mimetic D, Rample, and Generate 3 to keep everything locked in time.' },
          { icon: '🎲', title: 'Randomness & Generativity', body: "Clep Diaz outputs random stepped voltages — use this for random pitch sequences, random filter cutoff, random panning. Bloom's mutation engine generates evolving variations of a seed sequence. Together they allow patches that never repeat exactly." },
          { icon: '📐', title: 'Attenuversion', body: 'Your Quadratt 1U has four attenuverters. Turning a knob left inverts a signal, right amplifies it, center is zero. Use this to reduce LFO depth (so modulation isn\'t too extreme), flip envelope polarity, or mix multiple CV signals together.' },
          { icon: '🔔', title: 'Envelopes: ForeCastle + Generate 3', body: 'You have 7 independent envelope/LFO sources: ForeCastle (4 AR/AD channels, each switchable to CYCLE/LFO mode) and Generate 3 (3 function generators). ForeCastle excels at firing multiple envelopes from one gate simultaneously — amplitude, filter, and wavetable morph can all have different shapes per note.' },
        ].map((c) => (
          <div key={c.title} className="concept-card">
            <div className="concept-icon">{c.icon}</div>
            <div className="concept-title">{c.title}</div>
            <div className="concept-body">{c.body}</div>
          </div>
        ))}
      </div>

      <h3>The Buffered Multiple: Why It Matters</h3>
      <p>Your <strong>Buff Mult 1U</strong> is critical for distributing pitch CV or gate signals without voltage drop. Use it to send the same pitch CV from a sequencer to Osiris plus another CV destination simultaneously, or to fan out a single clock trigger to multiple envelope generators — for example, one gate triggering both a ForeCastle envelope and a Generate 3 envelope at the same time for a layered response.</p>

      <h3>MEGA-TANG: Your Stereo Mixer &amp; VCA Hub</h3>
      <p>The <strong>MEGA-TANG</strong> is a 4-channel linear VCA and stereo mixer. Each channel has a level knob (which acts as a VCA attenuator when a CV is patched to the Level CV input), a send control for routing signal to a mono effects send bus (with stereo return), a pan knob, and a soft-mute button with LED. Individual outputs are also available per channel, which pull the signal out of the main mix — useful for monitoring or using a channel as a standalone VCA. The stereo mix output is the natural place to collect all your voices before sending them to <strong>Dual FX</strong> and the <strong>Stereo Line Out 1U</strong>. The <strong>Squawk Dirty To Me</strong> filter adds coloration to individual voices before they hit the mix.</p>
    </section>
  )
}
