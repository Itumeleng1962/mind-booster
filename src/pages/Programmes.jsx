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
                {/* Grade R-12 Full Course */}
                <section className="programme-section glass-panel">
                    <div className="programme-section-header">
                        <h2><BookOpen size={32} /> Mind Booster Full Course (Grade R–12)</h2>
                    </div>
                    <div className="programme-details" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                A year-round programme aligned with CAPS, focusing on:
                            </p>
                            <ul>
                                <li>Cognitive games and brain exercises</li>
                                <li>Spelling and language enrichment</li>
                                <li>Mathematics logic and reasoning</li>
                                <li>Memory improvement and concentration</li>
                                <li>Study and exam techniques</li>
                                <li>Social-emotional learning</li>
                            </ul>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                            alt="Children learning"
                            style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                </section>

                {/* Mind Games */}
                <section className="programme-section glass-panel">
                    <div className="programme-section-header">
                        <h2><Brain size={32} /> Mind Games & Brain Challenges</h2>
                    </div>
                    <div className="programme-details" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                Interactive tournaments and class-based competitions designed to improve:
                            </p>
                            <ul>
                                <li>Problem-solving skills</li>
                                <li>Critical thinking</li>
                                <li>Teamwork and collaboration</li>
                            </ul>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80"
                            alt="Students playing chess"
                            style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                </section>

                {/* Spelling & Vocabulary */}
                <section className="programme-section glass-panel">
                    <div className="programme-section-header">
                        <h2><PenTool size={32} /> Spelling & Vocabulary Clinics</h2>
                    </div>
                    <div className="programme-details" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                Tailored per grade to strengthen:
                            </p>
                            <ul>
                                <li>Phonics and pronunciation</li>
                                <li>Word recognition and meaning</li>
                                <li>Academic and creative writing</li>
                            </ul>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
                            alt="Books and writing"
                            style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                </section>

                {/* Teacher & Parent Workshops */}
                <section className="programme-section glass-panel">
                    <div className="programme-section-header">
                        <h2><Users size={32} /> Teacher & Parent Workshops</h2>
                    </div>
                    <div className="programme-details" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                Empowering adults with techniques to support cognitive and emotional growth in learners through:
                            </p>
                            <ul>
                                <li>Memory support strategies</li>
                                <li>Learning style identification</li>
                                <li>Home-based brain activities</li>
                            </ul>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                            alt="Workshop session"
                            style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Programmes;
