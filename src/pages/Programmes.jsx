import React from 'react';
import { BookOpen, GraduationCap, Brain, Users, PenTool } from 'lucide-react';
import './Programmes.css';

const Programmes = () => {
    return (
        <div className="programmes-page">
            <div className="programmes-header">
                <div className="container">
                    <h1>Our Programmes</h1>
                    <p className="text-glow">Comprehensive educational solutions for every stage of learning.</p>
                </div>
            </div>

            <div className="container programmes-content">
                <section className="programme-section glass-panel">
                    <div className="programme-section-header">
                        <h2><BookOpen size={32} /> Mind Booster Levels</h2>
                    </div>
                    <div className="programme-details">
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <strong style={{ fontSize: '1.2rem', color: 'var(--color-picton-blue)' }}>Level 1: Grade R–3</strong>
                                <p style={{ marginTop: '0.5rem' }}>Cognitive foundations & early literacy</p>
                            </li>
                            <li style={{ marginBottom: '1rem', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <strong style={{ fontSize: '1.2rem', color: 'var(--color-picton-blue)' }}>Level 2: Grade 4–6</strong>
                                <p style={{ marginTop: '0.5rem' }}>Consolidation & skills strengthening</p>
                            </li>
                            <li style={{ marginBottom: '1rem', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <strong style={{ fontSize: '1.2rem', color: 'var(--color-picton-blue)' }}>Level 3: Grade 7–9</strong>
                                <p style={{ marginTop: '0.5rem' }}>Advanced thinking & academic strategy</p>
                            </li>
                            <li style={{ marginBottom: '1rem', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <strong style={{ fontSize: '1.2rem', color: 'var(--color-picton-blue)' }}>Level 4: Grade 10–12</strong>
                                <p style={{ marginTop: '0.5rem' }}>Exam mastery, reasoning, and school-leaving readiness</p>
                            </li>
                            <li style={{ padding: '1rem' }}>
                                <strong style={{ fontSize: '1.2rem', color: 'var(--color-picton-blue)' }}>Level 5: Graduate Track</strong>
                                <p style={{ marginTop: '0.5rem' }}>Professional workplace readiness</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Programmes;
