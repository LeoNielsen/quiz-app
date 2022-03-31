import Header from "component/Header"
import GetQuiz from "component/GetQuiz"
import react, { useState, useEffect } from "react";
import "styles/App.css"
import Footer from "component/Footer";
import QuizResult from "component/QuizResult";
import Question from "component/Question";

export default function App() {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const categoriesFromServer = await fetchCategories();
            setCategory(categoriesFromServer.trivia_categories)
        }
        getCategories();
    }, [])

    const fetchCategories = async () => {
        const res = await fetch('https://opentdb.com/api_category.php');
        const data = await res.json();
        return data;
    }

    const [quiz, setQuiz] = useState('');

    const fetchQuiz = async (URL) => {
        const res = await fetch('https://opentdb.com/api.php?' + URL)
        const data = await res.json()
     /*    console.log(URL); //TODO: delete later..
        console.log(data); //TODO: delete later.. */
        return data;
    }

    const getQuiz = async (URL) => {
        const quizFromServer = await fetchQuiz(URL);
        setQuiz(quizFromServer.results);
    }

    return <div className="container">
        <Header />
        <GetQuiz Categories={category} getQuiz={getQuiz} />
        
        <Question question={quiz[0]} />
        {/* <QuizResult/> */}
        <Footer />
    </div>
}