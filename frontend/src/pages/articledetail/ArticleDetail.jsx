import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./articleDetail.css";
import { useTranslation } from 'react-i18next';

const ArticleDetail = () => {

  const { id } = useParams();
  const [article, setArticle] = useState();
  const { i18n } = useTranslation();


  useEffect(() => {
    fetch(`http://localhost:5005/posts/${id}?lang=${i18n.language}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => setArticle(data))
    .catch((e) => console.log("Error fetching article details:",e));
  }, [id, i18n.language]);

  if (!article) {
    return <div>Loading......</div>
  }

  const renderContentWithImages = (content, images) => {
    const parts = content.split(/\[IMAGE_(\d+)\]/);

    return parts.map((part, index) => {

      console.log('PART', part);
      const imageIndex = parseInt(part) - 1;

      if (!isNaN(imageIndex) && images[imageIndex]) {
        return (
          <img
            key={`image-${index}`}
            src={images[imageIndex].url}
            alt={images[imageIndex].alt}
            className="article-detail-image"
          />
        );
      }
      return <p key={`text-${index}`}>{part}</p>
    });
  }

  return (
    <div className='article-detail'>
      <img className='article-detail-thumbnail' src={article.thumbnail} />
      <h1  className='article-detail-title'>{article.title}</h1>
      <div className='article-detail-content'>
        {renderContentWithImages(article.content, article.images)}
      </div>
    </div>
  )
}

export default ArticleDetail;
