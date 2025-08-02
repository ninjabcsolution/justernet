import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // JusterNet Logo Component
  const JusterNetLogo = () => (
    <div className="justernet-logo">
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
        {/* Network nodes */}
        <circle cx="10" cy="20" r="3" fill="#8b5cf6" />
        <circle cx="30" cy="10" r="2.5" fill="#3b82f6" />
        <circle cx="30" cy="30" r="2.5" fill="#3b82f6" />
        <circle cx="50" cy="20" r="3" fill="#8b5cf6" />

        {/* Connecting lines */}
        <line x1="10" y1="20" x2="30" y2="10" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
        <line x1="10" y1="20" x2="30" y2="30" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="10" x2="50" y2="20" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="30" x2="50" y2="20" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />

        {/* Text */}
        <text x="60" y="15" fill="#ffffff" fontSize="12" fontWeight="bold">
          JUSTER
        </text>
        <text x="60" y="28" fill="#8b5cf6" fontSize="12" fontWeight="bold">
          NET
        </text>
      </svg>
    </div>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <a href="/">
            <JusterNetLogo />
          </a>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="/login" className="btn-secondary">
            Sign In
          </a>
          <a href="/login" className="btn-primary">
            Get Started
          </a>
        </div>

        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
