import Nav from '../components/Nav'
import SystemSection from '../components/SystemSection'
import ConceptsSection from '../components/ConceptsSection'
import TechniquesSection from '../components/TechniquesSection'
import ReferenceSection from '../components/ReferenceSection'

export default function Home() {
  return (
    <>
      <header>
        <div className="header-label">Personal Eurorack System · Learning Resource</div>
        <h1>MODULAR<br /><span>SYNTHESIS</span><br />FIELD GUIDE</h1>
        <p className="header-sub">Tutorials, patch diagrams &amp; techniques tailored to your specific system</p>
        <div className="module-count-badge">20 modules detected · 3 rows · Intellijel 7U case</div>
      </header>

      <Nav />

      <SystemSection />
      <ConceptsSection />
      <TechniquesSection />
      <ReferenceSection />

      <footer>
        MODULAR SYNTHESIS FIELD GUIDE · EURORACK + GRANDMOTHER + EREBUS RE + POLYEND PLAY + ELEKTRON DIGITAKT<br />
        <span style={{ marginTop: 8, display: 'block' }}>Intellijel 7U · 20 Eurorack Modules · 5 Standalone Instruments</span>
      </footer>
    </>
  )
}
