import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard.jsx";

const responsiveBreakPoints = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "20px",
    },
  },
];

function Projects() {

  var settings = {
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    infinite: true,
    // cssEase: "linear",
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    centerPadding: "0",
    responsive: responsiveBreakPoints,

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