import Nav from '../../components/Nav'
import GrandmotherSection from '../../components/GrandmotherSection'

export const metadata = {
  title: 'Grandmother · Modular Synthesis Field Guide',
}

export default function GrandmotherPage() {
  return (
    <>
      <Nav />
      <GrandmotherSection />
      <footer>
        MODULAR SYNTHESIS FIELD GUIDE · EURORACK + GRANDMOTHER + EREBUS RE + POLYEND PLAY + ELEKTRON DIGITAKT<br />
        <span style={{ marginTop: 8, display: 'block' }}>Intellijel 7U · 20 Eurorack Modules · 5 Standalone Instruments</span>
      </footer>
    </>
  )
}
