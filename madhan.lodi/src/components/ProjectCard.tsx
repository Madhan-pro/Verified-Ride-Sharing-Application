import React from 'react'
import './ProjectCard.css'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  span: number
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article 
      className={`project-card ${project.span === 2 ? 'span-2' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
