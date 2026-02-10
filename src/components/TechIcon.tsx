interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

function TechIcon({ name, size = 24, className = '' }: TechIconProps) {
  // Mapeo de nombres a slugs de Simple Icons
  const iconSlugs: { [key: string]: string } = {
    'React': 'react',
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'HTML/CSS': 'html5',
    'Node.js': 'nodedotjs',
    'Express': 'express',
    'Git': 'git',
    'Vite': 'vite',
    'VS Code': 'visualstudiocode',
    'CSS': 'css3',
    'LocalStorage': 'javascript',  // No hay ícono específico
    'GitHub': 'github',
    'Web': 'googlechrome'  // Para enlaces a sitios web
  }
  
  // Colores por defecto para cada tecnología
  const iconColors: { [key: string]: string } = {
    'React': '61DAFB',
    'TypeScript': '3178C6',
    'JavaScript': 'F7DF1E',
    'HTML/CSS': 'E34F26',
    'Node.js': '339933',
    'Express': 'FFFFFF',
    'Git': 'F05032',
    'Vite': '646CFF',
    'VS Code': '007ACC',
    'CSS': '1572B6',
    'LocalStorage': 'F7DF1E',
    'GitHub': 'FFFFFF',
    'Web': 'FFFFFF'
  }
  
  const slug = iconSlugs[name] || name.toLowerCase()
  const color = iconColors[name] || 'FFFFFF'
  const iconUrl = `https://cdn.simpleicons.org/${slug}/${color}`
  
  return (
    <img 
      src={iconUrl} 
      alt={`${name} logo`}
      width={size}
      height={size}
      className={className}
      onError={(e) => {
        // Si el ícono no carga, muestra un placeholder
        e.currentTarget.style.display = 'none'
      }}
    />
  )
}

export default TechIcon