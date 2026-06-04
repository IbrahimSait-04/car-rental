import React from 'react'
import '../Style/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Max Rentals. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy" className="hover:text-yellow-500 transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-yellow-500 transition-colors duration-300">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-yellow-500 transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
