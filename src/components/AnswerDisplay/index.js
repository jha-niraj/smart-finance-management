import React from 'react';
import './styles.css';
import BudgetGuide from '../BudgetContainer';

const AnswerDisplay = ({ answer, isLoading }) => {
    if (!answer && !isLoading) return null;
    console.log(answer);

    return (
        <div className="answer-container">
            <h3>Answer</h3>
            <div className="answer-content">
                {
                    isLoading ? (
                        <div className="loading-spinner">Loading...</div>
                    ) : (
                        <BudgetGuide content={answer} />
                    )
                }
            </div>
        </div>
    );
};

export default AnswerDisplay;