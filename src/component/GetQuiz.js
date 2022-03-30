import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const GetQuiz = ({ Categories }) => {

    const DEFAULT_CATEGORY = 'Any Category'
    const DEFAULT_NUMBEROFQUESTIONS = '10'
    const DEFAULT_DIFFICULTY= 'Any Difficulty'
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
        if(e.target.value !== DEFAULT_CATEGORY) {
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
        if(e.target.value !== DEFAULT_DIFFICULTY) {
            setDifficulty(e.target.value.toLowerCase())
        }
        else {
            setDifficulty(e.target.value)
        }
        
    }

    const changeAnswerType = (e) => {
        if(e.target.value == 'Multiple Choice') {
            setAnswerType('multiple')
        } else if(e.target.value == 'True / False') {
            setAnswerType('boolean')
        } else {
            setAnswerType(e.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        let URL = numberOfQuestionURL+numberOfQuestions
        //Check if parameters are selected 
        //and if so adds the parameter to the url
        if(category !== DEFAULT_CATEGORY) {
            URL += categoryURL+category.id
        }
        if(difficulty !== DEFAULT_DIFFICULTY) {
            URL += difficultyURL+difficulty
        }
        if(answerType !== DEFAULT_ANSWERTYPE) {
            URL += answerTypeURL+answerType
        }
        fetchQuiz(URL)
    }

    const fetchQuiz = async (URL) => {
        const res = await fetch('https://opentdb.com/api.php?'+URL)
        const data = await res.json()
        console.log(URL); //TODO: delete later..
        console.log(data); //TODO: delete later..
        return data
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

                <input type='submit' value='search'/>
                
            </form>
        </div>
    )
}

GetQuiz.proptype = {
    Categories: PropTypes.array.isRequired,
}

export default GetQuiz