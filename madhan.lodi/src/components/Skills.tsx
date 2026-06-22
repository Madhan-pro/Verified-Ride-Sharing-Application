import React from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Brand Strategy',
    skills: [
      'Brand Positioning',
      'Market Research',
      'Competitive Analysis',
      'Brand Guidelines',
      'Messaging Framework'
    ]
  },
  {
    title: 'Visual Design',
    skills: [
      'Logo Design',
      'Typography',
      'Color Theory',
      'Layout Design',
      'Print Design'
    ]
  },
  {
    title: 'Digital',
    skills: [
      'UI/UX Design',
      'Web Design',
      'Responsive Design',
      'Prototyping',
      'Design Systems'
    ]
  },
  {
    title: 'Tools & Software',
    skills: [
      'Figma',
      'Adobe Creative Suite',
      'Sketch',
      'Webflow',
      'Framer'
    ]
  }
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-label">Expertise</div>
          <h2>Skills & Capabilities</h2>
          <p className="skills-intro">
            A comprehensive skill set built through years of hands-on experience, continuous learning, and successful project delivery across diverse industries.
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
