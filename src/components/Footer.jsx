import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { useForm } from "react-hook-form";

export default function Footer() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(mq.matches);
      const handler = (e) => setReduceMotion(e.matches);
      mq.addEventListener?.("change", handler);
      return () => mq.removeEventListener?.("change", handler);
    }
    return undefined;
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const subject = encodeURIComponent(formData.subject || "");
    const body = encodeURIComponent(
      `Hello, my name is ${formData.name || ""}. ${formData.message || ""}`,
    );
    window.location.href = `mailto:idowuemmao@gmail.com?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <footer id="connect" className="mt-24">
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        className="bg-gradient-to-r to-tertiary from-cyan-900 text-black"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 pb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary text-center pt-6">
            Get in touch
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 items-start text-sm text-shading">
            {/* Contact info */}
            <address className="not-italic flex flex-col gap-2 text-slate-200">
              <div>
                <span className="font-semibold">Phone:</span>{" "}
                <a className="underline" href="tel:+2348144778796">
                  +234 814 477 8796
                </a>
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a className="underline" href="mailto:idowuemmao@gmail.com">
                  idowuemmao@gmail.com
                </a>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Available for freelance and full-time opportunities.
              </p>
            </address>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              aria-label="Contact form"
              className="col-span-1 md:col-span-2 w-full"
            >
              <div className="mb-4 text-center text-primary">
                {!reduceMotion ? (
                  <Typewriter
                    words={[
                      "Or just write me a letter here.",
                      "I'd love to hear from you.",
                      "Let's collaborate on your project.",
                      "I'm available for new opportunities.",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1400}
                  />
                ) : (
                  <p className="text-base">Or just write me a message here.</p>
                )}
              </div>

              <label className="sr-only" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                autoComplete="name"
                {...register("name", { required: "Name is required" })}
                className="w-full bg-transparent border border-white/10 px-3 py-2 text-sm rounded-md"
                type="text"
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}

              <label className="sr-only" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                className="mt-3 w-full bg-transparent border border-white/10 px-3 py-2 text-sm rounded-md"
                type="text"
                placeholder="Subject"
                aria-invalid={errors.subject ? "true" : "false"}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}

              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className="mt-3 w-full bg-transparent border border-white/10 px-3 py-2 text-sm rounded-md"
                type="email"
                placeholder="Your email"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}

              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows={4}
                className="mt-3 w-full bg-transparent border border-white/10 px-3 py-2 text-sm rounded-md"
                placeholder="Type your message"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                aria-label="Send message"
              >
                Send Message
              </button>
            </form>

            {/* Social links */}
            <nav
              aria-label="Social links"
              className="flex flex-col items-center gap-3"
            >
              <a
                href="https://github.com/idowuemmao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-100 hover:underline"
                aria-label="GitHub"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://twitter.com/emmygreatmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-100 hover:underline"
                aria-label="Twitter"
              >
                <FaXTwitter /> X
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-idowu-analyst/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-100 hover:underline"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@Emmy-The-Analyst"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-100 hover:underline"
                aria-label="YouTube"
              >
                <FaYoutube /> YouTube
              </a>
            </nav>
          </div>

          <div className="mt-8 border-t border-white/6 pt-6 text-center text-xs text-slate-300">
            <nav
              aria-label="Footer navigation"
              className="mb-3 flex flex-wrap justify-center gap-4"
            >
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
              <a href="#education" className="hover:underline">
                Education
              </a>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
              <a href="#award_certifications" className="hover:underline">
                Awards
              </a>
            </nav>

            <p className="italic">
              &#169; 2026 Idowu Emmanuel. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
