import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectData from "./ProjectDB";

const Projects = () => {
  const allProjects = ProjectData.map((item) => (
    <a key={item.id} href={item.url} className="grid place-items-center">
      <img
        src={item.pic}
        alt={item.title}
        className="rounded-lg w-11/12 lg:h-64 md:h-48 h-40"
      />
      <h4 className="text-center text-sm mt-8">{item.title}</h4>
    </a>
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
    <div className="grid mt-24 gap-12 bg-gray-900 p-8 md:px-24">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl md:text-6xl">Projects</h1>
        <p className="text-gray-600 text-center text-sm md:text-base lg:text-xl">
          My objective is to work alongside a team of experienced developers,
          collaborating on projects to create engaging web experiences that meet
          the needs of users across different browser and device.
        </p>
      </div>
      <Carousel
        responsive={responsive}
        className="md:h-96 h-80 grid gap-8 "
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
  );
};
export default Projects;
