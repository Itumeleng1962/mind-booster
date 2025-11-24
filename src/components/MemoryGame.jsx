import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Brain, Star, Sun, Moon, Cloud, Zap } from 'lucide-react';
import './MemoryGame.css';

const initialCards = [
    { id: 1, icon: <Brain size={32} />, name: 'brain' },
    { id: 2, icon: <Star size={32} />, name: 'star' },
    { id: 3, icon: <Sun size={32} />, name: 'sun' },
    { id: 4, icon: <Moon size={32} />, name: 'moon' },
    { id: 5, icon: <Cloud size={32} />, name: 'cloud' },
    { id: 6, icon: <Zap size={32} />, name: 'zap' },
];

const MemoryGame = () => {
    const { isAuthenticated } = useAuth();
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const shuffledCards = [...initialCards, ...initialCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, uniqueId: Math.random() }));
        setCards(shuffledCards);
    }, []);

    const handleClick = (id) => {
        if (disabled || flipped.includes(id)) return;

        if (flipped.length === 0) {
            setFlipped([id]);
            return;
        }

        setFlipped([flipped[0], id]);
        setDisabled(true);

        const firstCard = cards.find((card) => card.uniqueId === flipped[0]);
        const secondCard = cards.find((card) => card.uniqueId === id);

        if (firstCard.name === secondCard.name) {
            setSolved([...solved, firstCard.name]);
            setFlipped([]);
            setDisabled(false);
        } else {
            setTimeout(() => {
                setFlipped([]);
                setDisabled(false);
            }, 1000);
        }
    };

    const resetGame = () => {
        setFlipped([]);
        setSolved([]);
        setDisabled(false);
        setCards([...initialCards, ...initialCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, uniqueId: Math.random() })));
    };

    return (
        <div className="memory-game">
            <h3>Memory Match</h3>
            <p>Find all the matching pairs!</p>
            <div className="cards-grid">
                {cards.map((card) => (
                    <div
                        key={card.uniqueId}
                        className={`card ${flipped.includes(card.uniqueId) || solved.includes(card.name) ? 'flipped' : ''} ${solved.includes(card.name) ? 'solved' : ''}`}
                        onClick={() => !solved.includes(card.name) && handleClick(card.uniqueId)}
                    >
                        <div className="card-front">?</div>
                        <div className="card-back">{card.icon}</div>
                    </div>
                ))}
            </div>
            {solved.length === initialCards.length && (
                <div className="game-won">
                    <p>You Won!</p>
                    {isAuthenticated ? (
                        <button className="btn btn-primary" onClick={resetGame}>Play Next Level</button>
                    ) : (
                        <div className="login-prompt">
                            <p>Please login to continue to the next level</p>
                            <Link to="/login" className="btn btn-primary">Login to Continue</Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MemoryGame;
