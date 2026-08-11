import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Code2, Terminal, Cpu, Layers, GitBranch, Pickaxe, Sparkles } from "lucide-react";

const devIcons = [
  { icon: Code2, label: "Code & Software Dev", sub: "Modular Architecture" },
  { icon: Terminal, label: "Terminal & API Services", sub: "Cloud Governance" },
  { icon: Cpu, label: "Smart Infrastructure", sub: "AI & Data Pipelines" },
  { icon: Layers, label: "System Integration", sub: "Multi-Tier Portal" },
  { icon: GitBranch, label: "Continuous Delivery", sub: "Agile Development" },
  { icon: Pickaxe, label: "Mining Tech Development", sub: "Sustainable Innovation" },
];

export const DynamicDevCircle: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto cycle development icons every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % devIcons.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = devIcons[currentIndex].icon;

  const [targetPx, setTargetPx] = useState("-500px");

  // Dynamically calculate exact horizontal pixel shift to reach dead center on any viewport size
  useEffect(() => {
    const updateTargetX = () => {
      const w = window.innerWidth;
      const isLg = w >= 1024;
      const isSm = w >= 640;
      // Offset from right screen edge to circle center:
      // lg: right-16 (64px) + circle radius (56px) = 120px
      // sm: right-8 (32px) + circle radius (48px) = 80px
      // xs: right-4 (16px) + circle radius (40px) = 56px
      const offset = isLg ? 120 : isSm ? 80 : 56;
      const shift = -(w / 2 - offset);
      setTargetPx(`${shift}px`);
    };

    updateTargetX();
    window.addEventListener("resize", updateTargetX);
    return () => window.removeEventListener("resize", updateTargetX);
  }, []);

  // Track window scroll position
  const { scrollY } = useScroll();

  // Smooth path trajectory following the glowy bottom border curve (Q 720 95 1440 0) to exact dead center
  const rawX = useTransform(scrollY, [0, 320], ["0px", targetPx]);
  const rawY = useTransform(scrollY, [0, 160, 320], ["0px", "48px", "52px"]);

  // Spring physics for smooth fluid movement when scrolling up and down
  const smoothX = useSpring(rawX, { stiffness: 90, damping: 18 });
  const smoothY = useSpring(rawY, { stiffness: 90, damping: 18 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{ x: smoothX, y: smoothY }}
      className="absolute right-4 sm:right-8 lg:right-16 bottom-10 sm:bottom-14 lg:bottom-18 z-30 flex items-center gap-4 select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Info Tooltip Badge on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="hidden sm:flex flex-col items-end bg-[#184c5d] border border-[#dbaf25]/60 rounded-xl px-4 py-2.5 text-right shadow-xl"
          >
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#dbaf25] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#dbaf25]" />
              <span>{devIcons[currentIndex].label}</span>
            </div>
            <span className="text-xs font-semibold text-slate-100 mt-0.5">
              {devIcons[currentIndex].sub}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interactive Floating Circle Wrapper with Floating Motion */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="relative flex items-center justify-center cursor-pointer group"
      >
        {/* 1. Outer Clockwise Spinning Glowing Dashed Ring */}
        <div className="absolute -inset-4 sm:-inset-5 rounded-full border-2 border-dashed border-[#1998a1] animate-[spin_12s_linear_infinite] shadow-[0_0_15px_rgba(25,152,161,0.6)] group-hover:border-[#dbaf25] group-hover:shadow-[0_0_25px_rgba(219,175,37,0.9)] transition-all duration-300" />

        {/* 2. Counter-Clockwise Inner Glowing Dotted Ring */}
        <div className="absolute -inset-2 sm:-inset-2.5 rounded-full border-2 border-dotted border-[#52d6e0] animate-[spin_8s_linear_infinite_reverse] shadow-[0_0_10px_rgba(82,214,224,0.5)]" />

        {/* 3. Orbit SVG Tracer Ring with Intense Glow */}
        <svg 
          className="absolute -inset-4 sm:-inset-5 w-[calc(100%+32px)] h-[calc(100%+32px)] sm:w-[calc(100%+40px)] sm:h-[calc(100%+40px)] pointer-events-none animate-[spin_6s_linear_infinite]" 
          viewBox="0 0 100 100"
          style={{ filter: "drop-shadow(0 0 6px #dbaf25)" }}
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="3"
            strokeDasharray="25 175"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dbaf25" stopOpacity="1" />
              <stop offset="50%" stopColor="#52d6e0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* 4. Core Dynamic Circle with Theme Background (#184c5d) & Glowing Border Ring */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-[#184c5d] border-3 border-[#1998a1] group-hover:border-[#dbaf25] flex items-center justify-center shadow-[0_0_20px_rgba(25,152,161,0.7)] group-hover:shadow-[0_0_35px_rgba(219,175,37,0.9)] transition-all duration-300">
          
          {/* Dynamic Development Icon with Smooth Fade Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 text-white group-hover:text-[#dbaf25] group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_#1998a1]"
            >
              <CurrentIcon className="w-9 h-9 sm:w-11 sm:h-11 lg:w-13 lg:h-13" />
            </motion.div>
          </AnimatePresence>

          {/* Small Status Pulse Badge on Circle Edge */}
          <div className="absolute top-1 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#dbaf25] border-2 border-[#184c5d] rounded-full shadow-[0_0_8px_#dbaf25] flex items-center justify-center z-20">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};
