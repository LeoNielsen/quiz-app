import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const GetQuiz = ({ Categories }) => {

    const DEFAULT_CATEGORY = 'Any Category'
    const DEFAULT_NUMBEROFQUESTIONS = '10'
    const DEFAULT_DIFFICULTY= 'Any Difficulty'
    const DEFAULT_ANSWERTYPE = 'Any Type'

    const [category, setCategory] = useState(DEFAULT_CATEGORY)
    const [numberOfQuestions, setNumberOfQuestions] = useState(DEFAULT_NUMBEROFQUESTIONS)
    const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
    const [answerType, setAnswerType] = useState(DEFAULT_ANSWERTYPE);

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }

    const changeNumberOfQuestions = (e) => {
        setNumberOfQuestions(e.target.value)
    }

    const changeDifficulty = (e) => {
        setDifficulty(e.target.value)
    }

    const changeAnswerType = (e) => {
        setAnswerType(e.target.value)
    }

    const onSubmit = (e) => {
        /**TODO:
         * send search parameters to a fetch function
         * to fetch all quizzes
         */
    }


    return (
        <div className='body' onSubmit={onSubmit}>
            <form>
                <label>Category</label><br />
                <select onChange={changeCategory}>
                    <option key={0}>{DEFAULT_CATEGORY}</option>
                    {Categories.map((cate) => {
                        return <option key={cate.id}>{cate.name}</option>
                    })
                    }
                </select> <br /><br />

                <label>Number Of Questions</label><br />
                <input type='number' min='1' max='50' defaultValue={DEFAULT_NUMBEROFQUESTIONS} onChange={changeNumberOfQuestions}/><br /><br />

                <label>Select Difficulty</label><br />
                <select onChange={changeDifficulty}>
                    <option>{DEFAULT_DIFFICULTY}</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>

                </select><br /><br />

                <label>Select Answer Type</label><br />
                <select onChange={changeAnswerType}>
                    <option>{DEFAULT_ANSWERTYPE}</option>
                    <option>Multiple Choice</option>
                    <option>True / False</option>
                </select><br />

                <input type='submit' value='Search' />
                
            </form>
        </div>
    )
}

GetQuiz.proptype = {
    Categories: PropTypes.array.isRequired,
}

export default GetQuiz