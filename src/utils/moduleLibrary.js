/**
 * moduleLibrary.js
 *
 * Default metadata for every module in the system.
 * Each entry provides label, optional sublabel, width, and highlight status.
 * Jacks are always specified per-diagram inside diagramLayout specs —
 * this library only stores the properties that would otherwise be
 * repeated identically in every diagram that uses a given module.
 */
export const LIB = {
  PAMELAS:    { label: "PAMELA'S",   w: 80,  highlight: false },
  STEPPY:     { label: 'STEPPY',     w: 80,  highlight: true  },
  BLOOM:      { label: 'BLOOM',      w: 80,  highlight: true  },
  MIMETIC:    { label: 'MIMETIC D.', w: 95,  highlight: true  },
  OSIRIS:     { label: 'OSIRIS',     w: 80,  highlight: true  },
  RAMPLE:     { label: 'RAMPLE',     w: 85,  highlight: true  },
  QUAD_VCA:   { label: 'QUAD VCA',   w: 85,  highlight: true  },
  QUAD_PLFO:  { label: 'QUAD PLFO',  w: 95,  highlight: false },
  QUADRATT:   { label: 'QUADRATT',   w: 85,  highlight: true  },
  FORECASTLE: { label: 'FORECASTLE', w: 100, highlight: true  },
  LPG:        { label: 'A-101-2v',   sublabel: 'LPG',    w: 85, highlight: true  },
  SQUAWK:     { label: 'SQUAWK',     sublabel: 'DIRTY',   w: 95, highlight: true  },
  MEGATANG:   { label: 'MEGA-TANG',  w: 90,  highlight: true  },
  DUALFX:     { label: 'DUAL FX',    w: 80,  highlight: true  },
  LINEOUT:    { label: 'LINE',       sublabel: 'OUT 1U',  w: 70, highlight: false },
  GENERATE3:  { label: 'GENERATE 3', w: 90,  highlight: true  },
  BUFFMULT:   { label: 'BUFF MULT',  w: 85,  highlight: true  },
  CLEP:       { label: 'CLEP DIAZ',  w: 85,  highlight: false },
  UNIVINTER:  { label: 'UNIVER',     sublabel: 'INTER',   w: 95, highlight: true  },
}
