import React, { useRef } from "react";
import { Coins, HardHat, Users, LandPlot } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import statsBgImg from "../../assets/images/hero_admin_team.png";

/** Multi-Wave Bottom Divider overlay matching user's provided S-curve wave SVG */
const MultiWaveFrame: React.FC = () => {
  return (
    <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden pointer-events-none z-20">
      <svg
        className="w-full h-[80px] sm:h-[120px] lg:h-[150px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Layer 1: Back Wave (Theme Teal Accent #2DD4BF) */}
        <motion.path
          animate={{
            d: [
              "M0 160 C180 80 360 80 540 160 S900 240 1080 160 S1260 80 1440 160 V320 H0 Z",
              "M0 120 C180 200 360 200 540 120 S900 40 1080 120 S1260 200 1440 120 V320 H0 Z",
              "M0 160 C180 80 360 80 540 160 S900 240 1080 160 S1260 80 1440 160 V320 H0 Z",
            ],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill="rgba(45, 212, 191, 0.4)"
        />

        {/* Layer 2: Middle Wave (Theme Sky Cyan Accent #38BDF8) */}
        <motion.path
          animate={{
            d: [
              "M0 200 C180 120 360 120 540 200 S900 280 1080 200 S1260 120 1440 200 V320 H0 Z",
              "M0 160 C180 240 360 240 540 160 S900 80 1080 160 S1260 240 1440 160 V320 H0 Z",
              "M0 200 C180 120 360 120 540 200 S900 280 1080 200 S1260 120 1440 200 V320 H0 Z",
            ],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill="rgba(56, 189, 248, 0.45)"
        />

        {/* Layer 3: Front Solid Wave (#F4F6F9 matching light bg) */}
        <motion.path
          animate={{
            d: [
              "M0 240 C180 160 360 160 540 240 S900 320 1080 240 S1260 160 1440 240 V320 H0 Z",
              "M0 210 C180 270 360 270 540 210 S900 150 1080 210 S1260 270 1440 210 V320 H0 Z",
              "M0 240 C180 160 360 160 540 240 S900 320 1080 240 S1260 160 1440 240 V320 H0 Z",
            ],
          }}
          transition={{
            duration: 6.0,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill="#F4F6F9"
        />
      </svg>
    </div>
  );
};

export const StatsBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll parallax effect using Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax displacement mapping from -15% to 15% on scroll
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const stats = [
    {
      icon: <Coins className="w-7 h-7 text-[#dbaf25]" />,
      value: "₹850 Cr+",
      label: "ROYALTY FUNDS ALLOCATED",
      subtext: "Statutory MMDR Act Grants",
    },
    {
      icon: <HardHat className="w-7 h-7 text-[#dbaf25]" />,
      value: "1,420+",
      label: "SANCTIONED PROJECTS",
      subtext: "Across 5 Priority Sectors",
    },
    {
      icon: <Users className="w-7 h-7 text-[#dbaf25]" />,
      value: "450k+",
      label: "MINING BENEFICIARIES",
      subtext: "Direct Family Impact",
    },
    {
      icon: <LandPlot className="w-7 h-7 text-[#dbaf25]" />,
      value: "185+",
      label: "VILLAGES TRANSFORMED",
      subtext: "Geo-Tagged Mining Belts",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="stats"
      className="relative z-20 pt-10 pb-32 bg-[#103642] overflow-hidden"
    >
      {/* Parallax Background Image Layer */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute -top-[20%] -bottom-[20%] left-0 right-0 z-0 pointer-events-none"
      >
        <img
          src={statsBgImg}
          alt="DMF Trust Field Operations"
          className="w-full h-full object-cover object-center scale-110 filter brightness-75 contrast-125"
        />
        {/* Deep Gradient Overlays for Readability & Clean Tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#103642]/95 via-[#184c5d]/85 to-[#103642]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#103642]/60 via-transparent to-[#103642]/90" />

        {/* Subtle Decorative Matrix Grid Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#dbaf25 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <div className="container-custom relative z-10 my-4">

        {/* Stats Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-[#184c5d]/90 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 shadow-xl border border-[#dbaf25]/30 hover:border-[#dbaf25] hover:shadow-2xl hover:shadow-[#dbaf25]/25 relative overflow-hidden"
            >
              {/* Corner Glow Accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#dbaf25]/30 rounded-full blur-2xl group-hover:bg-[#dbaf25]/50 transition-all" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#dbaf25]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all shadow-md border border-[#dbaf25]/40">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#dbaf25] tracking-tight group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-extrabold text-slate-200 uppercase tracking-wider mt-1 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 mt-1">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Multi-Wave Bottom Divider overlay matching reference image */}
      <MultiWaveFrame />
    </section>
  );
};
