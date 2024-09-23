import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard.jsx";

function Projects() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
    
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
       
      <div className="slider-container">
      <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} >
              <ProjectCard project={project} />
            </div>
          ))}
  
      </Slider>
      </div>


      {/* <div className={styles.projects}>
        {projects.map((project, id) => {
          return < ProjectCard key={id} project={project} />
        })}
      </div> */}
    </section>
  )
}
export default Projects;