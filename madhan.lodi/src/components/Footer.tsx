import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">Your Name</div>
            <p className="footer-tagline">
              Building brands that resonate and inspire.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-list">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                    Behance
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li>
                  <a href="mailto:hello@yourname.com">
                    hello@yourname.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
