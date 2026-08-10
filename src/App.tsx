import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { customTheme } from './theme/antdTheme';

import { TopHeader } from './components/layout/TopHeader';
import { MainNavbar } from './components/layout/MainNavbar';
import { HeroSection } from './components/sections/HeroSection';
import { DepartmentServices } from './components/sections/DepartmentServices';
import type { DepartmentItem } from './components/sections/DepartmentServices';
import { AboutPortalSection } from './components/sections/AboutPortalSection';
import { StatsBanner } from './components/sections/StatsBanner';
import { NoticeSection } from './components/sections/NoticeSection';
import { PrioritySectorsSection } from './components/sections/PrioritySectorsSection';
import { VarietyServicesSection } from './components/sections/VarietyServicesSection';
import type { ServiceCardData } from './components/sections/VarietyServicesSection';
import { Footer } from './components/layout/Footer';

import { RequestAccessModal } from './components/modals/RequestAccessModal';
import { DepartmentDetailModal } from './components/modals/DepartmentDetailModal';

export const App: React.FC = () => {
  const [requestAccessOpen, setRequestAccessOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<DepartmentItem | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  return (
    <ConfigProvider theme={customTheme}>
      <div className="min-h-screen bg-[#F4F6F9] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-[#00796B] selection:text-white">
        
        {/* Top Header Contact Bar */}
        <TopHeader />

        {/* Sticky Navigation Bar */}
        <MainNavbar 
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onRequestAccess={() => setRequestAccessOpen(true)}
        />

        <main>
          {/* Hero Section with 100% Secure Floating Badge */}
          <HeroSection 
            onLearnMore={() => scrollToSection('services')}
          />

          {/* Core Government Departments Cards */}
          <DepartmentServices 
            onSelectDepartment={(dept) => setSelectedDept(dept)}
          />

          {/* About Portal Section with Checkmarks & 20 Years Badge */}
          <AboutPortalSection 
            onContactUs={() => setRequestAccessOpen(true)}
          />

          {/* Stats Metrics Banner */}
          <StatsBanner />

          {/* Official Notices & Announcements */}
          <NoticeSection />

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
          onRequestAccess={() => setRequestAccessOpen(true)}
        />

      </div>
    </ConfigProvider>
  );
};

export default App;
