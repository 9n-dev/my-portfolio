import { type Skill, type Project, type PersonalInfo } from '../types'

// Información personal
export const personalInfo: PersonalInfo = {
  name: 'Juan Pérez',
  title: 'Desarrollador Web Full Stack',
  description: 'Soy un desarrollador apasionado por crear aplicaciones web modernas y eficientes. Me especializo en React, TypeScript y Node.js.'
}

// Métricas de experiencia (NUEVO)
export const stats = [
  { id: 1, value: '2+', labelEs: 'Años de experiencia', labelEn: 'Years of experience' },
  { id: 2, value: '15+', labelEs: 'Proyectos completados', labelEn: 'Projects completed' },
  { id: 3, value: '10+', labelEs: 'Tecnologías', labelEn: 'Technologies' }
]

// Habilidades técnicas REORGANIZADAS por categoría (ACTUALIZADO)
export const skillsByCategory = {
  frontend: [
    { name: 'React', level: 'Aprendiendo' },
    { name: 'TypeScript', level: 'Aprendiendo' },
    { name: 'HTML/CSS', level: 'Avanzado' },
    { name: 'JavaScript', level: 'Intermedio' }
  ],
  backend: [
    { name: 'Node.js', level: 'Básico' },
    { name: 'Express', level: 'Básico' }
  ],
  tools: [
    { name: 'Git', level: 'Intermedio' },
    { name: 'Vite', level: 'Intermedio' },
    { name: 'VS Code', level: 'Avanzado' }
  ]
}

// Mantenemos el array simple por compatibilidad
export const skills: Skill[] = [
  { name: 'HTML/CSS', level: 'Avanzado' },
  { name: 'JavaScript', level: 'Intermedio' },
  { name: 'React', level: 'Aprendiendo' },
  { name: 'TypeScript', level: 'Aprendiendo' },
  { name: 'Git', level: 'Intermedio' },
  { name: 'Node.js', level: 'Básico' }
]

// Proyectos (sin cambios)
export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Personal',
    description: 'Mi primer proyecto en React con TypeScript siguiendo las mejores prácticas de Full Stack Open',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    link: 'https://mi-portfolio.vercel.app',  // URL del sitio desplegado
    githubUrl: 'https://github.com/tuusuario/portfolio'  // ← AÑADIR
  },
  {
    id: 2,
    title: 'Aplicación de Tareas',
    description: 'Una app para gestionar tareas diarias con almacenamiento local',
    technologies: ['React', 'TypeScript', 'LocalStorage'],
    githubUrl: 'https://github.com/tuusuario/todo-app'  // ← AÑADIR
    // Sin link porque aún no está desplegado
  },
  {
    id: 3,
    title: 'Blog Personal',
    description: 'Un blog construido desde cero con diseño responsivo',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://miblog.com',
    githubUrl: 'https://github.com/tuusuario/blog'  // ← AÑADIR
  }
]

// Año actual para el footer
export const currentYear = new Date().getFullYear()