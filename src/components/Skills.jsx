import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Skills.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
const Skills = () => {
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
        <h1>Skills</h1>
        <p>
          I am very passionate and skilled with a good problem solving skills, a
          fast learner, a strong team player and excellent communication and
          collaboration skills, eager to contribute my expertise to help drive
          the success of any particular project I am involved in.
        </p>
      </div>
      <Carousel
        responsive={responsive}
        className="skill-slider"
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
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
export default Skills;
