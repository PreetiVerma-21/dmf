import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookOpen,
  Layers,
  Sparkles,
  Landmark,
  ShieldCheck,
  Users,
  MapPin
} from 'lucide-react';

interface SinglePageContent {
  title: string;
  titleAccent?: string;
  badge?: string;
  sections: {
    bullet: string;
    content: string;
  }[];
}

interface BookPageSpread {
  pageNumber: number;
  leftPage: SinglePageContent;
  rightPage: SinglePageContent;
}

export const AboutUsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [targetPage, setTargetPage] = useState<number>(1);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  // DMF Statutory Book Pages Dataset
  const pages: BookPageSpread[] = [
    {
      pageNumber: 1,
      leftPage: {
        title: 'DMF',
        titleAccent: 'Introduction',
        badge: 'Statutory Trust Framework',
        sections: [
          {
            bullet: 'Statutory Trust -',
            content:
              'District Mineral Foundations (DMF) is a trust, instituted as non-profit body in all the districts of Chhattisgarh, to work for the interest and benefit of individuals and areas affected by mining & it’s related operations. It is financed through the funds contributed by miners.'
          },
          {
            bullet: 'Legal Status -',
            content:
              'They derive their legal status from section 9B of Mines and Minerals (Development and Regulation) Act, 2015. This amendment came into force from 12 January 2015.'
          }
        ]
      },
      rightPage: {
        title: 'Establishment',
        titleAccent: '& Objectives',
        badge: 'State Government Notification',
        sections: [
          {
            bullet: 'Trust Establishment -',
            content:
              'District Mineral Foundation Trust is established in all the 28 revenue districts by the State Government, by way of notifying the trust as a non- profit & perpetual body in the districts affected in the consequences of mining operations.'
          },
          {
            bullet: 'Core Objective -',
            content:
              'The objective of District Mineral Foundation is to work for the interest & benefit of the individuals & areas affected by mining related operations in such a manner as may be prescribed by the State Government.'
          }
        ]
      }
    },
    {
      pageNumber: 2,
      leftPage: {
        title: 'Composition',
        titleAccent: '& Functions',
        badge: 'Constitutional Guidelines',
        sections: [
          {
            bullet: 'Statutory Guidelines -',
            content:
              'Composition and Functions of the DMF is prescribed by the State Government’s undertaking guidelines from article 244 of Indian Constitution, fifth and sixth schedules, Provisions of the Panchayats (Extension to the Scheduled Areas) Act, 1996 and Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006.'
          },
          {
            bullet: 'Royalty Contributions -',
            content:
              'Funds that every mining lease holder will pay as a fraction of royalty, not exceeding one-third of the royalty, to DMF as per the rates prescribed by the Central Government. This fund will be used for welfare of the people influenced by the mining affected areas.'
          }
        ]
      },
      rightPage: {
        title: 'PMKKKY Scheme',
        titleAccent: 'Objectives',
        badge: 'National Welfare Directives',
        sections: [
          {
            bullet: 'Implementation -',
            content:
              'The Pradhan Mantri Khanij Kshetra Kalyan Yojana (PMKKKY) will be implemented by the DMF portal of the respective districts using the funds accruing to the DMF.'
          },
          {
            bullet: 'Development & Welfare -',
            content:
              'To implement various developmental and welfare projects/programs in mining affected areas, and these projects/programs will be complementing the existing ongoing schemes/projects of State and Central Government.'
          },
          {
            bullet: 'Impact Mitigation -',
            content:
              'To minimize/mitigate the adverse impacts, during and after mining, on the environment, health and socio-economics of people in mining districts.'
          },
          {
            bullet: 'Sustainable Livelihoods -',
            content:
              'To ensure long-term sustainable livelihoods for the affected people in mining areas.'
          }
        ]
      }
    }
  ];

  const totalPages = pages.length;

  const handlePageChange = (newPage: number, direction: 'next' | 'prev' = 'next') => {
    if (isFlipping || newPage === currentPage) return;
    setTargetPage(newPage);
    setFlipDirection(direction);
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage(newPage);
      setIsFlipping(false);
    }, 550);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1, 'next');
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1, 'prev');
    }
  };

  // Helper renderer for a single page surface (Left or Right)
  const renderPageContent = (
    content: SinglePageContent,
    side: 'left' | 'right',
    pageNum: number
  ) => (
    <div
      className={`w-full h-full p-6 sm:p-8 bg-gradient-to-${side === 'left' ? 'r' : 'l'
        } from-[#F8FAFC] via-[#FDFBF7] to-[#F1F5F9] relative flex flex-col justify-between select-none ${side === 'left' ? 'paper-stacked-left border-r border-slate-300/60' : 'paper-stacked-right'
        }`}
    >
      {/* Spine gradient shadow overlay */}
      <div
        className={`hidden md:block absolute ${side === 'left' ? 'right-0' : 'left-0'
          } top-0 bottom-0 w-6 bg-gradient-to-${side === 'left' ? 'l' : 'r'
          } from-slate-400/20 to-transparent pointer-events-none z-10`}
      />

      {/* Page Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/90 text-xs">
        <span className="font-extrabold text-[#184c5d] uppercase tracking-wider">
          {side === 'left' ? 'District Mineral Foundation Manual' : 'Operational Guidelines'}
        </span>
        {side === 'left' ? (
          <Bookmark className="w-4 h-4 text-[#dbaf25]" />
        ) : (
          <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#1998a1]/10 text-[#1998a1] border border-[#1998a1]/30 uppercase">
            Chapter {pageNum}
          </span>
        )}
      </div>

      {/* Main Page Content */}
      <div className="py-4 flex-1 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-4 text-[#103642]">
          <span>{content.title} </span>
          <span className="bg-gradient-to-r from-[#1998a1] via-[#184c5d] to-[#1998a1] bg-clip-text text-transparent">
            {content.titleAccent}
          </span>
        </h3>

        {content.badge && (
          <div className="mb-4 inline-block">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold border ${side === 'left'
                ? 'bg-[#1998a1]/10 text-[#1998a1] border-[#1998a1]/30'
                : 'bg-[#103642] text-[#dbaf25] border-[#103642]'
                }`}
            >
              {content.badge}
            </span>
          </div>
        )}

        <div className="space-y-4 sm:space-y-5">
          {content.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="text-sm sm:text-base font-extrabold text-[#184c5d] flex items-center gap-1.5">
                <span className="text-[#dbaf25] text-sm">◆</span>
                <span>{section.bullet}</span>
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium pl-4 text-justify">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-3 border-t border-slate-200/90 text-[11px] text-slate-500 font-bold flex justify-between items-center">
        <span>{side === 'left' ? 'DMF CHHATTISGARH' : `PAGE ${pageNum * 2}`}</span>
        <span>{side === 'left' ? `PAGE ${pageNum * 2 - 1}` : 'PMKKKY GUIDELINES'}</span>
      </div>
    </div>
  );

  // Generate 12 metallic spiral ring loops
  const spiralRings = Array.from({ length: 12 }, (_, i) => i);

  // Determine underlying pages and turning leaf content
  const activeLeft = pages[currentPage - 1].leftPage;
  const activeRight = pages[currentPage - 1].rightPage;

  const targetLeft = pages[targetPage - 1]?.leftPage || activeLeft;
  const targetRight = pages[targetPage - 1]?.rightPage || activeRight;

  return (
    <section
      id="about-us"
      className="relative py-8 sm:py-20 bg-[#feffec] overflow-hidden select-none border-y-2 border-[#15828a]/20 shadow-[inset_0_16px_20px_-8px_rgba(15,23,42,0.12),inset_0_-16px_20px_-8px_rgba(15,23,42,0.12)]"
      style={{
        background: 'linear-gradient(135deg, #feffec 0%, rgba(21, 130, 138, 0.08) 50%, #feffec 100%)',
        boxShadow: 'inset 0 16px 20px -8px rgba(15, 23, 42, 0.12), inset 0 -16px 20px -8px rgba(15, 23, 42, 0.12), 0 10px 25px -5px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Soft Light Dot Matrix Background Pattern */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#15828a40_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header Matching Project Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1998a1]/10 border border-[#1998a1]/30 text-[#1998a1] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#dbaf25]" />
              <span>ABOUT DISTRICT MINERAL FOUNDATION (DMF)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="text-[#103642]">Empowering Mining Affected </span>
              <span className="bg-gradient-to-r from-[#1998a1] via-[#184c5d] to-[#1998a1] bg-clip-text text-transparent">
                Communities & Region
              </span>
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl font-medium">
              Explore the official DMF statutory manual, MMDR Act 2015 regulations, PMKKKY guidelines, and fund allocation blueprint in an interactive 3D notebook.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#103642] bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
            <Landmark className="w-4 h-4 text-[#dbaf25]" />
            <span>MMDR Act 2015 Framework</span>
          </div>
        </div>

        {/* Main Section Grid Layout: 3/4 Notebook Spread + 1/4 Key Features Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

          {/* LEFT 3/4 COLUMN: REALISTIC 3D SPIRAL NOTEBOOK WITH FLIP ANIMATION */}
          <div className="lg:col-span-3 flex flex-col justify-between relative">

            {/* 3D Notebook Frame Wrapper */}
            <div className="relative book-perspective w-full rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-[#103642]/10 via-slate-200/40 to-slate-300/60 shadow-2xl real-book-shadow">

              {/* Top Navigation Toolbar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md rounded-t-2xl border-b border-slate-200 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#103642] text-[#dbaf25] flex items-center justify-center shadow-md">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#103642] tracking-tight">
                      Official DMF Project Blueprint & Manual
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold hidden sm:block">
                      Interactive 3D Spiral Notebook • PMKKKY Statutory Directives
                    </p>
                  </div>
                </div>

                {/* Page Controls & Counter */}
                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1 || isFlipping}
                    className="px-3 py-1.5 rounded-lg bg-white text-[#103642] border border-slate-300 hover:bg-[#1998a1] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm text-xs font-bold flex items-center gap-1"
                    title="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  <div className="px-3 text-xs font-black text-[#103642] min-w-[95px] text-center">
                    Page <span className="text-[#1998a1] text-sm">{isFlipping ? targetPage : currentPage}</span> of {totalPages}
                  </div>

                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages || isFlipping}
                    className="px-3 py-1.5 rounded-lg bg-[#103642] text-white border border-[#103642] hover:bg-[#184c5d] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm text-xs font-bold flex items-center gap-1"
                    title="Next Page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4 text-[#dbaf25]" />
                  </button>
                </div>
              </div>

              {/* OPEN BOOK 2-PAGE SPREAD CONTAINER */}
              <div className="relative min-h-[520px] w-full bg-[#FDFBF7] rounded-b-2xl overflow-hidden border border-slate-200/80 shadow-inner flex flex-col md:flex-row book-transform-3d">

                {/* CENTER METALLIC SPIRAL WIRE BINDING LOOPS */}
                <div className="hidden md:flex flex-col justify-between absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-8 z-50 pointer-events-none">
                  {spiralRings.map((ringIdx) => (
                    <div key={ringIdx} className="relative flex items-center justify-center w-full h-4">
                      {/* Left punched hole */}
                      <div className="absolute left-0 w-2.5 h-2.5 rounded-full paper-hole-punched" />
                      {/* 3D Metallic Ring Loop */}
                      <div className="w-8 h-3.5 rounded-full spiral-ring-metallic transform -rotate-6 z-50 shadow-md" />
                      {/* Right punched hole */}
                      <div className="absolute right-0 w-2.5 h-2.5 rounded-full paper-hole-punched" />
                    </div>
                  ))}
                </div>

                {/* STATIC UNDERNEATH LEFT PAGE */}
                <div className="w-full md:w-1/2 min-h-[520px] relative">
                  {renderPageContent(
                    isFlipping && flipDirection === 'prev' ? targetLeft : activeLeft,
                    'left',
                    isFlipping && flipDirection === 'prev' ? targetPage : currentPage
                  )}
                </div>

                {/* STATIC UNDERNEATH RIGHT PAGE */}
                <div className="w-full md:w-1/2 min-h-[520px] relative">
                  {renderPageContent(
                    isFlipping && flipDirection === 'next' ? targetRight : activeRight,
                    'right',
                    isFlipping && flipDirection === 'next' ? targetPage : currentPage
                  )}

                  {/* Corner Curl Overlay Hint on Static Right Page */}
                  {!isFlipping && currentPage < totalPages && (
                    <button
                      onClick={nextPage}
                      className="absolute top-0 right-0 w-12 h-12 cursor-pointer z-40 group/curl opacity-75 hover:opacity-100 transition-all"
                      title="Turn to Next Page"
                    >
                      <div className="w-full h-full bg-gradient-to-bl from-amber-200/80 via-slate-200/90 to-transparent shadow-md transform rotate-45 translate-x-4 -translate-y-4 group-hover/curl:scale-125 transition-transform" />
                    </button>
                  )}
                </div>

                {/* DUAL-SIDED 3D TURNING LEAF OVERLAY (ACTIVE DURING FLIP) */}
                {isFlipping && (
                  <div
                    className={`hidden md:block absolute top-0 bottom-0 ${flipDirection === 'next' ? 'right-0 w-1/2 turning-leaf-next' : 'left-0 w-1/2 turning-leaf-prev'
                      }`}
                  >
                    {/* FRONT FACE OF LEAF (CURRENT CONTENT) */}
                    <div className="absolute inset-0 paper-backface-hidden z-20">
                      {renderPageContent(
                        flipDirection === 'next' ? activeRight : activeLeft,
                        flipDirection === 'next' ? 'right' : 'left',
                        currentPage
                      )}
                      {/* Moving light sheen */}
                      <div
                        className={`absolute inset-0 pointer-events-none z-30 ${flipDirection === 'next' ? 'paper-sheen-next' : 'paper-sheen-prev'
                          }`}
                      />
                    </div>

                    {/* BACK FACE OF LEAF (INCOMING CONTENT REVERSED 180 DEG) */}
                    <div className="absolute inset-0 paper-backface-hidden z-10 [transform:rotateY(180deg)]">
                      {renderPageContent(
                        flipDirection === 'next' ? targetLeft : targetRight,
                        flipDirection === 'next' ? 'left' : 'right',
                        targetPage
                      )}
                      {/* Moving light sheen */}
                      <div
                        className={`absolute inset-0 pointer-events-none z-30 ${flipDirection === 'next' ? 'paper-sheen-next' : 'paper-sheen-prev'
                          }`}
                      />
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Bottom Book Page Selection Tabs */}
            <div className="mt-4 pt-2 flex items-center justify-between gap-2 overflow-x-auto text-xs font-bold">
              {[
                { num: 1, label: '1. DMF Mandate & Objectives' },
                { num: 2, label: '2. Composition & PMKKKY' }
              ].map((tab) => (
                <button
                  key={tab.num}
                  onClick={() => handlePageChange(tab.num, tab.num > (isFlipping ? targetPage : currentPage) ? 'next' : 'prev')}
                  disabled={isFlipping}
                  className={`px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${(isFlipping ? targetPage : currentPage) === tab.num
                    ? 'bg-[#103642] text-white shadow-md font-extrabold'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  <Layers className="w-3.5 h-3.5 text-[#dbaf25]" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT 1/4 COLUMN: 4 THEME FEATURE CARDS (MATCHING DMF COLOR PALETTE) */}
          <div className="lg:col-span-1 flex flex-col gap-4">

            {/* CARD 1: Statutory Mandate */}
            <div className="bg-[#103642] text-white border border-[#1998a1]/30 rounded-3xl p-5 shadow-xl flex flex-col justify-between group hover:border-[#dbaf25] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#dbaf25] text-[#103642] uppercase tracking-wide">
                  Statutory Mandate
                </span>
                <Landmark className="w-4 h-4 text-[#dbaf25]" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white tracking-tight mb-1">
                  MMDR Act 2015 Trust
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
                  Established under Section 9B as a non-profit trust in all 28 revenue districts of Chhattisgarh.
                </p>
              </div>
            </div>

            {/* CARD 2: Core Objectives (Lighter Soft Yellow BG) */}
            <div className="bg-[#FFF8E7] text-[#103642] border border-[#dbaf25]/60 rounded-3xl p-5 shadow-xl shadow-amber-200/40 flex flex-col justify-between group hover:border-[#dbaf25] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#dbaf25] text-[#103642] uppercase tracking-wide">
                  Welfare First
                </span>
                <ShieldCheck className="w-4 h-4 text-[#d97706]" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#103642] tracking-tight mb-1">
                  Targeted Objectives
                </h4>
                <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                  Working for the interest and benefit of mining affected individuals and regions.
                </p>
              </div>
            </div>

            {/* CARD 3: Composition Guidelines */}
            <div className="bg-[#184c5d] text-white border border-[#dbaf25]/30 rounded-3xl p-5 shadow-xl flex flex-col justify-between group hover:border-[#dbaf25] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#dbaf25] text-[#103642] uppercase tracking-wide">
                  Statutory Rules
                </span>
                <Users className="w-4 h-4 text-[#dbaf25]" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white tracking-tight mb-1">
                  Structured Framework
                </h4>
                <p className="text-[11px] text-slate-200 leading-relaxed font-medium">
                  Composed via PESA 1996, Art 244 of Indian Constitution, and Forest Rights Act 2006.
                </p>
              </div>
            </div>

            {/* CARD 4: PMKKKY Objectives (Lighter Soft Yellow BG) */}
            <div className="bg-[#FFF8E7] text-[#103642] border border-[#dbaf25]/60 rounded-3xl p-5 shadow-xl shadow-amber-200/40 flex flex-col justify-between group hover:border-[#dbaf25] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#dbaf25] text-[#103642] uppercase tracking-wide">
                  PMKKKY Portal
                </span>
                <MapPin className="w-4 h-4 text-[#d97706]" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#103642] tracking-tight mb-1">
                  Sustainable Welfare
                </h4>
                <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                  Mitigating adverse impacts and ensuring long-term sustainable livelihoods for affected communities.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
