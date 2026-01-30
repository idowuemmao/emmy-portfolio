import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillData from "./SkillsDB";

const Skills = () => {
  const mySkills = SkillData.map((skill) => (
    <div
      key={skill.id}
      className="grid place-items-center min-h-fit cursor-pointer w-full "
    >
      <img
        src={skill.pic}
        alt={skill.title}
        className="w-9/12 h-52 object-contain"
      />
      <h2 className="font-bold font-mono">{skill.title}</h2>
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
    <div id="skills">
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="grid mx-10 md:mx-20 gap-12 mt-28 bg-[url('./images/w000562.jpg')] bg-cover p-8 md:px-24 rounded-3xl"
      >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl md:text-6xl text-primary">Skills</h1>

          <p className="text-shading text-center text-sm md:text-base lg:text-xl">
            I employ a structured and analytical approach to working with data,
            focusing on accuracy, clarity, and insight generation. Below are the
            core technical skills and tools I use across projects:
          </p>

          <div className="text-xs md:text-sm lg:text-base text-justify space-y-4">
            <p className="font-semibold">Data Analysis & Statistics</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Exploratory Data Analysis (EDA) and trend analysis</li>
              <li>Descriptive statistics and frequency analysis</li>
              <li>Pattern, gap, and anomaly detection in datasets</li>
              <li>Data segmentation by region, category, and key attributes</li>
            </ul>

            <p className="font-semibold">Data Cleaning, Validation & Quality</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Data cleaning, transformation, and standardization</li>
              <li>
                Data validation, reconciliation, and quality assurance checks
              </li>
              <li>Handling missing, inconsistent, and duplicate data</li>
              <li>Ensuring data accuracy across reporting workflows</li>
            </ul>

            <p className="font-semibold">Tools & Technologies</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>SQL (joins, aggregations, CTEs, optimized queries)</li>
              <li>Python (pandas, numpy) for data manipulation and analysis</li>
              <li>
                Advanced Excel (Power Query, PivotTables, formulas, data
                modeling)
              </li>
              <li>Google Sheets for analysis, reporting, and collaboration</li>
            </ul>

            <p className="font-semibold">Reporting & Visualization</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Power BI dashboards and data modeling</li>
              <li>KPI tracking and performance reporting</li>
              <li>Clear data visualization and storytelling</li>
              <li>Stakeholder-ready reports and summaries</li>
            </ul>

            <p className="font-semibold">Data Workflows & Collaboration</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                Working with large, structured and semi-structured datasets
              </li>
              <li>
                Multi-source data integration (databases, spreadsheets, cloud
                files)
              </li>
              <li>Independent analysis in remote environments</li>
              <li>Clear written communication and documentation</li>
            </ul>
          </div>
        </div>
        <Carousel
          responsive={responsive}
          className="h-72 z-0"
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
          {mySkills}
        </Carousel>
      </div>
    </div>
  );
};
export default Skills;
