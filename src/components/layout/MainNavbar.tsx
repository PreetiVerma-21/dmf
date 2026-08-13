import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import logoLive from '../../assets/images/logo_live.png';

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
    <header className="main-nav-bar sticky top-0 z-50 border-b border-[#C6A75E]/30 backdrop-blur-md bg-[#15828a] shadow-xl">
      <div className="w-full px-6 sm:px-10 lg:px-12 flex items-center justify-between h-20">

        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center cursor-pointer group"
        >
          <img
            src={logoLive}
            alt="DMF Logo"
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 lg:gap-10 xl:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`nav-link text-sm font-bold tracking-wide transition-colors ${activeSection === link.id ? 'active text-[#C6A75E] font-extrabold' : 'text-slate-100 hover:text-[#E8DCC8]'
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Yellow Theme Login CTA Action Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onRequestAccess}
            className="flex items-center gap-2 px-6 py-2.5 text-xs font-black text-[#1F2A44] bg-gradient-to-r from-[#dbaf25] via-[#f5d76e] to-[#C6A75E] hover:from-[#c49a1d] hover:to-[#dbaf25] rounded-xl shadow-lg shadow-[#dbaf25]/25 border border-[#dbaf25] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <LogIn className="w-4 h-4 text-[#1F2A44]" />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-200 hover:text-white p-2 rounded-lg bg-[#141C2E]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141C2E] border-b border-[#C6A75E]/30 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-slate-200 hover:text-[#C6A75E] text-base font-semibold py-2 border-b border-slate-700/60"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                onRequestAccess();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-black text-[#1F2A44] bg-gradient-to-r from-[#dbaf25] via-[#f5d76e] to-[#C6A75E] rounded-xl shadow-lg border border-[#dbaf25]"
            >
              <LogIn className="w-4 h-4 text-[#1F2A44]" />
              <span>Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
