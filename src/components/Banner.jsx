import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="grid px-10 md:px-20">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <button className="text-white p-2 bg-yellow-800 rounded-full shadow-xl border-[1px] px-4 cursor-pointer w-fit">
          Welcome to my Portfolio
        </button>
        <p className="intro-text">Hello I'm Emmanuel Idowu, a </p>
        <div className="text-4xl">
          <Typewriter
            words={[
              "ReactJs Developer",
              "TypeScript Developer",
              "JavaScript Developer",
              "NextJs Developer",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>
      <p className="max-w-[80%] text-sm text-left text-gray-600">
        A Highly motivated and talented Frontend Engineer with more than 1 year
        Enterprise Level Experience Designing and building highly scalable
        system, across the Technology sectors. Armed with a solid foundation in
        HTML, CSS, JavaScript, Next JS and React JS Framework. Focused on
        customer satisfaction, actively collaborating and eager to learn to
        enhance customer satisfaction in the deliverables of products plugged
        into emerging technologies and industry trends.
      </p>
      <a href="/" className="connect2">
        <p className="text-red-500">Let's Connect</p>
        <FaArrowCircleRight />
      </a>
    </div>
  );
};

export default Banner;
