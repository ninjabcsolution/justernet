import React, { useState } from 'react';
import { motion } from 'framer-motion';
import JusterNetLogo from './JusterNetLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
