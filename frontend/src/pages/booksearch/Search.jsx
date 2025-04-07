import react, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./search.css";
import Card from "../../components/card/Card";
import axios from "axios";

const Search = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "blue" ;
    return () => {
      document.body.style.backgroundColor = "";
    }
  },[]);

  const [search, setSearch] = useState("");
  const [bookData, setbookData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") { 
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD_iCffoVWbXb_6hWaE79rs4wypRRJbz6s'+'&maxResults=40')
      .then(res => setbookData(res.data.items))
      .catch(err => console.log(err))
    }
  }
  

  return (
    <>
      <div className="searchHeader">
        <div className="row1">
          <h1>A room without books is like <br/> a body without a soul.</h1>
        </div>
        <div className="row2">
          <h2>Find your book</h2>
          <div className="search">
            <input type="text" placeholder="Enter your book name" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            onKeyPress={searchBook}
            />
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <img src="./jiangjieshireading.jpeg" alt="" />
        </div>
      </div>

      <div className="container">
        {
          <Card book={bookData} />
        }
      </div>
    </>
  )
}

export default Search;