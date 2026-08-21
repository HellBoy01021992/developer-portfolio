import { ReactNode } from 'react'

interface ImpactMetricProps {
  value: ReactNode
  label: string
  description?: string
  className?: string
}

export const ImpactMetric = ({ value, label, description, className = '' }: ImpactMetricProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{value}</div>
      <div className="text-sm font-semibold text-text-primary uppercase tracking-wide">{label}</div>
      {description && <div className="text-xs text-text-secondary mt-1">{description}</div>}
    </div>
  )
}
