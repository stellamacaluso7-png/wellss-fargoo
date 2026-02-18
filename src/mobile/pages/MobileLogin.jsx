import React, { useState } from 'react';
import { Menu, Info, ChevronRight, Loader2, CircleUser, X, ShieldAlert, AlertCircle } from 'lucide-react';
// image used 
import Johnson from "../../assets/john.jpeg";
import Bg from "../../assets/bg.png"

const MobileLogin = ({ onLoginSuccess, validUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enrollError, setEnrollError] = useState(false);
  const [forgotError, setForgotError] = useState(false);

  const handleSignOn = (e) => {
    if (e) e.preventDefault();
    setError('');
    setForgotError(false);
    setEnrollError(false);
    
    if (username === validUser.username && password === validUser.password) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoginSuccess();
      }, 5000);
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  const triggerEnrollError = () => {
    setIsMenuOpen(false);
    setForgotError(false);
    setEnrollError(true);
    setTimeout(() => setEnrollError(false), 4000);
  };

  const triggerForgotError = (e) => {
    e.preventDefault();
    setEnrollError(false);
    setForgotError(true);
    // Auto-hide after 4 seconds
    setTimeout(() => setForgotError(false), 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#F4F4F4] overflow-x-hidden font-['Open_Sans',sans-serif] antialiased">
      
      {/* SIDEBAR NAVIGATION */}
      <div className={`fixed inset-y-0 right-0 w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b flex justify-between items-center bg-[#D71E28] text-white">
          <span className="font-bold uppercase tracking-widest text-sm">Menu</span>
          <X size={24} onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
        </div>
        <div className="flex flex-col">
          <button onClick={() => setIsMenuOpen(false)} className="p-5 font-semibold text-gray-800 border-b flex justify-between items-center active:bg-gray-100">
            Sign On <ChevronRight size={18} className="text-gray-400" />
          </button>
          <button onClick={triggerEnrollError} className="p-5 font-semibold text-gray-800 border-b flex justify-between items-center active:bg-gray-100">
            Enroll <ChevronRight size={18} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-300" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* MAIN CONTENT */}
      <div className={`transition-all duration-700 ${isLoading ? 'blur-md pointer-events-none' : ''}`}>
        
        <header className="bg-[#D71E28] text-white p-4 flex justify-between items-center sticky top-0 z-30 shadow-md">
          <h1 className="text-xl font-bold tracking-tighter uppercase">WELLS FARGO</h1>
          <Menu size={28} onClick={() => setIsMenuOpen(true)} className="cursor-pointer" />
        </header>

        {/* Floating Error Messages Container */}
        <div className="fixed top-[64px] left-0 right-0 z-20 pointer-events-none px-4">
          {enrollError && (
            <div className="mt-2 bg-amber-50 border-l-4 border-amber-500 p-4 shadow-lg flex items-center space-x-3 animate-in slide-in-from-top duration-300 pointer-events-auto">
              <ShieldAlert className="text-amber-600 shrink-0" size={20} />
              <p className="text-sm font-semibold text-amber-800">You are not Authorized to access this feature.</p>
            </div>
          )}
          {forgotError && (
            <div className="mt-2 bg-red-50 border-l-4 border-red-600 p-4 shadow-lg flex items-center space-x-3 animate-in slide-in-from-top duration-300 pointer-events-auto">
              <AlertCircle className="text-red-600 shrink-0" size={20} />
              <p className="text-sm font-semibold text-red-800">Sorry, Only Authorized users can retrieve information.</p>
            </div>
          )}
        </div>

        {/* Form Area */}
        <div className="bg-[#FFF9E3] p-6 border-b border-gray-300 shadow-inner">
          <form onSubmit={handleSignOn} className="space-y-6 max-w-md mx-auto">
            {error && (
              <div className="bg-red-100 border-l-4 border-red-600 p-3 text-red-800 text-xs font-bold uppercase tracking-tight animate-in fade-in zoom-in duration-200">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-transparent border-b border-gray-400 py-3 text-lg focus:outline-none focus:border-red-600 transition-all placeholder:text-gray-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b border-gray-400 py-3 text-lg focus:outline-none focus:border-red-600 transition-all placeholder:text-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-700">
              <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-red-600 mr-2 group-active:scale-90 transition-transform" />
                Save username
              </label>
              <div className="flex items-center text-blue-900 font-medium active:opacity-50 transition-opacity cursor-pointer">
                 <CircleUser size={18} className="mr-1" />
                 <span>Set up Face ID®</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D71E28] text-white font-bold py-3.5 rounded shadow-lg active:scale-[0.97] transition-all text-lg"
            >
              Sign On
            </button>
            <div className="text-center">
              <button 
                onClick={triggerForgotError}
                className="text-sm text-blue-800 underline decoration-1 underline-offset-2 font-medium active:text-blue-500"
              >
                Forgot Password/Username?
              </button>
            </div>
          </form>
        </div>

        {/* Rest of the UI (Security, Hero, Links) */}
        <div className="p-4 bg-white border-b border-gray-200 flex items-start space-x-3">
          <div className="bg-gray-600 text-white rounded-full p-0.5 mt-0.5"><Info size={14} /></div>
          <p className="text-[11px] leading-tight text-gray-600">
            <span className="font-bold text-red-600 uppercase tracking-tighter">Alert</span> Here for you – updates on security and services. <span className="text-blue-800 underline">Learn more</span>
          </p>
        </div>

        <div className="relative h-56">
          <img src={Bg} className="w-full h-full object-cover" alt="Saving" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
            <h2 className="text-2xl font-bold leading-tight">Helping you save</h2>
            <p className="text-sm opacity-90">Automatic transfers to Way2Save®</p>
          </div>
        </div>

        <div className="bg-white">
          {['Open a checking account', 'Explore home loans', 'Find a credit card'].map((text, i) => (
            <div key={i} className="px-5 py-5 flex justify-between items-center border-b border-gray-200 active:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-gray-800 font-medium text-[15px]">{text}</span>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* AUTHENTICATION OVERLAY */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/40 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col items-center border border-gray-100">
            <Loader2 className="animate-spin text-[#D71E28]" size={60} />
            <p className="text-[#D71E28] font-black mt-6 tracking-[0.2em] text-xs uppercase">Authenticating</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileLogin;