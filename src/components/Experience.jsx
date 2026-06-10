import React from "react";
import allExperience from "./ExperienceDB";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCard = ({ item }) => {
  const {
    Company,
    JobRole,
    JobType,
    StartDay,
    EndDay,
    url,
    id,
    Nature,
    Description,
  } = item;

  return (
    <article
      key={id}
      className="group mb-6 rounded-2xl border border-white/8 bg-slate-950/80 p-6 shadow-lg transition hover:shadow-2xl"
      aria-labelledby={`exp-${id}-company`}
    >
      <div className="grid gap-4 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h3
              id={`exp-${id}-company`}
              className="text-lg font-semibold text-white"
            >
              {Company}
            </h3>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${Company} details`}
                className="inline-flex items-center rounded-full bg-white/5 p-2 text-slate-200 hover:bg-white/10"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>

          <p className="text-sm text-cyan-300">
            {JobRole} • <span className="text-slate-300">{JobType}</span>
          </p>

          <p className="text-xs text-slate-400">
            {StartDay} — {EndDay} {Nature ? `| ${Nature}` : ""}
          </p>
        </div>

        <div className="md:col-span-8">
          <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-300">
            {Description?.map((d, idx) => (
              <li key={`${id}-${idx}`}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-28 lg:py-32"
      data-aos="fade-right"
      data-aos-duration="900"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Roles, responsibilities and outcomes from my professional
            experience.
          </p>
        </header>

        <div className="space-y-6">
          {allExperience.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
