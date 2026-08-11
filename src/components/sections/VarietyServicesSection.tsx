import React, { useState } from 'react';
import { ArrowRight, Coins, Stethoscope, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

import service1Img from '../../assets/images/service_business_reg.png';
import service2Img from '../../assets/images/service_permits.png';
import service3Img from '../../assets/images/service_trade_compliance.png';

export interface ServiceCardData {
  id: string;
  badgeTag: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface VarietyServicesSectionProps {
  onSelectService?: (service: ServiceCardData) => void;
}

export const VarietyServicesSection: React.FC<VarietyServicesSectionProps> = ({ onSelectService }) => {
  const [activePage, setActivePage] = useState(0);

  const services: ServiceCardData[] = [
    {
      id: 'royalty-tracker',
      badgeTag: 'INITIATIVE ONE',
      title: 'Mining Royalty Audit & Fund Tracker',
      description: 'Transparent public portal monitoring statutory mineral royalty payments by mining leaseholders and tracking real-time project disbursements.',
      image: service1Img,
      icon: <Coins className="w-5 h-5" />,
    },
    {
      id: 'mobile-health',
      badgeTag: 'INITIATIVE TWO',
      title: 'Mobile Healthcare & Clean Water Units',
      description: 'Deploying advanced medical vans with telemedicine, maternal care units, and solar-powered piped water systems in mining-affected villages.',
      image: service2Img,
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      id: 'livelihood-empowerment',
      badgeTag: 'INITIATIVE THREE',
      title: 'Skill & Livelihood Empowerment',
      description: 'Vocational skill training, agricultural assistance, livestock management, and micro-grants for mining-affected youth and women SHGs.',
      image: service3Img,
      icon: <Briefcase className="w-5 h-5" />,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#F7F3EB]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C6A75E] tracking-[0.2em] uppercase mb-2 block">
            SUSTAINABLE COMMUNITY DEVELOPMENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="text-[#1F2A44]">Key District Mineral </span>
            <span className="bg-gradient-to-r from-[#C6A75E] via-[#1F2A44] to-[#C6A75E] bg-clip-text text-transparent">
              Foundation Initiatives
            </span>
          </h2>
          <p className="text-slate-600 text-base mt-3 font-medium">
            Delivering high-impact social welfare, environmental restoration, and economic self-reliance across mining zones.
          </p>
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="service-card group cursor-pointer"
              onClick={() => onSelectService && onSelectService(service)}
            >
              {/* Image Box */}
              <div className="service-card-image">
                <img 
                  src={service.image} 
                  alt={service.title} 
                />
                <div className="service-badge-pill shadow-lg !bg-[#C6A75E] !text-[#1F2A44] font-bold">
                  {service.icon}
                </div>
              </div>

              {/* Body */}
              <div className="p-7 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black text-[#1F2A44] bg-[#C6A75E] px-2.5 py-1 rounded-full tracking-wider uppercase border border-[#C6A75E] shadow-xs">
                    {service.badgeTag}
                  </span>
                  <h3 className="text-xl font-bold text-[#1F2A44] group-hover:text-[#C6A75E] transition-colors mt-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-[#C6A75E] font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                  <span>View Initiative Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Pagination Visual */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActivePage(idx)}
              className={`carousel-dot ${activePage === idx ? 'active' : ''}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
