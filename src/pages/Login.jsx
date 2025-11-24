import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight } from 'lucide-react';
import logo from '../assets/Mindbooster.jpeg';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
        // Simulate login
        login({ email: formData.email });
        navigate('/');
    };

    return (
        <div className="auth-page">
            <div className="container auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <img src={logo} alt="Mind Booster Logo" className="auth-logo" />
                        <h2>Welcome Back</h2>
                        <p>Sign in to continue your learning journey</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <User size={20} className="input-icon" />
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
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <Lock size={20} className="input-icon" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <Link to="/forgot-password" class="forgot-link">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Sign In <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
