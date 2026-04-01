export default function TechniquesSection() {
  return (
    <section id="techniques">
      <h2>PATCHING <span className="accent">TECHNIQUES</span></h2>
      <p className="section-intro">Deeper techniques specific to your system — tricks that take patches from good to great.</p>

      <details open>
        <summary>Pamela&apos;s PRO Workout: Beyond Basic Clocking</summary>
        <div>
          <p>Most people use Pamela&apos;s as a simple clock divider. But it&apos;s one of the most powerful modules in your system. Key techniques:</p>
          <div className="concept-grid" style={{ marginTop: 16 }}>
            {[
              { title: 'Euclidean Rhythms', body: 'Set any output to EUCLIDEAN mode. Specify N hits spread across M steps (e.g. 3 hits / 8 steps = the classic reggae/Afrobeat offbeat). Use multiple outputs with different euclidean settings for interlocking rhythms that feel human.' },
              { title: 'Probability Per Output', body: 'Each output can have its own probability (0–100%). A kick at 95%, a snare at 80%, a hi-hat at 60%, and a ghost note at 30% creates a live-feeling drum part that\'s never exactly the same twice.' },
              { title: 'LFO Mode', body: "Pamela's outputs can run in LFO mode — outputting waveforms (sine, triangle, saw, random) at any rate. Use this to free up your Quad PLFO for other tasks, or add a 5th–8th modulation source to complex patches." },
              { title: 'Swing & Shuffle', body: "Add swing to any Pamela's output — this delays every second hit slightly, creating the \"groove\" feel of classic drum machines. A swing value of 54–58% is subtle and musical; 65%+ is very pronounced." },
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
        <summary>The Quadratt 1U: Your CV Swiss Army Knife</summary>
        <div>
          <p>The Quadratt has 4 attenuverter channels that also sum into a mix output. This makes it incredibly versatile:</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: 14, paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><strong style={{ color: 'var(--text)' }}>CV Scaling:</strong> Reduce a 5V LFO to a 0.5V subtle wobble by turning the knob to ~10%. Essential for keeping modulation musical rather than extreme.</li>
            <li><strong style={{ color: 'var(--text)' }}>CV Mixing:</strong> Feed two sources into different channels — their sum appears at the MIX output. Add a slow LFO + a fast random voltage to get complex, unpredictable modulation.</li>
            <li><strong style={{ color: 'var(--text)' }}>CV Inversion:</strong> Turn the knob left of center to invert a signal. Useful for making a filter close when a VCA opens (classic sidechain-style ducking).</li>
            <li><strong style={{ color: 'var(--text)' }}>DC Offset:</strong> With nothing patched to an input, the knob outputs a steady DC voltage. Use this as a manual pitch offset, a fixed VCA level, or a baseline filter setting.</li>
          </ul>
        </div>
      </details>

      <details>
        <summary>ForeCastle: Quad Envelope Power Techniques</summary>
        <div>
          <p>The Circuit Abbey ForeCastle gives you 4 completely independent AR/AD envelope generators in 18hp. Having 4 envelopes available simultaneously unlocks complex, expressive voice architectures.</p>
          <div className="concept-grid" style={{ marginTop: 16 }}>
            {[
              { title: 'Three Envelopes Per Note', body: 'Mult one gate to ForeCastle channels 1, 2, and 3. Set each with different attack/decay times. Route ENV 1 → VCA amplitude, ENV 2 → filter cutoff, ENV 3 → Osiris MORPH. Every note now has three simultaneous, differently-shaped modulation curves.' },
              { title: 'Envelope Chaining', body: 'Patch End-of-Cycle from channel 1 → Gate input of channel 2. Channel 2 only fires after channel 1 fully completes — creating a multi-stage, sequential modulation event from a single trigger. Chain all 4 for a long automated modulation sequence.' },
              { title: 'CYCLE = LFO', body: 'In CYCLE mode, any ForeCastle channel loops continuously. Set Attack and Decay times to shape the LFO waveform: equal times = triangle, fast attack/slow decay = rising ramp. Use ATK CV and DCY CV inputs to morph the shape dynamically.' },
              { title: 'Self-Patching Curves', body: "Patch a channel's ENV output back into its own ATK CV or DCY CV input (via Quadratt for attenuation). This creates an exponential or logarithmic curve shape at the output — the envelope influences its own rate as it progresses." },
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
        <summary>Generate 3: Triple Function Generator Power</summary>
        <div>
          <p>The Joranalogue Generate 3 gives you 3 independent function generators — each can be an envelope, LFO, or complex modulator.</p>
          <div className="concept-grid" style={{ marginTop: 16 }}>
            {[
              { title: 'Cascaded Envelopes', body: 'Patch the EOR (End of Rise) output of Function 1 into the trigger of Function 2. Function 2 only starts after Function 1 finishes its attack. This creates complex, multi-stage modulation curves far beyond a basic ADSR.' },
              { title: 'Cycling = LFO', body: 'Put any Generate 3 function into CYCLE mode and it becomes a LFO with variable shape (set by RISE and FALL times). Use all three as LFOs and you have 7 total LFOs when combined with your Quad PLFO.' },
              { title: 'Audio-Rate FM', body: 'At fast cycle rates, Generate 3 functions output audio-rate signals. Patch one into Osiris FM input for FM synthesis without needing a second oscillator. The Generate 3\'s sawtooth shape creates bright, buzzy FM tones.' },
              { title: '3-Stage Sequencer', body: 'Trigger all three functions from the same gate but with different attack/decay settings. Assign each ENV output to different parameters (pitch, filter, VCA). Your notes now have a 3-layer modulation envelope structure.' },
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
        <summary>Bloom: Getting the Most from Fractal Sequencing</summary>
        <div>
          <p>Bloom is a unique sequencer — it generates variations (branches) of a seed sequence rather than just looping.</p>
          <ul style={{ color: 'var(--text-muted)', fontSize: 14, paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><strong style={{ color: 'var(--text)' }}>Seed vs. Branch:</strong> The SEED is your original sequence. BRANCHES are generated variations. Set mutation low at first — even subtle variation is surprisingly musical.</li>
            <li><strong style={{ color: 'var(--text)' }}>Melody Quantization:</strong> Use Bloom&apos;s built-in scale quantization. Set it to a scale (pentatonic, Dorian, etc.) and all generated pitches stay in key automatically.</li>
            <li><strong style={{ color: 'var(--text)' }}>CV Control of Mutation:</strong> Patch Clep Diaz → Bloom MUTATE CV input. Now the mutation amount itself evolves randomly — some moments are stable, others are wild.</li>
            <li><strong style={{ color: 'var(--text)' }}>Length Variation:</strong> Bloom can vary sequence length per branch. A 8-step sequence might generate a 6-step variation, creating interesting polyrhythmic tension with your drum patterns.</li>
          </ul>
        </div>
      </details>

      <details>
        <summary>Mimetic Digitalis + Steppy 1U: Sequencer Ecosystem</summary>
        <div>
          <div className="callout">
            <strong>Key Insight:</strong> Mimetic Digitalis outputs 4 channels of CV (no gates). Steppy 1U outputs 4 channels of gates (no CV). Bloom outputs CV + gates with mutation. Use them for different tasks rather than competing.
          </div>
          <ul style={{ color: 'var(--text-muted)', fontSize: 14, paddingLeft: 20, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><strong style={{ color: 'var(--text)' }}>Mimetic for Modulation:</strong> Use Mimetic&apos;s 4 CV channels to modulate filter cutoff, LFO rate, MEGA-TANG level CVs, reverb mix — parameters that don&apos;t need gates.</li>
            <li><strong style={{ color: 'var(--text)' }}>Steppy for Rhythm:</strong> Use Steppy&apos;s gates to trigger envelopes and drums. For pitch CV alongside Steppy rhythms, pair it with Mimetic Digitalis running at the same length.</li>
            <li><strong style={{ color: 'var(--text)' }}>Bloom for Lead:</strong> Reserve Bloom for the main melodic voice that evolves over time.</li>
            <li><strong style={{ color: 'var(--text)' }}>Different Lengths:</strong> Set Mimetic to 16 steps, Steppy to 8, Bloom to 12. The sequences drift in and out of phase, creating ever-changing combinations.</li>
          </ul>
        </div>
      </details>
    </section>
  )
}
