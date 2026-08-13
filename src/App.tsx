import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { customTheme } from './theme/antdTheme';
import { HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { TopHeader } from './components/layout/TopHeader';
import { MainNavbar } from './components/layout/MainNavbar';
import { HeroSection } from './components/sections/HeroSection';
import { ChhattisgarhMapSection } from './components/sections/ChhattisgarhMapSection';
import { AboutUsSection } from './components/sections/AboutUsSection';
import { DepartmentServices } from './components/sections/DepartmentServices';
import type { DepartmentItem } from './components/sections/DepartmentServices';
import { AboutPortalSection } from './components/sections/AboutPortalSection';
import { StatsBanner } from './components/sections/StatsBanner';
import { CommunityVectorBanner } from './components/sections/CommunityVectorBanner';
import { NewsTickerStrip } from './components/sections/NewsTickerStrip';
import { PrioritySectorsSection } from './components/sections/PrioritySectorsSection';
import { VarietyServicesSection } from './components/sections/VarietyServicesSection';
import type { ServiceCardData } from './components/sections/VarietyServicesSection';
import { Footer } from './components/layout/Footer';

import { RequestAccessModal } from './components/modals/RequestAccessModal';
import { DepartmentDetailModal } from './components/modals/DepartmentDetailModal';
import { LoginPage } from './components/pages/LoginPage';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'login'>('home');
  const [requestAccessOpen, setRequestAccessOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<DepartmentItem | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isHelpHovered, setIsHelpHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
    }
    setActiveSection(sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectService = (service: ServiceCardData) => {
    setSelectedDept({
      id: service.id,
      title: service.title,
      icon: service.icon,
      description: service.description,
      servicesCount: 18,
    });
  };

  if (currentView === 'login') {
    return (
      <ConfigProvider theme={customTheme}>
        <LoginPage onBackToHome={() => setCurrentView('home')} />
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider theme={customTheme}>
      <div className="min-h-screen bg-[#F4F6F9] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-[#00796B] selection:text-white">
        
        {/* Top Header Contact Bar */}
        <TopHeader />

        {/* Sticky Navigation Bar */}
        <MainNavbar 
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onRequestAccess={() => setCurrentView('login')}
        />

        {/* Animated Gradient Live News & Notices Ticker Strip */}
        <NewsTickerStrip />

        <main>
          {/* Hero Section with 100% Secure Floating Badge */}
          <HeroSection 
            onLearnMore={() => scrollToSection('services')}
          />

          {/* Chhattisgarh Interactive District Highmap & Pie Analytics */}
          <ChhattisgarhMapSection />

          {/* About Us Section with 3/4 Interactive Flip Book & 1/4 Theme Cards */}
          <AboutUsSection />

          {/* Core Government Departments Cards */}
          <DepartmentServices 
            onSelectDepartment={(dept) => setSelectedDept(dept)}
          />

          {/* About Portal Section with Checkmarks & 20 Years Badge */}
          <AboutPortalSection 
            onContactUs={() => setCurrentView('login')}
          />

          {/* Community Vector Banner — ON TOP of StatsBanner, using banner bg color #103642 */}
          <div className="w-full -mb-[35px] relative z-0">
            <CommunityVectorBanner color="#103642" cutoutColor="#F4F6F9" height={85} />
          </div>

          {/* Stats Metrics Banner */}
          <StatsBanner />

          {/* PMKKKY Priority Sectors & Fund Allocation */}
          <PrioritySectorsSection />

          {/* Wide Variety of Government Services Cards */}
          <VarietyServicesSection 
            onSelectService={handleSelectService}
          />
        </main>

        {/* Footer Section */}
        <Footer />

        {/* Modals */}
        <RequestAccessModal 
          open={requestAccessOpen}
          onClose={() => setRequestAccessOpen(false)}
        />

        <DepartmentDetailModal 
          department={selectedDept}
          onClose={() => setSelectedDept(null)}
          onRequestAccess={() => {
            setSelectedDept(null);
            setCurrentView('login');
          }}
        />

        {/* Floating Action Help Button */}
        <motion.button
          className="fixed bottom-6 right-6 z-50 flex items-center bg-[#15828a] hover:bg-[#103642] text-white rounded-full p-3.5 shadow-lg shadow-[#15828a]/20 border border-[#1998a1]/30 transition-colors cursor-pointer select-none"
          onHoverStart={() => setIsHelpHovered(true)}
          onHoverEnd={() => setIsHelpHovered(false)}
          onClick={() => alert('Support helpline: +91-771-2510123. Email: support.dmf@cg.gov.in')}
          layout
          style={{ borderRadius: 30 }}
        >
          <HelpCircle className="w-5.5 h-5.5 shrink-0" />
          <AnimatePresence>
            {isHelpHovered && (
              <motion.span
                initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                animate={{ opacity: 1, width: 'auto', marginLeft: 8 }}
                exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs font-black tracking-wide whitespace-nowrap pr-1.5"
              >
                Help & Support
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

      </div>
    </ConfigProvider>
  );
};

export default App;
