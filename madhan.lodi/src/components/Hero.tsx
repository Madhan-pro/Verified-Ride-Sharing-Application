import React from 'react'
import Button from './Button'
import './Hero.css'

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Brands<br />That Resonate
          </h1>
          <p className="hero-description">
            A creative professional specializing in brand strategy, visual identity, and digital experiences that connect with audiences and drive meaningful engagement.
          </p>
          <div className="hero-actions">
            <Button variant="primary" onClick={scrollToContact}>
              Get In Touch
            </Button>
            <Button variant="secondary" onClick={scrollToPortfolio}>
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Professional workspace"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
