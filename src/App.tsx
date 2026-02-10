import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import LanguageSelector from './components/LanguageSelector'
import { personalInfo, skills, projects, currentYear } from './data/portfolio'

function App() {
  return (
    <div className="container">
      <LanguageSelector />
      
      <Header />  {/* ← Sin props */}
      
      <main>
        <About 
          name={personalInfo.name}
          description={personalInfo.description}
        />
        
        <Skills skills={skills} />
        
        <Projects projects={projects} />
        
        <ContactForm />
      </main>
      
      <Footer 
        year={currentYear} 
        name={personalInfo.name} 
      />
    </div>
  )
}

export default App