import React, { useState } from 'react';
import { Loader2, AlertCircle, Search, Lock } from 'lucide-react';

const DesktopLogin = ({ onLoginSuccess, validUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [forgotError, setForgotError] = useState(false);

  const handleSignOn = (e) => {
    e.preventDefault();
    setError('');
    setForgotError(false);

    if (username === validUser.username && password === validUser.password) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoginSuccess();
      }, 5000); // The signature 5-second delay
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  const triggerForgotError = (e) => {
    e.preventDefault();
    setForgotError(true);
    setTimeout(() => setForgotError(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased relative">
      
      {/* 1. TOP UTILITY BAR */}
      <header className="bg-[#D71E28] text-white px-8 py-3 flex justify-between items-center z-20">
        <h1 className="text-2xl font-bold tracking-tighter uppercase">WELLS FARGO</h1>
        <div className="flex items-center space-x-6 text-[13px] font-medium">
          <div className="flex items-center space-x-1 cursor-pointer hover:underline">
            <Lock size={14} className="text-amber-400" />
            <span>Enroll</span>
          </div>
          <span className="cursor-pointer hover:underline">Customer Service</span>
          <span className="cursor-pointer hover:underline">ATMs/Locations</span>
          <span className="cursor-pointer hover:underline">Español</span>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-white text-gray-800 rounded-full px-4 py-1.5 w-48 focus:outline-none text-sm"
            />
            <Search size={16} className="absolute right-3 top-2 text-gray-500" />
          </div>
        </div>
      </header>

      {/* 2. HERO BACKGROUND & LOGIN CARD */}
      <main className="flex-grow relative flex items-center justify-center py-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/10 z-0" />

        {/* The Login Card */}
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-[550px] p-10 z-10 relative">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-8 italic">Good evening</h2>
          
          <form onSubmit={handleSignOn} className="space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-600 p-4 text-red-800 text-sm animate-in fade-in duration-300">
                {error}
              </div>
            )}

            {forgotError && (
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 text-amber-800 text-sm animate-in fade-in duration-300">
                Sorry, Only Authorized users can retrieve information.
              </div>
            )}

            <div className="space-y-6">
              <div className="relative group">
                <label className="absolute left-4 -top-2.5 bg-white px-1 text-xs text-gray-500 transition-all group-focus-within:text-red-600">Username</label>
                <input 
                  type="text"
                  className="w-full border-2 border-gray-200 rounded-lg p-4 focus:outline-none focus:border-red-600 transition-all text-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="relative group">
                <label className="absolute left-4 -top-2.5 bg-white px-1 text-xs text-gray-500 transition-all group-focus-within:text-red-600">Password</label>
                <input 
                  type="password"
                  className="w-full border-2 border-gray-200 rounded-lg p-4 focus:outline-none focus:border-red-600 transition-all text-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" className="absolute right-4 top-4 text-blue-800 font-bold hover:underline">Show</button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-red-600" />
              <span className="text-gray-600 text-sm">Save username</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#D71E28] hover:bg-[#b91922] text-white font-bold py-4 rounded-full text-xl shadow-lg transition-transform active:scale-95"
            >
              Sign on
            </button>

            <div className="text-center">
              <button 
                onClick={triggerForgotError}
                className="text-blue-800 hover:underline text-sm font-medium"
              >
                Forgot username or password?
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* 3. DESKTOP FOOTER */}
      <footer className="bg-white p-10 z-10">
        <div className="max-w-5xl mx-auto border-2 border-gray-100 p-6 rounded-lg mb-8">
          <h4 className="font-bold text-gray-800 mb-4">Investment and Insurance Products are:</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 font-bold">
            <li>Not Insured by the FDIC or Any Federal Government Agency</li>
            <li>Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate</li>
            <li>Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested</li>
          </ul>
        </div>
        <p className="text-center text-xs text-gray-500 mb-6">Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
        <div className="flex flex-wrap justify-center gap-6 text-[11px] text-gray-600 border-t pt-6">
          <span>About Wells Fargo</span>
          <span>Online Access Agreement</span>
          <span>Privacy, Cookies, Security & Legal</span>
          <span>Notice of Data Collection</span>
          <span>Report Email Fraud</span>
          <span>Sitemap</span>
          <span>© 1999 - 2026 Wells Fargo. All rights reserved.</span>
        </div>
      </footer>

      {/* LOADING OVERLAY */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-md">
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin text-[#D71E28]" size={60} />
            <p className="mt-4 text-[#D71E28] font-bold tracking-widest text-lg uppercase">Authenticating...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopLogin;