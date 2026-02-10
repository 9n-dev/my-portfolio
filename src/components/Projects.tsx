import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
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
            
            <button onClick={() => toggleProject(project.id)}>
              {expandedId === project.id ? t.projects.hideDetails : t.projects.viewDetails}
            </button>
            
            {expandedId === project.id && (
              <div className="project-details">
                <h4>{t.projects.technologies}:</h4>
                <ul>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {t.projects.viewProject} →
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