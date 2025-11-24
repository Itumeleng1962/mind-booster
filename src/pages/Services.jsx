import React from 'react';
import { School, Monitor, Briefcase, Brain, Settings } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <div className="services-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p className="text-glow">Tailored solutions for schools, educators, and learners.</p>
                </div>
            </div>

            <div className="container services-content">
                <div className="services-grid">
                    {/* 5.1 Mind Booster Programme */}
                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <Brain size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>Mind Booster Programme</h3>
                        <p>A comprehensive cognitive and academic support programme covering Grade R to Grade 12.</p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', textAlign: 'left' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Mind games & brain training</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Spelling & literacy development</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Numeracy & problem-solving support</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Study skills & exam readiness</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Emotional intelligence activities</li>
                        </ul>
                    </div>

                    {/* 5.2 Digital Learning Platform */}
                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <Monitor size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>Digital Learning Platform</h3>
                        <p>A web and mobile platform delivering interactive learning experiences.</p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', textAlign: 'left' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Daily mind games</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Adaptive learning activities</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> CAPS-aligned modules</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> AI-powered spelling training</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Learner analytics & tracking</li>
                        </ul>
                    </div>

                    {/* 5.3 School Support & Training */}
                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <School size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>School Support & Training</h3>
                        <p>Helping schools introduce cognitive development and modern learning strategies.</p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', textAlign: 'left' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Teacher training workshops</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Classroom integration support</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> School performance reporting</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Parent engagement sessions</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Assessments & diagnostics</li>
                        </ul>
                    </div>

                    {/* 5.4 Tertiary Graduate Work Readiness */}
                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <Briefcase size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>Graduate Work Readiness</h3>
                        <p>A structured programme preparing graduates for the workplace.</p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', textAlign: 'left' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Professional communication</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Digital literacy skills</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> CV & portfolio development</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Interview coaching</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Workplace behaviour & ethics</li>
                        </ul>
                    </div>

                    {/* 5.5 Custom Solutions */}
                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <Settings size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>Custom Solutions</h3>
                        <p>For institutions, corporates, NGOs, and education providers.</p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', textAlign: 'left' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> White-labelled e-learning platforms</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Custom curriculum development</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Learnership support modules</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>•</span> Monitoring and reporting tools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
