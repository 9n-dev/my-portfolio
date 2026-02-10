import { useLanguage } from '../contexts/LanguageContext'

function Header() {
  const { t, language } = useLanguage()
  
  return (
    <header>
      <h1>{t.hero.greeting} Juan Pérez</h1>
      <p>{t.hero.title}</p>
      <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
        {language === 'es' ? '🇪🇸' : '🇬🇧'} {language.toUpperCase()}
      </p>
    </header>
  )
}

export default Header