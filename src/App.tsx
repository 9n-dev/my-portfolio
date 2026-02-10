import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import SkillsImproved from './components/Skills'  // ← Cambio
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import { personalInfo, projects } from './data/portfolio'  // ← Quitamos skills

function App() {
  return (
    <div className="container">
      <NavBar />
      
      <Hero />
      
      <main>
        <About name={personalInfo.name} />
        
        <SkillsImproved />  {/* ← Nuevo componente */}
        
        <Projects projects={projects} />
        
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  )
}

export default App