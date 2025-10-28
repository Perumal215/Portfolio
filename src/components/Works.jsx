import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="flex justify-center w-full sm:w-[45%]"  
    >
      <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }}
        className="bg-[#1b1b1b] p-5 rounded-2xl shadow-lg shadow-black/40 hover:shadow-[#ffcc33]/40 
                   w-full transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
      >
        {/* Project Image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-110"
          />

          {/* GitHub Icon */}
        <div className="absolute inset-0 flex justify-end m-3">
  <div
    onClick={() => window.open(source_code_link, "_blank")}
    className="bg-[#FFFF] w-14 h-14 rounded-full 
               flex justify-center items-center cursor-pointer
               border border-white/40 hover:border-white 
               hover:scale-110 transition-all duration-300 shadow-lg"
  >
    <img
      src={github}
      alt="source code"
      className="w-3/4 h-3/4 object-contain invert"
    />
  </div>
</div>

        </div>

        {/* Project Info */}
        <div className="mt-5 text-center">
          <h3 className="text-white font-serif font-bold text-[22px] tracking-wide">{name}</h3>
          <p className="mt-2 text-gray-300 text-[14px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Live Project Button */}
        {live_project_link && (
          <a href={live_project_link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 w-full bg-gradient-to-r from-[#ffcc33] to-[#ff9900] 
                               text-black font-semibold py-2 rounded-md transition-all hover:opacity-90">
              Live Project
            </button>
          </a>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText} text-[#ffcc33]`}>Projects</h2>
        <p className={`${styles.sectionSubText} text-gray-400`}>
          My recent work and personal projects
        </p>
        <div className="w-20 h-[3px] bg-[#ffcc33] mx-auto mt-2 rounded-full"></div>
      </motion.div>

      {/* Project Grid */}
      <div className="mt-16 flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
