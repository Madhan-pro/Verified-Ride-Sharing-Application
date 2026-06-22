import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navigation isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
