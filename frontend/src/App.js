import Search from './pages/booksearch/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import "./App.css";
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Article from './pages/article/Article';
import ArticleDetail from './pages/articledetail/ArticleDetail';
import Contact from './pages/contact/Contact'
import Topic from './pages/topic/Topic';
import CardInfo from './pages/cardInfo/CardInfo';
import Project from './pages/project/Project';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path ="/search" element={<Search/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/articles" element={<Article/>}/>
          <Route path ="/article/:id" element={<ArticleDetail/>}/>
          <Route path = "/contact" element={<Contact />} />
          <Route path ="/topics" element={<Topic />}/>
          <Route path ="/projects" element={<Project />}/>
          <Route path="/card-info/:id" element={<CardInfo />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
