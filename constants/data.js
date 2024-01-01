import React from "react";
import AiImageGeneratorImage from "@/assets/images/AI-image-generator.png";
import CPHints from "@/assets/images/CP-Hints.png";
import YelpCampImage from "@/assets/images/Yelp-Camp.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { Html } from "next/document";

export const links = [
  {
    name: "Home",
    href: "#Home",
  },
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Projects",
    href: "#Projects",
  },
  {
    name: "Skills",
    href: "#Skills",
  },
  {
    name: "Experience",
    href: "#Experience",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
];

export const ProjectsData = [
  {
    name: "CP Hints",
    description:
      "The project aims to create an online platform where users can access and contribute coding hints for various platforms.",
    image: CPHints,
    tags: [
      "React",
      "NodeJs",
      "PostgreSQL",
      "Redis",
      "Express",
      "Bootstrap",
      "Framer motion",
      "JWT",
    ],
    link: "https://www.cphints.me/",
  },
  {
    name: "YelpCamp",
    description:
      "A full-stack web application focused on creating an immersive and user-friendly experience for camping enthusiasts.",
    image: YelpCampImage,
    tags: [
      "Html",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "Mapbox",
    ],
    link: "https://fine-tan-pronghorn-suit.cyclic.app/",
  },
  {
    name: "AI Image Generator",
    description:
      "A FullStack web application that generates images on specific prompts using OpenAI's Dall-E API.",
    image: AiImageGeneratorImage,
    tags: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "OpenAI",
      "MongoDB",
      "Cloudinary",
    ],
    link: "https://ai-image-generator-pearl.vercel.app/",
  },
];

export const SkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "MongoDB",
  "Node.js",
  "Express.js",
  "REST API",
  "bootstrap",
  "Material UI",
  "PostgreSQL",
  "VS Code",
  "Git",
  "GitHub",
  "JWT",
  "Cloudinary",
];

export const experiencesData = [
  {
    title: "Full-Stack Developer Intern",
    location: "DecisionAlgo",
    description:
      "As a full-stack web developer at DecionAlgo, I use React and Python Django to create an interface facilitating direct communication between doctors and hospitals and connecting them with locums.",
    icon: React.createElement(FaLaravel),
    date: "October 2023 - Present",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Suvidha Foundation",
    description:
      "Led dynamic full-stack web development creating a platform to create and explore fundraisers for noble causes.",
    icon: React.createElement(FaReact),
    date: "June 2022 - July 2022",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Murtiwala",
    description:
      "Contributed to a rewarding Internship, playing a key role in developing a website to showcase and sell idols.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - August 2022",
  },
];
