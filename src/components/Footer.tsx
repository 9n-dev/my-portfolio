import { useLanguage } from '../contexts/LanguageContext'
import { personalInfo, currentYear } from '../data/portfolio'

function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer>
      <p>&copy; {currentYear} {personalInfo.name}. {t.footer.rights}</p>
    </footer>
  )
}

export default Footer