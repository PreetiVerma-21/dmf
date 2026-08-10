import React from "react";
import { Mail, MapPin, PhoneCall, Pickaxe, ArrowUpRight } from "lucide-react";

/* ─────────────── SVG sub-components ─────────────── */

/** Distant mountain range — broad majestic peaks with gentle ridgelines */
const MountainsBack: React.FC = () => (
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 400"
    preserveAspectRatio="none"
    style={{ height: "90%" }}
  ></svg>
);

/** Mid-distance mountain range — sharper dramatic summits with defined ridges */
const MountainsMid: React.FC = () => (
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 400"
    preserveAspectRatio="none"
    style={{ height: "80%" }}
  ></svg>
);

/** Closest mountain range — bold rugged formations with steep faces */
const MountainsFront: React.FC = () => (
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 400"
    preserveAspectRatio="none"
    style={{ height: "70%" }}
  ></svg>
);

/** Individual pine/fir tree silhouette */
const PineTree: React.FC<{ x: number; height: number; scale?: number }> = ({
  x,
  height,
  scale = 1,
}) => {
  const w = 18 * scale;
  const h = height * scale;
  const trunk = 4 * scale;
  return (
    <g transform={`translate(${x}, 0)`}>
      {/* trunk */}
      <rect
        x={-trunk / 2}
        y={-h * 0.15}
        width={trunk}
        height={h * 0.2}
        fill="currentColor"
      />
      {/* tier 1 - bottom */}
      <polygon
        points={`0,${-h} ${w},${-h * 0.25} ${-w},${-h * 0.25}`}
        fill="currentColor"
      />
      {/* tier 2 - middle */}
      <polygon
        points={`0,${-h - h * 0.08} ${w * 0.78},${-h * 0.48} ${-w * 0.78},${-h * 0.48}`}
        fill="currentColor"
      />
      {/* tier 3 - top */}
      <polygon
        points={`0,${-h - h * 0.15} ${w * 0.55},${-h * 0.68} ${-w * 0.55},${-h * 0.68}`}
        fill="currentColor"
      />
    </g>
  );
};

/** Dense tree-line row — generates many trees in a horizontal band with ticker animation */
const TreeLine: React.FC<{
  y: number;
  color: string;
  count: number;
  minH: number;
  maxH: number;
  minScale?: number;
  maxScale?: number;
  /** Animation duration in seconds — higher = slower */
  speed?: number;
}> = ({ y, color, count, minH, maxH, minScale = 0.7, maxScale = 1.2, speed = 60 }) => {
  // Generate one full strip of trees across 1440 units
  const makeTrees = (keyOffset: number) =>
    Array.from({ length: count }, (_, i) => {
      const seed = (i * 7 + 3) % count;
      const x = (i / count) * 1440 + ((seed * 13) % 30) - 15;
      const h = minH + ((seed * 17) % (maxH - minH));
      const s = minScale + (((seed * 11) % 10) / 10) * (maxScale - minScale);
      return <PineTree key={keyOffset + i} x={x} height={h} scale={s} />;
    });

  // Unique animation name per layer to avoid conflicts
  const animName = `treeTicker_${speed}`;

  return (
    <>
      {/* Inject keyframes for this ticker speed */}
      <style>{`
        @keyframes ${animName} {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '200%',
          height: '55%',
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {/* First strip */}
        <svg
          className="absolute top-0 left-0 pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '50%', height: '100%', color }}
        >
          <g transform={`translate(0, ${y})`}>{makeTrees(0)}</g>
        </svg>
        {/* Duplicate strip for seamless loop */}
        <svg
          className="absolute top-0 pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ left: '50%', width: '50%', height: '100%', color }}
        >
          <g transform={`translate(0, ${y})`}>{makeTrees(count)}</g>
        </svg>
      </div>
    </>
  );
};

/** Central mining/fire watchtower SVG silhouette */
const Watchtower: React.FC = () => (
  <svg
    className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
    viewBox="0 0 120 280"
    style={{ height: "72%", width: "auto" }}
    fill="#0a2622"
  >
    {/* Tower legs — 4 angled structural beams */}
    <polygon points="35,280 40,90 44,280" />
    <polygon points="85,280 80,90 76,280" />

    {/* Cross-bracing lattice */}
    <rect x="42" y="120" width="36" height="3" rx="1" />
    <rect x="43" y="155" width="34" height="3" rx="1" />
    <rect x="44" y="190" width="32" height="3" rx="1" />
    <rect x="45" y="225" width="30" height="3" rx="1" />
    <rect x="46" y="255" width="28" height="2" rx="1" />
    {/* Diagonal braces */}
    <line x1="42" y1="120" x2="76" y2="155" stroke="#0a2622" strokeWidth="2" />
    <line x1="78" y1="120" x2="44" y2="155" stroke="#0a2622" strokeWidth="2" />
    <line x1="43" y1="155" x2="75" y2="190" stroke="#0a2622" strokeWidth="2" />
    <line x1="77" y1="155" x2="45" y2="190" stroke="#0a2622" strokeWidth="2" />
    <line x1="44" y1="190" x2="74" y2="225" stroke="#0a2622" strokeWidth="2" />
    <line x1="76" y1="190" x2="46" y2="225" stroke="#0a2622" strokeWidth="2" />

    {/* Cabin/observation deck platform */}
    <rect x="28" y="82" width="64" height="6" rx="1" />
    {/* Cabin walls */}
    <rect x="33" y="52" width="54" height="30" rx="2" />
    {/* Cabin window */}
    <rect x="40" y="58" width="40" height="18" rx="1" fill="#1e4a47" />
    {/* Roof */}
    <polygon points="60,38 25,52 95,52" />
    {/* Roof top ridge */}
    <rect x="56" y="34" width="8" height="6" rx="1" />
    {/* Antenna */}
    <rect x="59" y="18" width="2" height="18" />
    <rect x="55" y="18" width="10" height="2" rx="1" />
    {/* Railing posts */}
    <rect x="30" y="74" width="2" height="10" />
    <rect x="88" y="74" width="2" height="10" />
  </svg>
);

/* ─────────────── Footer component ─────────────── */

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#0a1a1a] text-white overflow-hidden"
    >
      {/* ═══════ Landscape Illustration Area ═══════ */}
      <div className="relative w-full h-[280px] sm:h-[340px]">
        {/* Sky gradient (matches the teal misty reference sky) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6f9] via-[#bafff9] to-[#0f2e2b]" />

        {/* Subtle horizon haze — no clouds, just a thin atmospheric band */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(60,130,120,0.12) 35%, rgba(60,130,120,0.06) 50%, transparent 65%)",
          }}
        />

        {/* Mountain layers — back to front */}
        <MountainsBack />
        <MountainsMid />
        <MountainsFront />

        {/* Tree layers — back (lighter) to front (darkest) */}
        <TreeLine
          y={285}
          color="#1a4a44"
          count={55}
          minH={30}
          maxH={60}
          minScale={0.5}
          maxScale={0.9}
          speed={90}
        />
        <TreeLine
          y={300}
          color="#134038"
          count={65}
          minH={35}
          maxH={70}
          minScale={0.6}
          maxScale={1.0}
          speed={70}
        />
        <TreeLine
          y={310}
          color="#0d302b"
          count={50}
          minH={45}
          maxH={85}
          minScale={0.8}
          maxScale={1.3}
          speed={50}
        />
        <TreeLine
          y={318}
          color="#081f1c"
          count={70}
          minH={40}
          maxH={90}
          minScale={0.9}
          maxScale={1.4}
          speed={40}
        />

        {/* Central watchtower */}
        <Watchtower />

        {/* Bottom fade into footer background */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a1a1a] to-transparent pointer-events-none" />
      </div>

      {/* ═══════ Link Columns & Contact Area ═══════ */}
      <div className="container-custom relative z-20 pb-6 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 text-slate-300">
          {/* Column 1: Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Links
            </h4>
            <div className="h-[1.5px] w-10 bg-[#2DD4BF]/60" />
            <ul className="space-y-2 text-xs">
              {[
                "Healthcare & Nutrition",
                "Education & Skill Labs",
                "Clean Water & Sanitation",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#2DD4BF] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2DD4BF]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Links
            </h4>
            <div className="h-[1.5px] w-10 bg-[#2DD4BF]/60" />
            <ul className="space-y-2 text-xs">
              {[
                "PMKKKY Guidelines",
                "MMDR Act Resources",
                "CAG Audit Reports",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#2DD4BF] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2DD4BF]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Links + Social Circles */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Links
            </h4>
            <div className="h-[1.5px] w-10 bg-[#2DD4BF]/60" />
            <ul className="space-y-2 text-xs">
              {["RTI Disclosures", "Privacy Policy", "Terms & Conditions"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-[#2DD4BF] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2DD4BF]" />
                    </a>
                  </li>
                ),
              )}
            </ul>
            {/* Circular social/action buttons (matching reference) */}
            <div className="flex items-center gap-3 pt-2">
              {[Mail, MapPin, PhoneCall].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/25 hover:border-[#2DD4BF] bg-white/5 hover:bg-[#00796B] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Brand + Contact (right-aligned like reference) */}
          <div className="lg:col-span-4 space-y-3 lg:text-right">
            <h4 className="text-lg font-bold text-white tracking-wide">
              DMF Portal<span className="text-[#2DD4BF]">.Trust</span>
            </h4>
            <div className="space-y-1 text-xs text-slate-300 leading-relaxed">
              <p className="flex items-center gap-1.5 lg:justify-end">
                <MapPin className="w-3.5 h-3.5 text-[#2DD4BF] flex-shrink-0" />
                <span>Collectorate Administrative Complex</span>
              </p>
              <p className="flex items-center gap-1.5 lg:justify-end">
                <span className="text-slate-400">
                  Mining Region HQ, IN 758001
                </span>
              </p>
              <p className="flex items-center gap-1.5 lg:justify-end pt-1">
                <PhoneCall className="w-3.5 h-3.5 text-[#2DD4BF] flex-shrink-0" />
                <span>tel: +91 1800 345 6789</span>
              </p>
              <p className="flex items-center gap-1.5 lg:justify-end">
                <Mail className="w-3.5 h-3.5 text-[#2DD4BF] flex-shrink-0" />
                <span>email: support@dmftrust.gov.in</span>
              </p>
            </div>
          </div>
        </div>

        {/* ═══════ Bottom Copyright Strip ═══════ */}
        <div className="border-t border-white/10 mt-8 pt-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-medium">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00796B] to-[#004D40] flex items-center justify-center shadow-md">
                <Pickaxe className="w-3.5 h-3.5 text-[#2DD4BF]" />
              </div>
              <span className="font-extrabold text-white tracking-wider text-xs">
                DMF Portal<span className="text-[#2DD4BF]">.Trust</span>
              </span>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#eula"
                className="hover:text-[#2DD4BF] transition-colors"
              >
                End User License Agreement
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="#privacy"
                className="hover:text-[#2DD4BF] transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="#terms"
                className="hover:text-[#2DD4BF] transition-colors"
              >
                Terms & Conditions
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-slate-500">
              Coded and designed by DMF Trust Portal. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
