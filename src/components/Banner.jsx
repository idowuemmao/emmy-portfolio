import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Clock from "./Clock";

const Banner = () => {
  return (
    <div className="grid gap-4 px-10 md:px-20 -mt-10 h-screen pt-20 mb-16">
      <Clock />
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <button className="text-white p-2 bg-[#fc4d5b] rounded-xl px-4 cursor-pointer w-fit">
          Welcome to my Portfolio
        </button>
        <p className="text-center text-xs md:text-lg">
          Hello I'm Emmanuel Idowu, a
        </p>
        <div className="text-[2rem] text-[#fc4d5b] sm:text-4xl font-bold md:text-5xl lg:text-7xl text-center w-full">
          <Typewriter
            words={[
              "ReactJs Developer",
              "TypeScript Developer",
              "JavaScript Developer",
              "NextJs Developer",
            ]}
            loop={5}
            cursor
            className="text-[#fc4d5b]"
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>
      <p className="w-full text-sm md:text-lg lg:text-xl xl:text-2xl text-center text-white">
        A Highly motivated and talented Frontend Engineer with more than 1 year
        Enterprise Level Experience Designing and building highly scalable
        system, across the Technology sectors. Armed with a solid foundation in
        HTML, CSS, JavaScript, Next JS and React JS Framework. Focused on
        customer satisfaction, actively collaborating and eager to learn to
        enhance customer satisfaction in the deliverables of products plugged
        into emerging technologies and industry trends.
      </p>
      <div className="flex flex-col items-center justify-start ">
        <a
          href="/"
          className="flex items-center gap-4 p-2 cursor-pointer px-8 rounded-xl bg-[#fc4d5b] w-fit "
        >
          Let's Connect
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  );
};

export default Banner;
