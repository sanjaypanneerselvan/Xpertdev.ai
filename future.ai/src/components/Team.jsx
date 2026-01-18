import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import './Team.css';
import teamPlaceholder from '../assets/team_placeholder_1768729173624.png';

const Team = () => {
    const teamMembers = [
        {
            name: 'Sanjay Panneerselvan',
            role: 'CEO',
            image: teamPlaceholder,
        },
        {
            name: 'Swetha Ramamoorthi',
            role: 'CXO',
            image: teamPlaceholder,
        },
        {
            name: 'Akshaya Maniyan',
            role: 'Operations Head',
            image: teamPlaceholder,
        },
        {
            name: 'Nikil S',
            role: 'Marketing & SEO',
            image: teamPlaceholder,
        },
        {
            name: 'Sandhiya',
            role: 'Branding & Advertising',
            image: teamPlaceholder,
        },
        {
            name: 'Eniya Aasaithambi',
            role: 'Client Coordinator',
            image: teamPlaceholder,
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
                            <div className="team-image-wrapper">
                                <motion.div
                                    className="team-image"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={member.image} alt={member.name} />
                                    <div className="image-border"></div>
                                </motion.div>
                            </div>

                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>

                                <motion.button
                                    className="team-social"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin />
                                </motion.button>
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
