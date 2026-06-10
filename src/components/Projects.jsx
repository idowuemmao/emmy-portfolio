import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectData from "./ProjectDB";
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <article className="group rounded-3xl overflow-hidden border border-white/10 bg-slate-950/90 shadow-2xl shadow-cyan-900/20 transition duration-1000 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="relative overflow-hidden">
        <img
          src={project.pic}
          alt={project.title}
          className="w-full h-72 object-cover brightness-90 transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/90">
            Featured project
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[0.72rem] text-cyan-100 shadow-sm shadow-cyan-900/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description ||
              "A concise showcase of business intelligence, analytics, and data storytelling."}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/20"
              aria-label={`View ${project.title} live`}
            >
              <FaExternalLinkAlt />
              Live demo
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/90 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/40 hover:bg-slate-800"
              aria-label={`View ${project.title} source code`}
            >
              <IoLogoGithub />
              Source
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      id="projects"
      data-aos="fade-zoom-in"
      data-aos-duration="2000"
      className="mt-28 px-6 pb-10 md:px-14 lg:px-20"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950/80 px-6 py-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:px-10 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center">
            <span className="mr-3 h-1.5 w-16 rounded-full bg-cyan-400"></span>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90">
              Portfolio
            </p>
            <span className="ml-3 h-1.5 w-16 rounded-full bg-cyan-400"></span>
          </div>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Projects
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Data-driven stories, polished reports, and interactive dashboards
            built for impact. Explore selected work that combines analytical
            insight with modern presentation.
          </p>
        </div>

        <div className="mt-10">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3500}
            keyBoardControl={true}
            customTransition="all .6s ease"
            transitionDuration={600}
            containerClass="py-6"
            dotListClass="flex justify-center gap-3 mt-6"
            itemClass="px-3"
          >
            {ProjectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
