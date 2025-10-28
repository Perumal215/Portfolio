// src/components/FloatingIcons.jsx
import React from "react";
import { motion } from "framer-motion";
import { Monitor, Code2, Gamepad2, Brain, Dumbbell, Car, Keyboard } from "lucide-react";

const icons = [Monitor, Code2, Gamepad2, Brain, Dumbbell, Car, Keyboard];

const randomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
});

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {icons.map((Icon, index) => {
        const pos = randomPosition();
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            className="absolute text-[#d4af37]/40" // 🟡 gold-like color
            style={{ top: pos.top, left: pos.left }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={28} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
