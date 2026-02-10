import { useLanguage } from '../contexts/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Section from './Section'
import TechIcon from './TechIcon'
import { skillsByCategory } from '../data/portfolio'

function SkillsImproved() {
  const { t, language } = useLanguage()
  const frontendRef = useScrollAnimation()
  const backendRef = useScrollAnimation()
  const toolsRef = useScrollAnimation()
  
  const translateLevel = (level: string): string => {
    const levelMap: { [key: string]: string } = {
      'Principiante': language === 'es' ? 'Principiante' : 'Beginner',
      'Intermedio': language === 'es' ? 'Intermedio' : 'Intermediate',
      'Avanzado': language === 'es' ? 'Avanzado' : 'Advanced',
      'Experto': language === 'es' ? 'Experto' : 'Expert',
      'Aprendiendo': language === 'es' ? 'Aprendiendo' : 'Learning',
      'Básico': language === 'es' ? 'Básico' : 'Basic'
    }
    return levelMap[level] || level
  }
  
  return (
    <Section title={t.skills.title} id="skills">
      <div className="skills-container">
        {/* Frontend */}
        <div ref={frontendRef} className="skill-category animate-on-scroll">
          <h3 className="category-title">
            <span className="category-icon">🎨</span>
            {t.skills.categories.frontend}
          </h3>
          <div className="skills-grid">
            {skillsByCategory.frontend.map((skill) => (
              <div key={skill.name} className="skill-card">
                <TechIcon name={skill.name} size={40} className="skill-icon" />
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{translateLevel(skill.level)}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Backend */}
        <div ref={backendRef} className="skill-category animate-on-scroll">
          <h3 className="category-title">
            <span className="category-icon">⚙️</span>
            {t.skills.categories.backend}
          </h3>
          <div className="skills-grid">
            {skillsByCategory.backend.map((skill) => (
              <div key={skill.name} className="skill-card">
                <TechIcon name={skill.name} size={40} className="skill-icon" />
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{translateLevel(skill.level)}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools */}
        <div ref={toolsRef} className="skill-category animate-on-scroll">
          <h3 className="category-title">
            <span className="category-icon">🛠️</span>
            {t.skills.categories.tools}
          </h3>
          <div className="skills-grid">
            {skillsByCategory.tools.map((skill) => (
              <div key={skill.name} className="skill-card">
                <TechIcon name={skill.name} size={40} className="skill-icon" />
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{translateLevel(skill.level)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SkillsImproved