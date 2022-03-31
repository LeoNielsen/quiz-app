import react from "react"
import { useState } from "react"
import Question from "./Question"
import PropTypes from 'prop-types';
import QuizResult from "./QuizResult";
import Header from "./Header";
const QuestionList = ({ quiz, endQuiz }) => {

    const [questionNumber, setNumberOfQuestions] = useState(0);

    const getNextQuestion = () => {
        setNumberOfQuestions(questionNumber + 1)
        if (questionNumber == quiz.length) {
            console.log("out of quiz size")
            endQuiz()
        }
    }

    let [result, setResult] = useState(0);
    
    

    const checkAnswer = (e) => {
        // e.preventDefault();
        const currentTag = e.currentTarget;
        const value = currentTag.id;
        const correctAnswer = quiz[questionNumber].correct_answer;
        
        if(correctAnswer == value) {
            setResult(result+=1)
        }
        console.log("Result: " + result
        );
    }

    return (

        <>
            {console.log({ quiz })}
            {
                questionNumber == quiz.length ?
                    <>
                        <Header />
                        <QuizResult result={result} quizSize={quiz.length}/>
                    </>

                    :
                    <Question key={questionNumber} question={quiz[questionNumber]} qCorrectAnswer={quiz[questionNumber].correct_answer} qIncorrectAnswers={quiz[questionNumber].incorrect_answers} index={questionNumber + 1} quizSize={quiz.length} getNextQuestion={getNextQuestion} checkAnswer={checkAnswer} />

            }
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