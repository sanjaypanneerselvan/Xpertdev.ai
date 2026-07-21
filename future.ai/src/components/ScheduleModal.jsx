import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import './ScheduleModal.css';

const ScheduleModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        time: '',
        reason: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwIO-S8rXHo70FTaVTh7UzF_PvggLz2j3z6cz_GDEPkEfYr9Frvikp-8AliIRudoZkyLw/exec';
        
        try {
            const formDataObj = new FormData();
            formDataObj.append('name', formData.name);
            formDataObj.append('email', formData.email);
            formDataObj.append('phone', 'N/A'); // Default for sheet compatibility
            formDataObj.append('message', 'Appointment Scheduled'); 
            formDataObj.append('time', formData.time);
            formDataObj.append('reason', formData.reason);
            formDataObj.append('type', 'appointment');

            await fetch(scriptUrl, {
                method: 'POST',
                body: formDataObj,
                mode: 'no-cors'
            });
            setShowSuccess(true);
            setFormData({ name: '', email: '', time: '', reason: '' });
            
            setTimeout(() => {
                setShowSuccess(false);
                onClose();
            }, 5000);
        } catch (error) {
            console.error('Error!', error.message);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-backdrop">
                    <motion.div
                        className="modal-content glass"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="close-btn" onClick={onClose}>
                            <FaTimes />
                        </button>

                        {showSuccess ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center', padding: '2rem 0' }}
                            >
                                <FaCheckCircle style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }} />
                                <h3 className="text-gradient mb-2">Thank You!</h3>
                                <p className="text-gray font-weight-bold" style={{ fontWeight: 600 }}>Our team will contact you within 10 working hours.</p>
                            </motion.div>
                        ) : (
                            <>
                                <h3 className="text-gradient mb-2">Schedule Appointment</h3>
                                <p className="mb-4 text-sm text-gray">Select a convenient time and let us know how we can help.</p>

                                <form onSubmit={handleSubmit} className="modal-form">
                                    <div className="form-group">
                                        <label className="modal-label">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="modal-label">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="modal-label">Preferred Time</label>
                                        <input
                                            type="datetime-local"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="modal-label">Reason for Appointment</label>
                                        <textarea
                                            name="reason"
                                            value={formData.reason}
                                            onChange={handleChange}
                                            required
                                            rows="3"
                                            className="form-input"
                                            placeholder="Briefly describe what you'd like to discuss..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Confirm Appointment'}
                                        <FaCalendarAlt style={{ marginLeft: '0.5rem' }} />
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ScheduleModal;
