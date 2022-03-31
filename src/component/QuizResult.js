import React from 'react'
import ".././styles/quiz-result.css"

const goHome = () =>{
    return window.location.href='/'
}

const tryAgain = () =>{
    return window.location.href='/Question'
}

const QuizResult = ({result, quizSize}) => {
    return(
        <div className='quiz-result-section'>
                <div className='white-container'>
                    <div className='flex-container'>
                        <div className='flex-item'>
                            <p className='title'>Result</p>
                            <p className='result-comment'>Well played!</p>
                            <p className='result-value'>{result} / {quizSize}</p>
                        </div>
                    </div>
                    <div className='flex-container'>
                        <div className='flex-item-left'>
                            <div className='result-item'>
                                <button className='green-btn' >Try again</button>
                            </div>
                        </div>
                        <div className='flex-item-right'>
                            <div className='result-item'>
                                <button className='black-btn' onClick={goHome}>Go to homepage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default QuizResult