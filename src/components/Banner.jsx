import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  return (
    <div
      data-aos="fade-up-right"
      data-aos-offset="500"
      data-aos-duration="1000"
      data-aos-once="true"
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
              "Data Analyst",
              "Business Intelligence Analyst",
              "Microsoft Excel Expert",
              "SQL Developer",
              "PowerBI Specialist",
              "Python Developer",
            ]}
            loop={10}
            cursor
            className="text-primary"
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>
      <p className="w-full text-xs md:text-sm lg:text-lg xl:text-xl text-center text-secondary">
        I am an excellent Data Analyst that help company unlock growth through
        insights and automation, I specializes in transforming intricate
        datasets into actionable insights that drive well-informed business
        decisions. Drawing on a robust foundation in Data Analysis, Statistics
        and Mathematics, I employ a systematic and analytical approach to
        interpret data effectively. My collaborative nature, combined with
        effective communication skills, enables me to work seamlessly with
        cross-functional teams and present intricate findings in a clear and
        concise manner.
      </p>
      <div className="flex flex-col  items-center justify-center gap-4 md:flex-row ">
        <a
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          href="https://drive.google.com/file/d/1yojkx0181mO3VCEvZ-MaQKHib_YW6lsJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-2 cursor-pointer px-8 rounded-xl bg-primary w-fit hover:underline"
        >
          Download Resume
          <FaArrowCircleRight />
        </a>
        <a
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          href="https://www.linkedin.com/in/emmanuel-idowu-analyst/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-2 cursor-pointer px-8 rounded-xl bg-primary w-fit hover:underline"
        >
          Visit my LinkedIn Page
          <FaArrowCircleRight />
        </a>
      </div>
    </div>
  );
};

export default Banner;
AOS.init();
