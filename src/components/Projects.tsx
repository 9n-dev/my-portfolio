import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import TechIcon from './TechIcon'
import { type Project } from '../types'

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  const { t } = useLanguage()
  const [expandedId, setExpandedId] = useState<number | null>(null)
  
  const toggleProject = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }
  }
  
  return (
    <Section title={t.projects.title} id="projects">
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            {/* Botones de acción */}
            <div className="project-actions">
              <button 
                onClick={() => toggleProject(project.id)}
                className="btn-secondary"
              >
                {expandedId === project.id ? t.projects.hideDetails : t.projects.viewDetails}
              </button>
              
              <div className="project-links">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-icon"
                    aria-label="Ver código en GitHub"
                  >
                    <TechIcon name="GitHub" size={20} />
                    GitHub
                  </a>
                )}
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-icon btn-primary"
                    aria-label="Ver proyecto en vivo"
                  >
                    <TechIcon name="Web" size={20} />
                    {t.projects.viewProject}
                  </a>
                )}
              </div>
            </div>
            
            {expandedId === project.id && (
              <div className="project-details">
                <h4>{t.projects.technologies}:</h4>
                <ul className="tech-list">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tech-badge">
                      <TechIcon name={tech} size={16} />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Projects