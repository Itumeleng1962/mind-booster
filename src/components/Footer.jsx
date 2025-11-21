import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';
import logo from '../assets/Mindbooster.jpeg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={logo} alt="Mind Booster" className="footer-logo-image" />
                    </div>
                    <p className="footer-description">
                        Enhancing learners' intellectual performance, creativity, and academic excellence through brain-based educational programmes.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon x-twitter">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programmes">Programmes</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/games">Games</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="footer-contact">
                        <li>
                            <Mail size={16} />
                            <span>info@mindbooster.co.za</span>
                        </li>
                        <li>
                            <Phone size={16} />
                            <span>+27 12 345 6789</span>
                        </li>
                        <li>
                            <MapPin size={16} />
                            <span>South Africa</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Mind Booster (Pty) Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
