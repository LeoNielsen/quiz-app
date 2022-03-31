import React from 'react'
import ".././styles/question.css"
import logo from '../img/blacklogo.png'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const Question = ({ question, qCorrectAnswer, qIncorrectAnswers, index, quizSize, getNextQuestion }) => {
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


    // const changeAnswerStyle = () => {
    //     setAnswerStyle('')
    // }

    // const [answers, setAnswers] = useState([]);
    // const [answerStyle1, setAnswerStyle1] = useState('answer-item');
    // const [answerStyle2, setAnswerStyle2] = useState('answer-item');
    // const [answerStyle3, setAnswerStyle3] = useState('answer-item');
    // const [answerStyle4, setAnswerStyle4] = useState('answer-item');

    // const changeStyle = () => {

    // }


    return (
        <div className='question-section'>
            <img src={logo} />
            <div className='question-desc-section'>
                <div className='flex-container'>
                    <div className='flex-item'>
                        <p className='question-amount-desc'>Question {index} of {quizSize}</p>
                        <p className='question-category-desc'>{question.category}</p>
                        <label>{question.question.replace(/&quot;/g,'"')
                        .replace(/&rdquo;/g, '"')
                        .replace(/&ldquo;/g, '"')
                        .replace(/&#039;/g, "'")}</label>
                    </div>
                </div>
            </div>
            <div className='answers-section'>
                <div className='flex-container'>
                    <div className='flex-item-left'>
                        <div id='answer1' className={style}>
                            <div className='answer-letter'>A</div>
                            <div className='answer-desc'>{allAnswers[0]}</div>
                        </div>
                        <div id='answer2' className={style}>
                            <div className='answer-letter'>B</div>
                            <div className='answer-desc'>{allAnswers[1]}</div>
                        </div>
                    </div>

                    {/* If question has multiple type we adds two more answer */}
                    {(question.type == "multiple") ?
                        (<div className='flex-item-right'>
                            <div id='answer3' className={style}>
                                <div className='answer-letter'>C</div>
                                <div className='answer-desc'>{allAnswers[2]}</div>
                            </div>
                            <div id='answer4' className={style}>
                                <div className='answer-letter'>D</div>
                                <div className='answer-desc'>{allAnswers[3]}</div>
                            </div>
                        </div>) : <></>
                    }
                </div>
            </div>
            <div className='question-menu-section'>
                <div className='flex-container'>

                    <div className='flex-item'>
                        <button className='black-btn' onClick={getNextQuestion}>Next question</button>
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