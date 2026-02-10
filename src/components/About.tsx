import { useLanguage } from '../contexts/LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Section from './Section'
import { stats } from '../data/portfolio'

interface AboutProps {
  name: string;
  imageUrl?: string;
}

function About({ name, imageUrl }: AboutProps) {
  const { t, language } = useLanguage()
  const descriptionRef = useScrollAnimation()
  const statsRef = useScrollAnimation({ threshold: 0.2 })
  
  return (
    <Section title={t.about.title} id="about">
      <div className="about-content">
        {imageUrl && <img src={imageUrl} alt={name} className="profile-image" />}
        
        <div ref={descriptionRef} className="animate-on-scroll">
          <p className="about-description">{t.about.description}</p>
        </div>
        
        <div ref={statsRef} className="animate-on-scroll">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                className={`stat-card delay-${index * 100}`}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">
                  {language === 'es' ? stat.labelEs : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About