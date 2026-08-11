import React from 'react';
import { Phone, Clock, MapPin, Globe } from 'lucide-react';

export const TopHeader: React.FC = () => {
  return (
    <div className="top-header-strip hidden md:block py-2.5 bg-[#103642] border-b border-white/10 text-white">
      <div className="w-full px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Left Side Info */}
        <div className="flex items-center gap-6 text-xs text-slate-200">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#52d6e0]" />
            <span>Office Hours: Mon - Fri 9:00 AM to 5:30 PM</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/20 pl-6">
            <MapPin className="w-3.5 h-3.5 text-[#52d6e0]" />
            <span>District Mineral Trust Secretariat | Mining Region HQ</span>
          </div>
        </div>

        {/* Right Side Hotline & Language */}
        <div className="flex items-center gap-6 text-xs text-slate-200">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#52d6e0]" />
            <span>PMKKKY Compliance Portal</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/20 pl-6 font-black text-[#dbaf25]">
            <Phone className="w-3.5 h-3.5 text-[#dbaf25]" />
            <span>MINING HELPDESK: 1800-345-6789</span>
          </div>
        </div>
      </div>
    </div>
  );
};
