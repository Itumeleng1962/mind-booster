import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, BookOpen } from 'lucide-react';
import logo from '../assets/Mindbooster.jpeg';
import './Auth.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        grade: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign Up attempt:', formData);
        alert('Registration functionality coming soon!');
    };

    return (
        <div className="auth-page">
            <div className="container auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <img src={logo} alt="Mind Booster Logo" className="auth-logo" />
                        <h2>Create Account</h2>
                        <p>Join the Mind Booster community today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <div className="input-wrapper">
                                <User size={20} className="input-icon" />
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <Mail size={20} className="input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="student@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="grade">Grade / Level</label>
                            <div className="input-wrapper">
                                <BookOpen size={20} className="input-icon" />
                                <select
                                    id="grade"
                                    name="grade"
                                    value={formData.grade}
                                    onChange={handleChange}
                                    required
                                    className="custom-select"
                                >
                                    <option value="" disabled>Select your grade</option>
                                    <option value="R-3">Foundation Phase (Grade R-3)</option>
                                    <option value="4-6">Intermediate Phase (Grade 4-6)</option>
                                    <option value="7-9">Senior Phase (Grade 7-9)</option>
                                    <option value="10-12">FET Phase (Grade 10-12)</option>
                                    <option value="adult">Adult / Parent</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <Lock size={20} className="input-icon" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-wrapper">
                                <Lock size={20} className="input-icon" />
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Create Account <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
