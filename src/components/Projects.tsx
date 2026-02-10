import { useState } from 'react'
import Section from './Section'
import { type Project } from '../types'

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  
  const toggleProject = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }
  }
  
  return (
    <Section title="Proyectos" id="projects">
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <button onClick={() => toggleProject(project.id)}>
              {expandedId === project.id ? 'Ocultar detalles' : 'Ver detalles'}
            </button>
            
            {expandedId === project.id && (
              <div className="project-details">
                <h4>Tecnologías utilizadas:</h4>
                <ul>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver proyecto →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Projects