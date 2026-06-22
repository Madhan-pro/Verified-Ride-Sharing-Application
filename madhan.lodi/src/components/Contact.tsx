import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-label">Get In Touch</div>
            <h2>Let's Create Something Amazing Together</h2>
            <p>
              Whether you're looking to build a new brand from scratch or refresh an existing one, I'd love to hear about your project. Let's discuss how we can bring your vision to life.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-label">Email</div>
                <a href="mailto:hello@yourname.com" className="detail-value">
                  hello@yourname.com
                </a>
              </div>
              <div className="contact-detail">
                <div className="detail-label">Phone</div>
                <a href="tel:+1234567890" className="detail-value">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="contact-detail">
                <div className="detail-label">Location</div>
                <div className="detail-value">
                  San Francisco, CA
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {isSuccess && (
              <div className="success-message" role="alert">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                rows={6}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <div id="message-error" className="form-error" role="alert">
                  {errors.message}
                </div>
              )}
            </div>
            
            <Button 
              type="submit" 
              variant="primary" 
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
