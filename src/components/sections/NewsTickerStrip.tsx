import React, { useState } from 'react';
import {
  Megaphone,
  Calendar,
  ChevronRight,
  Eye,
  Download,
  Bell
} from 'lucide-react';
import { Modal } from 'antd';

export type NoticeCategory = 'urgent' | 'tender' | 'circular' | 'event' | 'general';

export interface NoticeItem {
  id: number;
  title: string;
  description: string;
  category: NoticeCategory;
  date: string;
  isNew: boolean;
  department: string;
  downloads?: number;
  views: number;
}

export const NOTICES: NoticeItem[] = [
  {
    id: 1,
    title: 'Revised PMKKKY Guidelines 2026 — Immediate Implementation',
    description:
      'All District Collectors are directed to implement the revised PMKKKY guidelines effective from 15th August 2026. Prioritizing 60%+ funds for drinking water and healthcare.',
    category: 'urgent',
    date: '10 Aug 2026',
    isNew: true,
    department: 'Ministry of Mines',
    downloads: 1240,
    views: 8920,
  },
  {
    id: 2,
    title: 'Tender: Construction of District Health Centre — Phase II',
    description:
      'Sealed tenders invited for Phase II construction of 200-bed District Health Centre under DMF allocation in mining affected regions.',
    category: 'tender',
    date: '08 Aug 2026',
    isNew: true,
    department: 'Public Works Dept.',
    downloads: 562,
    views: 3400,
  },
  {
    id: 3,
    title: 'Circular: Quarterly Audit Compliance Deadline Extended',
    description:
      'Q2 FY2026 audit compliance deadline extended to 30th September 2026 for all 33 mining district trusts in Chhattisgarh.',
    category: 'circular',
    date: '05 Aug 2026',
    isNew: false,
    department: 'CAG Office',
    downloads: 890,
    views: 5210,
  },
  {
    id: 4,
    title: 'DMF Trust Annual Review & Stakeholder Conference 2026',
    description:
      'Annual Review Conference scheduled for 20th September 2026 at Vigyan Bhawan to evaluate project milestones.',
    category: 'event',
    date: '03 Aug 2026',
    isNew: false,
    department: 'DMF Secretariat',
    views: 6780,
  },
  {
    id: 5,
    title: 'New Environmental Clearance Protocol for Mining Concessions',
    description:
      'Updated environmental clearance protocols notified under the Environment Protection Act for contiguous mining Panchayats.',
    category: 'general',
    date: '28 Jul 2026',
    isNew: false,
    department: 'MoEF&CC',
    downloads: 2100,
    views: 11200,
  },
  {
    id: 6,
    title: 'Tender: Solar-Powered Smart Village Electrification Project',
    description:
      'RFP for decentralized solar micro-grids across 45 mining-affected villages in Bastar and Korba districts.',
    category: 'tender',
    date: '25 Jul 2026',
    isNew: false,
    department: 'Rural Electrification Wing',
    downloads: 740,
    views: 4500,
  },
];

const CATEGORY_BADGES: Record<NoticeCategory, { label: string; bg: string; text: string }> = {
  urgent: { label: 'URGENT', bg: 'bg-red-500', text: 'text-white' },
  tender: { label: 'TENDER', bg: 'bg-[#dbaf25]', text: 'text-[#103642]' },
  circular: { label: 'CIRCULAR', bg: 'bg-[#1998a1]', text: 'text-white' },
  event: { label: 'EVENT', bg: 'bg-purple-600', text: 'text-white' },
  general: { label: 'NOTICE', bg: 'bg-slate-600', text: 'text-white' },
};

export const NewsTickerStrip: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [allNoticesModalOpen, setAllNoticesModalOpen] = useState(false);

  // Repeat items for seamless continuous ticker loop
  const tickerItems = [...NOTICES, ...NOTICES];

  return (
    <>
      {/* ANIMATED GRADIENT NEWS TICKER STRIP */}
      <div className="relative z-30 w-full bg-gradient-to-r from-[#0B192C] via-[#103642] to-[#184c5d] text-white border-y border-[#1998a1]/30 shadow-md overflow-hidden select-none">

        <div className="flex items-center h-12 max-w-full px-2 sm:px-4">

          {/* PINNED LEFT BADGE */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#103642]/90 border border-[#1998a1]/40 shrink-0 z-10 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <Megaphone className="w-4 h-4 text-[#dbaf25] shrink-0" />
            <span className="text-xs font-black tracking-wider uppercase hidden sm:inline text-slate-100">
              OFFICIAL NOTICES & UPDATES
            </span>
            <span className="text-xs font-black tracking-wider uppercase sm:hidden text-slate-100">
              NOTICES
            </span>
          </div>

          {/* DIVIDER LINE */}
          <div className="h-6 w-px bg-slate-700/80 mx-2 shrink-0 z-10 hidden sm:block" />

          {/* CONTINUOUS HORIZONTAL SCROLLING MARQUEE TICKER */}
          <div className="flex-1 overflow-hidden relative group/ticker h-full flex items-center">
            <div className="animate-ticker flex items-center gap-6 sm:gap-10">
              {tickerItems.map((notice, index) => (
                <div
                  key={`${notice.id}-${index}`}
                  onClick={() => setSelectedNotice(notice)}
                  className="flex items-center gap-2.5 cursor-pointer whitespace-nowrap group/item transition-all hover:opacity-100 opacity-90"
                >
                  {/* Category Badge */}
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase shadow-sm ${CATEGORY_BADGES[notice.category].bg
                      } ${CATEGORY_BADGES[notice.category].text}`}
                  >
                    {CATEGORY_BADGES[notice.category].label}
                  </span>

                  {/* Notice Title */}
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover/item:text-[#dbaf25] group-hover/item:underline underline-offset-4 transition-colors">
                    {notice.title}
                  </span>

                  {/* Date Badge */}
                  <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    <Calendar className="w-3 h-3 text-[#1998a1]" />
                    <span>{notice.date}</span>
                  </span>

                  {/* Separator Dot */}
                  <span className="text-slate-600 font-bold ml-2">●</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE QUICK ACTION CONTROLS */}
          <div className="flex items-center gap-2 pl-2 shrink-0 z-10 bg-gradient-to-l from-[#184c5d] via-[#184c5d]/90 to-transparent">
            <button
              onClick={() => setAllNoticesModalOpen(true)}
              className="px-2.5 py-1 rounded-lg bg-[#1998a1]/20 hover:bg-[#1998a1] text-xs font-extrabold text-[#1998a1] hover:text-white border border-[#1998a1]/40 transition-all cursor-pointer flex items-center gap-1 shadow-sm"
              title="View All Notices"
            >
              <span>View All</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#dbaf25] text-[#103642] text-[10px] font-black">
                {NOTICES.length}
              </span>
            </button>
          </div>

        </div>

      </div>

      {/* SINGLE NOTICE DETAIL MODAL */}
      <Modal
        open={!!selectedNotice}
        onCancel={() => setSelectedNotice(null)}
        footer={null}
        centered
        width={600}
        className="notice-detail-modal"
      >
        {selectedNotice && (
          <div className="p-2 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <span
                className={`px-2.5 py-1 rounded text-xs font-black tracking-wider uppercase ${CATEGORY_BADGES[selectedNotice.category].bg
                  } ${CATEGORY_BADGES[selectedNotice.category].text}`}
              >
                {CATEGORY_BADGES[selectedNotice.category].label}
              </span>
              <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#1998a1]" />
                {selectedNotice.date}
              </span>
            </div>

            <h3 className="text-lg font-black text-[#103642] leading-snug">
              {selectedNotice.title}
            </h3>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
              {selectedNotice.description}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span className="font-bold text-[#184c5d]">
                Issuing Authority: {selectedNotice.department}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  {selectedNotice.views} views
                </span>
                {selectedNotice.downloads && (
                  <span className="flex items-center gap-1">
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    {selectedNotice.downloads} downloads
                  </span>
                )}
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setSelectedNotice(null)}
                className="px-4 py-2 rounded-xl bg-[#103642] text-white text-xs font-bold hover:bg-[#184c5d] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* ALL NOTICES LIST MODAL */}
      <Modal
        title={
          <div className="flex items-center gap-2 text-[#103642] font-black text-base">
            <Bell className="w-5 h-5 text-[#dbaf25]" />
            <span>Official Notices & Government Bulletins</span>
          </div>
        }
        open={allNoticesModalOpen}
        onCancel={() => setAllNoticesModalOpen(false)}
        footer={null}
        centered
        width={720}
      >
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1 py-2">
          {NOTICES.map((notice) => (
            <div
              key={notice.id}
              onClick={() => {
                setAllNoticesModalOpen(false);
                setSelectedNotice(notice);
              }}
              className="p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-[#1998a1] transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${CATEGORY_BADGES[notice.category].bg
                      } ${CATEGORY_BADGES[notice.category].text}`}
                  >
                    {CATEGORY_BADGES[notice.category].label}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{notice.department}</span>
                </div>
                <h4 className="text-sm font-bold text-[#103642] group-hover:text-[#1998a1] transition-colors">
                  {notice.title}
                </h4>
              </div>
              <div className="flex items-center gap-3 text-xs shrink-0">
                <span className="text-slate-400 font-semibold">{notice.date}</span>
                <ChevronRight className="w-4 h-4 text-[#1998a1] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default NewsTickerStrip;
