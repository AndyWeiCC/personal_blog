import react from "react";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWeixin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation, Trans } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="home-container">
        <div className="left-container">
          <h1>
            <Trans i18nKey="name">
              Hi, it's <span>Andy</span>
            </Trans>
          </h1>
          <h3>
            <Trans i18nKey="title">
              I'm a <span>Web Developer</span>
            </Trans>
          </h3>
          <p>{t('selfIntro')}</p>

          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />  
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faWeixin} />
            </a>

          </div>

          <div className="btn-group">
            <a href="#" className="btn">
              Hire
            </a>

            <a href="#" className="btn">
              Contact
            </a>
          </div>

        </div>

        <div className="home-img">
          <img src="./profilePicture.jpg" alt=""/>
        </div>

      </section>
    </>
  )
}


export default Home;
