import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: 'Sanjay Panneerselvan',
            role: 'CEO & Founder',
            description: 'Visionary leader driving the strategic direction and innovation at XpertI/O.',
            linkedin: 'https://www.linkedin.com/in/sanjayp41/',
        },
        {
            name: 'Akshaya Maniyan',
            role: 'CXO & Co-Founder',
            description: 'Expert strategist orchestrating business operations and long-term planning.',
            linkedin: 'https://www.linkedin.com/in/akshaya-manian07/',
        },
        {
            name: 'Swetha Ramamoorthi',
            role: 'Chief Operational Officer & Co-Founder',
            description: 'Operational powerhouse ensuring flawless execution and client success.',
            linkedin: 'https://www.linkedin.com/in/swetha-r-021a382a4/',
        },
        {
            name: 'Srinivesh Prabhu',
            role: 'Business Development Associate',
            description: 'Dynamic professional focused on building lasting partnerships and expanding market reach.',
            linkedin: 'http://linkedin.com/in/srinivesh-prabhu-53b246240/',
        },
    ];

    return (
        <section id="team" className="team section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-2">Meet Our Team</h2>
                    <p className="section-subtitle">
                        Passionate experts driving innovation and excellence
                    </p>
                </motion.div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card glass"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                        >


                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-description" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.5' }}>{member.description}</p>

                                <motion.a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="team-social"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin />
                                </motion.a>
                            </div>

                            <div className="team-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
