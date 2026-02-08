import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      
      <main>
        <section>
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador apasionado por crear aplicaciones web 
            modernas y eficientes.
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App