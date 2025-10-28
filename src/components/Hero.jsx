import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";
import FloatingIcons from "./FloatingIcons";

import { ReactTyped } from "react-typed";
const Hero = () => {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Perumal";

  // Typing animation for name
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(typingInterval);
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  // Resume download handler
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Perumal_Resume.pdf"; // Place in public folder
    link.download = "Perumal_Resume.pdf";
    link.click();
  };

  return (
    <section  id="home" className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      {/* --- Animated Background Gradient --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a0033] to-[#000000]"></div>

      {/* --- Neon Particles (Soft glowing dots) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#915EFF] rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              boxShadow: "0 0 10px #915EFF, 0 0 20px #915EFF",
            }}
          ></div>
        ))}
      </div>

      {/* --- 3D Background Canvas --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-60">
        <ComputersCanvas />
      </div>
      

      {/* --- Hero Content --- */}
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="z-10 flex flex-col items-center mt-[-100px]"
>
<div className="mt-[-230px] flex flex-col items-center">
  <h1
    className={`${styles.heroHeadText} text-white font-extrabold neon-glow`}
  >
    Hi, I'm{" "}
    <span className="text-[#FFCC33]"style={{ fontFamily: "Times New Roman, Times, serif" }}>
      {displayName}
    </span>
    <span className="text-white blink">|</span>
  </h1>

  <p className={`${styles.heroSubText} mt-4 text-gray-300 text-center`}>
  I’m a{" "}
  <ReactTyped
    strings={[
      "Problem Solver 💡",
      "Full Stack Developer 💻",
      "Creative Thinker 🎨",
      
    ]}
    typeSpeed={70}
    backSpeed={40}
    loop
    backDelay={1500}
    showCursor
    cursorChar="|"
    className="text-[#3B82F6] font-semibold"
  />
</p>
</div>


  {/* --- Neon Resume Button --- */}
 <motion.button
  whileHover={{
    scale: 1.1,
    boxShadow: "0 0 25px #3B82F6", // soft blue glow
  }}
  whileTap={{ scale: 0.95 }}
  onClick={handleDownload}
  className="mt-5 px-10 py-3 text-white font-semibold rounded-xl 
    bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] 
    hover:from-[#2563EB] hover:to-[#3B82F6]
    transition-all duration-300 shadow-lg"
>
  <span className="font-bold">⚡ Get Resume</span>
</motion.button>

</motion.div>


      {/* --- Scroll Down Icon --- */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
