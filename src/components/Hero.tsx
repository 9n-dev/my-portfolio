import { useLanguage } from '../contexts/LanguageContext'
import { personalInfo } from '../data/portfolio'
import profilePic from '../assets/avatar.png'

function Hero() {
  const { t } = useLanguage()
  
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-title">{t.hero.title}</h2>
            <p className="hero-description">{t.hero.description}</p>
            
            <button onClick={scrollToProjects} className="hero-cta">
              {t.hero.cta}
              <span className="cta-arrow">→</span>
            </button>
          </div>
          
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <img 
                src={profilePic}
                alt={personalInfo.name}
                className="profile-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero