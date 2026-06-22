import React from 'react'
import './Navigation.css'

interface NavigationProps {
  isScrolled: boolean
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navigation-container">
        <button 
          className="navigation-brand"
          onClick={() => scrollToSection('hero')}
          aria-label="Go to top"
        >
          Your Name
        </button>
        
        <ul className="navigation-links">
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('portfolio')}>Work</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
