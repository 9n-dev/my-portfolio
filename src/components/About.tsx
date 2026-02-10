import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import { stats } from '../data/portfolio'

interface AboutProps {
  name: string;
  imageUrl?: string;
}

function About({ name, imageUrl }: AboutProps) {
  const { t, language } = useLanguage()
  
  return (
    <Section title={t.about.title} id="about">
      <div className="about-content">
        {imageUrl && <img src={imageUrl} alt={name} className="profile-image" />}
        <p className="about-description">{t.about.description}</p>
        
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">
                {language === 'es' ? stat.labelEs : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About