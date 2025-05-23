import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectData from "./ProjectDB";
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const allProjects = ProjectData.map((item) => (
    <div key={item.id} className="grid place-items-center">
      <img
        src={item.pic}
        alt={item.title}
        className="rounded-lg w-fit lg:h-52 md:h-48 h-44"
      />
      <h4 className="text-center text-lg uppercase font-black mt-8 mb-4">
        {item.title}
      </h4>
      <div className="text-[0.5rem] text-center flex flex-col items-center">
        <div className="flex gap-2 flex-wrap">
          {item.stack.map((ind) => (
            <p
              key={ind}
              className="bg-gradient-to-r to-tertiary from-cyan-900 p-1 rounded-lg min-w-max"
            >
              {ind}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center gap-4 py-4 text-xs items-center">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center bg-gradient-to-r to-tertiary from-cyan-900 p-1 rounded-2xl px-3"
        >
          <FaExternalLinkAlt />
          View Project
        </a>
        <a
          href={item.code}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center bg-gradient-to-r to-tertiary from-cyan-900 p-1 rounded-2xl px-3"
        >
          <IoLogoGithub />
          View Code
        </a>
      </div>
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
    <div id="projects" data-aos="fade-zoom-in" data-aos-duration="2000">
      <div className="grid gap-12 mt-28 bg-[url('./images/skills.jpg')] bg-cover p-8 md:px-24">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl md:text-6xl text-primary">Projects</h1>
          <p className="text-shading text-center text-sm md:text-base lg:text-xl">
            My objective is to help organizations make informed, data-driven
            decisions, ultimately driving business growth and efficiency.
          </p>
        </div>
        <Carousel
          responsive={responsive}
          className="md:h-[30rem] h-96 grid gap-8 z-0 "
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
          {allProjects}
        </Carousel>
      </div>
    </div>
  );
};
export default Projects;
