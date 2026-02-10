import { useLanguage } from '../contexts/LanguageContext'

function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  
  return (
    <div style={{ padding: '1rem', background: '#1e293b', borderRadius: '8px' }}>
      <p style={{ color: 'white', marginBottom: '0.5rem' }}>
        Idioma actual: <strong>{language === 'es' ? 'Español' : 'English'}</strong>
      </p>
      <button 
        onClick={() => setLanguage('es')}
        style={{
          padding: '0.5rem 1rem',
          marginRight: '0.5rem',
          background: language === 'es' ? '#8b5cf6' : '#475569',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Español
      </button>
      <button 
        onClick={() => setLanguage('en')}
        style={{
          padding: '0.5rem 1rem',
          background: language === 'en' ? '#8b5cf6' : '#475569',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        English
      </button>
    </div>
  )
}

export default LanguageSelector