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
        className="rounded-lg w-11/12 lg:h-52 md:h-48 h-44"
      />
      <h4 className="text-center text-lg uppercase font-black mt-8">
        {item.title}
      </h4>
      <div className="w-full flex justify-center gap-4 py-4 text-xs items-center">
        <a
          href={item.url}
          className="flex gap-1 items-center bg-primary p-1 rounded-2xl px-3"
        >
          <FaExternalLinkAlt />
          View Site
        </a>
        <a
          href={item.code}
          className="flex gap-1 items-center bg-primary p-1 rounded-2xl px-3"
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
            My objective is to work alongside a team of experienced developers,
            collaborating on projects to create engaging web experiences that
            meet the needs of users across different browser and device.
          </p>
        </div>
        <Carousel
          responsive={responsive}
          className="md:h-96 h-80 grid gap-8 z-0 "
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
