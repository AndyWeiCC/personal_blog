import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./cardInfo.css";
import Footer from "../../components/footer/Footer";

const CardInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const { topic } = location.state || {};
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (topic) {
      fetch(`http://localhost:5005/videos?topic=${topic}`) // Pass topic as a query parameter
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched videos:", data);
          setVideos(data)
        })
        .catch((error) => {
          console.error("Error fetching videos:", error);
          setError(error.message);
        });
    }
  }, [topic]);


  return (
    <>
      <div className="card-info">
        <h1>{topic?.toUpperCase()}</h1>
        <div className="video-container">
          {error ? (
            <p>Error: {error}</p>
          ) : videos.length > 0 ? (
            <>
              <div className="video-list">
                {videos.map(video => (
                  <>
                    <div key={video.id} className="video-item">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
                    </div>
                    <div className="video-details">
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                    </div>
                  </>
                ))}
              </div>
            </>
          ) : (
            <p className="warning-message">This part under maintenance :(</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardInfo;