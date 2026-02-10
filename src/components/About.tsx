import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'

interface AboutProps {
  name: string;
  description?: string;
  imageUrl?: string;
}

function About({ name, imageUrl }: AboutProps) {
  const { t } = useLanguage()
  
  return (
    <Section title={t.about.title} id="about">
      {imageUrl && <img src={imageUrl} alt={name} className="profile-image" />}
      <p>{t.about.description}</p>
    </Section>
  )
}

export default About