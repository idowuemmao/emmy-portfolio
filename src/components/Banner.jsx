import React, { useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import pic from "../images/pic.png";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-sine",
      offset: 120,
    });
  }, []);

  return (
    <section className="relative grid min-h-screen items-center gap-8 px-6 py-10 md:px-12 lg:px-16 xl:px-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_40%)]" />
      <div className="absolute right-0 top-1/3 hidden h-[28rem] w-[24rem] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl lg:block" />

      <div className="relative grid gap-10 overflow-hidden rounded-[2.5rem] border border-cyan-400/10 bg-slate-950/90 px-6 py-10 shadow-[0_35px_80px_-30px_rgba(14,165,233,0.4)] backdrop-blur-xl md:grid-cols-[1.25fr_0.95fr] md:px-10 md:py-12">
        <div className="flex flex-col justify-center gap-6">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300 shadow-sm shadow-cyan-500/10 sm:text-base">
            Welcome to my portfolio
          </span>

          <div className="space-y-6">
            <p className="text-center text-sm text-slate-300 sm:text-left sm:text-base">
              Hello, I&apos;m{" "}
              <span className="font-semibold text-white">Emmanuel Idowu</span>,
              a data analyst who converts business problems into strategic
              decisions with clean, trusted analytics.
            </p>
            <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-left sm:text-5xl lg:text-6xl">
              I help teams use data to make better decisions faster.
            </h1>
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              {[
                "Data Analyst",
                "Business Intelligence Analyst",
                "Power BI Expert",
                "Analytics Consultant",
                "Data Storyteller",
                "Data Analysis Tutor",
                "Data Visualization Specialist",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 shadow-sm shadow-cyan-500/10"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-900/70 p-4 text-center shadow-xl shadow-cyan-500/10">
                <p className="text-3xl font-semibold text-white">3+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                  Years Experience
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 p-4 text-center shadow-xl shadow-cyan-500/10">
                <p className="text-3xl font-semibold text-white">20+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                  Dashboards Delivered
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 p-4 text-center shadow-xl shadow-cyan-500/10">
                <p className="text-3xl font-semibold text-white">10+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                  Industries Supported
                </p>
              </div>
            </div>
          </div>

          <p className="max-w-2xl text-center text-sm leading-7 text-slate-300 sm:text-left sm:text-base">
            I help teams turn raw data into clear business insights using SQL,
            Python, Excel, Power BI, and dashboard storytelling. My focus is
            reliable analysis, strong documentation, and polished visual outputs
            that empower decision-making.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              data-aos="zoom-in"
              href="https://www.youtube.com/@Emmy-The-Analyst"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Visit my YouTube
              <FaArrowCircleRight />
            </a>
            <a
              data-aos="zoom-in"
              href="https://drive.google.com/file/d/1W4az5TUpIEIppYx5BS8g_6egqurc7lc9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10  bg-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-slate-800"
            >
              Download resume
              <FaArrowCircleRight />
            </a>
            <a
              data-aos="zoom-in"
              href="https://www.linkedin.com/in/emmanuel-idowu-analyst/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-700/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-600"
            >
              Visit LinkedIn
              <FaArrowCircleRight />
            </a>
            <a
              data-aos="zoom-in"
              href="https://github.com/idowuemmao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-700/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-600"
            >
              Visit GitHub
              <FaArrowCircleRight />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -right-8 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-4 shadow-[0_40px_90px_-40px_rgba(14,165,233,0.35)]">
            <img
              src={pic}
              alt="Emmanuel Idowu portrait"
              className="h-[28rem] w-auto rounded-[1.75rem] object-cover shadow-2xl shadow-slate-950/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
