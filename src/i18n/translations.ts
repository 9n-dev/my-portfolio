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
      title: 'Desarrollador Full Stack',
      description: 'Construyo software limpio, eficaz y escalable',
      cta: 'Ver proyectos'
    },
    about: {
      title: 'Sobre mí',
      description: 'Soy un apasionado de la tecnología que disfruta aprendiendo constantemente y manteniéndose al día con las últimas tendencias e innovaciones del sector. Me motiva crear soluciones elegantes y eficientes que resuelvan problemas reales.'
    },
    skills: {
      title: 'Habilidades',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de Datos & Cloud',
        devops: 'DevOps',
        tools: 'Herramientas'
      },
      level: {
        beginner: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        expert: 'Experto',
        learning: 'Aprendiendo',
        basic: 'Básico'
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
      title: 'Full Stack Developer',
      description: 'I build clean, efficient, and scalable software',
      cta: 'View projects'
    },
    about: {
      title: 'About Me',
      description: 'I am a technology enthusiast who enjoys constantly learning and staying up to date with the latest trends and innovations in the field. I am driven by creating elegant and efficient solutions that solve real-world problems.'
    },
    skills: {
      title: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database & Cloud',
        devops: 'DevOps',
        tools: 'Tools'
      },
      level: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert',
        learning: 'Learning',
        basic: 'Basic'
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