import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p className="text-glow">Connect with us to start your cognitive journey.</p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info glass-panel">
                        <h2>Contact Information</h2>

                        <div className="info-item">
                            <Mail size={24} color="var(--color-picton-blue)" />
                            <div>
                                <h3>Email Us</h3>
                                <p>info@mindbooster.co.za</p>
                                <p>support@mindbooster.co.za</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone size={24} color="var(--color-picton-blue)" />
                            <div>
                                <h3>Call Us</h3>
                                <p>+27 12 345 6789</p>
                                <p>+27 82 123 4567</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin size={24} color="var(--color-picton-blue)" />
                            <div>
                                <h3>Visit Us</h3>
                                <p>123 Innovation Drive</p>
                                <p>Tech Park, Sandton</p>
                                <p>Johannesburg, 2196</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container glass-panel">
                        <h2>Send a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message <Send size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
