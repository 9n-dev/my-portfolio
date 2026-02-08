import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  const mySkills = [
    { name: 'HTML/CSS', level: 'Avanzado' },
    { name: 'JavaScript', level: 'Intermedio' },
    { name: 'React', level: 'Aprendiendo' },
    { name: 'TypeScript', level: 'Aprendiendo' },
  ]
  
  const myProjects = [
    {
      id: 1,
      title: 'Portfolio Personal',
      description: 'Mi primer proyecto en React con TypeScript',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://github.com/tuusuario/portfolio'
    },
    {
      id: 2,
      title: 'Aplicación de Tareas',
      description: 'Una app para gestionar tareas diarias',
      technologies: ['React', 'TypeScript', 'LocalStorage'],
    },
    {
      id: 3,
      title: 'Blog Personal',
      description: 'Un blog construido desde cero',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://miblog.com'
    }
  ]

  return (
    <div className="container">
      <Header name="Juan Pérez" title="Desarrollador Web Full Stack" />
      
      <main>
        <About 
          name="Juan Pérez"
          description="Soy un desarrollador apasionado por crear aplicaciones web modernas y eficientes. Me especializo en React, TypeScript y Node.js."
        />
        
        <Skills skills={mySkills} />
        
        <Projects projects={myProjects} />  {/* ← Añadir */}
      </main>
      
      <Footer year={2026} name="Juan Pérez" />
    </div>
  )
}

export default App