import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./article.css";
import { useTranslation } from 'react-i18next';

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
    <div className="article">
      <div className="article-box">
        {articles.map((article) => (
          <div key={article._id} className="article-card">
            <img src={article.translation.thumbnail} alt={article.translation.title} />
            <h3>{article.translation.title}</h3>
            <p>{article.translation.description}</p>
            <button onClick={() => handleClick(article._id)}>Click it</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
