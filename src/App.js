import Header from "component/Header"
import GetQuiz from "component/GetQuiz"
import react, {useState, useEffect} from "react";
import "styles/Header.css"

export default function App() {

  const [category, setCategory] = useState([]);

  useEffect(() => {
      const getCategories = async () => {
          const categoriesFromServer = await fetchCategories();
          setCategory(categoriesFromServer.trivia_categories)
      }
      getCategories();
  },[])

  const fetchCategories = async () => {
      const res = await fetch('https://opentdb.com/api_category.php');
      const data = await res.json();
      return data;
  }

  return <div className="container">
  <Header />
  <GetQuiz Categories={category} />
  </div>
}


