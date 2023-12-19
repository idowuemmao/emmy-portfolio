import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      className="grid gap-4 px-10 md:px-20 h-screen pt-16"
    >
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <button className="text-secondary p-2 bg-primary rounded-xl px-4 cursor-pointer w-fit">
          Welcome to my Portfolio
        </button>
        <p className="text-center text-xs md:text-lg">
          Hello I'm Emmanuel Idowu, a
        </p>
        <div className="text-[2rem] text-primary sm:text-4xl font-bold md:text-5xl lg:text-7xl text-center w-full">
          <Typewriter
            words={[
              "ReactJs Developer",
              "TypeScript Developer",
              "JavaScript Developer",
              "NextJs Developer",
            ]}
            loop={5}
            cursor
            className="text-primary"
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>
      <p className="w-full text-sm md:text-lg lg:text-xl xl:text-2xl text-center text-secondary">
        A Highly motivated and talented Frontend Engineer with almost 2 year
        Enterprise Level Experience Designing and building highly scalable
        system, across the Technology sectors. Armed with a solid foundation in
        HTML, CSS, JavaScript, Next JS and React JS Framework. Focused on
        customer satisfaction, actively collaborating and eager to learn to
        enhance customer satisfaction in the deliverables of products plugged
        into emerging technologies and industry trends.
      </p>
      <div className="flex flex-col items-center justify-start ">
        <a
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          href="https://drive.google.com/file/d/1eF_hhN8PHac5vANNu2Zk1nIyuywpb5pq/view?usp=drive_link"
          className="flex items-center gap-4 p-2 cursor-pointer px-8 rounded-xl bg-primary w-fit hover:underline"
        >
          Download Resume
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  );
};

export default Banner;
AOS.init();
