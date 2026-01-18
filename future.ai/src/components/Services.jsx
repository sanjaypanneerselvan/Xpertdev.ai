import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaCode,
    FaMobileAlt,
    FaPalette,
    FaSearch,
    FaGlobe,
    FaBullhorn,
    FaTimes
} from 'react-icons/fa';
import './Services.css';
import webDevImg from '../assets/web_development_illustration_1768729097924.png';
import mobileAppImg from '../assets/mobile_app_mockup_1768729116594.png';
import uiDesignImg from '../assets/ui_design_illustration_1768729137008.png';
import seoImg from '../assets/seo_growth_visual_1768729156729.png';

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            icon: <FaCode />,
            title: 'PPF Website Development',
            description: 'Custom, high-performance websites built with cutting-edge technologies for optimal user experience and business growth.',
            image: webDevImg,
            color: '#0066FF',
            details: {
                overview: 'We create stunning, high-performance websites that drive results. Our PPF (Progressive, Fast, Functional) approach ensures your website not only looks amazing but performs exceptionally across all devices.',
                features: [
                    'Responsive design that works flawlessly on all devices',
                    'Lightning-fast loading speeds with optimized performance',
                    'SEO-friendly architecture for better search rankings',
                    'Secure, scalable infrastructure built to grow with your business',
                    'Content Management Systems for easy updates',
                    'E-commerce integration with payment gateways',
                    'Analytics and tracking implementation'
                ],
                technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify', 'Custom CMS'],
                process: 'Discovery → Design → Development → Testing → Launch → Support'
            }
        },
        {
            icon: <FaMobileAlt />,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.',
            image: mobileAppImg,
            color: '#00A3FF',
            details: {
                overview: 'Transform your ideas into powerful mobile applications. We build native and cross-platform apps that provide exceptional user experiences and drive engagement.',
                features: [
                    'Native iOS and Android app development',
                    'Cross-platform solutions with React Native',
                    'Intuitive, user-friendly interface design',
                    'Offline functionality and data synchronization',
                    'Push notifications and real-time updates',
                    'App Store and Google Play deployment',
                    'Ongoing maintenance and updates'
                ],
                technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
                process: 'Ideation → Wireframing → Development → Testing → Deployment → Maintenance'
            }
        },
        {
            icon: <FaGlobe />,
            title: 'Custom Web Applications',
            description: 'Scalable web applications tailored to your business needs with robust architecture and modern frameworks.',
            image: webDevImg,
            color: '#FFD700',
            details: {
                overview: 'Build powerful web applications that streamline your business operations. From CRM systems to enterprise solutions, we create custom applications that solve your unique challenges.',
                features: [
                    'Custom business logic and workflows',
                    'Database design and optimization',
                    'API development and integration',
                    'Real-time data processing',
                    'User authentication and authorization',
                    'Cloud deployment and scaling',
                    'Third-party service integration'
                ],
                technologies: ['React', 'Vue.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker'],
                process: 'Requirements → Architecture → Development → Integration → Deployment → Scaling'
            }
        },
        {
            icon: <FaPalette />,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces designed with user-centric approach to maximize engagement and conversions.',
            image: uiDesignImg,
            color: '#FFA500',
            details: {
                overview: 'Create memorable digital experiences with our expert UI/UX design services. We combine aesthetics with functionality to design interfaces that users love.',
                features: [
                    'User research and persona development',
                    'Wireframing and prototyping',
                    'Visual design and branding',
                    'Interaction design and micro-animations',
                    'Usability testing and optimization',
                    'Design systems and component libraries',
                    'Accessibility compliance (WCAG)'
                ],
                technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
                process: 'Research → Wireframes → Prototypes → Visual Design → Testing → Handoff'
            }
        },
        {
            icon: <FaSearch />,
            title: 'SEO & Digital Presence',
            description: 'Comprehensive SEO strategies and digital marketing to boost your online visibility and drive organic growth.',
            image: seoImg,
            color: '#0066FF',
            details: {
                overview: 'Dominate search rankings and grow your online presence. Our data-driven SEO strategies help you reach your target audience and convert visitors into customers.',
                features: [
                    'Comprehensive SEO audits and analysis',
                    'Keyword research and strategy',
                    'On-page and technical SEO optimization',
                    'Content strategy and optimization',
                    'Link building and outreach',
                    'Local SEO and Google My Business',
                    'Performance tracking and reporting'
                ],
                technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog'],
                process: 'Audit → Strategy → Implementation → Monitoring → Optimization → Reporting'
            }
        },
        {
            icon: <FaBullhorn />,
            title: 'Branding & Advertising',
            description: 'Strategic branding and advertising campaigns that elevate your brand and connect with your target audience.',
            image: uiDesignImg,
            color: '#00A3FF',
            details: {
                overview: 'Build a powerful brand identity that resonates with your audience. We create comprehensive branding strategies and advertising campaigns that drive awareness and growth.',
                features: [
                    'Brand strategy and positioning',
                    'Logo and visual identity design',
                    'Brand guidelines and style guides',
                    'Social media marketing campaigns',
                    'Google Ads and PPC management',
                    'Content creation and copywriting',
                    'Campaign analytics and optimization'
                ],
                technologies: ['Adobe Creative Suite', 'Canva', 'Google Ads', 'Facebook Ads', 'Mailchimp', 'Hootsuite'],
                process: 'Discovery → Strategy → Creative → Campaign Launch → Optimization → Analysis'
            }
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section id="services" className="services section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-2">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive digital solutions to transform your business
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card glass"
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                                <div className="service-overlay"></div>
                            </div>

                            <div className="service-content">
                                <motion.div
                                    className="service-icon"
                                    style={{ color: service.color }}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {service.icon}
                                </motion.div>

                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>

                                <motion.button
                                    className="service-link"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setSelectedService(service)}
                                >
                                    Learn More →
                                </motion.button>
                            </div>

                            <div className="service-glow" style={{ background: `radial-gradient(circle, ${service.color}33, transparent)` }}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Service Detail Modal */}
            {selectedService && (
                <motion.div
                    className="service-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedService(null)}
                >
                    <motion.div
                        className="service-modal glass"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={() => setSelectedService(null)}>
                            <FaTimes />
                        </button>

                        <div className="modal-header">
                            <div className="modal-icon" style={{ color: selectedService.color }}>
                                {selectedService.icon}
                            </div>
                            <h2>{selectedService.title}</h2>
                        </div>

                        <div className="modal-content">
                            <div className="modal-section">
                                <h3>Overview</h3>
                                <p>{selectedService.details.overview}</p>
                            </div>

                            <div className="modal-section">
                                <h3>Key Features</h3>
                                <ul className="features-list">
                                    {selectedService.details.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="feature-bullet">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-section">
                                <h3>Technologies We Use</h3>
                                <div className="tech-tags">
                                    {selectedService.details.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-section">
                                <h3>Our Process</h3>
                                <p className="process-flow">{selectedService.details.process}</p>
                            </div>

                            <div className="modal-footer">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setSelectedService(null);
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Services;
