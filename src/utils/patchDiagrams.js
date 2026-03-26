// Patch signal flow diagrams — raw SVG strings.
// CSS classes defined in globals.css:
//   module-box / module-box-highlight · mod-text · jack-label · patch-note
//   jack-out (cyan) · jack-in (orange) · jack-gate-out/in (yellow)
//   inline style="fill:#333;stroke:#b040ff" for CV inputs
//   wire-audio (orange) · wire-mod (purple dashed) · wire-gate (yellow)

const LEGEND = `<text x="350" y="210" class="patch-note" text-anchor="middle">Dashed = CV modulation · Solid = audio · Yellow = gate/trigger</text>`

// ─── Ambient / Drone ──────────────────────────────────────────────────────────

export const AMBIENT_TEXTURE_LOOP = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="30" cy="55" r="5" class="jack-gate-out"/><text x="30" y="72" class="jack-label" text-anchor="middle">EU</text>
  <circle cx="58" cy="55" r="5" class="jack-gate-out"/><text x="58" y="72" class="jack-label" text-anchor="middle">÷16</text>

  <rect x="115" y="20" width="85" height="70" rx="2" class="module-box-highlight"/>
  <text x="157" y="38" class="mod-text" text-anchor="middle">RAMPLE</text>
  <circle cx="128" cy="55" r="5" class="jack-gate-in"/><text x="128" y="72" class="jack-label" text-anchor="middle">T1</text>
  <circle cx="150" cy="55" r="5" class="jack-gate-in"/><text x="150" y="72" class="jack-label" text-anchor="middle">T2</text>
  <circle cx="172" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="172" y="72" class="jack-label" text-anchor="middle">START</text>
  <circle cx="192" cy="55" r="5" class="jack-out"/><text x="192" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="220" y="20" width="85" height="70" rx="2" class="module-box-highlight"/>
  <text x="262" y="38" class="mod-text" text-anchor="middle">QUAD VCA</text>
  <circle cx="233" cy="55" r="5" class="jack-in"/><text x="233" y="72" class="jack-label" text-anchor="middle">IN1</text>
  <circle cx="253" cy="55" r="5" class="jack-in"/><text x="253" y="72" class="jack-label" text-anchor="middle">IN2</text>
  <circle cx="273" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="273" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="297" cy="55" r="5" class="jack-out"/><text x="297" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="325" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="365" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="338" cy="55" r="5" class="jack-in"/><text x="338" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="395" cy="55" r="5" class="jack-out"/><text x="395" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="418" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="453" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="453" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="431" cy="65" r="5" class="jack-in"/><text x="431" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="138" class="mod-text" text-anchor="middle">CLEP DIAZ</text>
  <circle cx="50" cy="158" r="5" class="jack-out"/><text x="50" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="115" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="155" y="138" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="155" cy="158" r="5" class="jack-out"/><text x="155" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="220" y="120" width="90" height="70" rx="2" class="module-box"/>
  <text x="265" y="138" class="mod-text" text-anchor="middle">QUAD PLFO</text>
  <circle cx="265" cy="158" r="5" class="jack-out"/><text x="265" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <path d="M30,50 L30,95 L128,95 L128,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M58,50 L58,102 L150,102 L150,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M50,153 L50,112 L172,112 L172,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M192,55 L215,55 L215,44 L228,44 L228,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M155,153 L155,108 L253,108 L253,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M265,153 L265,108 L273,108 L273,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M297,55 L320,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M395,55 L413,55 L413,65 L426,65" class="wire-audio" stroke-width="2" fill="none"/>
  ${LEGEND}
</svg>`

export const ENVELOPE_CASCADE_SHIMMER = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="50" cy="55" r="5" class="jack-gate-out"/><text x="50" y="72" class="jack-label" text-anchor="middle">÷32</text>

  <rect x="110" y="20" width="115" height="70" rx="2" class="module-box-highlight"/>
  <text x="167" y="35" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <text x="167" y="46" class="jack-label" text-anchor="middle">cascade chain</text>
  <circle cx="125" cy="58" r="5" class="jack-gate-in"/><text x="125" y="75" class="jack-label" text-anchor="middle">G1</text>
  <circle cx="148" cy="58" r="5" class="jack-gate-in"/><text x="148" y="75" class="jack-label" text-anchor="middle">G2</text>
  <circle cx="170" cy="58" r="5" class="jack-gate-in"/><text x="170" y="75" class="jack-label" text-anchor="middle">G3</text>
  <circle cx="193" cy="58" r="5" class="jack-out"/><text x="193" y="75" class="jack-label" text-anchor="middle">E1</text>
  <circle cx="213" cy="58" r="5" class="jack-out"/><text x="213" y="75" class="jack-label" text-anchor="middle">E2</text>

  <rect x="248" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="288" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="265" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="265" y="72" class="jack-label" text-anchor="middle">MORPH</text>
  <circle cx="310" cy="55" r="5" class="jack-out"/><text x="310" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="352" y="20" width="85" height="70" rx="2" class="module-box-highlight"/>
  <text x="394" y="35" class="mod-text" text-anchor="middle">A-101-2v</text>
  <text x="394" y="47" class="jack-label" text-anchor="middle">LPG</text>
  <circle cx="365" cy="60" r="5" class="jack-in"/><text x="365" y="77" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="388" cy="60" r="5" style="fill:#333;stroke:#b040ff"/><text x="388" y="77" class="jack-label" text-anchor="middle">CTRL</text>
  <circle cx="428" cy="60" r="5" class="jack-out"/><text x="428" y="77" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="460" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="505" y="38" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="475" cy="55" r="5" class="jack-in"/><text x="475" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="498" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="498" y="72" class="jack-label" text-anchor="middle">LVL CV</text>
  <circle cx="538" cy="55" r="5" class="jack-out"/><text x="538" y="72" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="558" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="598" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="570" cy="55" r="5" class="jack-in"/><text x="570" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="628" cy="55" r="5" class="jack-out"/><text x="628" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <path d="M50,50 L50,30 L110,30 L110,48 L120,48 L120,53" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M136,20 C136,5 148,5 148,20" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M158,20 C158,5 170,5 170,20" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M193,63 L193,100 L388,100 L388,65" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M213,63 L213,108 L265,108 L265,60" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M213,63 L213,115 L498,115 L498,60" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M310,55 L347,55 L347,60 L360,60" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M428,60 L455,60 L455,55 L470,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M538,55 L553,55" class="wire-audio" stroke-width="2" fill="none"/>
  ${LEGEND}
</svg>`

export const CLOCKED_WAVETABLE_MEDITATION = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="35" cy="55" r="5" class="jack-gate-out"/><text x="35" y="72" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="60" cy="55" r="5" class="jack-gate-out"/><text x="60" y="72" class="jack-label" text-anchor="middle">÷8</text>

  <rect x="112" y="20" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="159" y="38" class="mod-text" text-anchor="middle">MIMETIC D.</text>
  <circle cx="128" cy="55" r="5" class="jack-gate-in"/><text x="128" y="72" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="152" cy="55" r="5" class="jack-out"/><text x="152" y="72" class="jack-label" text-anchor="middle">CH1</text>
  <circle cx="175" cy="55" r="5" class="jack-out"/><text x="175" y="72" class="jack-label" text-anchor="middle">CH2</text>
  <circle cx="198" cy="55" r="5" class="jack-gate-out"/><text x="198" y="72" class="jack-label" text-anchor="middle">GATE</text>

  <rect x="230" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="270" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="245" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="245" y="72" class="jack-label" text-anchor="middle">V/OCT</text>
  <circle cx="268" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="268" y="72" class="jack-label" text-anchor="middle">MORPH</text>
  <circle cx="303" cy="55" r="5" class="jack-out"/><text x="303" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="333" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="373" y="38" class="mod-text" text-anchor="middle">QUAD VCA</text>
  <circle cx="346" cy="55" r="5" class="jack-in"/><text x="346" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="370" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="370" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="404" cy="55" r="5" class="jack-out"/><text x="404" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="434" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="474" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="447" cy="55" r="5" class="jack-in"/><text x="447" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="505" cy="55" r="5" class="jack-out"/><text x="505" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="528" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="563" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="563" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="541" cy="65" r="5" class="jack-in"/><text x="541" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="55" y="138" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <circle cx="28" cy="158" r="5" class="jack-gate-in"/><text x="28" y="175" class="jack-label" text-anchor="middle">GATE1</text>
  <circle cx="68" cy="158" r="5" class="jack-out"/><text x="68" y="175" class="jack-label" text-anchor="middle">ENV1</text>

  <path d="M60,50 C90,30 108,30 123,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M60,50 L60,95 L28,95 L28,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M152,55 L230,55 L230,44 L240,44 L240,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M175,50 L175,43 L268,43 L268,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M68,153 L68,108 L370,108 L370,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M303,55 L328,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M303,55 L328,55 L328,44 L341,44 L341,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M404,55 L429,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M505,55 L523,55 L523,65 L536,65" class="wire-audio" stroke-width="2" fill="none"/>
  ${LEGEND}
</svg>`

// ─── Techno / Industrial ──────────────────────────────────────────────────────

export const INDUSTRIAL_TECHNO_DRIVE = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">STEPPY</text>
  <circle cx="25" cy="55" r="5" class="jack-gate-in"/><text x="25" y="72" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="50" cy="55" r="5" class="jack-out"/><text x="50" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="75" cy="55" r="5" class="jack-gate-out"/><text x="75" y="72" class="jack-label" text-anchor="middle">GATE</text>

  <rect x="112" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="152" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="127" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="127" y="72" class="jack-label" text-anchor="middle">V/OCT</text>
  <circle cx="175" cy="55" r="5" class="jack-out"/><text x="175" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="214" y="20" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="261" y="35" class="mod-text" text-anchor="middle">SQUAWK</text>
  <text x="261" y="47" class="jack-label" text-anchor="middle">DIRTY</text>
  <circle cx="228" cy="60" r="5" class="jack-in"/><text x="228" y="77" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="252" cy="60" r="5" style="fill:#333;stroke:#b040ff"/><text x="252" y="77" class="jack-label" text-anchor="middle">CUTOFF</text>
  <circle cx="300" cy="60" r="5" class="jack-out"/><text x="300" y="77" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="332" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="377" y="38" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="347" cy="55" r="5" class="jack-in"/><text x="347" y="72" class="jack-label" text-anchor="middle">IN1</text>
  <circle cx="370" cy="55" r="5" class="jack-in"/><text x="370" y="72" class="jack-label" text-anchor="middle">IN2</text>
  <circle cx="413" cy="55" r="5" class="jack-out"/><text x="413" y="72" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="444" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="484" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="457" cy="55" r="5" class="jack-in"/><text x="457" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="515" cy="55" r="5" class="jack-out"/><text x="515" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="538" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="573" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="573" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="551" cy="65" r="5" class="jack-in"/><text x="551" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="138" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="30" cy="158" r="5" class="jack-gate-out"/><text x="30" y="175" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="65" cy="158" r="5" class="jack-gate-out"/><text x="65" y="175" class="jack-label" text-anchor="middle">KICK</text>

  <rect x="115" y="120" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="160" y="138" class="mod-text" text-anchor="middle">GENERATE 3</text>
  <circle cx="130" cy="158" r="5" class="jack-gate-in"/><text x="130" y="175" class="jack-label" text-anchor="middle">TRIG</text>
  <circle cx="185" cy="158" r="5" class="jack-out"/><text x="185" y="175" class="jack-label" text-anchor="middle">ENV</text>

  <rect x="230" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="270" y="138" class="mod-text" text-anchor="middle">RAMPLE</text>
  <circle cx="248" cy="158" r="5" class="jack-gate-in"/><text x="248" y="175" class="jack-label" text-anchor="middle">T1</text>
  <circle cx="288" cy="158" r="5" class="jack-out"/><text x="288" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <path d="M30,153 L30,112 L25,112 L25,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M30,153 L30,112 L130,112 L130,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M65,153 L65,108 L248,108 L248,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M50,50 L50,43 L127,43 L127,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M75,50 L75,35 L130,35 L130,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M175,55 L209,55 L209,60 L223,60" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M185,153 L185,108 L252,108 L252,60" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M300,60 L327,60 L327,55 L342,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M288,153 L288,108 L370,108 L370,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M413,55 L439,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M515,55 L533,55 L533,65 L546,65" class="wire-audio" stroke-width="2" fill="none"/>
  ${LEGEND}
</svg>`

export const POLYRHYTHMIC_RAMPLE = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="90" height="70" rx="2" class="module-box"/>
  <text x="55" y="38" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="23" cy="55" r="5" class="jack-gate-out"/><text x="23" y="72" class="jack-label" text-anchor="middle">1</text>
  <circle cx="40" cy="55" r="5" class="jack-gate-out"/><text x="40" y="72" class="jack-label" text-anchor="middle">2</text>
  <circle cx="57" cy="55" r="5" class="jack-gate-out"/><text x="57" y="72" class="jack-label" text-anchor="middle">3</text>
  <circle cx="74" cy="55" r="5" class="jack-gate-out"/><text x="74" y="72" class="jack-label" text-anchor="middle">4</text>
  <circle cx="91" cy="55" r="5" class="jack-gate-out"/><text x="91" y="72" class="jack-label" text-anchor="middle">5</text>

  <rect x="122" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="167" y="38" class="mod-text" text-anchor="middle">RAMPLE</text>
  <circle cx="135" cy="55" r="5" class="jack-gate-in"/><text x="135" y="72" class="jack-label" text-anchor="middle">T1</text>
  <circle cx="152" cy="55" r="5" class="jack-gate-in"/><text x="152" y="72" class="jack-label" text-anchor="middle">T2</text>
  <circle cx="170" cy="55" r="5" class="jack-gate-in"/><text x="170" y="72" class="jack-label" text-anchor="middle">T3</text>
  <circle cx="188" cy="55" r="5" class="jack-gate-in"/><text x="188" y="72" class="jack-label" text-anchor="middle">T4</text>
  <circle cx="205" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="205" y="72" class="jack-label" text-anchor="middle">SPD</text>
  <circle cx="202" cy="43" r="5" class="jack-out"/><text x="215" y="43" class="jack-label">OUT</text>

  <rect x="232" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="277" y="38" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="247" cy="55" r="5" class="jack-in"/><text x="247" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="270" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="270" y="72" class="jack-label" text-anchor="middle">LVL CV</text>
  <circle cx="312" cy="55" r="5" class="jack-out"/><text x="312" y="72" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="342" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="382" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="355" cy="55" r="5" class="jack-in"/><text x="355" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="413" cy="55" r="5" class="jack-out"/><text x="413" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="436" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="471" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="471" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="449" cy="65" r="5" class="jack-in"/><text x="449" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="85" height="70" rx="2" class="module-box"/>
  <text x="52" y="138" class="mod-text" text-anchor="middle">CLEP DIAZ</text>
  <circle cx="52" cy="158" r="5" class="jack-out"/><text x="52" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="122" y="120" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="167" y="138" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <circle cx="140" cy="158" r="5" class="jack-gate-in"/><text x="140" y="175" class="jack-label" text-anchor="middle">GATE</text>
  <circle cx="190" cy="158" r="5" class="jack-out"/><text x="190" y="175" class="jack-label" text-anchor="middle">ENV</text>

  <path d="M23,50 L23,95 L135,95 L135,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M40,50 L40,100 L152,100 L152,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M57,50 L57,105 L170,105 L170,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M74,50 L74,110 L188,110 L188,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M91,50 L91,112 L140,112 L140,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M52,153 L52,112 L205,112 L205,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M190,153 L190,108 L270,108 L270,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M202,38 L227,38 L227,55 L242,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M312,55 L337,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M413,55 L431,55 L431,65 L444,65" class="wire-audio" stroke-width="2" fill="none"/>
  ${LEGEND}
</svg>`

export const DARK_MINIMAL_BASSLINE = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">STEPPY</text>
  <circle cx="25" cy="55" r="5" class="jack-out"/><text x="25" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="55" cy="55" r="5" class="jack-gate-out"/><text x="55" y="72" class="jack-label" text-anchor="middle">GATE</text>

  <rect x="112" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="152" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="127" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="127" y="72" class="jack-label" text-anchor="middle">V/OCT</text>
  <circle cx="175" cy="55" r="5" class="jack-out"/><text x="175" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="214" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="254" y="38" class="mod-text" text-anchor="middle">QUAD VCA</text>
  <circle cx="227" cy="55" r="5" class="jack-in"/><text x="227" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="250" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="250" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="285" cy="55" r="5" class="jack-out"/><text x="285" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="316" y="20" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="363" y="35" class="mod-text" text-anchor="middle">SQUAWK</text>
  <text x="363" y="47" class="jack-label" text-anchor="middle">DIRTY</text>
  <circle cx="330" cy="60" r="5" class="jack-in"/><text x="330" y="77" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="355" cy="60" r="5" style="fill:#333;stroke:#b040ff"/><text x="355" y="77" class="jack-label" text-anchor="middle">CUTOFF</text>
  <circle cx="402" cy="60" r="5" class="jack-out"/><text x="402" y="77" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="432" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="477" y="38" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="447" cy="55" r="5" class="jack-in"/><text x="447" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="514" cy="55" r="5" class="jack-out"/><text x="514" y="72" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="545" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="585" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="558" cy="55" r="5" class="jack-in"/><text x="558" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="616" cy="55" r="5" class="jack-out"/><text x="616" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="10" y="120" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="57" y="138" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <circle cx="28" cy="158" r="5" class="jack-gate-in"/><text x="28" y="175" class="jack-label" text-anchor="middle">G1</text>
  <circle cx="55" cy="158" r="5" class="jack-out"/><text x="55" y="175" class="jack-label" text-anchor="middle">E1</text>
  <circle cx="80" cy="158" r="5" class="jack-out"/><text x="80" y="175" class="jack-label" text-anchor="middle">E2</text>
  <circle cx="98" cy="158" r="5" class="jack-out"/><text x="98" y="175" class="jack-label" text-anchor="middle">E3</text>

  <path d="M25,50 L25,43 L127,43 L127,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M55,50 L55,35 L28,35 L28,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M55,153 L55,108 L127,108 L127,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M80,153 L80,108 L250,108 L250,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M98,153 L98,112 L355,112 L355,65" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M175,55 L209,55 L209,44 L222,44 L222,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M285,55 L311,55 L311,60 L325,60" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M402,60 L427,60 L427,55 L442,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M514,55 L540,55" class="wire-audio" stroke-width="2" fill="none"/>
  ${LEGEND}
</svg>`

// ─── Generative / Algorithmic ─────────────────────────────────────────────────

export const BLOOM_FRACTAL_MELODY = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="50" cy="55" r="5" class="jack-gate-out"/><text x="50" y="72" class="jack-label" text-anchor="middle">CLK</text>

  <rect x="112" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="152" y="38" class="mod-text" text-anchor="middle">BLOOM</text>
  <circle cx="127" cy="55" r="5" class="jack-gate-in"/><text x="127" y="72" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="152" cy="55" r="5" class="jack-out"/><text x="152" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="175" cy="55" r="5" class="jack-gate-out"/><text x="175" y="72" class="jack-label" text-anchor="middle">GATE</text>

  <rect x="210" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="250" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="225" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="225" y="72" class="jack-label" text-anchor="middle">V/OCT</text>
  <circle cx="278" cy="55" r="5" class="jack-out"/><text x="278" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="312" y="20" width="85" height="70" rx="2" class="module-box-highlight"/>
  <text x="354" y="35" class="mod-text" text-anchor="middle">A-101-2v</text>
  <text x="354" y="47" class="jack-label" text-anchor="middle">LPG</text>
  <circle cx="325" cy="60" r="5" class="jack-in"/><text x="325" y="77" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="350" cy="60" r="5" style="fill:#333;stroke:#b040ff"/><text x="350" y="77" class="jack-label" text-anchor="middle">CTRL</text>
  <circle cx="390" cy="60" r="5" class="jack-out"/><text x="390" y="77" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="420" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="460" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="433" cy="55" r="5" class="jack-in"/><text x="433" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="491" cy="55" r="5" class="jack-out"/><text x="491" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="515" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="550" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="550" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="528" cy="65" r="5" class="jack-in"/><text x="528" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="57" y="138" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <circle cx="28" cy="158" r="5" class="jack-gate-in"/><text x="28" y="175" class="jack-label" text-anchor="middle">GATE1</text>
  <circle cx="78" cy="158" r="5" class="jack-out"/><text x="78" y="175" class="jack-label" text-anchor="middle">ENV1</text>

  <rect x="125" y="120" width="90" height="70" rx="2" class="module-box"/>
  <text x="170" y="138" class="mod-text" text-anchor="middle">QUAD PLFO</text>
  <circle cx="170" cy="158" r="5" class="jack-out"/><text x="170" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <path d="M50,50 L50,43 L112,43 L112,43 L122,43 L122,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M152,50 L152,43 L225,43 L225,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M175,50 L175,35 L28,35 L28,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M78,153 L78,108 L350,108 L350,65" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M170,153 L170,112 L225,112 L225,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M278,55 L307,55 L307,60 L320,60" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M390,60 L415,60 L415,55 L428,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M491,55 L510,55 L510,65 L523,65" class="wire-audio" stroke-width="2" fill="none"/>
  ${LEGEND}
</svg>`

export const THREE_SEQUENCER_POLYRHYTHM = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="50" cy="55" r="5" class="jack-gate-out"/><text x="50" y="72" class="jack-label" text-anchor="middle">CLK</text>

  <rect x="112" y="20" width="85" height="70" rx="2" class="module-box-highlight"/>
  <text x="154" y="38" class="mod-text" text-anchor="middle">BUFF MULT</text>
  <circle cx="127" cy="55" r="5" class="jack-gate-in"/><text x="127" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="152" cy="55" r="5" class="jack-gate-out"/><text x="152" y="72" class="jack-label" text-anchor="middle">A</text>
  <circle cx="170" cy="55" r="5" class="jack-gate-out"/><text x="170" y="72" class="jack-label" text-anchor="middle">B</text>
  <circle cx="188" cy="55" r="5" class="jack-gate-out"/><text x="188" y="72" class="jack-label" text-anchor="middle">C</text>

  <rect x="220" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="260" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="238" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="238" y="72" class="jack-label" text-anchor="middle">V/OCT</text>
  <circle cx="288" cy="55" r="5" class="jack-out"/><text x="288" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="322" y="20" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="369" y="35" class="mod-text" text-anchor="middle">SQUAWK</text>
  <text x="369" y="47" class="jack-label" text-anchor="middle">DIRTY</text>
  <circle cx="336" cy="60" r="5" class="jack-in"/><text x="336" y="77" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="360" cy="60" r="5" style="fill:#333;stroke:#b040ff"/><text x="360" y="77" class="jack-label" text-anchor="middle">CUTOFF</text>
  <circle cx="408" cy="60" r="5" class="jack-out"/><text x="408" y="77" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="440" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="485" y="38" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="455" cy="55" r="5" class="jack-in"/><text x="455" y="72" class="jack-label" text-anchor="middle">IN1</text>
  <circle cx="478" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="478" y="72" class="jack-label" text-anchor="middle">LVL CV</text>
  <circle cx="522" cy="55" r="5" class="jack-out"/><text x="522" y="72" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="552" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="592" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="565" cy="55" r="5" class="jack-in"/><text x="565" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="623" cy="55" r="5" class="jack-out"/><text x="623" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="10" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="50" y="138" class="mod-text" text-anchor="middle">BLOOM</text>
  <circle cx="30" cy="158" r="5" class="jack-gate-in"/><text x="30" y="175" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="55" cy="158" r="5" class="jack-out"/><text x="55" y="175" class="jack-label" text-anchor="middle">CV</text>

  <rect x="112" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="152" y="138" class="mod-text" text-anchor="middle">STEPPY</text>
  <circle cx="132" cy="158" r="5" class="jack-gate-in"/><text x="132" y="175" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="175" cy="158" r="5" class="jack-gate-out"/><text x="175" y="175" class="jack-label" text-anchor="middle">GATE</text>

  <rect x="215" y="120" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="262" y="138" class="mod-text" text-anchor="middle">MIMETIC D.</text>
  <circle cx="232" cy="158" r="5" class="jack-gate-in"/><text x="232" y="175" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="270" cy="158" r="5" class="jack-out"/><text x="270" y="175" class="jack-label" text-anchor="middle">CH1</text>

  <path d="M50,50 L50,43 L122,43 L122,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M152,50 L152,35 L30,35 L30,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M170,50 L170,30 L132,30 L132,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M188,50 L188,25 L232,25 L232,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M55,153 L55,108 L238,108 L238,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M175,153 L175,112 L455,112 L455,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M270,153 L270,108 L360,108 L360,65" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M270,153 L270,115 L478,115 L478,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M288,55 L317,55 L317,60 L331,60" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M408,60 L435,60 L435,55 L450,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M522,55 L547,55" class="wire-audio" stroke-width="2" fill="none"/>
  ${LEGEND}
</svg>`

// ─── Melodic / Harmonic ───────────────────────────────────────────────────────

export const DUAL_OSCILLATOR_LEAD = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="57" y="35" class="mod-text" text-anchor="middle">UNIVER</text>
  <text x="57" y="47" class="mod-text" text-anchor="middle">INTER</text>
  <circle cx="25" cy="60" r="5" class="jack-out"/><text x="25" y="77" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="57" cy="60" r="5" class="jack-gate-out"/><text x="57" y="77" class="jack-label" text-anchor="middle">GATE</text>
  <circle cx="92" cy="60" r="5" class="jack-out"/><text x="92" y="77" class="jack-label" text-anchor="middle">MOD</text>

  <rect x="128" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="168" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="143" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="143" y="72" class="jack-label" text-anchor="middle">V/OCT</text>
  <circle cx="168" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="168" y="72" class="jack-label" text-anchor="middle">MORPH</text>
  <circle cx="200" cy="55" r="5" class="jack-out"/><text x="200" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="232" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="272" y="38" class="mod-text" text-anchor="middle">QUAD VCA</text>
  <circle cx="245" cy="55" r="5" class="jack-in"/><text x="245" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="268" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="268" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="302" cy="55" r="5" class="jack-out"/><text x="302" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="335" y="20" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="382" y="35" class="mod-text" text-anchor="middle">SQUAWK</text>
  <text x="382" y="47" class="jack-label" text-anchor="middle">DIRTY</text>
  <circle cx="349" cy="60" r="5" class="jack-in"/><text x="349" y="77" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="374" cy="60" r="5" style="fill:#333;stroke:#b040ff"/><text x="374" y="77" class="jack-label" text-anchor="middle">CUTOFF</text>
  <circle cx="421" cy="60" r="5" class="jack-out"/><text x="421" y="77" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="453" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="493" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="466" cy="55" r="5" class="jack-in"/><text x="466" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="524" cy="55" r="5" class="jack-out"/><text x="524" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="547" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="582" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="582" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="560" cy="65" r="5" class="jack-in"/><text x="560" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="57" y="138" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <circle cx="28" cy="158" r="5" class="jack-gate-in"/><text x="28" y="175" class="jack-label" text-anchor="middle">GATE1</text>
  <circle cx="58" cy="158" r="5" class="jack-out"/><text x="58" y="175" class="jack-label" text-anchor="middle">ENV1</text>
  <circle cx="85" cy="158" r="5" class="jack-out"/><text x="85" y="175" class="jack-label" text-anchor="middle">ENV2</text>

  <path d="M25,55 L25,43 L143,43 L143,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M57,55 L57,35 L28,35 L28,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M92,55 L92,30 L168,30 L168,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M58,153 L58,108 L268,108 L268,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M85,153 L85,115 L374,115 L374,65" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M200,55 L227,55 L227,44 L240,44 L240,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M302,55 L330,55 L330,60 L344,60" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M421,60 L448,60 L448,55 L461,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M524,55 L542,55 L542,65 L555,65" class="wire-audio" stroke-width="2" fill="none"/>
  <text x="350" y="210" class="patch-note" text-anchor="middle">Dashed = CV modulation · Solid = audio · Yellow = gate/trigger</text>
</svg>`

export const SAMPLE_SYNTH_UNISON = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">BLOOM</text>
  <circle cx="25" cy="55" r="5" class="jack-gate-in"/><text x="25" y="72" class="jack-label" text-anchor="middle">CLK</text>
  <circle cx="50" cy="55" r="5" class="jack-out"/><text x="50" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="75" cy="55" r="5" class="jack-gate-out"/><text x="75" y="72" class="jack-label" text-anchor="middle">GATE</text>

  <rect x="112" y="20" width="85" height="70" rx="2" class="module-box-highlight"/>
  <text x="154" y="38" class="mod-text" text-anchor="middle">BUFF MULT</text>
  <circle cx="127" cy="55" r="5" class="jack-in"/><text x="127" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="158" cy="55" r="5" class="jack-out"/><text x="158" y="72" class="jack-label" text-anchor="middle">A</text>
  <circle cx="188" cy="55" r="5" class="jack-out"/><text x="188" y="72" class="jack-label" text-anchor="middle">B</text>

  <rect x="220" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="260" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="235" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="235" y="72" class="jack-label" text-anchor="middle">V/OCT</text>
  <circle cx="293" cy="55" r="5" class="jack-out"/><text x="293" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="325" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="370" y="38" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="340" cy="55" r="5" class="jack-in"/><text x="340" y="72" class="jack-label" text-anchor="middle">IN1</text>
  <circle cx="365" cy="55" r="5" class="jack-in"/><text x="365" y="72" class="jack-label" text-anchor="middle">IN2</text>
  <circle cx="408" cy="55" r="5" class="jack-out"/><text x="408" y="72" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="440" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="480" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="453" cy="55" r="5" class="jack-in"/><text x="453" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="511" cy="55" r="5" class="jack-out"/><text x="511" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="535" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="570" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="570" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="548" cy="65" r="5" class="jack-in"/><text x="548" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="50" y="138" class="mod-text" text-anchor="middle">RAMPLE</text>
  <circle cx="30" cy="158" r="5" style="fill:#333;stroke:#b040ff"/><text x="30" y="175" class="jack-label" text-anchor="middle">PITCH</text>
  <circle cx="65" cy="158" r="5" class="jack-out"/><text x="65" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="115" y="120" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="160" y="138" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <circle cx="133" cy="158" r="5" class="jack-gate-in"/><text x="133" y="175" class="jack-label" text-anchor="middle">GATE1</text>
  <circle cx="183" cy="158" r="5" class="jack-out"/><text x="183" y="175" class="jack-label" text-anchor="middle">ENV1</text>

  <rect x="230" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="270" y="138" class="mod-text" text-anchor="middle">QUAD VCA</text>
  <circle cx="250" cy="158" r="5" class="jack-in"/><text x="250" y="175" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="275" cy="158" r="5" style="fill:#333;stroke:#b040ff"/><text x="275" y="175" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="300" cy="158" r="5" class="jack-out"/><text x="300" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <path d="M50,50 L50,43 L122,43 L122,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M75,50 L75,35 L133,35 L133,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M158,50 L158,43 L235,43 L235,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M188,50 L188,35 L30,35 L30,153" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M183,153 L183,108 L275,108 L275,153" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M293,55 L320,55 L320,44 L335,44 L335,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M65,153 L65,108 L250,108 L250,153" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M300,153 L300,108 L365,108 L365,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M408,55 L435,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M511,55 L530,55 L530,65 L543,65" class="wire-audio" stroke-width="2" fill="none"/>
  <text x="350" y="210" class="patch-note" text-anchor="middle">Dashed = CV modulation · Solid = audio · Yellow = gate/trigger</text>
</svg>`

// ─── Percussive / Rhythmic ────────────────────────────────────────────────────

export const LPG_DRUM_MACHINE = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="28" cy="55" r="5" class="jack-gate-out"/><text x="28" y="72" class="jack-label" text-anchor="middle">KICK</text>
  <circle cx="60" cy="55" r="5" class="jack-gate-out"/><text x="60" y="72" class="jack-label" text-anchor="middle">PERC</text>

  <rect x="112" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="152" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="127" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="127" y="72" class="jack-label" text-anchor="middle">V/OCT</text>
  <circle cx="175" cy="55" r="5" class="jack-out"/><text x="175" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="215" y="20" width="85" height="70" rx="2" class="module-box-highlight"/>
  <text x="257" y="35" class="mod-text" text-anchor="middle">A-101-2v</text>
  <text x="257" y="47" class="jack-label" text-anchor="middle">LPG</text>
  <circle cx="228" cy="60" r="5" class="jack-in"/><text x="228" y="77" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="252" cy="60" r="5" style="fill:#333;stroke:#b040ff"/><text x="252" y="77" class="jack-label" text-anchor="middle">CTRL</text>
  <circle cx="292" cy="60" r="5" class="jack-out"/><text x="292" y="77" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="325" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="365" y="38" class="mod-text" text-anchor="middle">QUAD VCA</text>
  <circle cx="338" cy="55" r="5" class="jack-in"/><text x="338" y="72" class="jack-label" text-anchor="middle">IN1</text>
  <circle cx="362" cy="55" r="5" class="jack-in"/><text x="362" y="72" class="jack-label" text-anchor="middle">IN2</text>
  <circle cx="396" cy="55" r="5" class="jack-out"/><text x="396" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="428" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="468" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="441" cy="55" r="5" class="jack-in"/><text x="441" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="499" cy="55" r="5" class="jack-out"/><text x="499" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="522" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="557" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="557" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="535" cy="65" r="5" class="jack-in"/><text x="535" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="57" y="138" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <circle cx="28" cy="158" r="5" class="jack-gate-in"/><text x="28" y="175" class="jack-label" text-anchor="middle">GATE1</text>
  <circle cx="78" cy="158" r="5" class="jack-out"/><text x="78" y="175" class="jack-label" text-anchor="middle">ENV1</text>

  <rect x="130" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="170" y="138" class="mod-text" text-anchor="middle">RAMPLE</text>
  <circle cx="148" cy="158" r="5" class="jack-gate-in"/><text x="148" y="175" class="jack-label" text-anchor="middle">T1</text>
  <circle cx="185" cy="158" r="5" class="jack-out"/><text x="185" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <path d="M28,50 L28,95 L28,95 L28,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M28,50 L28,40 L252,40 L252,55" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M60,50 L60,35 L148,35 L148,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M78,153 L78,108 L127,108 L127,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M175,55 L210,55 L210,60 L223,60" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M292,60 L320,60 L320,55 L333,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M185,153 L185,108 L362,108 L362,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M396,55 L423,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M499,55 L517,55 L517,65 L530,65" class="wire-audio" stroke-width="2" fill="none"/>
  <text x="350" y="210" class="patch-note" text-anchor="middle">Dashed = CV modulation · Solid = audio · Yellow = gate/trigger</text>
</svg>`

export const FORECASTLE_PERCUSSION = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">PAMELA'S</text>
  <circle cx="23" cy="55" r="5" class="jack-gate-out"/><text x="23" y="72" class="jack-label" text-anchor="middle">K</text>
  <circle cx="40" cy="55" r="5" class="jack-gate-out"/><text x="40" y="72" class="jack-label" text-anchor="middle">S</text>
  <circle cx="57" cy="55" r="5" class="jack-gate-out"/><text x="57" y="72" class="jack-label" text-anchor="middle">HH</text>
  <circle cx="75" cy="55" r="5" class="jack-gate-out"/><text x="75" y="72" class="jack-label" text-anchor="middle">ACC</text>

  <rect x="112" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="152" y="38" class="mod-text" text-anchor="middle">RAMPLE</text>
  <circle cx="125" cy="55" r="5" class="jack-gate-in"/><text x="125" y="72" class="jack-label" text-anchor="middle">T1</text>
  <circle cx="142" cy="55" r="5" class="jack-gate-in"/><text x="142" y="72" class="jack-label" text-anchor="middle">T2</text>
  <circle cx="160" cy="55" r="5" class="jack-gate-in"/><text x="160" y="72" class="jack-label" text-anchor="middle">T3</text>
  <circle cx="177" cy="55" r="5" class="jack-gate-in"/><text x="177" y="72" class="jack-label" text-anchor="middle">T4</text>
  <circle cx="185" cy="43" r="5" class="jack-out"/><text x="196" y="43" class="jack-label">OUT</text>

  <rect x="225" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="270" y="38" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="240" cy="55" r="5" class="jack-in"/><text x="240" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="263" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="263" y="72" class="jack-label" text-anchor="middle">LVL CV</text>
  <circle cx="305" cy="55" r="5" class="jack-out"/><text x="305" y="72" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="335" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="375" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="348" cy="55" r="5" class="jack-in"/><text x="348" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="406" cy="55" r="5" class="jack-out"/><text x="406" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="430" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="465" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="465" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="443" cy="65" r="5" class="jack-in"/><text x="443" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="110" height="70" rx="2" class="module-box-highlight"/>
  <text x="65" y="138" class="mod-text" text-anchor="middle">FORECASTLE</text>
  <circle cx="25" cy="158" r="5" class="jack-gate-in"/><text x="25" y="175" class="jack-label" text-anchor="middle">G1</text>
  <circle cx="45" cy="158" r="5" class="jack-gate-in"/><text x="45" y="175" class="jack-label" text-anchor="middle">G2</text>
  <circle cx="65" cy="158" r="5" class="jack-gate-in"/><text x="65" y="175" class="jack-label" text-anchor="middle">G3</text>
  <circle cx="85" cy="158" r="5" class="jack-gate-in"/><text x="85" y="175" class="jack-label" text-anchor="middle">G4</text>
  <circle cx="112" cy="158" r="5" class="jack-out"/><text x="112" y="175" class="jack-label" text-anchor="middle">E4</text>

  <rect x="145" y="120" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="192" y="135" class="mod-text" text-anchor="middle">SQUAWK</text>
  <text x="192" y="147" class="jack-label" text-anchor="middle">DIRTY</text>
  <circle cx="158" cy="163" r="5" class="jack-in"/><text x="158" y="180" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="232" cy="163" r="5" class="jack-out"/><text x="232" y="180" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="265" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="305" y="138" class="mod-text" text-anchor="middle">QUAD VCA</text>
  <circle cx="278" cy="158" r="5" class="jack-in"/><text x="278" y="175" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="320" cy="158" r="5" class="jack-out"/><text x="320" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <path d="M23,50 L23,95 L125,95 L125,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M40,50 L40,100 L142,100 L142,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M57,50 L57,105 L160,105 L160,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M75,50 L75,110 L177,110 L177,50" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M23,50 L23,95 L10,95 L10,153 L20,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M40,100 L10,100 L10,153 L10,148 L45,148 L45,153" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M57,105 L8,105 L8,158 L60,158" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M75,110 L6,110 L6,163 L80,163 L80,158" class="wire-gate" stroke-width="1.5" fill="none"/>
  <path d="M112,153 L112,108 L263,108 L263,55" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M185,38 L220,38 L220,55 L235,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M232,163 L260,163 L260,108 L320,108 L320,153" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M320,153 L320,108 L240,108 L240,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M305,55 L330,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M406,55 L425,55 L425,65 L438,65" class="wire-audio" stroke-width="2" fill="none"/>
  <text x="350" y="210" class="patch-note" text-anchor="middle">Dashed = CV modulation · Solid = audio · Yellow = gate/trigger</text>
</svg>`

// ─── Experimental ─────────────────────────────────────────────────────────────

export const SELF_PATCHING_FEEDBACK = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="50" y="38" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="25" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="25" y="72" class="jack-label" text-anchor="middle">FM</text>
  <circle cx="65" cy="55" r="5" class="jack-out"/><text x="65" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="120" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="160" y="38" class="mod-text" text-anchor="middle">QUADRATT</text>
  <circle cx="133" cy="55" r="5" class="jack-in"/><text x="133" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="193" cy="55" r="5" class="jack-out"/><text x="193" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="230" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="270" y="38" class="mod-text" text-anchor="middle">QUAD VCA</text>
  <circle cx="243" cy="55" r="5" class="jack-in"/><text x="243" y="72" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="267" cy="55" r="5" style="fill:#333;stroke:#b040ff"/><text x="267" y="72" class="jack-label" text-anchor="middle">CV</text>
  <circle cx="300" cy="55" r="5" class="jack-out"/><text x="300" y="72" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="335" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="375" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="348" cy="55" r="5" class="jack-in"/><text x="348" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="406" cy="55" r="5" class="jack-out"/><text x="406" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="430" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="465" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="465" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="443" cy="65" r="5" class="jack-in"/><text x="443" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="55" y="138" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="28" cy="158" r="5" class="jack-in"/><text x="28" y="175" class="jack-label" text-anchor="middle">IN</text>
  <circle cx="55" cy="158" r="5" style="fill:#333;stroke:#b040ff"/><text x="55" y="175" class="jack-label" text-anchor="middle">LVL CV</text>
  <circle cx="88" cy="158" r="5" class="jack-out"/><text x="88" y="175" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="130" y="120" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="175" y="138" class="mod-text" text-anchor="middle">GENERATE 3</text>
  <circle cx="155" cy="158" r="5" class="jack-out"/><text x="155" y="175" class="jack-label" text-anchor="middle">ENV</text>

  <rect x="250" y="120" width="90" height="70" rx="2" class="module-box"/>
  <text x="295" y="138" class="mod-text" text-anchor="middle">QUAD PLFO</text>
  <circle cx="295" cy="158" r="5" class="jack-out"/><text x="295" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <path d="M65,50 L65,43 L128,43 L128,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M193,50 C220,5 50,5 25,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M65,55 L115,55 L115,95 L28,95 L28,153" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M155,153 L155,108 L267,108 L267,50" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M295,153 L295,115 L267,115" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M193,55 L225,55 L225,44 L238,44 L238,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M88,153 L88,108 L243,108 L243,50" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M300,55 L330,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M406,55 L425,55 L425,65 L438,65" class="wire-audio" stroke-width="2" fill="none"/>
  <text x="350" y="210" class="patch-note" text-anchor="middle">Dashed = CV modulation · Solid = audio · Feedback loop arcs above Osiris</text>
</svg>`

export const MODULATION_CROSSFADE = `<svg width="700" height="220" viewBox="0 0 700 220">
  <rect x="10" y="20" width="100" height="70" rx="2" class="module-box-highlight"/>
  <text x="60" y="38" class="mod-text" text-anchor="middle">QUAD PLFO</text>
  <circle cx="23" cy="55" r="5" class="jack-out"/><text x="23" y="72" class="jack-label" text-anchor="middle">0.05Hz</text>
  <circle cx="45" cy="55" r="5" class="jack-out"/><text x="45" y="72" class="jack-label" text-anchor="middle">0.07Hz</text>
  <circle cx="68" cy="55" r="5" class="jack-out"/><text x="68" y="72" class="jack-label" text-anchor="middle">0.11Hz</text>
  <circle cx="100" cy="55" r="5" class="jack-out"/><text x="100" y="72" class="jack-label" text-anchor="middle">0.13Hz</text>

  <rect x="130" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="170" y="38" class="mod-text" text-anchor="middle">QUADRATT</text>
  <circle cx="143" cy="48" r="5" class="jack-in"/><text x="143" y="64" class="jack-label" text-anchor="middle">IN1</text>
  <circle cx="163" cy="48" r="5" class="jack-in"/><text x="163" y="64" class="jack-label" text-anchor="middle">IN2</text>
  <circle cx="183" cy="48" r="5" class="jack-in"/><text x="183" y="64" class="jack-label" text-anchor="middle">IN3</text>
  <circle cx="200" cy="48" r="5" class="jack-in"/><text x="200" y="64" class="jack-label" text-anchor="middle">IN4</text>
  <circle cx="143" cy="74" r="5" class="jack-out"/><text x="143" y="88" class="jack-label" text-anchor="middle">1</text>
  <circle cx="163" cy="74" r="5" class="jack-out"/><text x="163" y="88" class="jack-label" text-anchor="middle">2</text>
  <circle cx="183" cy="74" r="5" class="jack-out"/><text x="183" y="88" class="jack-label" text-anchor="middle">3</text>
  <circle cx="200" cy="74" r="5" class="jack-out"/><text x="200" y="88" class="jack-label" text-anchor="middle">4</text>

  <rect x="240" y="20" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="285" y="38" class="mod-text" text-anchor="middle">MEGA-TANG</text>
  <circle cx="255" cy="48" r="5" class="jack-in"/><text x="255" y="64" class="jack-label" text-anchor="middle">IN1</text>
  <circle cx="272" cy="48" r="5" class="jack-in"/><text x="272" y="64" class="jack-label" text-anchor="middle">IN2</text>
  <circle cx="290" cy="48" r="5" class="jack-in"/><text x="290" y="64" class="jack-label" text-anchor="middle">IN3</text>
  <circle cx="308" cy="48" r="5" class="jack-in"/><text x="308" y="64" class="jack-label" text-anchor="middle">IN4</text>
  <circle cx="255" cy="74" r="5" style="fill:#333;stroke:#b040ff"/><text x="255" y="88" class="jack-label" text-anchor="middle">L1</text>
  <circle cx="272" cy="74" r="5" style="fill:#333;stroke:#b040ff"/><text x="272" y="88" class="jack-label" text-anchor="middle">L2</text>
  <circle cx="290" cy="74" r="5" style="fill:#333;stroke:#b040ff"/><text x="290" y="88" class="jack-label" text-anchor="middle">L3</text>
  <circle cx="308" cy="74" r="5" style="fill:#333;stroke:#b040ff"/><text x="308" y="88" class="jack-label" text-anchor="middle">L4</text>
  <circle cx="322" cy="55" r="5" class="jack-out"/><text x="322" y="72" class="jack-label" text-anchor="middle">MIX</text>

  <rect x="358" y="20" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="398" y="38" class="mod-text" text-anchor="middle">DUAL FX</text>
  <circle cx="371" cy="55" r="5" class="jack-in"/><text x="371" y="72" class="jack-label" text-anchor="middle">INL</text>
  <circle cx="429" cy="55" r="5" class="jack-out"/><text x="429" y="72" class="jack-label" text-anchor="middle">OUTL</text>

  <rect x="452" y="20" width="70" height="70" rx="2" class="module-box"/>
  <text x="487" y="38" class="mod-text" text-anchor="middle">LINE</text>
  <text x="487" y="50" class="jack-label" text-anchor="middle">OUT 1U</text>
  <circle cx="465" cy="65" r="5" class="jack-in"/><text x="465" y="82" class="jack-label" text-anchor="middle">INL</text>

  <rect x="10" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="50" y="138" class="mod-text" text-anchor="middle">OSIRIS</text>
  <circle cx="50" cy="158" r="5" class="jack-out"/><text x="50" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="115" y="120" width="80" height="70" rx="2" class="module-box-highlight"/>
  <text x="155" y="138" class="mod-text" text-anchor="middle">RAMPLE</text>
  <circle cx="155" cy="158" r="5" class="jack-out"/><text x="155" y="175" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="220" y="120" width="95" height="70" rx="2" class="module-box-highlight"/>
  <text x="267" y="135" class="mod-text" text-anchor="middle">SQUAWK</text>
  <text x="267" y="147" class="jack-label" text-anchor="middle">DIRTY</text>
  <circle cx="267" cy="163" r="5" class="jack-out"/><text x="267" y="180" class="jack-label" text-anchor="middle">OUT</text>

  <rect x="340" y="120" width="90" height="70" rx="2" class="module-box-highlight"/>
  <text x="385" y="138" class="mod-text" text-anchor="middle">GENERATE 3</text>
  <circle cx="385" cy="158" r="5" class="jack-out"/><text x="385" y="175" class="jack-label" text-anchor="middle">AUDIO</text>

  <path d="M23,50 L23,43 L138,43 L138,43" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M45,50 L45,38 L163,38 L163,43" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M68,50 L68,33 L183,33 L183,43" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M100,50 L100,28 L200,28 L200,43" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M143,74 L143,95 L255,95 L255,74" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M163,74 L163,98 L272,98 L272,74" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M183,74 L183,102 L290,102 L290,74" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M200,74 L200,106 L308,106 L308,74" class="wire-mod" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <path d="M50,153 L50,108 L255,108 L255,53" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M155,153 L155,112 L272,112 L272,53" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M267,158 L267,116 L290,116 L290,53" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M385,153 L385,120 L308,120 L308,53" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M322,55 L353,55" class="wire-audio" stroke-width="2" fill="none"/>
  <path d="M429,55 L447,55 L447,65 L460,65" class="wire-audio" stroke-width="2" fill="none"/>
  <text x="350" y="210" class="patch-note" text-anchor="middle">4 LFOs at different rates crossfade 4 sources · Dashed = CV · Solid = audio</text>
</svg>`
