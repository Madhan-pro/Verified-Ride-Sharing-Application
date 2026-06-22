import React from 'react'
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  loading?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  loading = false,
  disabled,
  children,
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`button button-${variant} ${loading ? 'loading' : ''} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span className="button-spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </span>
      )}
      <span className={loading ? 'button-label-loading' : ''}>
        {children}
      </span>
    </button>
  )
}

export default Button
