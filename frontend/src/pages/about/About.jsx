import react from "react";
import "./about.css";
import Footer from "../../components/footer/Footer";
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  

  return (
    <>
      <section className="about-container"> 
        <div className="about-img">
          <img src="./nature.jpeg" alt=""/>
        </div>
        <div className="about-right-container">
          <h1>
            <Trans i18nKey="about">
              About <span>Me</span>
            </Trans>
          </h1>
          <p>{t('aboutText')}</p>
          <a href="#" className="btn" onClick={() => window.location.href = "/articles"}>
            {t('readMore')}
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About;
