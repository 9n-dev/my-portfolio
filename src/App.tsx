import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import SkillsImproved from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import ScrollToTop from './components/ScrollToTop'
import { personalInfo, projects } from './data/portfolio'

function App() {
  return (
    <div className="container">
      <NavBar />
      
      <Hero />
      
      <main>
        <About name={personalInfo.name} />
        
        <SkillsImproved />
        
        <Projects projects={projects} />
        
        <ContactForm />
      </main>
      
      <Footer />
      
      <ScrollToTop />  {/* ← Añadir al final */}
    </div>
  )
}

export default App