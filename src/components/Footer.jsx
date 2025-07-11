import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { useForm } from "react-hook-form";

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:idowuemmao@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}, ${formData.message}.`;
    reset();
  };
  return (
    <footer id="connect">
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        className="bg-gradient-to-r to-tertiary from-cyan-900 text-black mt-24"
      >
        <div className=" px-10 md:px-20  pb-20 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-primary text-center pt-4 ">
            Get in touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center mt-8 w-full text-xs md:text-base text-shading ">
            {/* left */}
            <div className="grid gap-4">
              <h4 className="flex items-center gap-4">
                PHONE:<a href="tel:08144778796">+2348144778796</a>
              </h4>
              <h4 className="flex items-center gap-4">
                EMAIL:
                <a href="mailto:idowuemmao@gmail.com">idowuemmao@gmail.com</a>
              </h4>
            </div>
            {/* middle */}
            <form
              className="grid gap-4 col-span-2 w-10/12"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="text-center">
                <Typewriter
                  words={[
                    "Or just write me a letter here.",
                    "I will love to here from you",
                    "Let collaborate on that project",
                    "I am Available for any project",
                  ]}
                  loop={50}
                  cursor
                  className="text-primary flex border-2"
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>
              <input
                {...register("name", { required: "Name is required" })}
                className="bg-transparent border-[1px] text-xs p-2"
                type="text"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
              <input
                {...register("subject", { required: "Subject is required" })}
                className="bg-transparent border-[1px] text-xs p-2"
                type="text"
                placeholder="The Subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs">{errors.subject.message}</p>
              )}
              <input
                {...register("email", { required: "Email is required" })}
                className="bg-transparent border-[1px] text-xs p-2"
                type="email"
                placeholder="Your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
              <textarea
                {...register("message", { required: "Message is required" })}
                name="message"
                id="message"
                cols="10"
                rows="5"
                placeholder="Type the message here"
                className="bg-transparent border-[1px] text-xs p-2"
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
              )}
              <button
                type="submit"
                className="w-full mt-8 py-2 rounded-xl bg-primary hover:underline"
              >
                Send
              </button>
            </form>
            {/* right */}
            <div className="flex md:grid gap-4 justify-center">
              <a
                href="https://github.com/idowuemmao"
                className="flex gap-2 items-center"
              >
                <FaGithub /> Github
              </a>
              <a
                href="https://twitter.com/emmygreatmusic"
                className="flex gap-2 items-center"
              >
                <FaXTwitter /> Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-idowu-analyst/"
                className="flex gap-2 items-center"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs md:text-sm pb-8 italic">
          &#169; 2025 Idowu Emmanuel. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
