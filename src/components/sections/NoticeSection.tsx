import React, { useState, useEffect, useCallback } from 'react';
import {
  Bell,
  AlertTriangle,
  FileText,
  Calendar,
  Clock,
  ChevronRight,
  ArrowRight,
  Megaphone,
  Shield,
  Download,
  Eye,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Notice data ─── */

type NoticeCategory = 'urgent' | 'tender' | 'circular' | 'event' | 'general';

interface Notice {
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

const NOTICES: Notice[] = [
  {
    id: 1,
    title: 'Revised PMKKKY Guidelines 2026 — Immediate Implementation',
    description:
      'All District Collectors are directed to implement the revised PMKKKY guidelines effective from 15th August 2026.',
    category: 'urgent',
    date: '2026-08-10',
    isNew: true,
    department: 'Ministry of Mines',
    downloads: 1240,
    views: 8920,
  },
  {
    id: 2,
    title: 'Tender: Construction of District Health Centre — Phase II',
    description:
      'Sealed tenders invited for Phase II construction of 200-bed District Health Centre under DMF allocation.',
    category: 'tender',
    date: '2026-08-08',
    isNew: true,
    department: 'Public Works Dept.',
    downloads: 562,
    views: 3400,
  },
  {
    id: 3,
    title: 'Circular: Quarterly Audit Compliance Deadline Extended',
    description:
      'Q2 FY2026 audit compliance deadline extended to 30th September 2026 for all mining districts.',
    category: 'circular',
    date: '2026-08-05',
    isNew: false,
    department: 'CAG Office',
    downloads: 890,
    views: 5210,
  },
  {
    id: 4,
    title: 'DMF Trust Annual Review & Stakeholder Meet — 2026',
    description:
      'Annual Review Conference on 20th September 2026 at Vigyan Bhawan, New Delhi.',
    category: 'event',
    date: '2026-08-03',
    isNew: false,
    department: 'DMF Secretariat',
    views: 6780,
  },
  {
    id: 5,
    title: 'New Environmental Clearance Protocol for Mining Zones',
    description:
      'Updated environmental clearance protocols notified under the Environment Protection Act.',
    category: 'general',
    date: '2026-07-28',
    isNew: false,
    department: 'MoEF&CC',
    downloads: 2100,
    views: 11200,
  },
  {
    id: 6,
    title: 'Tender: Solar-Powered Smart Village Electrification Project',
    description:
      'RFP for decentralized solar micro-grids across 45 mining-affected villages.',
    category: 'tender',
    date: '2026-07-25',
    isNew: false,
    department: 'Rural Electrification Wing',
    downloads: 740,
    views: 4500,
  },
];

const CATEGORY_META: Record<
  NoticeCategory,
  { label: string; icon: React.ReactNode; color: string; bg: string; border: string }
> = {
  urgent: {
    label: 'Urgent',
    icon: <AlertTriangle className="w-3.5 h-3.5" />,
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
  },
  tender: {
    label: 'Tender',
    icon: <FileText className="w-3.5 h-3.5" />,
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
  },
  circular: {
    label: 'Circular',
    icon: <Shield className="w-3.5 h-3.5" />,
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
  },
  event: {
    label: 'Event',
    icon: <Calendar className="w-3.5 h-3.5" />,
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
  general: {
    label: 'General',
    icon: <Megaphone className="w-3.5 h-3.5" />,
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#99F6E4',
  },
};

const ALL_CATEGORIES: NoticeCategory[] = ['urgent', 'tender', 'circular', 'event', 'general'];

/* ─── Countdown hook ─── */

function useCountdown(targetDateStr: string) {
  const calc = useCallback(() => {
    const target = new Date(targetDateStr).getTime();
    const now = Date.now();
    const diff = Math.max(target - now, 0);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDateStr]);

  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);

  return time;
}

/* ─── Sub-components ─── */

/** Pulsing live dot */
const LiveDot: React.FC = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
  </span>
);

/** Auto-rotating progress bar */
const AutoProgressBar: React.FC<{ duration: number; paused: boolean }> = ({
  duration,
  paused,
}) => (
  <div className="w-full h-[2px] bg-slate-200 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-[#00796B] to-[#2DD4BF] rounded-full"
      initial={{ width: '0%' }}
      animate={{ width: paused ? undefined : '100%' }}
      transition={{
        duration,
        ease: 'linear',
        repeat: Infinity,
      }}
      key={paused ? 'paused' : 'playing'}
    />
  </div>
);

/* ─── Main Section ─── */

export const NoticeSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | NoticeCategory>('all');
  const [highlightIdx, setHighlightIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const countdown = useCountdown('2026-09-20T10:00:00');

  const ROTATE_INTERVAL = 5;
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % NOTICES.length);
    }, ROTATE_INTERVAL * 1000);
    return () => clearInterval(id);
  }, [isPaused]);

  const filteredNotices =
    activeFilter === 'all'
      ? NOTICES
      : NOTICES.filter((n) => n.category === activeFilter);

  const highlightedNotice = NOTICES[highlightIdx];
  const highlightMeta = CATEGORY_META[highlightedNotice.category];

  return (
    <section
      id="notices"
      className="relative py-14 overflow-hidden"
      style={{
        backgroundColor: '#F4F6F9',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(25,152,161,0.06) 0%, transparent 50%),
          radial-gradient(rgba(25,152,161,0.08) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '100% 100%, 28px 28px',
        boxShadow: '0 12px 30px -5px rgba(0,0,0,0.12), 0 4px 10px -2px rgba(25,152,161,0.08)',
      }}
    >
      {/* Soft top / bottom edge gradients */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* ═══ Compact Header ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1998a1]/10 border border-[#1998a1]/20 rounded-full text-[#1998a1] text-[11px] font-extrabold uppercase tracking-widest mb-3">
              <Bell className="w-3 h-3" />
              <span>Notices & Announcements</span>
              <LiveDot />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#184c5d] tracking-tight">
              Latest Official{' '}
              <span className="text-[#1998a1]">Notifications</span>
            </h2>
          </div>

          {/* Category Filter Pills — inline with header */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-[#1998a1] text-white shadow-md shadow-[#1998a1]/25'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-[#1998a1]/40 hover:text-[#1998a1]'
              }`}
            >
              All
            </button>
            {ALL_CATEGORIES.map((cat) => {
              const meta = CATEGORY_META[cat];
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'bg-white text-slate-500 border border-slate-200 hover:border-[#00796B]/40 hover:text-[#00796B]'
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: meta.color, boxShadow: `0 4px 12px ${meta.bg}` }
                      : undefined
                  }
                >
                  {meta.icon}
                  {meta.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ═══ Main Content: 2-col layout ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left: Featured Notice + Countdown (stacked) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Featured Auto-Rotating Notice */}
            <div
              className="relative bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex-1"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Decorative corner accent */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#dbaf25]/10 rounded-full blur-xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <Megaphone className="w-3.5 h-3.5 text-[#dbaf25]" />
                    <span className="text-[10px] font-extrabold text-[#dbaf25] uppercase tracking-widest">
                      Featured
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {NOTICES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setHighlightIdx(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === highlightIdx
                            ? 'bg-[#1998a1] w-4'
                            : 'bg-slate-200 w-1.5 hover:bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={highlightedNotice.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2"
                      style={{
                        color: highlightMeta.color,
                        backgroundColor: highlightMeta.bg,
                        border: `1px solid ${highlightMeta.border}`,
                      }}
                    >
                      {highlightMeta.icon}
                      {highlightMeta.label}
                      {highlightedNotice.isNew && (
                        <span className="ml-1 text-[9px] bg-[#dbaf25] text-[#184c5d] font-black px-1.5 rounded uppercase">
                          NEW
                        </span>
                      )}
                    </span>

                    <h3 className="text-sm font-bold text-slate-800 leading-snug mb-1.5">
                      {highlightedNotice.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
                      {highlightedNotice.description}
                    </p>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">
                        {highlightedNotice.department} ·{' '}
                        {new Date(highlightedNotice.date).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                        })}
                      </span>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 font-bold text-[#00796B] hover:text-[#004D40] transition-colors"
                      >
                        Read More
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-3">
                  <AutoProgressBar duration={ROTATE_INTERVAL} paused={isPaused} />
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="relative bg-gradient-to-br from-[#00796B] to-[#004D40] rounded-2xl p-5 text-white overflow-hidden shadow-md shadow-[#00796B]/15">
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-white/10 rounded-full" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-2 border-white/15 rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-1.5 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span className="text-[10px] font-bold text-[#2DD4BF] uppercase tracking-widest">
                    Next Deadline
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white/90 leading-snug mb-3">
                  Annual Review & Stakeholder Meet · 20 Sep 2026
                </h4>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { value: countdown.days, label: 'Days' },
                    { value: countdown.hours, label: 'Hrs' },
                    { value: countdown.minutes, label: 'Min' },
                    { value: countdown.seconds, label: 'Sec' },
                  ].map((unit, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg py-2 text-center"
                    >
                      <div className="text-lg font-black tabular-nums leading-none">
                        {String(unit.value).padStart(2, '0')}
                      </div>
                      <div className="text-[9px] text-white/60 font-semibold uppercase tracking-wider mt-1">
                        {unit.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Notice List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <AnimatePresence mode="popLayout">
              {filteredNotices.map((notice, idx) => {
                const meta = CATEGORY_META[notice.category];
                return (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-4 bg-white border border-slate-200/80 rounded-xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-[#00796B]/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Category icon circle */}
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: meta.bg,
                        color: meta.color,
                        border: `1px solid ${meta.border}`,
                      }}
                    >
                      {meta.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-[13px] font-bold text-slate-800 leading-snug truncate group-hover:text-[#00796B] transition-colors">
                          {notice.title}
                        </h4>
                        {notice.isNew && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[9px] font-extrabold uppercase border border-emerald-200">
                            New
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                        <span>{notice.department}</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          {new Date(notice.date).toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: 'short',
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Eye className="w-2.5 h-2.5" />
                          {notice.views.toLocaleString()}
                        </span>
                        {notice.downloads !== undefined && (
                          <span className="inline-flex items-center gap-1">
                            <Download className="w-2.5 h-2.5" />
                            {notice.downloads.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#00796B] flex-shrink-0 mt-1.5 translate-x-0 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-2.5 bg-[#00796B] text-white text-xs font-bold rounded-full shadow-md shadow-[#00796B]/20 hover:shadow-lg hover:shadow-[#00796B]/30 hover:bg-[#00695C] hover:scale-[1.03] transition-all duration-300"
          >
            View All Notices
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
