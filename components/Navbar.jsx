'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ alwaysScrolled = false }) {
  const [scrolled, setScrolled] = useState(alwaysScrolled);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (alwaysScrolled) return;
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysScrolled]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('nav-open');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('nav-open');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
              <circle cx="16" cy="16" r="6" fill="currentColor"/>
              <path d="M16 2C16 2 22 10 22 16C22 22 16 30 16 30" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16 2C16 2 10 10 10 16C10 22 16 30 16 30" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className="logo-text">Nakama<span className="logo-accent">AI</span></span>
        </Link>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link href="/#products" className="nav-link" onClick={closeMenu}>Products</Link>
          <Link href="/#features" className="nav-link" onClick={closeMenu}>Features</Link>
          <Link href="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link href="/#waitlist" className="nav-btn" onClick={closeMenu}>Join Waitlist</Link>
        </div>
        <button className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
