import { type ReactNode } from 'react'

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  )
}

export default Section