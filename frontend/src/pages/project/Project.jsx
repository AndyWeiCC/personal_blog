import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './project.css';
import Footer from '../../components/footer/Footer';
import { useTranslation } from 'react-i18next';

const Project = () => {
  const images = [
    { id: 1, url: 'https://blog.theodo.com/_astro/ts_logo.BstCNrTU_1Dbxpr.webp', topic: 'typescript' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32tQ06rMzZumAov3m2q9vzhiOahbLw5dBmA&ss', topic: 'stripe' },
    { id: 3, url: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/07/f5932bc2.jpg', topic: 'mongodb' },
    { id: 4, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s', topic: 'react' },
    { id: 5, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-sdRIvQxSBfArITwaURCNiCo1hu9Vf_uEQ&s', topic: 'nodejs' },
    { id: 6, url: 'https://www.gravitee.io/hubfs/graphql.png', topic: 'graphql' },
    { id: 7, url: 'https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs', topic: 'nextjs' },
    { id: 8, url: 'https://images.ctfassets.net/xz1dnu24egyd/72URY4Vg59wKsYMpTqrMel/194347274767abce3c04be7be72a75a3/AWS-Logo__1_.png', topic: 'aws' },
    { id: 9, url: 'https://miro.medium.com/v2/resize:fit:1200/1*1hpObQWyoa8_Iu2op0RKZA.png', topic: 'git' },
  ];

  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;
  const navigate = useNavigate();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const handleImageClick = (id, topic) => {
    navigate(`/card-info/${id}`, { state: { topic } });
  };

  /////////
  // learn this trick to make the carousel circular later
  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  if (visibleImages.length < visibleCount) {
    visibleImages.push(...images.slice(0, visibleCount - visibleImages.length));
  }
  /////////

  return (
    <>
      <div className="project-container">
        <h1>{t('topics')}</h1>
        <p>{t('topicsText')}</p>
        <div className="carousel">
          <button onClick={handlePrev} className="carousel-button left">❮</button>
          <ul className="persons">
            {visibleImages.map((image) => (
              <li key={image.id} className="carousel-item">
                <img
                  src={image.url}
                  alt={`Slide ${image.id}`}
                  className="carousel-image"
                  onClick={() => handleImageClick(image.id, image.topic)}
                />
              </li>
            ))}
          </ul>
          <button onClick={handleNext} className="carousel-button right">❯</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;