import Section from './Section'

interface Skill {
  name: string;
  level: string;
}

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Habilidades" id="skills">
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name}>
            <strong>{skill.name}</strong>: {skill.level}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Skills