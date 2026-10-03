import { useEffect } from 'react'
import Clients from './components/Clients'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Method from './components/Method'
import Nav from './components/Nav'
import Packages from './components/Packages'

export default function App() {
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (!id) return
    document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Packages />
        <Clients />
        <Method />
      </main>
      <Footer />
    </>
  )
}
