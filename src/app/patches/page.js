import Nav from '../../components/Nav'
import PatchesSection from '../../components/PatchesSection'

export const metadata = {
  title: 'Patch Ideas · Modular Synthesis Field Guide',
}

export default function PatchesPage() {
  return (
    <>
      <Nav />
      <PatchesSection />
      <footer>
        MODULAR SYNTHESIS FIELD GUIDE · EURORACK + GRANDMOTHER + EREBUS RE + POLYEND PLAY + ELEKTRON DIGITAKT<br />
        <span style={{ marginTop: 8, display: 'block' }}>Intellijel 7U · 20 Eurorack Modules · 5 Standalone Instruments</span>
      </footer>
    </>
  )
}
