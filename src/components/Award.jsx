import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import AwardDB from "./AwardDB";

const AwardCard = ({ item }) => {
  return (
    <figure className="mx-3 flex w-full max-w-sm flex-col items-center rounded-xl bg-slate-900/60 p-4 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
      <img
        src={item.pic}
        alt={item.title}
        loading="lazy"
        className="h-44 w-full rounded-md object-cover"
        style={{ aspectRatio: "16/9" }}
      />
      <figcaption className="mt-4 text-center">
        <h4 className="text-md font-semibold uppercase tracking-wide text-white">
          {item.title}
        </h4>
        {item.issuer && <p className="text-xs text-slate-300">{item.issuer}</p>}
      </figcaption>
    </figure>
  );
};

AwardCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string,
  }).isRequired,
};

const Award = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <section
      id="award_certifications"
      aria-labelledby="awards-heading"
      className="relative py-24 sm:py-28 lg:py-32"
      data-aos="fade-right"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-8 text-center">
          <h2
            id="awards-heading"
            className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
          >
            Awards & Certifications
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-300">
            Milestones, recognitions and certifications from my data analytics
            journey.
          </p>
        </header>

        <div className="rounded-2xl bg-[url('./images/award.jpg')] bg-cover bg-center p-6">
          <Carousel
            responsive={responsive}
            className="py-4"
            swipeable={true}
            draggable={true}
            showDots={true}
            ssr={true}
            infinite={false}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .4s"
            transitionDuration={400}
            containerClass="py-2"
            itemClass="flex justify-center"
          >
            {AwardDB.map((item) => (
              <AwardCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Award;
