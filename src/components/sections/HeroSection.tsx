import React from "react";
import { Button } from "antd";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { DynamicDevCircle } from "./DynamicDevCircle";

import frontImg from "../../assets/images/frontimg.png";
import bgContVideo from "../../assets/images/bgcont.mp4";

interface HeroSectionProps {
  onLearnMore?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLearnMore }) => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-28 lg:pt-24 lg:pb-36 overflow-hidden bg-[#0B192C]"
    >
      {/* Hidden SVG ClipPath Definition for Bottom Curve Mask */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <clipPath id="hero-curve-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 Q 0.5 0.85 1 0 L 1 1 L 0 1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Infinite Background Video */}
      <video
        src={bgContVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-75 pointer-events-none"
      />

      {/* Subtle Navy Overlay for Optimal Contrast & Text Readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(198, 167, 94, 0.2) 0%, transparent 70%), linear-gradient(to bottom, rgba(31, 42, 68, 0.65) 0%, rgba(20, 28, 46, 0.85) 100%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & Portal Graphics Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Header Text */}
            <div className="space-y-1 opacity-90 select-none">
              <h4 className="text-xl sm:text-2xl font-black text-[#E8DCC8] tracking-wider uppercase font-sans">
                DISTRICT MINERAL FOUNDATION TRUST
              </h4>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#C6A75E] tracking-tight">
                GOVERNMENT OF INDIA REGULATORY PORTAL
              </h3>
              <p className="text-sm font-semibold text-slate-300 tracking-wide">
                Pradhan Mantri Khanij Kshetra Kalyan Yojana (PMKKKY)
              </p>
            </div>

            {/* Pill Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#C6A75E]/20 border border-[#C6A75E]/60 rounded-full text-[#C6A75E] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#C6A75E] shadow-[0_0_8px_#C6A75E]"></span>
                <span>MINING BENEFICIARY TRUST GOVERNANCE</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight">
              <span className="text-white">Empowering Communities & </span>
              <span className="bg-gradient-to-r from-[#E8DCC8] via-[#C6A75E] to-[#E8DCC8] bg-clip-text text-transparent">
                Sustainable Mining Zones
              </span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              Dedicated to transparently utilizing mineral royalty funds for
              healthcare, education, clean drinking water, and rural livelihood
              infrastructure across mining-affected villages.
            </p>

            {/* CTA Button */}
            <div className="pt-3">
              <Button
                type="primary"
                size="large"
                onClick={onLearnMore}
                icon={<ArrowRight className="w-5 h-5 ml-1 text-[#1F2A44]" />}
                iconPosition="end"
                className="!bg-[#C6A75E] hover:!bg-[#B3934B] !text-[#1F2A44] !h-13 !px-8 !text-base !font-black !rounded-xl !shadow-xl shadow-[#C6A75E]/30 flex items-center transition-transform hover:scale-105"
              >
                Explore Trust Projects
              </Button>
            </div>
          </motion.div>

          {/* Right Image Column with Overlay Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={frontImg}
                alt="District Mineral Foundation Trust Development"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />

              {/* Floating 100% Transparent Trust Badge Overlay */}
              <div className="absolute bottom-6 left-6 bg-[#1F2A44] text-[#FFFFFF] px-6 py-4 rounded-xl flex items-center gap-4 shadow-xl border border-[#C6A75E]/50 backdrop-blur-md">
                <div className="w-11 h-11 bg-[#C6A75E]/20 rounded-lg flex items-center justify-center border border-[#C6A75E]/40">
                  <ShieldCheck className="w-6 h-6 text-[#C6A75E]" />
                </div>
                <div>
                  <div className="text-2xl font-black leading-none text-[#C6A75E]">100%</div>
                  <div className="text-xs font-bold text-slate-100 uppercase tracking-wider mt-1">
                    Transparent Mineral Trust
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bent Bottom Curve Container rendered with exact CSS radial gradients and clip-path */}
      <div className="hero-curve-bottom-container" />

      {/* Animated shiny border tracing the curve */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[5rem] sm:h-[6rem] lg:h-[7rem] pointer-events-none"
        viewBox="0 0 1440 112"
        preserveAspectRatio="none"
        style={{
          zIndex: 25,
          filter: 'drop-shadow(0 2px 10px rgba(25, 152, 161, 0.75))',
        }}
      >
        <defs>
          {/* Animated gradient for the bright white/cyan shiny sweep effect */}
          <linearGradient id="shinyCurveBorder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="25%" stopColor="transparent" />
            <stop offset="40%" stopColor="#1998a1" stopOpacity="0.8" />
            <stop offset="48%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#52d6e0" stopOpacity="1" />
            <stop offset="52%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="60%" stopColor="#1998a1" stopOpacity="0.8" />
            <stop offset="75%" stopColor="transparent" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </linearGradient>

          {/* Strong static base theme gradient line */}
          <linearGradient id="curveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1F2A44" stopOpacity="0.9" />
            <stop offset="20%" stopColor="#C6A75E" stopOpacity="1" />
            <stop offset="50%" stopColor="#E8DCC8" stopOpacity="1" />
            <stop offset="80%" stopColor="#C6A75E" stopOpacity="1" />
            <stop offset="100%" stopColor="#1F2A44" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Thick ambient glow line behind curve */}
        <path
          d="M 0 0 Q 720 95 1440 0"
          fill="none"
          stroke="#C6A75E"
          strokeWidth="10"
          opacity="0.4"
        />

        {/* Crisp solid base theme border */}
        <path
          d="M 0 0 Q 720 95 1440 0"
          fill="none"
          stroke="url(#curveGlow)"
          strokeWidth="3.5"
          opacity="0.95"
        />

        {/* Animated intense shiny sweep line */}
        <path
          d="M 0 0 Q 720 95 1440 0"
          fill="none"
          stroke="url(#shinyCurveBorder)"
          strokeWidth="5"
        />
      </svg>

      {/* Dynamic Theme Circle with Animated Border Ring & Dev Icon */}
      <DynamicDevCircle />

    </section>
  );
};
