import { useEffect, useRef } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            // Opcional: dejar de observar después de animar
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )
    
    observer.observe(element)
    
    // Cleanup: dejar de observar al desmontar
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin])
  
  return ref
}