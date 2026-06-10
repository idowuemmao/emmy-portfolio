import React from "react";
import SkillData from "./SkillsDB";

const SkillCard = ({ skill }) => (
  <article className="group overflow-hidden rounded-[1.85rem] border border-white/10 bg-slate-950/85 p-6 text-center shadow-[0_30px_90px_-40px_rgba(14,165,233,0.5)] transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/95">
    <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-950/80 p-4 shadow-inner shadow-cyan-500/10">
      <img
        src={skill.pic}
        alt={skill.title}
        className="h-full w-full object-contain"
      />
    </div>
    <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
    <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
      {skill.proficiency}
    </p>
  </article>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-28 lg:py-32"
      data-aos="fade-right"
      data-aos-duration="900"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Core capabilities that power my analytics work.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I combine business insight, technical expertise, and strong
            reporting habits to help teams turn data into action.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-[0_35px_90px_-50px_rgba(14,165,233,0.4)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">
                Analytics & Quality
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Structured analysis, strong validation workflows, and clear
                insight delivery for confident decision-making.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>Exploratory Data Analysis and trend discovery</li>
                <li>Data cleaning, validation, and quality assurance</li>
                <li>
                  Statistical summaries, segmentation, and anomaly detection
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-[0_35px_90px_-50px_rgba(14,165,233,0.4)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">
                Reporting & Collaboration
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Data storytelling, dashboard delivery, and strong stakeholder
                communication across remote and hybrid teams.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>Power BI dashboards and KPI reporting</li>
                <li>Cross-source data integration and documentation</li>
                <li>Remote collaboration with timelines and quality focus</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-[0_35px_90px_-50px_rgba(14,165,233,0.4)] backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">
                Workflows & Tools
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Reliable workflows, clean documentation, and modern tooling to
                move projects from data to decision.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>Data preparation with Power Query and Python</li>
                <li>Reusable reporting templates and documentation</li>
                <li>Performance-focused dashboards and automation</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-[0_35px_90px_-50px_rgba(14,165,233,0.4)] backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">
              Skills & tools
            </h3>
            <p className="mt-4 text-slate-300">
              These are the technologies and platforms I use every day to
              deliver clear, accurate, and impactful analytics work.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {SkillData.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
