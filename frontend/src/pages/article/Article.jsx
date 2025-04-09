import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./article.css";
import { useTranslation } from 'react-i18next';
import Footer from '../../components/footer/Footer';

const Article = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch(`http://localhost:5005/posts?lang=${i18n.language}`)  // Use the full URL if needed
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data)
        console.log("Fetched articles:", data);
      })
      .catch((error) => console.log("Error fetching articles:", error));
  }, [i18n.language]);

  const handleClick = (id) => {
    navigate(`/article/${id}`);
  }

  return (
    <>
      <div className="article">
        <h1>Articles</h1>
        <div className="article-box">
          {articles.map((article) => (
            <div 
              key={article._id} 
              className="article-card" 
              onClick={() => handleClick(article._id)}
              style={{ cursor: 'pointer' }} // Add a pointer cursor for better UX
            >
              <div className='article-image'>
                <img src={article.translation.thumbnail} alt={article.translation.title} />
              </div>
              <div className='article-title'>
                <h3>{article.translation.title}</h3>
              </div>
              <p>{article.translation.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Article;
