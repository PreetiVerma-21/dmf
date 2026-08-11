import React from 'react';
import { Phone, Clock, MapPin, Globe } from 'lucide-react';

export const TopHeader: React.FC = () => {
  return (
    <div className="top-header-strip hidden md:block py-2">
      <div className="w-full px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Left Side Info */}
        <div className="flex items-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>Office Hours: Mon - Fri 9:00 AM to 5:30 PM</span>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-700 pl-6">
            <MapPin className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>District Mineral Trust Secretariat | Mining Region HQ</span>
          </div>
        </div>

        {/* Right Side Hotline & Language */}
        <div className="flex items-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>PMKKKY Compliance Portal</span>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-700 pl-6 font-semibold text-white">
            <Phone className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>MINING HELPDESK: 1800-345-6789</span>
          </div>
        </div>
      </div>
    </div>
  );
};
