import React from 'react'
import './Input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  id,
  required,
  ...props 
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`
  const errorId = `${inputId}-error`

  return (
    <div className="input-group">
      <label htmlFor={inputId} className="input-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        id={inputId}
        className={`input ${error ? 'error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <div id={errorId} className="input-error" role="alert">
          {error}
        </div>
      )}
    </div>
  )
}

export default Input
