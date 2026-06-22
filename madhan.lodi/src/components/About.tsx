import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-label">About Me</div>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Creating Meaningful Connections Through Design</h2>
            <p>
              With over 8 years of experience in brand strategy and creative direction, I help businesses and individuals craft authentic identities that resonate with their audiences.
            </p>
            <p>
              My approach combines strategic thinking with creative execution, ensuring every project not only looks beautiful but also achieves measurable results. I believe in the power of storytelling and the importance of creating experiences that leave lasting impressions.
            </p>
            <p>
              When I'm not working on client projects, you'll find me exploring new design trends, mentoring emerging creatives, or contributing to open-source design systems.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
