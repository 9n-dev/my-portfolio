import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
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
        {projects.map((project, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const projectRef = useScrollAnimation()
          
          return (
            <div 
              key={project.id} 
              ref={projectRef}
              className={`project-card animate-on-scroll delay-${index * 100}`}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
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
          )
        })}
      </div>
    </Section>
  )
}

export default Projects