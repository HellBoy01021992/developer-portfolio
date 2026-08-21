import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  rel,
  download,
  className = '',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'focus-ring font-medium transition-colors rounded inline-flex items-center justify-center'

  const variantStyles = {
    primary: 'bg-accent text-bg-primary hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-border-color text-text-primary hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} className={allStyles}>
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={allStyles}
    >
      {children}
    </button>
  )
}
