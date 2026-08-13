import React, { useState, useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Pickaxe, MapPin, TrendingUp, FolderCheck, Users, Coins, Sparkles, Filter, PieChart as PieIcon, ArrowRight } from 'lucide-react';
import { OFFICIAL_DISTRICT_DATA } from '../../data/chhattisgarhOfficialMapData';
import type { DistrictData } from '../../data/chhattisgarhOfficialMapData';

// Safely handle CJS / ESM default export interop for Vite
const HighchartsReactComp: any = typeof HighchartsReact === 'function' ? HighchartsReact : (HighchartsReact as any)?.default || HighchartsReact;

class SafePieChart extends React.Component<{ highcharts: any; options: any }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn('Highcharts render fallback engaged:', error);
  }

  render() {
    if (this.state.hasError || !HighchartsReactComp) {
      return (
        <div className="w-full flex items-center justify-center p-4">
          <div className="w-40 h-40 rounded-full border-8 border-[#1998a1] border-t-[#dbaf25] flex items-center justify-center text-center shadow-inner">
            <span className="text-xs font-black text-[#184c5d]">PMKKKY Fund<br />Breakdown</span>
          </div>
        </div>
      );
    }
    return <HighchartsReactComp highcharts={this.props.highcharts} options={this.props.options} />;
  }
}

// Overall State Aggregate Data
const OVERALL_STATE_DATA: DistrictData = {
  id: 'all',
  name: 'Chhattisgarh State',
  hindiName: 'छत्तीसगढ़ राज्य',
  division: 'All 5 Divisions',
  headquarters: 'Raipur Capital (रायपुर)',
  dmfFund: 42850,
  royalty: 48920,
  projectsCount: 41250,
  beneficiaries: '1.25 Crore',
  miningType: 'Coal, Iron Ore, Bauxite, Limestone & Tin',
  priorityCategory: 'State-wide DMF Oversight',
  themeColorName: '--gold-accent (Gold)',
  themeHex: '#dbaf25',
  path: '',
  labelPos: { x: 0, y: 0 },
  hqPos: { x: 0, y: 0 },
  sectorAllocation: {
    drinkingWater: 34,
    healthcare: 25,
    education: 20,
    infrastructure: 11,
    environment: 6,
    skillDev: 4,
  },
};

export const ChhattisgarhMapSection: React.FC = () => {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('korba');
  const [hoveredDistrictId, setHoveredDistrictId] = useState<string | null>(null);

  // Active district metrics
  const activeData: DistrictData = useMemo(() => {
    if (hoveredDistrictId && OFFICIAL_DISTRICT_DATA[hoveredDistrictId]) {
      return OFFICIAL_DISTRICT_DATA[hoveredDistrictId];
    }
    if (selectedDistrictId === 'all') {
      return OVERALL_STATE_DATA;
    }
    return OFFICIAL_DISTRICT_DATA[selectedDistrictId] || OFFICIAL_DISTRICT_DATA['korba'] || OVERALL_STATE_DATA;
  }, [selectedDistrictId, hoveredDistrictId]);

  // Highcharts Pie Chart Configuration for Sector Allocation
  const pieChartOptions: Highcharts.Options = useMemo(() => {
    const sec = activeData.sectorAllocation;
    const data = [
      { name: 'Drinking Water & Sanitation', y: sec.drinkingWater, color: '#1998a1' },
      { name: 'Healthcare & Medical Relief', y: sec.healthcare, color: '#dbaf25' },
      { name: 'Education & Schools', y: sec.education, color: '#184c5d' },
      { name: 'Infrastructure & Roads', y: sec.infrastructure, color: '#0D9488' },
      { name: 'Environmental Preservation', y: sec.environment, color: '#2DD4BF' },
      { name: 'Skill Dev & Livelihood', y: sec.skillDev, color: '#F59E0B' },
    ];

    return {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        height: 240,
        spacing: [0, 0, 0, 0],
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        backgroundColor: '#103642',
        borderColor: '#1998a1',
        borderRadius: 10,
        style: {
          color: '#FFFFFF',
          fontSize: '12px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        },
        formatter: function (this: any) {
          return `<b>${this.point.name}</b>: <span style="color:#dbaf25;font-weight:bold;">${this.y}%</span> of Fund`;
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          borderWidth: 2,
          borderColor: '#FFFFFF',
          innerSize: '55%',
          dataLabels: {
            enabled: false,
          },
          states: {
            hover: {
              brightness: 0.1,
              halo: {
                size: 8,
                opacity: 0.25,
              },
            },
          },
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Allocation',
          data,
        },
      ],
    };
  }, [activeData]);

  return (
    <section id="chhattisgarh-map" className="relative py-8 dept-connected-pattern overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1998a1]/10 border border-[#1998a1]/30 text-[#1998a1] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#dbaf25]" />
              <span>OFFICIAL CHHATTISGARH GIS MAP & HIGHCART ANALYTICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-[#184c5d]">District Mineral Foundation </span>
              <span className="bg-gradient-to-r from-[#1998a1] via-[#184c5d] to-[#1998a1] bg-clip-text text-transparent">
                Interactive Map
              </span>
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl font-medium">
              Official geographic district map of Chhattisgarh showing real-time DMF allocations, mining royalty collections, and PMKKKY sector fund distributions.
            </p>
          </div>

          {/* Action Filter Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedDistrictId('all');
                setHoveredDistrictId(null);
              }}
              className={`px-4 py-2.5 text-xs font-black rounded-xl border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${selectedDistrictId === 'all'
                ? 'bg-[#184c5d] text-white border-[#184c5d] shadow-md'
                : 'bg-white text-[#184c5d] border-slate-300 hover:bg-[#1998a1]/10'
                }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>All Districts (State View)</span>
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT SIDE: Authentic Official Chhattisgarh Vector GIS Map */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl shadow-slate-200/60 flex flex-col justify-between relative group">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-sm font-black text-[#184c5d]">
                <MapPin className="w-4 h-4 text-[#dbaf25]" />
                <span>Official Chhattisgarh GIS District Boundaries</span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#1998a1]/10 text-[#1998a1] border border-[#1998a1]/20">
                Official Boundaries & Coordinates
              </span>
            </div>

            {/* SVG Vector Map Container */}
            <div className="relative min-h-[540px] flex items-center justify-center py-2 bg-slate-50/60 rounded-2xl border border-slate-100 overflow-hidden">
              <svg
                viewBox="0 0 550 820"
                className="w-full max-h-[560px] drop-shadow-md transition-all duration-300"
              >
                {Object.keys(OFFICIAL_DISTRICT_DATA).map((id) => {
                  const dist = OFFICIAL_DISTRICT_DATA[id];
                  const isSelected = selectedDistrictId === id;
                  const isHovered = hoveredDistrictId === id;

                  // Theme Palette Fill colors
                  let fillColor = dist.themeHex;
                  let textColor = '#FFFFFF';

                  if (isSelected) {
                    fillColor = '#dbaf25';
                    textColor = '#103642';
                  } else if (isHovered) {
                    fillColor = '#1998a1';
                    textColor = '#FFFFFF';
                  }

                  let strokeColor = isSelected ? '#103642' : isHovered ? '#FFFFFF' : '#CBD5E1';
                  let strokeWidth = isSelected || isHovered ? 2.5 : 1.2;

                  return (
                    <g key={id} className="cursor-pointer transition-all duration-200">
                      <path
                        d={dist.path}
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinejoin="round"
                        opacity={isHovered ? 1 : 0.95}
                        onMouseEnter={() => setHoveredDistrictId(id)}
                        onMouseLeave={() => setHoveredDistrictId(null)}
                        onClick={() => setSelectedDistrictId(id)}
                        className="transition-all duration-200 hover:opacity-100"
                      />

                      {/* Headquarters City Marker */}
                      <circle
                        cx={dist.hqPos.x}
                        cy={dist.hqPos.y}
                        r={id === 'raipur' ? 4 : 2.5}
                        fill={id === 'raipur' ? '#E11D48' : '#FFFFFF'}
                        stroke="#103642"
                        strokeWidth={1}
                        className="pointer-events-none"
                      />

                      {/* District Hindi & English Name Label */}
                      <text
                        x={dist.labelPos.x}
                        y={dist.labelPos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={textColor}
                        fontSize="9px"
                        fontWeight="800"
                        className="pointer-events-none select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
                      >
                        {dist.name.split(' ')[0]}
                      </text>
                      <text
                        x={dist.labelPos.x}
                        y={dist.labelPos.y + 10}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={textColor}
                        fontSize="7.5px"
                        fontWeight="700"
                        className="pointer-events-none select-none opacity-90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
                      >
                        ({dist.hindiName})
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Active Hover Info Card Overlay */}
              {hoveredDistrictId && OFFICIAL_DISTRICT_DATA[hoveredDistrictId] && (
                <div className="absolute top-4 right-4 bg-[#103642] text-white border border-[#1998a1] p-3.5 rounded-2xl shadow-xl text-xs pointer-events-none animate-fadeIn max-w-[220px] z-20">
                  <div className="font-extrabold text-[#dbaf25] text-sm mb-0.5">
                    {OFFICIAL_DISTRICT_DATA[hoveredDistrictId].name} ({OFFICIAL_DISTRICT_DATA[hoveredDistrictId].hindiName})
                  </div>
                  <div className="text-[10px] text-slate-300 mb-2 font-medium">
                    HQ: {OFFICIAL_DISTRICT_DATA[hoveredDistrictId].headquarters}
                  </div>
                  <div className="text-slate-200 space-y-1 bg-[#184c5d]/80 p-2 rounded-xl border border-white/10">
                    <div className="flex justify-between">
                      <span className="text-slate-300">DMF Fund:</span>
                      <span className="font-bold text-[#52d6e0]">₹{OFFICIAL_DISTRICT_DATA[hoveredDistrictId].dmfFund} Cr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Royalty:</span>
                      <span className="font-bold text-[#dbaf25]">₹{OFFICIAL_DISTRICT_DATA[hoveredDistrictId].royalty} Cr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Projects:</span>
                      <span className="font-bold text-white">{OFFICIAL_DISTRICT_DATA[hoveredDistrictId].projectsCount}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Map Legend Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-[#dbaf25]" />
                  <span className="font-bold text-[#103642]">Selected District</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-[#1998a1]" />
                  <span className="font-bold text-[#1998a1]">Hover Highlight</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-[#184c5d]" />
                  <span className="font-bold text-[#184c5d]">Mining Division</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Click district shape to inspect analytics
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Summarized District Details & Highcharts Pie Chart */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Top Summarized Metric Header Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl shadow-slate-200/60 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-[#dbaf25] text-[#103642] uppercase tracking-wide">
                      {activeData.division} Division
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      • {activeData.priorityCategory}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#184c5d] tracking-tight flex items-center gap-2">
                    {activeData.name} ({activeData.hindiName})
                  </h3>
                  <div className="text-xs text-slate-500 mt-1 font-medium">
                    Headquarters: <span className="font-bold text-[#184c5d]">{activeData.headquarters}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#1998a1]/10 border border-[#1998a1]/20 flex items-center justify-center text-[#184c5d] shrink-0">
                  <Pickaxe className="w-6 h-6 text-[#184c5d]" />
                </div>
              </div>

              {/* Major Minerals & Industry Info Badge */}
              <div className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-3 mb-5 flex items-center justify-between">
                <span className="font-semibold text-slate-600">Major Minerals & Mining Industry:</span>
                <span className="font-black text-[#184c5d]">{activeData.miningType}</span>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-[11px] font-bold uppercase">DMF Fund</span>
                    <Coins className="w-4 h-4 text-[#c49a1d]" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#184c5d]">₹{activeData.dmfFund.toLocaleString()} Cr</div>
                    <div className="text-[10px] text-slate-500 font-medium">Total Sanctioned</div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-[11px] font-bold uppercase">Royalty</span>
                    <TrendingUp className="w-4 h-4 text-[#1998a1]" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#c49a1d]">₹{activeData.royalty.toLocaleString()} Cr</div>
                    <div className="text-[10px] text-slate-500 font-medium">Revenue Stream</div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-[11px] font-bold uppercase">Projects</span>
                    <FolderCheck className="w-4 h-4 text-[#0D9488]" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#103642]">{activeData.projectsCount.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-500 font-medium">PMKKKY Works</div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-[11px] font-bold uppercase">Impact</span>
                    <Users className="w-4 h-4 text-[#1998a1]" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-[#1998a1]">{activeData.beneficiaries}</div>
                    <div className="text-[10px] text-slate-500 font-medium">Citizens Reached</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highcharts Pie Chart & Detailed Legend */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl shadow-slate-200/60 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <PieIcon className="w-4 h-4 text-[#c49a1d]" />
                  <h4 className="text-sm font-black text-[#184c5d] uppercase tracking-wider">
                    Sector-Wise Fund Breakdown ({activeData.name})
                  </h4>
                </div>
                <span className="text-xs text-[#1998a1] font-bold">PMKKKY Guidelines</span>
              </div>

              {/* Highcharts Donut Chart */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-6 flex items-center justify-center">
                  <div className="w-full">
                    <SafePieChart
                      highcharts={Highcharts}
                      options={pieChartOptions}
                    />
                  </div>
                </div>

                {/* Percentage Breakdown Legend */}
                <div className="sm:col-span-6 space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1998a1]" />
                      <span className="text-slate-700 font-medium">Drinking Water</span>
                    </div>
                    <span className="font-bold text-[#1998a1]">{activeData.sectorAllocation.drinkingWater}%</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#dbaf25]" />
                      <span className="text-slate-700 font-medium">Healthcare Relief</span>
                    </div>
                    <span className="font-bold text-[#c49a1d]">{activeData.sectorAllocation.healthcare}%</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#184c5d]" />
                      <span className="text-slate-700 font-medium">Education & Schools</span>
                    </div>
                    <span className="font-bold text-[#184c5d]">{activeData.sectorAllocation.education}%</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488]" />
                      <span className="text-slate-700 font-medium">Infrastructure</span>
                    </div>
                    <span className="font-bold text-[#0D9488]">{activeData.sectorAllocation.infrastructure}%</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
                      <span className="text-slate-700 font-medium">Environment & Skill</span>
                    </div>
                    <span className="font-bold text-[#14b8a6]">
                      {activeData.sectorAllocation.environment + activeData.sectorAllocation.skillDev}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Callout */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Data updated per Ministry of Mines DMF Portal 2026
                </span>
                <a
                  href="#projects"
                  className="flex items-center gap-1 text-[#c49a1d] hover:text-[#184c5d] font-bold transition-colors"
                >
                  <span>View Projects Log</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ChhattisgarhMapSection;
