import React from 'react';
import MemoryGame from '../components/MemoryGame';
import QuizGame from '../components/QuizGame';
import './Games.css';

const Games = () => {
    return (
        <div className="games-page">
            <div className="games-header">
                <div className="container">
                    <h1>Games & Activities</h1>
                    <p className="text-glow">Learning is fun with Mind Booster! Challenge yourself with our games.</p>
                </div>
            </div>

            <div className="container games-content">
                <div className="games-grid">
                    <div className="game-container glass-panel">
                        <MemoryGame />
                    </div>
                    <div className="game-container glass-panel">
                        <QuizGame />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Games;
