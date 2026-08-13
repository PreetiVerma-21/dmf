import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, User, Lock, Eye, EyeOff, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import frontimg from '../../assets/images/frontimg.png';
import aboutKiosk from '../../assets/images/about_kiosk.png';
import heroAdminTeam from '../../assets/images/hero_admin_team.png';

interface LoginPageProps {
  onBackToHome: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onBackToHome }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // exclude confusing chars like 1, l, 0, O
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(code);
    setCaptchaError(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  // Helper function to generate pointy-topped hexagon SVG polygon points
  const getHexPoints = (cx: number, cy: number, r: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3 - Math.PI / 2; // pointy-topped
      points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return points.join(' ');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#feffec] to-[#15828a22] flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Outer Backdrop Concentric Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-[40px] border-[#1998a1]/10 pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full border-[50px] border-[#dbaf25]/5 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border-[60px] border-[#1998a1]/5 pointer-events-none" />
      <div className="absolute -bottom-56 -right-56 w-[750px] h-[750px] rounded-full border-[80px] border-[#dbaf25]/5 pointer-events-none" />

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl bg-white rounded-[24px] shadow-[0_30px_70px_rgba(16,54,66,0.18)] overflow-hidden relative z-10 grid grid-cols-1 md:grid-cols-12 min-h-[500px] border border-slate-100"
      >
        {/* Left Column: Form Area */}
        <div className="md:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          
          {/* Back to Home Button */}
          <button
            onClick={onBackToHome}
            className="absolute top-6 left-8 flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-black text-[#103642] bg-[#1998a1]/10 hover:bg-[#1998a1] hover:text-white rounded-full border border-[#1998a1]/25 transition-all shadow-xs cursor-pointer active:scale-95 z-30"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="mt-4">
            <h2 className="text-3xl font-black text-[#103642] tracking-tight mb-1">
              Welcome!
            </h2>
            <p className="text-slate-400 text-xs font-bold tracking-wide mb-8">
              District Mineral Foundation Trust Portal
            </p>

            {/* Notification / Success Alert */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Authentication successful! Redirecting to District Portal...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Username Input Box with Radius */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#103642] tracking-wide">User ID / Username</label>
                <div className="relative flex items-center bg-slate-50 hover:bg-slate-100/70 focus-within:bg-white border border-slate-200 focus-within:border-[#1998a1] focus-within:ring-1 focus-within:ring-[#1998a1]/30 rounded-xl px-4 py-2.5 transition-all">
                  <User className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your User ID"
                    className="w-full bg-transparent text-xs font-semibold text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Password Input Box with Radius */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#103642] tracking-wide">Password</label>
                <div className="relative flex items-center bg-slate-50 hover:bg-slate-100/70 focus-within:bg-white border border-slate-200 focus-within:border-[#1998a1] focus-within:ring-1 focus-within:ring-[#1998a1]/30 rounded-xl px-4 py-2.5 transition-all">
                  <Lock className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-xs font-semibold text-slate-700 outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-slate-600 transition-colors p-1 ml-1 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Captcha Input Box with Radius */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#103642] tracking-wide">Security Verification</label>
                <div className="grid grid-cols-12 gap-3 items-center">
                  <div className="col-span-6 flex items-center gap-2">
                    {/* CAPTCHA Display Box with background lines */}
                    <div className="relative h-11 w-full bg-slate-100 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center select-none font-mono tracking-widest text-lg font-bold text-slate-700 italic bg-[radial-gradient(#1998a120_1px,transparent_1px)] [background-size:10px_10px]">
                      <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="10" x2="180" y2="40" stroke="#184c5d" strokeWidth="1.5" />
                        <line x1="10" y1="35" x2="160" y2="5" stroke="#dbaf25" strokeWidth="1.5" />
                        <line x1="5" y1="22" x2="175" y2="22" stroke="#1998a1" strokeWidth="1" />
                      </svg>
                      <span className="relative z-10 drop-shadow-md select-none">{captchaCode}</span>
                    </div>
                    
                    {/* Refresh Button */}
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="p-2.5 h-11 w-11 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-500 hover:text-slate-700 transition-all flex items-center justify-center cursor-pointer active:scale-95 shrink-0"
                      title="Refresh CAPTCHA"
                    >
                      <RotateCw className="w-4.5 h-4.5" />
                    </button>
                  </div>

                  <div className="col-span-6">
                    <input
                      type="text"
                      required
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Enter CAPTCHA"
                      className="h-11 w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-[#1998a1] focus:ring-1 focus:ring-[#1998a1]/30 rounded-xl px-4 text-xs font-semibold text-slate-700 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
                {captchaError && (
                  <p className="text-[10px] text-red-500 font-bold mt-1">Invalid CAPTCHA code. Please try again.</p>
                )}
              </div>

              {/* Submit Button & Forgot password */}
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Credentials reset instruction has been sent to your registered mobile and email.');
                  }}
                  className="text-xs font-bold text-[#184c5d] hover:text-[#1998a1] transition-colors underline-offset-4 hover:underline"
                >
                  Forgot User ID or Password?
                </a>

                <button
                  type="submit"
                  className="px-10 py-3 text-xs font-black text-[#1F2A44] bg-gradient-to-r from-[#dbaf25] via-[#f5d76e] to-[#C6A75E] hover:from-[#c49a1d] hover:to-[#dbaf25] rounded-xl shadow-lg shadow-[#dbaf25]/25 border border-[#dbaf25] transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
                >
                  Login
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Right Column: Hexagons Decorative Illustration styled in project colors */}
        <div className="hidden md:block md:col-span-6 relative overflow-hidden bg-gradient-to-br from-[#103642] to-[#184c5d] select-none border-l border-[#1998a1]/10">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <svg viewBox="0 0 400 500" className="w-full h-full block">
            <defs>
              <clipPath id="clipHexA">
                <polygon points={getHexPoints(270, 280, 84)} />
              </clipPath>
              <clipPath id="clipHexL">
                <polygon points={getHexPoints(395, 190, 52)} />
              </clipPath>
              <clipPath id="clipHexI">
                <polygon points={getHexPoints(390, 410, 86)} />
              </clipPath>
            </defs>

            {/* Hexagon G (Top-Right Filled - Gold - BLANK) */}
            <polygon
              points={getHexPoints(360, 110, 48)}
              fill="#dbaf25"
              opacity="0.15"
            />

            {/* Hexagon E (Top-Left Filled - Teal - BLANK) */}
            <polygon
              points={getHexPoints(95, 110, 40)}
              fill="#1998a1"
              opacity="0.4"
            />
            {/* Hexagon E Overlay Glowy Frame */}
            <polygon
              points={getHexPoints(95, 110, 40)}
              fill="none"
              stroke="#1998a1"
              strokeWidth="1.5"
              opacity="0.7"
              style={{ filter: 'drop-shadow(0 0 5px rgba(25, 152, 161, 0.8))' }}
            />

            {/* Hexagon F (Top-Left Outline - Gold - GLOWY) */}
            <polygon
              points={getHexPoints(125, 90, 36)}
              fill="none"
              stroke="#dbaf25"
              strokeWidth="2"
              opacity="0.8"
              style={{ filter: 'drop-shadow(0 0 5px rgba(219, 175, 37, 0.8))' }}
            />
            {/* Hexagon H (Top-Center-Right Outline/Small - BLANK) */}
            <polygon
              points={getHexPoints(300, 80, 20)}
              fill="#1998a1"
              opacity="0.2"
            />

            {/* Hexagon B (Medium-Right, Overlapping Large Hexagon - Teal - BLANK) */}
            <polygon
              points={getHexPoints(330, 230, 52)}
              fill="#1998a1"
              opacity="0.25"
            />

            {/* Hexagon L (New Big Hexagon with Image - Clipped) */}
            <image
              href={aboutKiosk}
              x={395 - 52 * Math.sqrt(3) / 2}
              y={190 - 52}
              width={52 * Math.sqrt(3)}
              height={52 * 2}
              clipPath="url(#clipHexL)"
              preserveAspectRatio="xMidYMid slice"
              opacity="0.85"
            />
            {/* Hexagon L Overlay Glowy Frame */}
            <polygon
              points={getHexPoints(395, 190, 52)}
              fill="none"
              stroke="#1998a1"
              strokeWidth="2"
              opacity="0.9"
              style={{ filter: 'drop-shadow(0 0 6px rgba(25, 152, 161, 0.9))' }}
            />

            {/* Hexagon A (Large-Center-Right Image - Clipped) */}
            <image
              href={frontimg}
              x={270 - 84 * Math.sqrt(3) / 2}
              y={280 - 84}
              width={84 * Math.sqrt(3)}
              height={84 * 2}
              clipPath="url(#clipHexA)"
              preserveAspectRatio="xMidYMid slice"
              opacity="0.75"
            />
            {/* Hexagon A Overlay Glowy Frame */}
            <polygon
              points={getHexPoints(270, 280, 84)}
              fill="none"
              stroke="#1998a1"
              strokeWidth="2"
              opacity="0.9"
              style={{ filter: 'drop-shadow(0 0 6px rgba(25, 152, 161, 0.9))' }}
            />

            {/* Hexagon C (Small-Right Filled Overlap - Gold - BLANK) */}
            <polygon
              points={getHexPoints(310, 325, 28)}
              fill="#dbaf25"
              opacity="0.85"
            />
            {/* Hexagon D (Medium-Left Outline Overlap - Teal - GLOWY) */}
            <polygon
              points={getHexPoints(210, 320, 38)}
              fill="none"
              stroke="#1998a1"
              strokeWidth="2.2"
              opacity="0.8"
              style={{ filter: 'drop-shadow(0 0 5px rgba(25, 152, 161, 0.8))' }}
            />

            {/* Hexagon I (Large-Bottom-Right - Gold - GLOWY with Image) */}
            <image
              href={heroAdminTeam}
              x={390 - 86 * Math.sqrt(3) / 2}
              y={410 - 86}
              width={86 * Math.sqrt(3)}
              height={86 * 2}
              clipPath="url(#clipHexI)"
              preserveAspectRatio="xMidYMid slice"
              opacity="0.75"
            />
            {/* Hexagon I Overlay Glowy Frame */}
            <polygon
              points={getHexPoints(390, 410, 86)}
              fill="none"
              stroke="#dbaf25"
              strokeWidth="2.5"
              opacity="0.8"
              style={{ filter: 'drop-shadow(0 0 6px rgba(219, 175, 37, 0.8))' }}
            />

            {/* Hexagon J (Bottom-Center Filled - Teal - BLANK) */}
            <polygon
              points={getHexPoints(230, 430, 50)}
              fill="#1998a1"
              opacity="0.4"
            />
            {/* Hexagon J Overlay Glowy Frame */}
            <polygon
              points={getHexPoints(230, 430, 50)}
              fill="none"
              stroke="#1998a1"
              strokeWidth="1.5"
              opacity="0.7"
              style={{ filter: 'drop-shadow(0 0 5px rgba(25, 152, 161, 0.8))' }}
            />

            {/* Hexagon K (Bottom-Center Outline - Teal - GLOWY) */}
            <polygon
              points={getHexPoints(270, 410, 30)}
              fill="none"
              stroke="#1998a1"
              strokeWidth="2.2"
              opacity="0.8"
              style={{ filter: 'drop-shadow(0 0 5px rgba(25, 152, 161, 0.8))' }}
            />

            {/* Decorative Solid Dots/Hexagons */}
            <circle cx="210" cy="195" r="7" fill="#1998a1" opacity="0.9" />
            <circle cx="276" cy="128" r="6" fill="#dbaf25" opacity="0.95" />
            <circle cx="380" cy="275" r="9" fill="#1998a1" opacity="0.8" />
            <circle cx="212" cy="370" r="9" fill="#dbaf25" opacity="0.9" />
            <circle cx="282" cy="270" r="5" fill="#ffffff" opacity="0.95" />
            <circle cx="348" cy="422" r="7" fill="#1998a1" opacity="0.9" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
