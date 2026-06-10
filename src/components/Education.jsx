import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const educationHistory = [
  {
    id: 1,
    institution: "Federal University of Technology, Akure",
    qualification: "B.Tech. in Quantity Surveying",
    timeframe: "2015 — 2019",
    location: "Akure, Nigeria",
    summary:
      "Completed a rigorous program combining construction economics, project management, and data analysis, with a focus on leveraging data for informed decision-making in the built environment.",
    highlights: [
      "Graduated with Second Class Upper honours 4.14 CGPA",
      "Thesis project: Assessment of the Utilization of Deep Learning in Achieving Sustainable Building Projects",
      "Investigating how deep learning can enhance sustainability in construction",
      "Led a student project on cost estimation using Blue Beam Software, MS Project and MS Excel",
    ],
  },
  {
    id: 2,
    institution: "National Youth Service Corps (NYSC)",
    qualification: "Certificate of National Service",
    timeframe: "2020 — 2021",
    location: "Ibadan, Nigeria",
    summary:
      "Satisfactorily completed one year of national service with the National Youth Service Corps (NYSC) Act of Nigeria, gaining practical experience in construction and project management.",
    highlights: [
      "Served at Tons Development Limited, contributing to infrastructure projects and gaining insights into private sector operations.",
      "Engaged in community development initiatives, applying project management skills to support local infrastructure improvements.",
      "Developed strong teamwork, communication, and problem-solving skills while working in a dynamic environment.",
    ],
  },
  // {
  //   id: 2,
  //   institution: "DataCamp Professional Track",
  //   qualification: "Advanced Data Analytics & BI",
  //   timeframe: "2023 — 2024",
  //   location: "Online",
  //   summary:
  //     "Completed hands-on coursework in Power BI, Python analytics, SQL, and dashboard storytelling for real-world business outcomes.",
  //   highlights: [
  //     "Built 10+ interactive dashboards",
  //     "Specialised in data modelling and visual narratives",
  //     "Learned end-to-end analytics workflows",
  //   ],
  // },
];

const EducationCard = ({ item }) => (
  <article className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/95">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 shadow-md shadow-cyan-500/10">
        <FaGraduationCap className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-white">
            {item.qualification}
          </h3>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            {item.timeframe}
          </span>
        </div>
        <p className="text-sm text-slate-400">{item.institution}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {item.location}
        </p>
      </div>
    </div>

    <p className="mt-6 text-sm leading-7 text-slate-300">{item.summary}</p>

    <ul className="mt-5 space-y-3 text-sm text-slate-300">
      {item.highlights.map((point, index) => (
        <li key={`${item.id}-${index}`} className="flex gap-3">
          <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </article>
);

const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-20 py-20"
      aria-labelledby="education-heading"
      data-aos="fade-right"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200 shadow-sm shadow-cyan-500/10">
            <FaUniversity className="mr-2 h-4 w-4" />
            Education
          </div>
          <h2
            id="education-heading"
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Academic credentials & professional learning
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
            A snapshot of my formal education and continuous learning path,
            designed to support data-driven decision-making.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {educationHistory.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
