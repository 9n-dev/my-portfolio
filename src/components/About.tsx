import Section from './Section'

interface AboutProps {
  name: string;
  description: string;
  imageUrl?: string;
}

function About({ name, description, imageUrl }: AboutProps) {
  return (
    <Section title="Sobre mí" id="about">
      {imageUrl && <img src={imageUrl} alt={name} className="profile-image" />}
      <p>{description}</p>
    </Section>
  )
}

export default About