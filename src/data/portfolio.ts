import { type Skill, type Project, type PersonalInfo } from '../types'

// Información personal
export const personalInfo: PersonalInfo = {
  name: 'Juan Pérez',
  title: 'Desarrollador Web Full Stack',
  description: 'Soy un desarrollador apasionado por crear aplicaciones web modernas y eficientes. Me especializo en React, TypeScript y Node.js.'
}

// Habilidades técnicas
export const skills: Skill[] = [
  { name: 'HTML/CSS', level: 'Avanzado' },
  { name: 'JavaScript', level: 'Intermedio' },
  { name: 'React', level: 'Aprendiendo' },
  { name: 'TypeScript', level: 'Aprendiendo' },
  { name: 'Git', level: 'Intermedio' },
  { name: 'Node.js', level: 'Básico' }
]

// Proyectos
export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Personal',
    description: 'Mi primer proyecto en React con TypeScript siguiendo las mejores prácticas de Full Stack Open',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    link: 'https://github.com/tuusuario/portfolio'
  },
  {
    id: 2,
    title: 'Aplicación de Tareas',
    description: 'Una app para gestionar tareas diarias con almacenamiento local',
    technologies: ['React', 'TypeScript', 'LocalStorage'],
  },
  {
    id: 3,
    title: 'Blog Personal',
    description: 'Un blog construido desde cero con diseño responsivo',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://miblog.com'
  }
]

// Año actual para el footer
export const currentYear = new Date().getFullYear()