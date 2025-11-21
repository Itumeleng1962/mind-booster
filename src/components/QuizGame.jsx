import React, { useState } from 'react';
import './QuizGame.css';

const questions = [
    {
        question: "What is the capital of South Africa?",
        options: ["Pretoria", "Cape Town", "Bloemfontein", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    }
];

const QuizGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div className="quiz-game">
            <h3>Quick Quiz</h3>
            {showScore ? (
                <div className="score-section">
                    <p>You scored {score} out of {questions.length}</p>
                    <button className="btn btn-primary" onClick={resetQuiz}>Try Again</button>
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].question}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option) => (
                            <button key={option} onClick={() => handleAnswerOptionClick(option)}>{option}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizGame;
