import React from 'react';
import { School, Users, ClipboardList, Monitor, Briefcase } from 'lucide-react';
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
                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <School size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>School Enrichment Programs</h3>
                        <p>Structured, term-based learning modules for Grades R–12 to enhance curriculum delivery.</p>
                    </div>

                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <Users size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>Workshops & Training</h3>
                        <p>Capacity building for educators and parents to support learner development.</p>
                    </div>

                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <ClipboardList size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>Cognitive Assessments</h3>
                        <p>Learner brain fitness and progress evaluations to track improvement.</p>
                    </div>

                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <Monitor size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>Digital Learning Tools</h3>
                        <p>Online games, quizzes, and resources for interactive learning.</p>
                    </div>

                    <div className="service-card glass-panel">
                        <div className="service-icon">
                            <Briefcase size={40} color="var(--color-picton-blue)" />
                        </div>
                        <h3>Educational Consulting</h3>
                        <p>Custom CAPS-aligned enrichment design for schools and organizations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
