import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
    const values = [
        {
            icon: <FaLightbulb />,
            title: 'Innovation',
            description: 'Pushing boundaries with cutting-edge technology and creative solutions.',
        },
        {
            icon: <FaRocket />,
            title: 'Speed',
            description: 'Delivering projects efficiently without compromising on quality.',
        },
        {
            icon: <FaUsers />,
            title: 'Trust',
            description: 'Building lasting relationships through transparency and reliability.',
        },
        {
            icon: <FaChartLine />,
            title: 'Growth',
            description: 'Driving measurable results that scale your business forward.',
        },
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-2">About Xpertdev.ai</h2>
                    <p className="section-subtitle">
                        Empowering businesses through intelligent digital transformation
                    </p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-card glass">
                            <h3 className="text-gradient mb-2">Our Vision</h3>
                            <p>
                                To be the leading force in digital innovation, transforming businesses
                                worldwide with AI-powered solutions that drive sustainable growth and
                                create meaningful impact in the digital landscape.
                            </p>
                        </div>

                        <div className="about-card glass">
                            <h3 className="text-gradient mb-2">Our Mission</h3>
                            <p>
                                We empower businesses of all sizes to thrive in the digital age by
                                delivering cutting-edge web and mobile solutions, exceptional design,
                                and strategic digital marketing that exceeds expectations.
                            </p>
                        </div>

                        <div className="about-card glass">
                            <h3 className="text-gradient mb-2">Our Philosophy</h3>
                            <p>
                                We believe in the power of technology to transform businesses. Our
                                human-centric approach combines innovation, trust, and scalability
                                to create digital experiences that resonate with users and drive results.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-values"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="values-title mb-3">Why Choose Us</h3>
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="value-item glass-light"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className="value-icon"
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {value.icon}
                                    </motion.div>
                                    <h4>{value.title}</h4>
                                    <p>{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
