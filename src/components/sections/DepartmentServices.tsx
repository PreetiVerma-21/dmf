import React from "react";
import {
  HeartPulse,
  GraduationCap,
  Droplets,
  Trees,
  Truck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export interface DepartmentItem {
  id: string;
  tag?: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  servicesCount: number;
}

interface DepartmentServicesProps {
  onSelectDepartment: (dept: DepartmentItem) => void;
}

export const departments: DepartmentItem[] = [
  {
    id: "health",
    tag: "SECTOR 01",
    title: "Healthcare & Nutrition",
    icon: <HeartPulse className="w-6 h-6" />,
    description:
      "Mobile medical clinics, maternal care, malnutrition treatment centers, and district hospital upgrades in mining zones.",
    servicesCount: 48,
  },
  {
    id: "education",
    tag: "SECTOR 02",
    title: "Education & Skills",
    icon: <GraduationCap className="w-6 h-6" />,
    description:
      "Smart classrooms, IT labs, vocational training centers, and scholarships for mining-affected students.",
    servicesCount: 65,
  },
  {
    id: "water",
    tag: "SECTOR 03",
    title: "Clean Water & Sanitation",
    icon: <Droplets className="w-6 h-6" />,
    description:
      "Piped drinking water supply, solar water filtration units, and community sanitation facilities.",
    servicesCount: 52,
  },
  {
    id: "environment",
    tag: "SECTOR 04",
    title: "Eco-Restoration",
    icon: <Trees className="w-6 h-6" />,
    description:
      "Afforestation, air quality monitoring, watershed management, and mine overburden reclamation.",
    servicesCount: 31,
  },
  {
    id: "livelihood",
    tag: "SECTOR 05",
    title: "Rural Infrastructure",
    icon: <Truck className="w-6 h-6" />,
    description:
      "All-weather connectivity roads, solar street lights, agricultural assistance, and women SHG micro-grants.",
    servicesCount: 84,
  },
];

export const DepartmentServices: React.FC<DepartmentServicesProps> = ({
  onSelectDepartment,
}) => {
  return (
    <section
      id="services"
      className="py-16 dept-connected-pattern relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#00796B]/10 border border-[#00796B]/30 rounded-full text-[#00796B] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00796B]" />
            <span>PMKKKY MANDATED SECTORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-[#0B192C]">DMF High Priority </span>
            <span className="bg-gradient-to-r from-[#00796B] via-[#00897B] to-[#004D40] bg-clip-text text-transparent">
              Focus Areas
            </span>
          </h2>
          <p className="text-slate-500 text-base mt-3 max-w-2xl mx-auto">
            Targeted development initiatives funded directly by mineral royalties to uplift mining-affected families.
          </p>
        </div>

        {/* 5-Column Premium & Structured Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => onSelectDepartment(dept)}
              className="group bg-white relative rounded-2xl border border-slate-200/90 shadow-md shadow-slate-200/60 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#00796B]/20 hover:border-[#00796B]/40"
            >
              {/* Top Vibrant Header Accent Box */}
              <div className="relative h-20 bg-gradient-to-r from-[#00796B]/12 via-[#00796B]/5 to-transparent p-4 flex items-center justify-between border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00796B] to-[#004D40] text-white flex items-center justify-center shadow-lg shadow-[#00796B]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {dept.icon}
                </div>
                <span className="text-[10px] font-extrabold text-[#00796B] bg-white border border-[#00796B]/25 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  {dept.tag}
                </span>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-extrabold text-[#0B192C] group-hover:text-[#00796B] transition-colors leading-snug">
                    {dept.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-3">
                    {dept.description}
                  </p>
                </div>

                {/* Metric Badge Pill */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 group-hover:bg-[#00796B]/10 rounded-lg text-[11px] font-bold text-slate-600 group-hover:text-[#00796B] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00796B]"></span>
                    <span>{dept.servicesCount} Projects</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer Strip */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00796B] group-hover:bg-[#00796B] group-hover:text-white transition-colors duration-300">
                <span>Explore Sector</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
