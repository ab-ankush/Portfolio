"use client";

import React, { createContext, useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import useActiveSectionHook from "@/hooks/useActiveSectionHook";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";

const Intro = () => {
  const { ref } = useActiveSectionHook({ sectionName: "Home", threshold: 0.4 });
  const { setActiveSection, setTimeOfLastClick } =
    useContext(ActiveSectionContext);

  return (
    <section
      className="flex flex-col items-center justify-center max-w-[50rem] mb-28 sm:mb-0 scroll-mt-[100rem]"
      id="Home"
      ref={ref}
    >
      <motion.h1
        className="text-2xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 0.2 }}
      >
        Hello, I'm{" "}
        <span className="font-bold text-blue-500">Ankush Bhagat</span>
        <br />
        <span className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-400">
          I'm a{" "}
          <span className="font-bold text-blue-400">Full Stack Developer</span>{" "}
          based in India. I love to build things for the web. I specialize in
          building websites and applications using <br />
          <span className="font-bold text-blue-400">React</span> and{" "}
          <span className="font-bold text-blue-400">Node.js</span>.
        </span>
      </motion.h1>

      <motion.div
        className="flex sm:flex-row flex-col gap-2 w-full justify-center text-md font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#Contact"
          className="bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 hover:scale-105 transition cursor-pointer"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me
        </Link>
        <a
          href="https://drive.google.com/file/d/1_dnaR2Fgu5NMOVH0CTTg85kJXMR2_I9k/view?usp=drive_link"
          target="_blank"
          className="bg-white text-slate-900 px-5 py-3 flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-50 hover:scale-105 transition cursor-pointer"
        >
          Download Resume <ArrowDownTrayIcon className="w-5 h-5" />
        </a>
        <a
          href="
          https://www.linkedin.com/in/ab-ankush/
          "
          target="_blank"
          className="bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 hover:scale-105 transition cursor-pointer"
        >
          LinkedIn
        </a>
        <a
          href="
        https://github.com/ab-ankush/
        "
          target="_blank"
          className="bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 hover:scale-105 transition cursor-pointer"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
