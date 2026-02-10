import NavBar from './components/NavBar'
import Hero from './components/Hero'      // ← Cambio: Hero en lugar de Header
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import { personalInfo, skills, projects } from './data/portfolio'

function App() {
  return (
    <div className="container">
      <NavBar />
      
      <Hero />  {/* ← Hero reemplaza a Header */}
      
      <main>
        <About name={personalInfo.name} />
        
        <Skills skills={skills} />
        
        <Projects projects={projects} />
        
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  )
}

export default App