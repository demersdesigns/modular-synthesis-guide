import '../styles/globals.css'

export const metadata = {
  title: 'Modular Synthesis Field Guide',
  description: 'Tutorials, patch diagrams & techniques for your personal Eurorack system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
