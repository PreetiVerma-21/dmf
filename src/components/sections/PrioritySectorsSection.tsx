import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Droplet,
  HeartPulse,
  GraduationCap,
  Sprout,
  Hammer,
  Users,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export interface PrioritySector {
  id: string;
  title: string;
  category: 'High Priority (Min 60%)' | 'Other Priority (Max 40%)';
  icon: React.ReactNode;
  allocationPercent: number;
  totalFunds: string;
  projectsCompleted: number;
  beneficiaries: string;
  description: string;
  highlights: string[];
  bgImage: string;
}

export const PrioritySectorsSection: React.FC = () => {
  const sectors: PrioritySector[] = [
    {
      id: 'water',
      title: 'Drinking Water & Sanitation',
      category: 'High Priority (Min 60%)',
      icon: <Droplet className="w-6 h-6" />,
      allocationPercent: 28,
      totalFunds: '₹238 Cr',
      projectsCompleted: 420,
      beneficiaries: '145k+ Villagers',
      description: 'Ensuring 100% piped potable water coverage, solar water filtration units, and underground drainage across mining villages.',
      highlights: [
        '180 Solar water purification stations',
        'IoT water quality sensors in reservoirs',
        '24x7 doorstep tanker support in summer',
      ],
      bgImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'health',
      title: 'Healthcare & Nutrition',
      category: 'High Priority (Min 60%)',
      icon: <HeartPulse className="w-6 h-6" />,
      allocationPercent: 22,
      totalFunds: '₹187 Cr',
      projectsCompleted: 310,
      beneficiaries: '210k+ Patients',
      description: 'Deploying mobile health clinics, upgrading PHCs with ICU beds, and providing free diagnostic health screenings.',
      highlights: [
        '12 Advanced Mobile Medical Units',
        'Maternal & ICU units at District Hospital',
        'Free monthly health screening camps',
      ],
      bgImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'education',
      title: 'Education & Digital Labs',
      category: 'High Priority (Min 60%)',
      icon: <GraduationCap className="w-6 h-6" />,
      allocationPercent: 18,
      totalFunds: '₹153 Cr',
      projectsCompleted: 275,
      beneficiaries: '68k+ Students',
      description: 'Transforming rural schools into smart digital learning centers equipped with STEM labs & solar power infrastructure.',
      highlights: [
        '140 Smart interactive Classrooms',
        'Robotics & STEM innovation hubs',
        'Nutritious dining hall infrastructure',
      ],
      bgImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'environment',
      title: 'Environment & Afforestation',
      category: 'High Priority (Min 60%)',
      icon: <Sprout className="w-6 h-6" />,
      allocationPercent: 14,
      totalFunds: '₹119 Cr',
      projectsCompleted: 195,
      beneficiaries: 'District Ecology',
      description: 'Reclaiming mined lands through dense Miyawaki afforestation, green belt barriers & continuous air monitoring.',
      highlights: [
        '450,000 native saplings planted',
        '5 CAAQMS Ambient Air Monitors',
        'Rainwater harvesting in 60 campuses',
      ],
      bgImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'livelihood',
      title: 'Skill Development & SHGs',
      category: 'Other Priority (Max 40%)',
      icon: <Hammer className="w-6 h-6" />,
      allocationPercent: 10,
      totalFunds: '₹85 Cr',
      projectsCompleted: 140,
      beneficiaries: '32k+ Youth',
      description: 'Empowering local communities with vocational machinery training, micro-loans, and agricultural cold storages.',
      highlights: [
        'NSDC certified skill institute',
        'Micro-grants for 450 Women SHGs',
        'Solar cold storage agricultural hubs',
      ],
      bgImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'welfare',
      title: 'Women & Child Welfare',
      category: 'Other Priority (Max 40%)',
      icon: <Users className="w-6 h-6" />,
      allocationPercent: 8,
      totalFunds: '₹68 Cr',
      projectsCompleted: 110,
      beneficiaries: '45k+ Families',
      description: 'Constructing modern Anganwadi centers, nutrition hubs, and healthcare facilities tailored for mothers.',
      highlights: [
        '85 Model Anganwadi centers',
        'Nutrition kits for mothers',
        'Hygiene vending units in schools',
      ],
      bgImage: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const [activeHoverIndex, setActiveHoverIndex] = useState<number>(0);

  const handleNext = () => {
    setActiveHoverIndex((prev) => (prev + 1) % sectors.length);
  };

  const handlePrev = () => {
    setActiveHoverIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  };

  return (
    <section id="priority-sectors" className="py-5 sm:py-8 bg-[#F4F6F9] text-slate-800 relative overflow-hidden select-none">

      {/* Light Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#00796B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1998a1]/10 border border-[#1998a1]/25 text-[#1998a1] font-extrabold text-xs tracking-wider uppercase mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#dbaf25]" />
              <span>PMKKKY STATUTORY MANDATE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              <span className="text-[#103642]">Priority Sectors & </span>
              <span className="bg-gradient-to-r from-[#1998a1] via-[#184c5d] to-[#1998a1] bg-clip-text text-transparent">
                Fund Allocation
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl font-medium">
              Hover over any sector card to view live fund allocations, completed works, and beneficiary metrics.
            </p>
          </div>

          {/* Carousel Slider Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#1998a1] border border-slate-200 hover:border-[#1998a1] text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95 group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-white hover:bg-[#1998a1] border border-slate-200 hover:border-[#1998a1] text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95 group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Desktop View: Streamlined Height Cards */}
        <div className="hidden lg:flex flex-row gap-4 h-[390px] w-full">
          {sectors.map((sector, index) => {
            const isHovered = activeHoverIndex === index;

            return (
              <motion.div
                key={sector.id}
                onMouseEnter={() => setActiveHoverIndex(index)}
                onClick={() => setActiveHoverIndex(index)}
                layout
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 flex flex-col justify-between p-6 shadow-lg group ${isHovered
                  ? 'flex-[3.5] bg-[#184c5d] text-white border-[#52d6e0] shadow-xl shadow-[#1998a1]/25 ring-2 ring-[#52d6e0]/30'
                  : 'flex-[1] bg-[#184c5d] border-slate-700 hover:border-[#52d6e0]/60 text-white'
                  }`}
              >
                {/* 100% CLEAR High-Res Background Image across Entire Card */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={sector.bgImage}
                    alt={sector.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-105 opacity-85' : 'scale-100 opacity-75 group-hover:scale-105 group-hover:opacity-85'
                      }`}
                  />
                  {/* Subtle Top & Bottom Vignette for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#184c5d]/85 via-[#184c5d]/50 to-[#184c5d]/95" />
                </div>

                {/* Card Top Header: Icon + Allocation Badge */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${isHovered
                      ? 'bg-[#1998a1] text-white shadow-md scale-105 ring-2 ring-white/40'
                      : 'bg-[#184c5d]/90 text-[#52d6e0] border border-[#52d6e0]/40 backdrop-blur-md'
                      }`}
                  >
                    {sector.icon}
                  </div>

                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-[#dbaf25] border border-[#dbaf25] text-[#184c5d] shadow-sm shrink-0">
                    {sector.allocationPercent}%
                  </span>
                </div>

                {/* Collapsed State: STUNNING VERTICAL SECTOR NAME */}
                {!isHovered && (
                  <div className="flex flex-col items-center justify-between flex-grow relative z-10 py-4">
                    <div className="flex-grow flex items-center justify-center">
                      <h3
                        className="font-black tracking-widest text-[#52d6e0] text-base uppercase whitespace-nowrap drop-shadow-md group-hover:text-white transition-colors"
                        style={{
                          writingMode: 'vertical-lr',
                          transform: 'rotate(180deg)',
                        }}
                      >
                        {sector.title}
                      </h3>
                    </div>

                    <div className="mt-2 bg-[#184c5d]/95 border border-[#dbaf25]/40 backdrop-blur-md px-2.5 py-0.5 rounded-lg text-center shadow-sm">
                      <span className="text-[11px] font-black text-[#dbaf25] block">
                        {sector.totalFunds}
                      </span>
                    </div>
                  </div>
                )}

                {/* Expanded State Content */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col justify-between flex-grow mt-4"
                  >
                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest text-[#dbaf25] uppercase block mb-0.5">
                        {sector.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                        {sector.title}
                      </h3>
                      <p className="text-slate-200 text-xs mt-2 leading-relaxed max-w-xl drop-shadow line-clamp-2">
                        {sector.description}
                      </p>
                    </div>

                    {/* Stats Metric Cards Grid */}
                    <div className="grid grid-cols-3 gap-2.5 my-3">
                      <div className="bg-[#0D1B2A]/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80 shadow-sm">
                        <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">
                          Fund Pool
                        </span>
                        <span className="text-sm font-black text-white mt-0.5 block">
                          {sector.totalFunds}
                        </span>
                      </div>

                      <div className="bg-[#0D1B2A]/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80 shadow-sm">
                        <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">
                          Completed
                        </span>
                        <span className="text-sm font-black text-[#2DD4BF] mt-0.5 block">
                          {sector.projectsCompleted}+
                        </span>
                      </div>

                      <div className="bg-[#0D1B2A]/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80 shadow-sm">
                        <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wider">
                          Beneficiaries
                        </span>
                        <span className="text-sm font-black text-white mt-0.5 block truncate">
                          {sector.beneficiaries}
                        </span>
                      </div>
                    </div>

                    {/* Key Deliverables Bullet Checklist */}
                    <div className="space-y-1.5 mb-2">
                      {sector.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-100 drop-shadow">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Dynamic Meter Bar */}
                    <div className="pt-2 border-t border-slate-700/80">
                      <div className="flex justify-between items-center text-[10px] font-bold mb-1">
                        <span className="text-slate-300">PMKKKY ALLOCATION</span>
                        <span className="text-[#2DD4BF]">{sector.allocationPercent}% MANDATED SHARE</span>
                      </div>
                      <div className="w-full h-2 bg-[#0D1B2A] rounded-full overflow-hidden p-0.5 border border-slate-700">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(sector.allocationPercent * 3.5, 100)}%` }}
                          transition={{ duration: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#00796B] via-[#0D9488] to-[#2DD4BF]"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet Responsive View (Full Background Image Grid Cards) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="relative rounded-3xl overflow-hidden bg-[#0D1B2A] border border-slate-700 text-white p-6 min-h-[380px] flex flex-col justify-between shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={sector.bgImage}
                  alt={sector.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/80 via-[#0D1B2A]/60 to-[#0D1B2A]/95" />
              </div>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#00796B] text-[#2DD4BF] flex items-center justify-center border border-[#2DD4BF]/40">
                  {sector.icon}
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-xl bg-[#00796B] text-[#2DD4BF]">
                  {sector.allocationPercent}% ALLOCATED
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2.5 mt-6">
                <span className="text-[11px] font-extrabold text-[#2DD4BF] uppercase tracking-wider block">
                  {sector.category}
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {sector.title}
                </h3>
                <p className="text-slate-200 text-xs leading-relaxed">
                  {sector.description}
                </p>

                <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-semibold">{sector.highlights[0]}</span>
                  <span className="font-black text-[#2DD4BF] bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-700">
                    {sector.totalFunds}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Bottom Dots */}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
          {sectors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveHoverIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeHoverIndex === idx ? 'w-8 bg-[#00796B]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
