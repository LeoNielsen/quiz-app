import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import ".././styles/get-quiz.css"


const GetQuiz = ({ Categories, getQuiz }) => {

    const DEFAULT_CATEGORY = 'Any Category'
    const DEFAULT_NUMBEROFQUESTIONS = '10'
    const DEFAULT_DIFFICULTY = 'Any Difficulty'
    const DEFAULT_ANSWERTYPE = 'Any Type'

    const categoryURL = '&category='
    const numberOfQuestionURL = 'amount='
    const difficultyURL = '&difficulty='
    const answerTypeURL = '&type='

    const [category, setCategory] = useState(DEFAULT_CATEGORY)
    const [numberOfQuestions, setNumberOfQuestions] = useState(DEFAULT_NUMBEROFQUESTIONS)
    const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
    const [answerType, setAnswerType] = useState(DEFAULT_ANSWERTYPE);

    const changeCategory = (e) => {
        if (e.target.value !== DEFAULT_CATEGORY) {
            const category = Categories.find((c) => c.name == e.target.value)
            setCategory(category)
        } else {
            setCategory(e.target.value)
        }
    }

    const changeNumberOfQuestions = (e) => {
        setNumberOfQuestions(e.target.value)
    }

    const changeDifficulty = (e) => {
        if (e.target.value !== DEFAULT_DIFFICULTY) {
            setDifficulty(e.target.value.toLowerCase())
        }
        else {
            setDifficulty(e.target.value)
        }

    }

    const changeAnswerType = (e) => {
        if (e.target.value == 'Multiple Choice') {
            setAnswerType('multiple')
        } else if (e.target.value == 'True / False') {
            setAnswerType('boolean')
        } else {
            setAnswerType(e.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        let URL = numberOfQuestionURL + numberOfQuestions
        //Check if parameters are selected 
        //and if so adds the parameter to the url
        if (category !== DEFAULT_CATEGORY) {
            URL += categoryURL + category.id
        }
        if (difficulty !== DEFAULT_DIFFICULTY) {
            URL += difficultyURL + difficulty
        }
        if (answerType !== DEFAULT_ANSWERTYPE) {
            URL += answerTypeURL + answerType
        }
        getQuiz(URL)
    }


    return (
        <div onSubmit={onSubmit}>
            <form className='search-section'>
                <div className='white-container'>
                    {/* COLUMN 1 */}
                    <div className='flex-container'>
                        {/* CATEGORY SEARCH */}
                        <div className='flex-item-left'>
                            <div className='search-item'>
                                <label>Category</label><br />
                                <select onChange={changeCategory}>
                                    <option key={0}>{DEFAULT_CATEGORY}</option>
                                    {Categories.map((cate) => {
                                        return <option key={cate.id}>{cate.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        {/* NUMBER OF QUESTION SEARCH */}
                        <div className='flex-item-right'>
                            <div className='search-item'>
                                <label>Number Of Questions</label>
                                <input type='number' min='1' max='50' defaultValue={DEFAULT_NUMBEROFQUESTIONS} onChange={changeNumberOfQuestions} />
                            </div>
                        </div>
                    </div>
                    {/* COLUMN 2 */}
                    <div className='flex-container'>
                        {/* DIFFICULTY SEARCH */}
                        <div className='flex-item-left'>
                            <div className='search-item'>
                                <label>Select Difficulty</label><br />
                                <select onChange={changeDifficulty}>
                                    <option>{DEFAULT_DIFFICULTY}</option>
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                            </div>
                        </div>
                        {/* TYPE SEARCH */}
                        <div className='flex-item-right'>
                            <div className='search-item'>
                                <label>Select Answer Type</label><br />
                                <select onChange={changeAnswerType}>
                                    <option>{DEFAULT_ANSWERTYPE}</option>
                                    <option>Multiple Choice</option>
                                    <option>True / False</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* SEARCH BUTTON */}
                    <div className='flex-container'>
                        <div className='flex-item'>
                            <div className='search-item'>
                                <input className='search-btn' type='submit' value='Start quiz' />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

GetQuiz.proptype = {
    Categories: PropTypes.array.isRequired,
}

export default GetQuiz