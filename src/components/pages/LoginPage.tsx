import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, CheckCircle2, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoginPageProps {
  onBackToHome: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F6F9] flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Outer Backdrop Concentric Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-[40px] border-[#1998a1]/15 pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full border-[50px] border-[#184c5d]/5 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border-[60px] border-[#1998a1]/10 pointer-events-none" />
      <div className="absolute -bottom-56 -right-56 w-[750px] h-[750px] rounded-full border-[80px] border-[#184c5d]/5 pointer-events-none" />

      {/* Main Login Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 flex flex-col min-h-[560px]"
      >
        {/* Top-Right Back to Home Button */}
        <button
          onClick={onBackToHome}
          className="absolute top-5 right-5 z-30 flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#184c5d] bg-slate-100 hover:bg-[#1998a1]/15 hover:text-[#1998a1] rounded-full border border-slate-200 transition-all shadow-xs active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* ═══ Main Split Content Area ═══ */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative">

          {/* ─── LEFT COLUMN: Form Area ─── */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center z-10">
            
            {/* Tab Navigation: Login vs Sign Up */}
            <div className="flex items-center gap-8 mb-8 border-b border-slate-100 pb-1">
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className={`relative pb-3 text-xl font-bold transition-colors ${
                  activeTab === 'login' 
                    ? 'text-[#184c5d] font-black' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Login
                {activeTab === 'login' && (
                  <motion.div 
                    layoutId="tabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#1998a1] rounded-full"
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('signup')}
                className={`relative pb-3 text-xl font-bold transition-colors ${
                  activeTab === 'signup' 
                    ? 'text-[#184c5d] font-black' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Sign up
                {activeTab === 'signup' && (
                  <motion.div 
                    layoutId="tabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#1998a1] rounded-full"
                  />
                )}
              </button>
            </div>

            {/* Notification / Success Alert */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    {activeTab === 'login' 
                      ? 'Authentication successful! Redirecting to District Portal...' 
                      : 'Account registration request submitted for verification.'}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name field (Only shown for Sign Up tab) */}
              {activeTab === 'signup' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1"
                >
                  <div className="relative flex items-center bg-slate-50/80 hover:bg-slate-100/80 focus-within:bg-white border border-slate-200 focus-within:border-[#1998a1] rounded-full px-4 py-2.5 transition-all shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-slate-200/70 flex items-center justify-center text-slate-500 mr-3 shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Official Name"
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400 placeholder:font-medium"
                    />
                  </div>
                </motion.div>
              )}

              {/* Input 1: Email or Phone Number with circular icon pill */}
              <div className="space-y-1">
                <div className="relative flex items-center bg-slate-50/80 hover:bg-slate-100/80 focus-within:bg-white border border-slate-200 focus-within:border-[#1998a1] rounded-full px-4 py-2.5 transition-all shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-slate-200/70 flex items-center justify-center text-slate-500 mr-3 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email or phone number"
                    className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400 placeholder:font-medium"
                  />
                </div>
              </div>

              {/* Input 2: Password with lock icon pill & eye toggle */}
              <div className="space-y-1">
                <div className="relative flex items-center bg-slate-50/80 hover:bg-slate-100/80 focus-within:bg-white border border-slate-200 focus-within:border-[#1998a1] rounded-full px-4 py-2.5 transition-all shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-slate-200/70 flex items-center justify-center text-slate-500 mr-3 shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400 placeholder:font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Form Bottom Row: "Forgot your password?" on left & Login Pill Button on right */}
              <div className="pt-3 flex items-center justify-between">
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset link has been sent to registered email.');
                  }}
                  className="text-xs font-semibold text-slate-500 hover:text-[#184c5d] transition-colors underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>

                {/* Theme Pill Button matching reference image button style */}
                <button
                  type="submit"
                  className="px-8 py-2.5 rounded-full text-xs font-black text-[#184c5d] bg-gradient-to-r from-[#dbaf25] to-[#f5d76e] hover:from-[#c49a1d] hover:to-[#dbaf25] shadow-md shadow-[#dbaf25]/30 hover:shadow-lg transition-all active:scale-95 cursor-pointer uppercase tracking-wider border border-[#dbaf25]"
                >
                  {activeTab === 'login' ? 'Login' : 'Sign up'}
                </button>
              </div>

            </form>

            {/* Notice Footer */}
            <div className="mt-10 pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>256-Bit SSL Encrypted Statutory Government Portal</span>
            </div>

          </div>


          {/* ─── RIGHT COLUMN: Isometric Illustration & Curved Waves Backdrop ─── */}
          <div className="hidden lg:block lg:col-span-6 relative overflow-hidden bg-gradient-to-br from-[#103642] via-[#184c5d] to-[#103642]">
            
            {/* Concentric Curved Waves Backdrop */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 500 600" 
              preserveAspectRatio="none"
            >
              {/* Outer soft wave 1 */}
              <path 
                d="M 120 0 C 220 150 180 400 500 600 L 500 0 Z" 
                fill="#52d6e0" 
                opacity="0.15"
              />
              {/* Inner accent wave 2 */}
              <path 
                d="M 180 0 C 270 180 220 450 500 600 L 500 0 Z" 
                fill="#1998a1" 
                opacity="0.25"
              />
              {/* Deep central wave 3 */}
              <path 
                d="M 240 0 C 310 200 280 480 500 600 L 500 0 Z" 
                fill="#1f5a6d" 
                opacity="0.6"
              />
            </svg>

            {/* 3D Isometric Desktop Vector Graphic (Laptop, Coffee Mug, Potted Plant) */}
            <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
              <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                
                {/* Isometric SVG Illustration matching the reference graphics */}
                <svg viewBox="0 0 400 350" className="w-full h-full filter drop-shadow-2xl">
                  
                  {/* Base Shadow Overlay */}
                  <ellipse cx="200" cy="270" rx="160" ry="40" fill="rgba(15, 23, 42, 0.4)" />

                  {/* ═══ 1. ISOMETRIC LAPTOP ═══ */}
                  <g transform="translate(60, 40)">
                    {/* Base Bottom Chassis */}
                    <polygon points="120,220 250,220 280,200 150,200" fill="#E2E8F0" />
                    <polygon points="120,220 250,220 250,226 120,226" fill="#CBD5E1" />
                    <polygon points="250,220 280,200 280,206 250,226" fill="#94A3B8" />

                    {/* Trackpad */}
                    <polygon points="175,214 205,214 212,207 182,207" fill="#64748B" />

                    {/* Keyboard Surface Area */}
                    <polygon points="135,200 265,200 258,150 128,150" fill="#184c5d" />

                    {/* Individual Keyboard Keys Grid */}
                    <g fill="#1998a1" opacity="0.9">
                      <rect x="140" y="155" width="110" height="4" rx="1" transform="skewX(-25)" />
                      <rect x="142" y="163" width="106" height="4" rx="1" transform="skewX(-25)" />
                      <rect x="144" y="171" width="102" height="4" rx="1" transform="skewX(-25)" />
                      <rect x="146" y="179" width="98" height="4" rx="1" transform="skewX(-25)" />
                      <rect x="148" y="187" width="94" height="4" rx="1" transform="skewX(-25)" />
                    </g>

                    {/* Laptop Open Screen Panel */}
                    {/* Screen Outer Bezel */}
                    <polygon points="128,150 258,150 258,30 128,30" fill="#103642" rx="4" />
                    {/* Display Inner Screen */}
                    <polygon points="134,144 252,144 252,36 134,36" fill="#F8FAFC" />
                    
                    {/* Screen Display UI Mockup (Mining Portal Dashboard Graphics) */}
                    <rect x="142" y="46" width="102" height="12" rx="2" fill="#184c5d" />
                    <rect x="142" y="64" width="46" height="32" rx="3" fill="#1998a1" opacity="0.85" />
                    <rect x="194" y="64" width="50" height="32" rx="3" fill="#52d6e0" />
                    <rect x="142" y="102" width="102" height="30" rx="3" fill="#1f5a6d" />
                    <circle cx="152" cy="117" r="6" fill="#dbaf25" />
                    <line x1="164" y1="117" x2="230" y2="117" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                  </g>


                  {/* ═══ 2. STEAMING COFFEE CUP ═══ */}
                  <g transform="translate(70, 180)">
                    {/* Shadow */}
                    <ellipse cx="25" cy="45" rx="15" ry="6" fill="rgba(15, 23, 42, 0.3)" />
                    {/* Mug Body */}
                    <rect x="10" y="15" width="30" height="30" rx="4" fill="#FFFFFF" />
                    {/* Red Tea / Coffee Fill */}
                    <ellipse cx="25" cy="18" rx="13" ry="5" fill="#E11D48" />
                    {/* Mug Handle */}
                    <path d="M 10 22 C 2 22 2 36 10 36" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                  </g>


                  {/* ═══ 3. POTTED DESK PLANT ═══ */}
                  <g transform="translate(290, 150)">
                    {/* Shadow */}
                    <ellipse cx="25" cy="100" rx="20" ry="7" fill="rgba(15, 23, 42, 0.3)" />
                    
                    {/* White Ceramic Pot */}
                    <path d="M 10 60 L 14 96 C 15 100 35 100 36 96 L 40 60 Z" fill="#FFFFFF" />
                    <ellipse cx="25" cy="60" rx="15" ry="4" fill="#E2E8F0" />
                    <ellipse cx="25" cy="61" rx="13" ry="3" fill="#78350F" />

                    {/* Succulent / Plant Leaves */}
                    <path d="M 25 60 Q 20 20 25 10 Q 30 20 25 60 Z" fill="#10B981" />
                    <path d="M 25 60 Q 5 35 10 20 Q 20 35 25 60 Z" fill="#059669" />
                    <path d="M 25 60 Q 45 35 40 20 Q 30 35 25 60 Z" fill="#047857" />
                    <path d="M 25 60 Q 15 45 18 35 Q 25 45 25 60 Z" fill="#34D399" />
                  </g>

                </svg>

              </div>
            </div>

            {/* Corner Decorative Badge Overlay */}
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-2xl max-w-[220px] shadow-xl z-20">
              <div className="text-xs font-black text-[#dbaf25] uppercase tracking-wider mb-0.5">
                Statutory PMKKKY Portal
              </div>
              <p className="text-[11px] text-slate-200 font-medium leading-snug">
                Transparent beneficiary tracking & leaseholder compliance governance.
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
};
