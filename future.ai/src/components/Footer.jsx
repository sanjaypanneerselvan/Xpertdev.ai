import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
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
                    <div className="footer-logo">
                        <div className="logo-main">
                            <span className="logo-text">Xpertdev</span>
                            <span className="logo-accent">.ai</span>
                        </div>
                        <div className="logo-tagline">powered by future.ai</div>
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
                        <li>Web Development</li>
                        <li>Mobile Apps</li>
                        <li>UI/UX Design</li>
                        <li>SEO & Marketing</li>
                        <li>Branding</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul className="footer-links">
                        <li>📞 9150802851</li>
                        <li>📍 PN Pudur</li>
                        <li>✉️ contact@Xpertdev.ai</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>
                        © {currentYear} Xpertdev.ai. All rights reserved. Made with{' '}
                        <FaHeart className="heart-icon" /> by future.ai
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
