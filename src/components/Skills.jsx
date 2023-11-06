import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillData from "./SkillsDB";

const Skills = () => {
  const mySkills = SkillData.map((skill) => (
    <div
      key={skill.id}
      className="grid place-items-center min-h-fit cursor-pointer w-full "
    >
      <img
        src={skill.pic}
        alt={skill.title}
        className="w-9/12 h-52 object-contain "
      />
      <h2 className="font-bold font-mono">{skill.title}</h2>
    </div>
  ));
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
    <div id="skills">
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="grid mx-10 md:mx-20 gap-12 mt-28 bg-[url('./images/w000562.jpg')] bg-cover p-8 md:px-24 rounded-3xl"
      >
        <div className="flex flex-col gap-4 items-center ">
          <h1 className="text-4xl md:text-6xl text-primary ">Skills</h1>
          <p className="text-shading text-center text-sm md:text-base lg:text-xl ">
            I am very passionate and skilled with a good problem solving skills,
            a fast learner, a strong team player and excellent communication and
            collaboration skills, eager to contribute my expertise to help drive
            the success of any particular project or company I am involved in.
          </p>
        </div>
        <Carousel
          responsive={responsive}
          className="h-72 z-0"
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
          {mySkills}
        </Carousel>
      </div>
    </div>
  );
};
export default Skills;
