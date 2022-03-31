import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import ".././styles/quiz-result.css"

const QuizResult = ({result, quizSize, restart, endQuiz}) => {
    return (
        <div className='quiz-result-section'>
            <div className='white-container'>
                <div className='flex-container'>
                    <div className='flex-item'>
                        <p className='title'>Result</p>
                        <p className='result-comment'>YOUR SCORE</p>
                        <p className='result-value'>{result} / {quizSize}</p>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className='flex-item-left'>
                        <div className='result-item'>
                            <button className='green-btn' onClick={restart}>Try again</button>
                        </div>
                    </div>
                    <div className='flex-item-right'>
                        <div className='result-item'>
                            <button className='black-btn' onClick={endQuiz}>Go to homepage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizResult