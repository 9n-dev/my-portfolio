import { type Skill, type Project, type PersonalInfo } from '../types'

// Información personal
export const personalInfo: PersonalInfo = {
  name: 'Manu',
  title: 'Desarrollador Full Stack',
  description: 'Soy un apasionado de la tecnología que disfruta aprendiendo constantemente y manteniéndose al día con las últimas tendencias e innovaciones del sector. Me motiva crear soluciones elegantes y eficientes que resuelvan problemas reales.'
}

// Métricas de experiencia
export const stats = [
  { id: 1, value: '2+', labelEs: 'Años de experiencia', labelEn: 'Years of experience' },
  { id: 2, value: '15+', labelEs: 'Proyectos completados', labelEn: 'Projects completed' },
  { id: 3, value: '16+', labelEs: 'Tecnologías', labelEn: 'Technologies' }
]

// Tipo para las categorías de skills
interface SkillsByCategory {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  devops: Skill[];
  tools: Skill[];
}

// Habilidades técnicas REORGANIZADAS por categoría
export const skillsByCategory: SkillsByCategory = {
  frontend: [
    { name: 'React', level: 'Intermedio' },
    { name: 'Angular', level: 'Básico' },
    { name: 'TypeScript', level: 'Intermedio' },
    { name: 'JavaScript', level: 'Intermedio' },
    { name: 'HTML/CSS', level: 'Avanzado' }
  ],
  backend: [
    { name: '.NET', level: 'Avanzado' },
    { name: 'Python', level: 'Avanzado' },
    { name: 'Node.js', level: 'Intermedio' },
    { name: 'Django', level: 'Intermedio' },
    { name: 'PHP', level: 'Básico' },
    { name: 'C++', level: 'Básico' }
  ],
  database: [
    { name: 'SQL', level: 'Avanzado' },
    { name: 'MongoDB', level: 'Básico' }
  ],
  devops: [
    { name: 'Linux', level: 'Avanzado' },
    { name: 'Bash', level: 'Intermedio' },
    { name: 'Docker', level: 'Intermedio' }
  ],
  tools: [
    { name: 'Git', level: 'Avanzado' },
    { name: 'GitHub', level: 'Avanzado' }
  ]
}

// Array simple para compatibilidad (si lo necesitas en otro lugar)
export const skills: Skill[] = [
  { name: 'HTML/CSS', level: 'Avanzado' },
  { name: 'JavaScript', level: 'Intermedio' },
  { name: 'React', level: 'Intermedio' },
  { name: 'TypeScript', level: 'Intermedio' },
  { name: 'Angular', level: 'Básico' },
  { name: '.NET', level: 'Avanzado' },
  { name: 'Python', level: 'Avanzado' },
  { name: 'Node.js', level: 'Intermedio' },
  { name: 'Django', level: 'Intermedio' },
  { name: 'PHP', level: 'Básico' },
  { name: 'C++', level: 'Básico' },
  { name: 'SQL', level: 'Avanzado' },
  { name: 'MongoDB', level: 'Básico' },
  { name: 'Linux', level: 'Avanzado' },
  { name: 'Bash', level: 'Intermedio' },
  { name: 'Docker', level: 'Intermedio' },
  { name: 'Git', level: 'Avanzado' },
  { name: 'GitHub', level: 'Avanzado' }
]

// Proyectos
export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Profesional',
    description: 'Portfolio personal desarrollado con React y TypeScript, implementando las mejores prácticas de desarrollo moderno. Incluye sistema multi-idioma, animaciones fluidas, diseño responsivo y arquitectura componentizada siguiendo los principios de Full Stack Open.',
    technologies: ['React', 'TypeScript', 'Vite', 'HTML/CSS'],
    link: 'https://tu-portfolio.vercel.app',
    githubUrl: 'https://github.com/9n-dev/my-portfolio  '
  }
]

// Año actual para el footer
export const currentYear = new Date().getFullYear()