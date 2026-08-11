import React from "react";
import { Button } from "antd";
import { Check, ArrowRight, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

import aboutImg from "../../assets/images/about_kiosk.png";

interface AboutPortalSectionProps {
  onContactUs?: () => void;
}

export const AboutPortalSection: React.FC<AboutPortalSectionProps> = ({
  onContactUs,
}) => {
  const features = [
    "Statutory Mineral Royalty Allocation",
    "Real-Time Geo-Tagged Project Audits",
    "Direct Mining-Affected Beneficiary Focus",
    "Multi-Departmental Governance Council",
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Features Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-bold text-[#C6A75E] tracking-[0.2em] uppercase mb-2 block">
                MINES & MINERALS REGULATORY COMPLIANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                <span className="text-[#1F2A44]">Transforming Mineral Wealth </span>
                <span className="bg-gradient-to-r from-[#C6A75E] via-[#1F2A44] to-[#C6A75E] bg-clip-text text-transparent">
                  into Sustainable Welfare
                </span>
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              The District Mineral Foundation (DMF) Trust operates as a
              statutory non-profit body under the Mines & Minerals Development
              Act. We ensure mineral royalties directly fund essential
              healthcare, clean water, schools, and sustainable livelihoods for
              mining-affected communities.
            </p>

            {/* 2x2 Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-check-item">
                  <div className="check-icon-circle !bg-[#C6A75E]/20 !text-[#C6A75E]">
                    <Check className="w-3.5 h-3.5 text-[#C6A75E]" />
                  </div>
                  <span className="text-sm font-bold text-[#1F2A44]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact / Action Area */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Button
                type="primary"
                size="large"
                onClick={onContactUs}
                icon={<ArrowRight className="w-4 h-4 ml-1 text-[#1F2A44]" />}
                iconPosition="end"
                className="!bg-[#C6A75E] hover:!bg-[#B3934B] !text-[#1F2A44] !h-12 !px-7 !font-extrabold !rounded-xl !shadow-lg shadow-[#C6A75E]/30"
              >
                Track Fund Allocation
              </Button>

              <div className="flex items-center gap-3 border-l border-slate-200 pl-6 text-xs text-slate-500">
                <Shield className="w-5 h-5 text-[#C6A75E]" />
                <div>
                  <div className="font-bold text-[#1F2A44]">
                    CAG Audited Trust
                  </div>
                  <div>PMKKKY Statutory Framework</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image with Floating 15+ Years Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={aboutImg}
                alt="District Mineral Foundation Community Services"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />

              {/* Floating Badge Card */}
              <div className="about-badge-card bg-[#1F2A44] text-white p-6 rounded-2xl shadow-2xl absolute -bottom-6 -right-6 max-w-[240px] border-2 border-[#C6A75E] shadow-[0_0_20px_rgba(198,167,94,0.35)] backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-[#C6A75E]/20 border border-[#C6A75E]/40 flex items-center justify-center mb-3">
                  <Award className="w-7 h-7 text-[#C6A75E]" />
                </div>
                <div className="text-3xl font-black text-[#C6A75E]">₹850+ Cr</div>
                <div className="text-xs font-bold text-slate-100 uppercase tracking-wider mt-1">
                  Royalty Deployed
                </div>
                <p className="text-[11px] text-slate-200 mt-2 leading-snug">
                  1,420+ Sanctioned Projects in Mining Belts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
