import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [focused, setFocused] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-2">Get In Touch</h2>
                    <p className="section-subtitle">
                        Let's Build Something Intelligent Together
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="contact-card glass">
                            <h3 className="text-gradient mb-3">Contact Information</h3>

                            <div className="info-item">
                                <motion.div
                                    className="info-icon"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <FaPhone />
                                </motion.div>
                                <div className="info-text">
                                    <h4>Phone</h4>
                                    <p>9150802851</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <motion.div
                                    className="info-icon"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <FaMapMarkerAlt />
                                </motion.div>
                                <div className="info-text">
                                    <h4>Location</h4>
                                    <p>32B, Sanjay Illam, Mummanaicker Street, PN Opudur</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <motion.div
                                    className="info-icon"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <FaEnvelope />
                                </motion.div>
                                <div className="info-text">
                                    <h4>Email</h4>
                                    <p>contact@future.ai</p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-card glass">
                            <h3 className="text-gradient mb-2">Ready to Transform?</h3>
                            <p>
                                Join the future of digital innovation. Let's create something
                                extraordinary together.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form glass">
                            <div className="form-group">
                                <label
                                    className={`floating-label ${focused.name || formData.name ? 'active' : ''
                                        }`}
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocused({ ...focused, name: true })}
                                    onBlur={() => setFocused({ ...focused, name: false })}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    className={`floating-label ${focused.email || formData.email ? 'active' : ''
                                        }`}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused({ ...focused, email: true })}
                                    onBlur={() => setFocused({ ...focused, email: false })}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    className={`floating-label ${focused.phone || formData.phone ? 'active' : ''
                                        }`}
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocused({ ...focused, phone: true })}
                                    onBlur={() => setFocused({ ...focused, phone: false })}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    className={`floating-label ${focused.message || formData.message ? 'active' : ''
                                        }`}
                                >
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused({ ...focused, message: true })}
                                    onBlur={() => setFocused({ ...focused, message: false })}
                                    required
                                    rows="5"
                                    className="form-input"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                                <FaPaperPlane style={{ marginLeft: '0.5rem' }} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
