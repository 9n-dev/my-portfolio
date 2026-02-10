export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Desarrollador Web Full Stack',
      description: 'Construyo experiencias web modernas con React y TypeScript',
      cta: 'Ver proyectos'
    },
    about: {
      title: 'Sobre mí',
      description: 'Soy un desarrollador apasionado por crear aplicaciones web modernas y eficientes. Me especializo en React, TypeScript y Node.js.',
      yearsExperience: 'Años de experiencia',
      projectsCompleted: 'Proyectos completados',
      happyClients: 'Clientes satisfechos'
    },
    skills: {
      title: 'Habilidades',
      level: {
        beginner: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        expert: 'Experto'
      }
    },
    projects: {
      title: 'Proyectos',
      viewDetails: 'Ver detalles',
      hideDetails: 'Ocultar detalles',
      technologies: 'Tecnologías utilizadas',
      viewProject: 'Ver proyecto'
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      successMessage: '¡Gracias por tu mensaje! Te responderé pronto.'
    },
    footer: {
      rights: 'Todos los derechos reservados'
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I am',
      title: 'Full Stack Web Developer',
      description: 'I build modern web experiences with React and TypeScript',
      cta: 'View projects'
    },
    about: {
      title: 'About Me',
      description: 'I am a developer passionate about creating modern and efficient web applications. I specialize in React, TypeScript, and Node.js.',
      yearsExperience: 'Years of experience',
      projectsCompleted: 'Projects completed',
      happyClients: 'Happy clients'
    },
    skills: {
      title: 'Skills',
      level: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert'
      }
    },
    projects: {
      title: 'Projects',
      viewDetails: 'View details',
      hideDetails: 'Hide details',
      technologies: 'Technologies used',
      viewProject: 'View project'
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      successMessage: 'Thank you for your message! I will reply soon.'
    },
    footer: {
      rights: 'All rights reserved'
    }
  }
}

export type Language = 'es' | 'en'
export type TranslationKeys = typeof translations.es