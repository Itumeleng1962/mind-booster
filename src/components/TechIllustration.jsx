import React from 'react';
import { Users, Monitor, Brain, Tablet, Atom, Globe, Database, Wifi } from 'lucide-react';
import './TechIllustration.css';

const TechIllustration = ({ type }) => {
    const renderContent = () => {
        switch (type) {
            case 'students':
                return (
                    <div className="tech-illustration-content">
                        <Users size={80} className="main-icon" />
                        <div className="floating-element fe-1"><Wifi size={24} /></div>
                        <div className="floating-element fe-2"><Database size={24} /></div>
                        <div className="holo-ring"></div>
                    </div>
                );
            case 'classroom':
                return (
                    <div className="tech-illustration-content">
                        <Monitor size={80} className="main-icon" />
                        <div className="floating-element fe-1"><Globe size={24} /></div>
                        <div className="floating-element fe-2"><Users size={24} /></div>
                        <div className="holo-grid"></div>
                    </div>
                );
            case 'tablet':
                return (
                    <div className="tech-illustration-content">
                        <Tablet size={80} className="main-icon" />
                        <div className="floating-element fe-1"><Atom size={24} /></div>
                        <div className="floating-element fe-2"><Brain size={24} /></div>
                        <div className="holo-scan"></div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="tech-illustration-container">
            {renderContent()}
        </div>
    );
};

export default TechIllustration;
