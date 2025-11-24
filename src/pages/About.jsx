import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <div className="container">
                    <h1>About Mind Booster</h1>
                    <p className="text-glow">Learning & Development Solutions</p>
                </div>
            </div>

            <div className="container about-content">
                <section className="about-section">
                    <h2>Company Overview</h2>
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <p>
                            Mind Booster Learning & Development Solutions is a South African–based education technology and training company dedicated to improving learning outcomes, strengthening cognitive development, and preparing young people for academic excellence and workplace readiness.
                        </p>
                        <br />
                        <p>
                            We offer an integrated suite of CAPS-aligned learning programmes, digital tools, and support services for schools, parents, learners, and tertiary graduates.
                        </p>
                        <br />
                        <p><strong>Our flagship solutions include:</strong></p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            <li>Mind Booster Programme (Grade R–12)</li>
                            <li>Cognitive Development & Mind Games System</li>
                            <li>Spelling & Literacy Improvement Tools</li>
                            <li>Study Skills & Exam Readiness Programme</li>
                            <li>Tertiary Graduate Work Readiness Programme</li>
                            <li>School Support, Training, and Curriculum Integration</li>
                            <li>Digital Learning Platform & Subscription Packages</li>
                        </ul>
                        <br />
                        <p>
                            Our mission is to empower learners and graduates with the skills, confidence, and cognitive strength needed for the modern world.
                        </p>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Vision & Mission</h2>
                    <div className="values-grid">
                        <div className="value-card glass-panel">
                            <h3>Vision Statement</h3>
                            <p>
                                To become Africa’s leading provider of innovative learning solutions that transform educational performance, build future-ready minds, and bridge the gap between school, tertiary education, and the workplace.
                            </p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Mission Statement</h3>
                            <p>
                                To deliver accessible, high-quality, and research-backed learning tools that strengthen cognitive ability, improve academic results, promote lifelong learning, and support career readiness through technology-driven programmes.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card glass-panel">
                            <h3>Excellence</h3>
                            <p>We pursue high-quality outcomes in every programme we deliver.</p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Innovation</h3>
                            <p>We use modern technology and brain-based learning to unlock potential.</p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Integrity</h3>
                            <p>We operate honestly, ethically, and responsibly.</p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Inclusivity</h3>
                            <p>We create solutions accessible to all learners regardless of background.</p>
                        </div>
                        <div className="value-card glass-panel">
                            <h3>Impact</h3>
                            <p>We focus on measurable improvements in performance and confidence.</p>
                        </div>
                    </div>
                </section>





                <section className="about-section">
                    <h2>Target Market</h2>
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <li>Primary & Secondary Schools</li>
                            <li>Teachers & School Administrators</li>
                            <li>Parents & Homeschooling Families</li>
                            <li>TVET Colleges, Universities</li>
                            <li>Corporate Graduate Programmes</li>
                            <li>NGOs working in education</li>
                            <li>Government education programmes</li>
                            <li>Private tutoring centres</li>
                        </ul>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Competitive Advantages</h2>
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                            <li>Fully CAPS-aligned content for all grades</li>
                            <li>Integrated system combining cognitive training + academic support + workplace readiness</li>
                            <li>Digital platform with gamified learning</li>
                            <li>AI-driven progress tracking and adaptive difficulty</li>
                            <li>Affordable subscription packages for all user categories</li>
                            <li>Mobile-friendly with offline capabilities</li>
                            <li>Backed by research-based learning methodologies</li>
                            <li>Scalable for both individual learners and large institutions</li>
                        </ul>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Corporate Social Responsibility (CSR)</h2>
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <p>We are committed to supporting under-resourced schools and communities through:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            <li>Sponsored access to the Mind Booster platform</li>
                            <li>Educator development initiatives</li>
                            <li>Free community learning days</li>
                            <li>Partnership with youth development organisations</li>
                        </ul>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Management & Team</h2>
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <p>Our team consists of:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            <li>Qualified educators and curriculum specialists</li>
                            <li>Cognitive development specialists</li>
                            <li>Software developers and data analysts</li>
                            <li>Learning designers & facilitators</li>
                            <li>Training and support staff</li>
                            <li>Research and quality assurance personnel</li>
                        </ul>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Our Clients & Partners</h2>
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                            <li>Schools</li>
                            <li>Training academies</li>
                            <li>Colleges & universities</li>
                            <li>Private companies</li>
                            <li>NGOs & community projects</li>
                        </ul>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Conclusion</h2>
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <p>
                            Mind Booster Learning & Development Solutions is dedicated to transforming education by making cognitive development, academic enhancement, and work readiness accessible to every learner. Our programmes empower learners to think better, learn better, and perform better—setting them up for long-term academic and career success.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
