import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight } from 'react-icons/fa';
import './Hero.css';
import heroImage from '../assets/hero_ai_visual_1768729075280.png';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <motion.div
                    className="hero-gradient"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                            }}
                            animate={{
                                y: [null, Math.random() * -100, null],
                                x: [null, Math.random() * 100 - 50, null],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="hero-content container">
                <div className="hero-text">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <FaRocket />
                        <span>Powering the Future of Digital Innovation</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Powering Businesses with{' '}
                        <span className="text-accent">Intelligent</span> Digital Experiences
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Transform your vision into reality with cutting-edge web development,
                        mobile apps, and AI-powered solutions that drive growth and innovation.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Schedule Appointment
                            <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToServices}>
                            Our Services
                        </button>
                    </motion.div>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <div className="stat-item">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                100+
                            </motion.h3>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                            >
                                50+
                            </motion.h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6 }}
                            >
                                99%
                            </motion.h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="image-wrapper animate-float">
                        <img src={heroImage} alt="AI Technology" />
                        <div className="image-glow"></div>
                    </div>
                </motion.div>
            </div>

            <div className="hero-scroll-indicator">
                <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    ↓
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
