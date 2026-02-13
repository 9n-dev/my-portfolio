interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  customImage?: string;
}

function TechIcon({ name, size = 24, className = '', customImage }: TechIconProps) {
  // Si hay una imagen custom, usarla directamente
  if (customImage) {
    return (
      <img 
        src={customImage} 
        alt={`${name} logo`}
        width={size}
        height={size}
        className={className}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    )
  }
  
  // Mapeo de nombres a slugs de Simple Icons
  const iconSlugs: { [key: string]: string } = {
    'React': 'react',
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'Angular': 'angular',
    'HTML/CSS': 'html5',
    'HTML': 'html5',
    'CSS': 'css3',
    'Node.js': 'nodedotjs',
    'Express': 'express',
    'Python': 'python',
    'Django': 'django',
    'PHP': 'php',
    'C++': 'cplusplus',
    '.NET': 'dotnet',
    'MongoDB': 'mongodb',
    'SQL': 'mysql',  // ← CAMBIADO de 'MySQL' a 'SQL'
    'MySQL': 'mysql',
    'Docker': 'docker',
    'Linux': 'linux',
    'Bash': 'gnubash',
    'Git': 'git',
    'GitHub': 'github',
    'Vite': 'vite',
    'LocalStorage': 'javascript',
    'Web': 'googlechrome'
  }
  
  const iconColors: { [key: string]: string } = {
    'React': '61DAFB',
    'TypeScript': '3178C6',
    'JavaScript': 'F7DF1E',
    'Angular': 'DD0031',
    'HTML/CSS': 'E34F26',
    'HTML': 'E34F26',
    'CSS': '1572B6',
    'Node.js': '339933',
    'Express': 'FFFFFF',
    'Python': '3776AB',
    'Django': '092E20',
    'PHP': '777BB4',
    'C++': '00599C',
    '.NET': '512BD4',
    'MongoDB': '47A248',
    'SQL': '4479A1',  // ← CAMBIADO de 'MySQL' a 'SQL'
    'MySQL': '4479A1',
    'Docker': '2496ED',
    'Linux': 'FCC624',
    'Bash': '4EAA25',
    'Git': 'F05032',
    'GitHub': 'FFFFFF',
    'Vite': '646CFF',
    'LocalStorage': 'F7DF1E',
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
        e.currentTarget.style.display = 'none'
      }}
    />
  )
}

export default TechIcon