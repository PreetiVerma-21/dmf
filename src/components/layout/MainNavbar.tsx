import React, { useState } from 'react';
import { Button } from 'antd';
import { Pickaxe, Menu, X, ShieldCheck, LogIn, UserPlus } from 'lucide-react';

interface MainNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestAccess: () => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({
  activeSection,
  onNavigate,
  onRequestAccess,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Focus Areas' },
    { id: 'priority-sectors', label: 'Priority Sectors' },
    { id: 'about', label: 'About DMF' },
    { id: 'stats', label: 'Fund Status' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="main-nav-bar sticky top-0 z-50 border-b border-slate-800/80 backdrop-blur-md bg-[#0D1B2A]/95">
      <div className="container-custom flex items-center justify-between h-20">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00796B] to-[#004D40] flex items-center justify-center shadow-lg shadow-[#00796B]/30 group-hover:scale-105 transition-transform">
            <Pickaxe className="w-6 h-6 text-[#2DD4BF]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans']">
                DMF PORTAL
              </span>
              <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#00796B]/40 text-[#2DD4BF] border border-[#00796B]/60 uppercase">
                TRUST
              </span>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 tracking-wide">
              District Mineral Foundation
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`nav-link text-sm font-semibold tracking-wide transition-colors ${
                activeSection === link.id ? 'active text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Attached Dual Button with Two Colors (Login / Register) */}
        <div className="hidden lg:flex items-center">
          <div className="inline-flex rounded-xl p-0.5 bg-[#004D40]/80 border border-[#2DD4BF]/40 shadow-lg shadow-[#00796B]/25 backdrop-blur-sm overflow-hidden">
            <button
              onClick={onRequestAccess}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#00796B] to-[#005B52] hover:from-[#00695C] hover:to-[#004D40] rounded-l-lg transition-all border-r border-[#2DD4BF]/20 active:scale-95"
            >
              <LogIn className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>Login</span>
            </button>
            <button
              onClick={onRequestAccess}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0D1B2A] bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] hover:from-[#14B8A6] hover:to-[#0D9488] rounded-r-lg transition-all shadow-sm active:scale-95"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#0D1B2A]" />
              <span>Register</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-200 hover:text-white p-2 rounded-lg bg-slate-800/50"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081220] border-b border-slate-800 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-slate-300 hover:text-white text-base font-semibold py-2 border-b border-slate-800/60"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-2">
            <div className="flex w-full rounded-xl p-0.5 bg-[#004D40]/80 border border-[#2DD4BF]/40 overflow-hidden">
              <button
                onClick={() => {
                  onRequestAccess();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#00796B] to-[#005B52] rounded-l-lg border-r border-[#2DD4BF]/20"
              >
                <LogIn className="w-4 h-4 text-[#2DD4BF]" />
                <span>Login</span>
              </button>
              <button
                onClick={() => {
                  onRequestAccess();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#0D1B2A] bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] rounded-r-lg"
              >
                <UserPlus className="w-4 h-4 text-[#0D1B2A]" />
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
