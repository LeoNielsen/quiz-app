import react from "react"
import { useState } from "react"
import Question from "./Question"
import PropTypes from 'prop-types';
const QuestionList = ({ quiz }) => {

    const [questionNumber, setNumberOfQuestions] = useState(0);

    const getNextQuestion = () => {
        setNumberOfQuestions(questionNumber + 1)

    }

    return (

        <>
            {/* {
                quiz.map((q) => {
                    return <Question key={questionNumber} question={q} qCorrectAnswer={q.correct_answer} qIncorrectAnswers={q.incorrect_answers} index={questionNumber + 1} quizSize={quiz.length} getNextQuestion={getNextQuestion} />
                })

            } */}
            <Question key={questionNumber} question={quiz[questionNumber]} qCorrectAnswer={quiz[questionNumber].correct_answer} qIncorrectAnswers={quiz[questionNumber].incorrect_answers} index={questionNumber + 1} quizSize={quiz.length} getNextQuestion={getNextQuestion} />
        </>



    )
}

QuestionList.defaultProps = {
    quiz: [
        {
            'correct_answer': '',
            'incorrect_answers': '',
        }
    ],
}


export default QuestionList