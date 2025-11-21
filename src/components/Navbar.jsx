import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/Mindbooster.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Mind Booster" className="auth-logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/programmes" className="nav-link" onClick={() => setIsOpen(false)}>Programmes</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/games" className="nav-link" onClick={() => setIsOpen(false)}>Games</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <div className="mobile-auth-buttons">
            <Link to="/login" className="btn btn-secondary" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/signup" className="btn btn-primary" onClick={() => setIsOpen(false)}>Sign Up</Link>
          </div>
        </ul>

        <div className="nav-actions">
          <Link to="/login" className="btn btn-secondary btn-sm">Login</Link>
          <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
