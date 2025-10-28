import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { Home, User, BookOpen, Briefcase, Mail } from "lucide-react"; // Added BookOpen for Education icon

const icons = {
  Home: <Home size={18} />,
  About: <User size={18} />,
  Education: <BookOpen size={18} />,
  Projects: <Briefcase size={18} />,
  Contact: <Mail size={18} />,
};

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 z-[9999]">
      <motion.nav
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          bg-gradient-to-r from-[#0d0d0d]/80 to-[#1a1a1a]/80
          backdrop-blur-lg border border-gray-700/40
          rounded-full px-8 py-5 flex items-center justify-center gap-8
          shadow-[0_0_20px_rgba(145,94,255,0.2)] w-fit
          hover:shadow-[0_0_25px_rgba(145,94,255,0.4)] transition-all duration-500
        "
      >
        {navLinks.map((nav) => (
          <motion.a
            key={nav.id}
            href={`#${nav.id}`}
            onClick={() => setActive(nav.title)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex flex-col items-center gap-1 text-sm font-medium transition-all duration-300 ${
              active === nav.title
                ? "text-[#f5ca99]"
                : "text-gray-400 hover:text-[#f5ca99]"
            }`}
          >
            <span className="flex items-center gap-1">
              {icons[nav.title] || null}
              {nav.title}
            </span>
            {active === nav.title && (
              <motion.span
                layoutId="underline"
                className="absolute -bottom-1 w-1.5 h-1.5 bg-[#f5ca99] rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;
