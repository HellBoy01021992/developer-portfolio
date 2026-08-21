import { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
}

export const SectionHeading = ({ children, eyebrow, className = '' }: SectionHeadingProps) => {
  return (
    <div className={`mb-8 ${className}`}>
      {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
      <h2 className="heading-2">{children}</h2>
    </div>
  )
}
