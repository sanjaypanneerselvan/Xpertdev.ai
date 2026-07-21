import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-section">
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)', 
                        border: '2px dotted rgba(255, 255, 255, 0.6)', 
                        padding: '1.25rem', 
                        borderRadius: '10px',
                        marginBottom: '1.5rem',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <p style={{ fontStyle: 'italic', color: '#ffffff', fontSize: '1.05rem', margin: 0, lineHeight: 1.6, textAlign: 'left' }}>
                            "Innovation distinguishes between a leader and a follower."
                        </p>
                        <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 700, textAlign: 'right', letterSpacing: '0.5px' }}>
                            — Steve Jobs
                        </span>
                    </div>
                    <p className="footer-tagline">
                        Powering Businesses with Intelligent Digital Experiences
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li>
                            <button onClick={() => scrollToSection('home')}>Home</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')}>About</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('services')}>Services</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('team')}>Team</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')}>Contact</button>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Services</h4>
                    <ul className="footer-links">
                        <li><button onClick={() => scrollToSection('services')}>Web Development</button></li>
                        <li><button onClick={() => scrollToSection('services')}>Mobile Apps</button></li>
                        <li><button onClick={() => scrollToSection('services')}>UI/UX Design</button></li>
                        <li><button onClick={() => scrollToSection('services')}>SEO & Marketing</button></li>
                        <li><button onClick={() => scrollToSection('services')}>Branding</button></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul className="footer-links">
                        <li><a href="tel:9150802851" style={{ color: 'inherit', textDecoration: 'none' }}>📞 9150802851</a></li>
                        <li><a href="https://maps.google.com/?q=PN+Pudur" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>📍 PN Pudur</a></li>
                        <li><a href="mailto:xpertdev@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>✉️ xpertdev@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>
                        © {currentYear} XpertI/O Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
