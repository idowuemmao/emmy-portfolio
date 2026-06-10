import React, { useState } from "react";
import logo from "../images/logo1.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { TiTimes } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#award_certifications", label: "Awards" },
];

const socialLinks = [
  {
    href: "https://github.com/idowuemmao",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://twitter.com/emmygreatmusic",
    label: "Twitter",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/emmanuel-idowu-analyst/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "mailto:idowuemmao@gmail.com",
    label: "Email",
    icon: <IoMdMail />,
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 rounded-full border border-cyan-400/20 object-cover shadow-lg shadow-cyan-900/20"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/90">
              Emmanuel Idowu
            </p>
            <p className="text-xs text-slate-400">Data & BI Analyst</p>
          </div>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-8 lg:gap-2 lg:flex">
          {navigationLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex gap-2 text-slate-300">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-base transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <a
            href="#connect"
            className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Let&apos;s Connect
          </a>
        </div>

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-2xl text-slate-200 transition hover:bg-slate-800 lg:hidden"
        >
          {isMenuOpen ? <TiTimes /> : <AiOutlineMenu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto w-full max-w-7xl px-6 pb-6 lg:hidden sm:px-8">
          <div className="rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-[0_35px_90px_-40px_rgba(14,165,233,0.45)]">
            <ul className="flex flex-col gap-4 text-base">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5 hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <a
              href="#connect"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
