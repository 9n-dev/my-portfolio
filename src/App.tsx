import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const mySkills = [
    { name: 'HTML/CSS', level: 'Avanzado' },
    { name: 'JavaScript', level: 'Intermedio' },
    { name: 'React', level: 'Aprendiendo' },
    { name: 'TypeScript', level: 'Aprendiendo' },
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
      </main>
      
      <Footer year={2026} name="Juan Pérez" />
    </div>
  )
}

export default App