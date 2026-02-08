import { useState, type FormEvent, type ChangeEvent } from 'react'
import Section from './Section'

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    console.log('Datos del formulario:', formData)
    setSubmitted(true)
    
    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }
  
  return (
    <Section title="Contacto" id="contact">
      {submitted ? (
        <div className="success-message">
          <p>¡Gracias por tu mensaje! Te responderé pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            Enviar mensaje
          </button>
        </form>
      )}
    </Section>
  )
}

export default ContactForm