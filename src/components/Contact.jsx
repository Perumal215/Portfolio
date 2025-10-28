import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={34} className="text-[#FF0000]" />,
      title: "Email",
      value: "ssirangjivi@gmail.com",
      link: "mailto:ssirangjivi",
    },
{
  icon: <Phone size={34} className="text-[#32CD32]" />,  
  title: "Phone",
  value: "+91 8248459021",
  link: "tel:+91 8248459021",
},
    {
      icon: <Linkedin size={34} className="text-[#0A66C2]" />,
      title: "LinkedIn",
      value: "Perumal N",
      link: "https://www.linkedin.com/in/perumal-n-aba5612ab/",
    },
    {
      icon: <Github size={34} className="text-[ #000000]" />,
      title: "GitHub",
      value: "Perumal215",
      link: "https://github.com/Perumal215",
    },
  ];

  return (
    <section className="w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-[Times_New_Roman] text-[#FFCC33] font-semibold mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-lg md:text-xl font-[Times_New_Roman] leading-relaxed">
          Let’s create something amazing together. I’m always open to discussing
          new opportunities and ideas.
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left: Contact Cards */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-lg"
        >
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px #ffcc334d",
              }}
              className="bg-[#111] border border-[#2a2a2a] rounded-xl p-8 flex flex-col items-center text-center 
                         transition-all duration-300 hover:border-[#FFCC33]/50"
            >
              {item.icon}
              <h3 className="mt-4 text-[#ffcc334d] font-semibold text-lg font-[Times_New_Roman]">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 font-[Times_New_Roman]">
                {item.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Right: 3D Earth */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-[90%] md:w-[70%] lg:w-[400px] xl:w-[450px] h-[300px] md:h-[400px] lg:h-[450px]">
            <EarthCanvas />
          </div>
        
        </motion.div>
      </div>
      <hr className="mt-20 p-2 border-t border-gray-700/50 w-full" />


      {/* Footer */}
      <p className="text-gray-500 mt-10 mb-9 text-center text-sm text-center font-[Times_New_Roman]">
        © 2025{" "}
        <span className="text-[#FFCC33] font-semibold">Coded </span>by{" "}
        <a
          href="#"
          className="text-[#FFCC33] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
         Perumal. Crafted with passion.
        </a>
      </p>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
