// src/components/Navbar.jsx
import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">RM.</div>
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Buka menu navigasi"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>Tentang</a></li>
        <li><a href="#experience" onClick={closeMenu}>Pengalaman</a></li>
        <li><a href="#skills" onClick={closeMenu}>Keahlian</a></li>
        <li><a href="#projects" onClick={closeMenu}>Proyek</a></li>
      </ul>
    </nav>
  );
}