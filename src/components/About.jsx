import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { services, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImg from "../assets/profile.png";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* ======= About Section ======= */}
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText} mb-8`}>About Me</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* --- Left Text Section --- */}
        <motion.p
          variants={fadeIn("left", "", 0.1, 1)}
          className="text-secondary text-[18px] max-w-2xl leading-[32px] text-justify px-6"
        >
          I’m an <b>ECE student</b> with a strong passion for
          <b> Full Stack Development</b>, experienced in building scalable web applications
          using <b>Django</b> and <b>React</b>.  
          I love connecting frontend and backend technologies to create
          smooth, responsive, and visually appealing digital experiences.
          My goal is to continuously learn, innovate, and contribute to impactful projects.
        </motion.p>

        {/* --- Right Image Section --- */}
        <motion.div
          variants={fadeIn("right", "", 0.2, 1)}
          className="w-[280px] h-[320px] bg-gradient-to-br from-[#915EFF]/30 to-[#1f1f1f]
                     rounded-2xl border border-[#915EFF]/40 shadow-[0_0_25px_rgba(145,94,255,0.3)]
                     flex items-center justify-center overflow-hidden"
        >
          {/* Replace with your image */}
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* ======= Areas of Interest ======= */}
      {/* <motion.div variants={textVariant()} className="text-center mt-20">
        <h2 className={styles.sectionHeadText}>Areas of Interest</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    {/* ======= Areas of Interest ======= */}
<motion.div variants={textVariant()} className="text-center mt-20">
  <h2 className={styles.sectionHeadText}>Areas of Interest</h2>
</motion.div>

<div className="mt-10 flex flex-wrap justify-center gap-10">
  {services.map((service, index) => (
    <motion.div
      key={service.title}
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-[200px] h-[220px] bg-[#f8f6f3] rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
    >
      {/* Image/Icon */}
      <img
        src={service.icon}
        alt={service.title}
        className="w-16 h-16 object-contain mb-4"
      />
      {/* Title */}
      <h3 className="text-[16px] font-semibold text-gray-900 text-center">
        {service.title}
      </h3>
    </motion.div>
  ))}
</div>


      {/* ======= Skills Section ======= */}
      <motion.div variants={textVariant()} className="text-center mt-20">
        <h3 className={styles.sectionHeadText}>Skills</h3>
      </motion.div>

      <div className="hidden sm:flex justify-center mt-10">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
