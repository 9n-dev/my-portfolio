// Tipos para la sección de habilidades
export interface Skill {
  name: string;
  level: string;
}

// Tipos para la sección de proyectos
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

// Tipos para el formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Tipos para información personal
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}