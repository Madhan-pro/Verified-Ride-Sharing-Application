import React from 'react'
import ProjectCard from './ProjectCard'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Sustainable Fashion Brand',
    category: 'Brand Identity',
    description: 'Complete brand overhaul for an eco-conscious fashion startup, including logo design, color palette, and brand guidelines.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 2
  },
  {
    id: 2,
    title: 'Tech Startup Website',
    category: 'Web Design',
    description: 'Modern, responsive website design for a B2B SaaS platform focused on user experience and conversion.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 1
  },
  {
    id: 3,
    title: 'Artisan Coffee Packaging',
    category: 'Packaging Design',
    description: 'Premium packaging design series for specialty coffee roaster, emphasizing craft and quality.',
    image: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 1
  },
  {
    id: 4,
    title: 'Wellness App Interface',
    category: 'UI/UX Design',
    description: 'Intuitive mobile app design for mental wellness platform with focus on accessibility and calm aesthetics.',
    image: 'https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 2
  },
  {
    id: 5,
    title: 'Restaurant Brand Refresh',
    category: 'Brand Strategy',
    description: 'Strategic repositioning and visual identity refresh for upscale dining establishment.',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 1
  },
  {
    id: 6,
    title: 'Annual Report Design',
    category: 'Editorial Design',
    description: 'Clean, data-driven annual report design for non-profit organization with emphasis on storytelling.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 1
  }
]

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-label">Selected Work</div>
          <h2>Projects That Define Excellence</h2>
          <p className="portfolio-intro">
            A curated selection of recent projects showcasing strategic thinking, creative execution, and measurable impact across various industries.
          </p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
