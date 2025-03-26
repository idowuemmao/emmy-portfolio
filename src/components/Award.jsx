import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AwardDB from "./AwardDB";

const Award = () => {
  const allAwards = AwardDB.map((item) => (
    <div key={item.id} className="grid place-items-center">
      <img
        src={item.pic}
        alt={item.title}
        className="rounded-lg w-11/12 h-52 sm:h-42 md:h-60 "
      />
      <h4 className="text-center items-center text-lg uppercase font-black mt-8 mb-4">
        {item.title}
      </h4>
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
    <div
      id="award_certifications"
      data-aos="fade-zoom-out"
      data-aos-duration="2000"
    >
      <div className="grid gap-8 mt-28 bg-[url('./images/award.jpg')] bg-cover p-4 md:px-24">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl md:text-5xl text-primary text-center">
            Awards and Certifications
          </h1>
          <p className="text-shading text-center text-sm md:text-base lg:text-xl">
            This section highlights my milestones, recognitions, achievements,
            and professional certifications throughout my data analytics
            journey.
          </p>
        </div>
        <Carousel
          responsive={responsive}
          className="md:h-80 h-72 grid gap-8 z-0 "
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
          {allAwards}
        </Carousel>
      </div>
    </div>
  );
};
export default Award;
