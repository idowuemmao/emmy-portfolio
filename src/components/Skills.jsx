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
        className="w-9/12 h-52 object-contain"
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
            I employ a systematic and analytical approach to interpret data
            effectively. Skilled in the use of the following tools:
          </p>
          <ul className="list-disc list-inside pl-4 text-xs text-justify space-y-2 ">
            <li>
              Advanced proficiency in Microsoft Excel, Google Sheets, and
              Microsoft Visual Basic.
            </li>
            <li>
              Skilled in database management with MS Excel and SQL, and Docker
            </li>
            <li>awarded a 5-star rating in SQL on HackerRank.</li>
            <li>
              Expertise in data visualization and dashboard creation using Power
              BI and Excel
            </li>
            <li>Familiar with Python and SPSS for Data Analysis.</li>
            <li>
              Strong understanding of statistical analysis techniques for data
              modeling and interpretation.
            </li>
            <li>
              Expert with online support resources (GitHub) for troubleshooting
              and best practices.
            </li>
            <li>
              Excellent communication abilities for effective collaboration with
              project leaders and cross-functional teams.
            </li>
          </ul>
          <p>Below are the following skills I use for analysis: </p>
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
