import React from "react";
import allExperience from "./ExperienceDB";
import { TiWorld } from "react-icons/ti";
const Experience = () => {
  const myExperience = allExperience.map(
    ({
      Company,
      JobRole,
      JobType,
      StartDay,
      EndDay,
      url,
      id,
      Nature,
      Description,
    }) => (
      <div key={id} className="grid gap-1">
        <div className="flex md:flex-row flex-col text-center md:justify-start justify-center items-center text-primary font-bold">
          <a href={url}>
            <TiWorld href={url} className="cursor-pointer text-xl" />
          </a>
          <h2 className="text-3xl lg:text-5xl"> {Company}</h2>
          <span className="hidden md:block lg:px-2 md:self-end">|</span>
          <span className="text-[0.6rem] md:text-sm text-gray-300 font-normal md:self-end">
            {JobType} {JobRole}
          </span>
        </div>
        <div className="text-xs sm:text-sm md:text-lg">
          ({StartDay} - {EndDay} | {Nature})
        </div>

        <div className="ml-8 text-sm text-justify ">
          {Description.map((item) => (
            <li key={id} className="list-disc md:p-2 text-gray-300">
              {item}
            </li>
          ))}
        </div>
        <hr />
      </div>
    )
  );
  return (
    <div id="experience" data-aos="fade-in" data-aos-duration="2000">
      <div className="grid mx-10 md:mx-20 mt-28 gap-8 bg-[url('./images/grass.jpg')] bg-cover bg-no-repeat p-8 md:px-10 rounded-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary text-center">
          Work Experience
        </h2>
        <div className="grid gap-8">{myExperience}</div>
      </div>
    </div>
  );
};

export default Experience;
