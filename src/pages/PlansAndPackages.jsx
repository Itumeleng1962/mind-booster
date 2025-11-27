import React, { useState } from 'react';
import { X, User, Mail, Phone, Building, Users, Send } from 'lucide-react';
import './PlansAndPackages.css';

const PlansAndPackages = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        numberOfLearners: '',
        message: ''
    });

    const handlePackageClick = (packageName) => {
        setSelectedPackage(packageName);
        setFormData({
            name: '',
            email: '',
            phone: '',
            organization: '',
            numberOfLearners: '',
            message: ''
        });
    };

    const handleCloseModal = () => {
        setSelectedPackage(null);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Package enrollment:', selectedPackage, formData);
        alert(`Thank you for your interest in ${selectedPackage}! We will contact you soon.`);
        handleCloseModal();
    };

    const isSchoolPackage = (packageName) => {
        return packageName?.includes('School') || packageName?.includes('Enterprise') || packageName?.includes('District');
    };

    const isGraduatePackage = (packageName) => {
        return packageName?.includes('Graduate') || packageName?.includes('Job-Ready') || packageName?.includes('Corporate');
    };

    return (
        <div className="plans-page">
            <div className="plans-header">
                <div className="container">
                    <h1>Plans and Packages</h1>
                    <p className="text-glow">CAPS-aligned cognitive, spelling, mind games, academic support & graduate readiness system</p>
                </div>
            </div>

            <div className="container">
                {/* 1. SCHOOL / INSTITUTION PACKAGES */}
                <h2 className="section-title">1. School / Institution Packages</h2>
                <div className="pricing-grid">
                    {/* A. BASIC SCHOOL PACKAGE */}
                    <div className="pricing-card card-blue">
                        <div className="card-header">
                            <h3>Basic School Package</h3>
                            <div className="price-tag">R 3,500 <span className="price-sub">/ month per school</span></div>
                            <p className="best-for">Best for: Small schools, early adoption, pilot phases</p>
                        </div>
                        <ul className="feature-list">
                            <li>Access for up to 150 learners</li>
                            <li>Teacher dashboard</li>
                            <li>CAPS-aligned lessons (Foundation–Senior Phase)</li>
                            <li>Mind games library (basic)</li>
                            <li>Spelling practice engine</li>
                            <li>Progress reports (monthly)</li>
                            <li>Parent basic access</li>
                            <li>Email support</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Basic School Package')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* B. STANDARD SCHOOL PACKAGE */}
                    <div className="pricing-card card-green">
                        <div className="card-header">
                            <h3>Standard School Package</h3>
                            <div className="price-tag">R 7,500 <span className="price-sub">/ month per school</span></div>
                            <p className="best-for">Most Popular</p>
                        </div>
                        <ul className="feature-list">
                            <li><strong>Includes everything in Basic plus:</strong></li>
                            <li>Up to 500 learners</li>
                            <li>Full mind games suite</li>
                            <li>Adaptive learning engine</li>
                            <li>Assessment & quiz generator</li>
                            <li>Termly analytics</li>
                            <li>Teacher training webinars</li>
                            <li>Certificates of completion for learners</li>
                            <li>Dedicated account manager (virtual)</li>
                            <li>Priority support</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Standard School Package')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* C. ADVANCED SCHOOL PACKAGE */}
                    <div className="pricing-card card-orange">
                        <div className="card-header">
                            <h3>Advanced School Package</h3>
                            <div className="price-tag">R 12,500 <span className="price-sub">/ month per school</span></div>
                        </div>
                        <ul className="feature-list">
                            <li><strong>Includes everything in Standard plus:</strong></li>
                            <li>Up to 1,200 learners</li>
                            <li>Mobile app (offline mode included)</li>
                            <li>Behavioral insights + learning difficulty alerts</li>
                            <li>Custom reporting (CAPS outcomes, educator performance)</li>
                            <li>Integration with school systems (LMS/Student Records)</li>
                            <li>Full admin features (multi-class, multi-campus)</li>
                            <li>WhatsApp parent notifications</li>
                            <li>Term-by-term learner improvement analytics</li>
                            <li>Live 1-on-1 onboarding for teachers</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Advanced School Package')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* D. ENTERPRISE / DISTRICT PACKAGE */}
                    <div className="pricing-card card-red">
                        <div className="card-header">
                            <h3>Enterprise / District</h3>
                            <div className="price-tag">Custom <span className="price-sub">R 45,000 – R 120,000 / month</span></div>
                            <p className="best-for">For: Large districts, private school groups, government rollouts</p>
                        </div>
                        <ul className="feature-list">
                            <li>Unlimited learners across multiple schools</li>
                            <li>Custom branding + white-label</li>
                            <li>API integrations (SA-SAMS, LMS, HR, portals)</li>
                            <li>Full BI dashboards and predictive analytics</li>
                            <li>Dedicated customer success team</li>
                            <li>On-site training + annual workshops</li>
                            <li>Data warehouse exports</li>
                            <li>Private cloud hosting option</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Enterprise / District')}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* 2. PARENT / INDIVIDUAL LEARNER PACKAGES */}
                <h2 className="section-title">2. Parent / Individual Learner Packages</h2>
                <div className="pricing-grid">
                    {/* A. Starter Pack */}
                    <div className="pricing-card card-blue">
                        <div className="card-header">
                            <h3>Starter Pack</h3>
                            <div className="price-tag">R 99 <span className="price-sub">/ month per learner</span></div>
                        </div>
                        <ul className="feature-list">
                            <li>Daily mind games</li>
                            <li>CAPS-aligned revision content</li>
                            <li>Spelling booster</li>
                            <li>Monthly progress tracker</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Starter Pack')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* B. Growth Pack */}
                    <div className="pricing-card card-green">
                        <div className="card-header">
                            <h3>Growth Pack</h3>
                            <div className="price-tag">R 149 <span className="price-sub">/ month per learner</span></div>
                        </div>
                        <ul className="feature-list">
                            <li><strong>Includes Starter +</strong></li>
                            <li>Full lesson library</li>
                            <li>Study skills activities</li>
                            <li>Weekly parent reports</li>
                            <li>Access to reading & numeracy boosters</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Growth Pack')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* C. Elite Pack */}
                    <div className="pricing-card card-orange">
                        <div className="card-header">
                            <h3>Elite Pack</h3>
                            <div className="price-tag">R 249 <span className="price-sub">/ month per learner</span></div>
                        </div>
                        <ul className="feature-list">
                            <li><strong>Includes Growth +</strong></li>
                            <li>Advanced cognitive games</li>
                            <li>Exam prep modules (Grade 4–12)</li>
                            <li>Live group classes (scheduled)</li>
                            <li>1 Certificate per term</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Elite Pack')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* D. Annual Family Pack */}
                    <div className="pricing-card card-yellow">
                        <div className="card-header">
                            <h3>Annual Family Pack</h3>
                            <div className="price-tag">R 1,800 <span className="price-sub">/ year (up to 3 children)</span></div>
                        </div>
                        <ul className="feature-list">
                            <li>All premium features</li>
                            <li>Parent dashboard + insights</li>
                            <li>Exclusive educational workshops</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Annual Family Pack')}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* 3. TERTIARY GRADUATE WORK READINESS PACKAGES */}
                <h2 className="section-title">3. Tertiary Graduate Work Readiness</h2>
                <div className="pricing-grid">
                    {/* A. Graduate Essentials */}
                    <div className="pricing-card card-blue">
                        <div className="card-header">
                            <h3>Graduate Essentials</h3>
                            <div className="price-tag">R 450 <span className="price-sub">/ once-off (2-week programme)</span></div>
                        </div>
                        <ul className="feature-list">
                            <li>Professional CV builder</li>
                            <li>Email & communication training</li>
                            <li>Interview basics</li>
                            <li>Basic digital skills</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Graduate Essentials')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* B. Job-Ready Pro */}
                    <div className="pricing-card card-green">
                        <div className="card-header">
                            <h3>Job-Ready Pro</h3>
                            <div className="price-tag">R 1,250 <span className="price-sub">/ once-off (4–6 week programme)</span></div>
                        </div>
                        <ul className="feature-list">
                            <li><strong>Includes Essentials +</strong></li>
                            <li>Full Work Readiness Curriculum</li>
                            <li>Mock interviews (video AI analysis)</li>
                            <li>Portfolio builder</li>
                            <li>Workplace behaviour modules</li>
                            <li>Certificate of Completion</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Job-Ready Pro')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* C. Corporate Graduate Pipeline Package */}
                    <div className="pricing-card card-orange">
                        <div className="card-header">
                            <h3>Corporate Graduate Pipeline</h3>
                            <div className="price-tag">R 32,000 <span className="price-sub">/ cohort (up to 30 graduates)</span></div>
                        </div>
                        <ul className="feature-list">
                            <li><strong>Includes Pro +</strong></li>
                            <li>Employer dashboard</li>
                            <li>Benchmark testing</li>
                            <li>Workplace culture training</li>
                            <li>Dedicated facilitator</li>
                            <li>Performance reports for HR</li>
                        </ul>
                        <button 
                            className="package-btn"
                            onClick={() => handlePackageClick('Corporate Graduate Pipeline')}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                {/* 5. WHITE-LABEL & PARTNER LICENSING */}
                <div className="white-label-section">
                    <div className="white-label-content">
                        <h3>5. White-Label & Partner Licensing</h3>
                        <p>For EdTech companies or institutions wanting their own version</p>
                        <div className="white-label-price">
                            R85,000 – R250,000 setup (branding + deployment)
                            <br />
                            <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>+ R25,000 – R60,000 monthly licensing</span>
                        </div>
                        <ul className="feature-list" style={{ display: 'inline-block', textAlign: 'left' }}>
                            <li>Dedicated infrastructure + support</li>
                            <li>Custom curriculum mapping</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Package Enrollment Modal */}
            {selectedPackage && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal}>
                            <X size={24} />
                        </button>
                        <h2 className="modal-title">Enroll in {selectedPackage}</h2>
                        <form onSubmit={handleSubmit} className="package-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <User size={18} /> Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <Mail size={18} /> Email Address
                                </label>
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
                                <label htmlFor="phone">
                                    <Phone size={18} /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {isSchoolPackage(selectedPackage) && (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="organization">
                                            <Building size={18} /> School/Organization Name
                                        </label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter school or organization name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="numberOfLearners">
                                            <Users size={18} /> Number of Learners
                                        </label>
                                        <input
                                            type="number"
                                            id="numberOfLearners"
                                            name="numberOfLearners"
                                            value={formData.numberOfLearners}
                                            onChange={handleChange}
                                            required
                                            min="1"
                                            placeholder="Enter number of learners"
                                        />
                                    </div>
                                </>
                            )}

                            {isGraduatePackage(selectedPackage) && (
                                <div className="form-group">
                                    <label htmlFor="organization">
                                        <Building size={18} /> Company/Institution (if applicable)
                                    </label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        placeholder="Enter company or institution name (optional)"
                                    />
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="message">Additional Information</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us more about your requirements..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Submit Enrollment <Send size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlansAndPackages;
