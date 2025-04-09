import React from 'react';
import './project.css';
import Footer from '../../components/footer/Footer';


const Project = () => {

  const projects = [
    {
      id: 1,
      title: "TechScrum",
      description: "Description of Project 1",
      image: "./techscrum.png"
    },
    {
      id: 2,
      title: "CoffeeTopia",
      description: "Description of Project 2",
      image: "./coffeetopia.jpeg"
    },
    {
      id: 3,
      title: "DungonMaster",
      description: "Description of Project 2",
      image: "./ZlrPPO.png"
    },
  ];
  return (
    <>
      <div className="project-container">
        <h1>Projects</h1>
        <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Project;
