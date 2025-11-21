import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <div className="container">
                    <h1>About Mind Booster</h1>
                    <p className="text-glow">Empowering learners to think smarter, learn faster, and perform better.</p>
                </div>
            </div>

            <div className="container about-content">
                <section className="about-section">
                    <h2>Company Overview</h2>
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }} className="about-grid">
                            <div>
                                <p>
                                    Mind Booster (Pty) Ltd is an innovative educational solutions provider dedicated to enhancing learners’ intellectual performance, creativity, and academic excellence. Established to align with the CAPS (Curriculum and Assessment Policy Statement) framework of the South African Department of Basic Education, Mind Booster integrates cognitive development, language mastery, memory training, and mind games into a fun, structured learning experience from Grade R to Grade 12.
                                </p>
                                <br />
                                <p>
                                    Our mission is to bridge the gap between traditional education and modern cognitive learning by equipping learners with tools that build focus, critical thinking, problem-solving, and lifelong learning skills.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                                    alt="Diverse group of students graduating"
                                    style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--glass-border)' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Vision & Mission</h2>
                    <div className="values-grid">
                        <div className="value-card glass-panel">
                            <h3>Vision</h3>
                            <p>
                                To be South Africa’s leading provider of brain-based educational programmes that empower learners to think smarter, learn faster, and perform better — academically and personally.
                            </p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Mission</h3>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                <li>To design and deliver CAPS-aligned brain development and learning enhancement programmes.</li>
                                <li>To cultivate creativity, emotional intelligence, and resilience in learners.</li>
                                <li>To promote spelling, logical reasoning, and memory improvement across all school grades.</li>
                                <li>To support schools, educators, and parents with practical, measurable, and engaging learning interventions.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card glass-panel">
                            <h3>Innovation</h3>
                            <p>Integrating neuroscience and fun learning.</p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Excellence</h3>
                            <p>Delivering results-driven, high-quality educational solutions.</p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Integrity</h3>
                            <p>Promoting transparency, fairness, and respect in all our operations.</p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Collaboration</h3>
                            <p>Partnering with schools, teachers, and parents for learner success.</p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Empowerment</h3>
                            <p>Building confident, self-motivated, and independent thinkers.</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Partnerships & Collaborations</h2>
                    <p>We collaborate with:</p>
                    <ul className="partnerships-list">
                        <li>Schools and Educational Districts</li>
                        <li>SETAs and Training Providers</li>
                        <li>Educational NGOs and Youth Development Centres</li>
                        <li>Corporate Social Investment (CSI) projects</li>
                        <li>Early Childhood Development (ECD) Centres</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;
