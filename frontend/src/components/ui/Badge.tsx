interface BadgeProps {
  children: string;
  variant?: 'default' | 'accent' | 'success' | 'muted';
  className?: string;
}

export const Badge = ({ children, variant = 'default', className = '' }: BadgeProps) => {
  const variantStyles = {
    default: 'bg-border-color text-text-secondary',
    accent: 'bg-accent/20 text-accent',
    success: 'bg-emerald-500/20 text-emerald-300',
    muted: 'bg-slate-700/30 text-text-secondary',
  }

  return (
    <span className={`text-sm px-3 py-1 rounded font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
