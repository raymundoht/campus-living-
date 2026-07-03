'use client';

import { useState } from 'react';

/**
 * Navbar / Header Component
 * =========================
 * Fixed navigation bar with:
 * - Transparent-to-white scroll effect (handled via CSS class in page.js)
 * - Desktop navigation links
 * - Mobile hamburger menu with animated overlay
 *
 * Uses useState for mobile menu open/close state.
 */
export default function Navbar() {
  // Mobile menu open state
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Toggle the mobile menu and lock body scroll */
  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? 'hidden' : '';
  };

  /** Close mobile menu when a nav link is clicked */
  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Fixed navbar */}
      <nav className="navbar" id="navbar">
        <div className="container navbar__inner">
          {/* Logo */}
          <a href="#" className="navbar__logo">
            <img src="./images/logo campus living.png" alt="Campus Living" style={{ height: '40px' }} />
          </a>

          {/* Desktop navigation links */}
          <div className="navbar__links">
            <a href="#features" className="navbar__link">Features</a>
            <a href="#solutions" className="navbar__link">Solutions</a>
            <a href="#process" className="navbar__link">Process</a>
            <a href="#projects" className="navbar__link">Projects</a>
            <a href="#testimonials" className="navbar__link">Testimonials</a>
            <a href="#faq" className="navbar__link">FAQ</a>
            <a href="#contact" className="navbar__cta">Get a Quote</a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            className={`navbar__toggle ${mobileOpen ? 'active' : ''}`}
            onClick={toggleMobile}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
        <a href="#features" className="mobile-menu__link" onClick={closeMobile}>Features</a>
        <a href="#solutions" className="mobile-menu__link" onClick={closeMobile}>Solutions</a>
        <a href="#process" className="mobile-menu__link" onClick={closeMobile}>Process</a>
        <a href="#projects" className="mobile-menu__link" onClick={closeMobile}>Projects</a>
        <a href="#testimonials" className="mobile-menu__link" onClick={closeMobile}>Testimonials</a>
        <a href="#faq" className="mobile-menu__link" onClick={closeMobile}>FAQ</a>
        <a
          href="#contact"
          className="mobile-menu__link"
          onClick={closeMobile}
          style={{ color: 'var(--accent)' }}
        >
          Get a Quote
        </a>
      </div>
    </>
  );
}
