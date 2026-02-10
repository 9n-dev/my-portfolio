import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import { personalInfo, skills, projects } from './data/portfolio'

function App() {
  return (
    <div className="container">
      <NavBar />  {/* ← Nuevo NavBar */}
      
      {/* Eliminamos <LanguageSelector /> */}
      
      <Header />
      
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