import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "../styles/Skills.css";
import skill1 from "../images/meter1.svg";
import skill2 from "../images/meter2.svg";
import skill3 from "../images/meter3.svg";
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
        <h1 className="skill-title">Skills</h1>
        <p className="skill-intro">
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
          <img src={skill2} alt="img" className="project-pic" />
          <h4>TypeScript</h4>
        </div>
        <div>
          <img src={skill1} alt="img" className="project-pic" />
          <h4>Javascript</h4>
        </div>
        <div>
          <img src={skill3} alt="img" className="project-pic" />
          <h4>NextJs</h4>
        </div>
        <div>
          <img src={skill1} alt="img" className="project-pic" />
          <h4>React Js</h4>
        </div>
        <div>
          <img src={skill1} alt="img" className="project-pic" />
          <h4>HTML</h4>
        </div>
        <div>
          <img src={skill1} alt="img" className="project-pic" />
          <h4>CSS</h4>
        </div>
        <div>
          <img src={skill1} alt="img" className="project-pic" />
          <h4>Git and GitHub</h4>
        </div>
      </Carousel>
    </div>
  );
};
export default Skills;
