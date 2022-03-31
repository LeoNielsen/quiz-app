import React from 'react'
import ".././styles/question.css"
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const Question = ({ question, qCorrectAnswer, qIncorrectAnswers, index, quizSize, getNextQuestion, checkAnswer }) => {
    /*TODO:
    --make a shuffle functions
    --´set values of each answer
    --make a setStyle methodes
    --make a change style
    */
    const [style, setAnswerStyle] = useState('answer-item');

    const [incorrectAnswers, setIncorrectAnswers] = useState(qIncorrectAnswers);
    const [correctAnswer, setCorrectAnswer] = useState(qCorrectAnswer);

    const [allAnswers, setAllAnswers] = useState([...qIncorrectAnswers, qCorrectAnswer])

    useEffect(() => {
        const shuffledArray = allAnswers.sort((a, b) => 0.5 - Math.random());
        setAllAnswers([...shuffledArray])
        //console.log(`this is true: ${qCorrectAnswer}`);
    }, [])


    const [answerStyle0, setAnswerStyle0] = useState('answer-item');
    const [answerStyle1, setAnswerStyle1] = useState('answer-item');
    const [answerStyle2, setAnswerStyle2] = useState('answer-item');
    const [answerStyle3, setAnswerStyle3] = useState('answer-item');

    const setStyle = (index, style) => {
        if (index == 0) {
            setAnswerStyle0(style)
        } else if (index == 1) {
            setAnswerStyle1(style)
        } else if (index == 2) {
            setAnswerStyle2(style)
        } else {
            setAnswerStyle3(style)
        }
    }

    const changeStyle = (e) => {
        //Find id for div, som er klikket på
        let targetid = e.currentTarget.id;

        //splitter id-navnet som fx: "answer-0", så vi kan hente index
        let index = targetid.split("-")[1];
        let correctIndex = allAnswers.indexOf(correctAnswer)
        
        //style classer for wrong og correct answer
        let wrongStyle = 'wrong-answer-item'
        let correctStyle = 'correct-answer-item'

        //checker om det er correct answer man har klikket på ellers
        //sættes style på både forkert og rigtig svar
        if (index == correctIndex) {
            setStyle(index, correctStyle)
            checkAnswer();
        } else {
            setStyle(index, wrongStyle)
            setStyle(correctIndex, correctStyle)
        }
        
    }

    return (
        <div className='question-section'>
            <div className='question-desc-section'>
                <div className='flex-container'>
                    <div className='flex-item'>
                        <p className='question-amount-desc'>Question {index} of {quizSize}</p>
                        <p className='question-category-desc'>{question.category}</p>
                        <label>{question.question.replace(/&quot;/g, '"')
                            .replace(/&rdquo;/g, '"')
                            .replace(/&ldquo;/g, '"')
                            .replace(/&#039;/g, "'").replace(/&ntilde;/g, 'ñ')}</label>
                    </div>
                </div>
            </div>
            <div className='answers-section'>
                <div className='flex-container'>
                    <div className='flex-item-left'>
                        <div id="answer-0" className={answerStyle0} onClick={changeStyle}>
                            <div className='answer-letter'>A</div>
                            <div className='answer-desc'>{allAnswers[0].replace(/&quot;/g, '"')
                                .replace(/&rdquo;/g, '"')
                                .replace(/&ldquo;/g, '"')
                                .replace(/&#039;/g, "'").replace(/&ntilde;/g, 'ñ')}</div>
                        </div>
                        <div id="answer-1" className={answerStyle1} onClick={changeStyle}>
                            <div className='answer-letter'>B</div>
                            <div className='answer-desc'>{allAnswers[1].replace(/&quot;/g, '"')
                                .replace(/&rdquo;/g, '"')
                                .replace(/&ldquo;/g, '"')
                                .replace(/&#039;/g, "'").replace(/&ntilde;/g, 'ñ')}</div>
                        </div>
                    </div>

                    {/* If question has multiple type we adds two more answer */}
                    {(question.type == "multiple") ?
                        (<div className='flex-item-right'>
                            <div id="answer-2" className={answerStyle2} onClick={changeStyle}>
                                <div className='answer-letter'>C</div>
                                <div className='answer-desc'>{allAnswers[2].replace(/&quot;/g, '"')
                                    .replace(/&rdquo;/g, '"')
                                    .replace(/&ldquo;/g, '"')
                                    .replace(/&#039;/g, "'").replace(/&ntilde;/g, 'ñ')}</div>
                            </div>
                            <div id="answer-3" className={answerStyle3} onClick={changeStyle}>
                                <div className='answer-letter'>D</div>
                                <div className='answer-desc'>{allAnswers[3].replace(/&quot;/g, '"')
                                    .replace(/&rdquo;/g, '"')
                                    .replace(/&ldquo;/g, '"')
                                    .replace(/&#039;/g, "'")
                                    .replace(/&ntilde;/g, 'ñ')}</div>
                            </div>
                        </div>) : <></>
                    }
                </div>
            </div>
            <div className='question-menu-section'>
                <div className='flex-container'>

                    <div className='flex-item'>
                        <button className='black-btn' onClick={getNextQuestion}>
                            {index == quizSize ? 'Show result' : 'Next question'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Question.defaultProps = {
    question: '',
    qCorrectAnswer: '',
    qIncorrectAnswers: '',
    index: '',
    quizSize: '',
    getNextQuestion: '',
}

export default Question