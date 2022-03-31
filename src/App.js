import Header from "component/Header"
import GetQuiz from "component/GetQuiz"
import react, { useState, useEffect } from "react";
import "styles/App.css"
import Footer from "component/Footer";
import QuizResult from "component/QuizResult";
import QuestionList from "component/QuestionList";

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

    const [quiz, setQuiz] = useState([]);
    const [startQuiz, setStartQuiz] = useState(false);


    const fetchQuiz = async (URL) => {
        //console.log(URL);
        const res = await fetch('https://opentdb.com/api.php?' + URL)
        const data = await res.json()
        //console.log(`this is URL ${URL}`); //TODO: delete later..
        //console.log("this is data" +  data); //TODO: delete later..
        return data;
    }

    const getQuiz = async (URL) => {
        const quizFromServer = await fetchQuiz(URL);
        setQuiz(quizFromServer.results);
        getStartQuiz();
    }

    const getStartQuiz = () => {
        setStartQuiz(true);
        setEndQuiz(false);
        console.log('quiz:' + endQuiz)
        console.log('startquiz: ' + startQuiz)
    }

    const [endQuiz, setEndQuiz] = useState(true);

    const end = () => {
        setEndQuiz(true);
        setStartQuiz(false);
    }


    //console.log(`this is a quiz:${JSON.stringify(quiz[0])}`);

    return <div className="container">
        <>
            {
                !startQuiz && endQuiz ?
                    <>
                        <Header />
                        <GetQuiz Categories={category} getQuiz={getQuiz}/>
                    </> 
                    : <QuestionList quiz={quiz} endQuiz={end} />
            }

        </>
        <Footer />
    </div>
}