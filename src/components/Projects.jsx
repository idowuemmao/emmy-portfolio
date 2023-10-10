import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Skills.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="skill-body">
      <div>
        <h1 className="skill-title">Projects</h1>
        <p className="skill-intro">
          My objective is to work alongside a team of experienced developers,
          collaborating on projects to create engaging web experiences that meet
          the needs of users across different browser and device.
        </p>
      </div>
      <Carousel
        responsive={responsive}
        className="skill-slider"
        swipeable={false}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
      >
        <div>
          <img src={project1} alt="project1" className="project-pic" />
          <h4>Project 1</h4>
        </div>
        <div>
          <img src={project2} alt="project1" className="project-pic" />
          <h4>Project 2</h4>
        </div>
        <div>
          <img src={project3} alt="project1" className="project-pic" />
          <h4>Project 3</h4>
        </div>
        <div>
          <img src={project4} alt="project1" className="project-pic" />
          <h4>Project 4</h4>
        </div>
      </Carousel>
    </div>
  );
};
export default Projects;
