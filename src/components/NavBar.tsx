import { useLanguage } from '../contexts/LanguageContext'

function NavBar() {
  const { language, setLanguage, t } = useLanguage()
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">M</span>
        </div>
        
        <ul className="navbar-links">
          <li>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              {t.nav.about}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              {t.nav.skills}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              {t.nav.projects}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              {t.nav.contact}
            </button>
          </li>
        </ul>
        
        <div className="language-toggle">
          <button 
            onClick={() => setLanguage('es')}
            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
            aria-label="Cambiar a español"
          >
            ES
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar