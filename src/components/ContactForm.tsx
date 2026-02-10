import { useState, type FormEvent, type ChangeEvent } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import { type ContactFormData } from '../types'

function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<ContactFormData>({
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
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }
  
  return (
    <Section title={t.contact.title} id="contact">
      {submitted ? (
        <div className="success-message">
          <p>{t.contact.successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t.contact.name}:</label>
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
            <label htmlFor="email">{t.contact.email}:</label>
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
            <label htmlFor="message">{t.contact.message}:</label>
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
            {t.contact.send}
          </button>
        </form>
      )}
    </Section>
  )
}

export default ContactForm