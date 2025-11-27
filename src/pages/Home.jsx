import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Brain, Cpu, Globe, Zap } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="home-hero">
                <div className="hero-content">
                    <h1>Future-Ready Learning</h1>
                    <p>
                        Mind Booster combines neuroscience with cutting-edge technology to unlock your child's full potential. Experience the next evolution of education.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/programmes" className="btn btn-primary">
                            Explore Programmes
                        </Link>
                        <Link to="/games" className="btn btn-secondary">
                            Try Brain Games
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Powered by <span>Science</span></h2>
                    <div className="about-preview glass-panel" style={{ padding: '3rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }} className="about-grid">
                            <div>
                                <p style={{ textAlign: 'left' }}>
                                    We bridge the gap between traditional education and modern cognitive learning. Our AI-enhanced curriculum adapts to each learner, building focus, critical thinking, and problem-solving skills for the digital age.
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <Cpu size={40} color="var(--color-picton-blue)" />
                                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Cognitive Processing</p>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Globe size={40} color="var(--color-picton-blue)" />
                                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Global Standards</p>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Zap size={40} color="var(--color-picton-blue)" />
                                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Rapid Learning</p>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <Link to="/about" className="btn btn-secondary">
                                        Discover Our Mission
                                    </Link>
                                </div>
                            </div>
                            <div className="illustration-container">
                                <img
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                                    alt="Students learning in a modern classroom"
                                    style={{ width: '100%', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programmes Preview */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Learning <span>Modules</span></h2>
                    <div className="programmes-grid">
                        <div className="programme-card glass-panel">
                            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1550592704-6c76defa9985?auto=format&fit=crop&w=800&q=80"
                                    alt="Student using tablet"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="card-img"
                                />
                            </div>
                            <h3>Grade R - 7</h3>
                            <p>
                                Foundational cognitive development, spelling, and logical reasoning enhanced by interactive digital tools.
                            </p>
                            <Link to="/programmes" className="btn btn-primary">
                                View Details <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                            </Link>
                        </div>
                        <div className="programme-card glass-panel">
                            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80"
                                    alt="Student with VR headset"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="card-img"
                                />
                            </div>
                            <h3>Grade 8 - 12</h3>
                            <p>
                                Advanced memory training and exam preparation using neuro-scientific techniques for academic excellence.
                            </p>
                            <Link to="/programmes" className="btn btn-primary">
                                View Details <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                            </Link>
                        </div>
                        <div className="programme-card glass-panel">
                            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                                    alt="Digital brain concept"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="card-img"
                                />
                            </div>
                            <h3>Mind Games</h3>
                            <p>
                                Challenge your intellect with our suite of brain-training games designed to boost neuroplasticity.
                            </p>
                            <Link to="/games" className="btn btn-primary">
                                Play Games <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                            </Link>
                        </div>
                        <div className="programme-card glass-panel">
                            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                                    alt="Professional workplace readiness"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="card-img"
                                />
                            </div>
                            <h3>Graduate Work Readiness</h3>
                            <p>
                                Professional workplace readiness training for graduates entering the workforce.
                            </p>
                            <Link to="/programmes" className="btn btn-primary">
                                View Details <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>Ready to Upgrade Your Mind?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-link-water)' }}>
                        Join the future of education today.
                    </p>
                    <Link to="/contact" className="btn btn-secondary">
                        Initialize Contact
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
