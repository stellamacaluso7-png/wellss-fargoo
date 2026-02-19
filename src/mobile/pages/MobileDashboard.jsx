import React, { useState } from 'react';
import { 
  User, Menu, Search, ChevronRight, Home, ArrowLeftRight, 
  DollarSign, Landmark, X, GraduationCap, ChevronLeft, MoreVertical, PlusCircle, AlertCircle
} from 'lucide-react';
// images used 

import Johnson from "../../assets/john.jpeg";

const MobileDashboard = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [popup, setPopup] = useState(null);

  const triggerTaxLock = () => {
    setPopup("Tax need to be completed before performing any feature");
    setTimeout(() => setPopup(null), 3500);
  };

  const triggerAuthLock = () => {
    setPopup("Not Authorized to perform any action here");
    setTimeout(() => setPopup(null), 3500);
  };

  return (
    <div className="relative min-h-screen bg-white font-sans pb-20 overflow-x-hidden antialiased">
      
      {/* ANIMATION STYLE FOR TAX TICKER */}
      <style>{`
        @keyframes taxSlide {
          0% { transform: translateX(0); color: #ef4444; }
          25% { color: #3b82f6; }
          50% { transform: translateX(20px); color: #10b981; }
          75% { color: #f59e0b; }
          100% { transform: translateX(0); color: #ef4444; }
        }
        .animate-tax-ticker { animation: taxSlide 3s ease-in-out infinite; }
      `}</style>

      {/* 1. LEFT PROFILE DRAWER (Slides from Left) */}
      <div className={`fixed inset-y-0 left-0 w-72 bg-white z-[70] transform transition-transform duration-500 shadow-2xl ${isProfileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b flex flex-col items-center bg-gray-50">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D71E28] mb-3">
            <img src={Johnson} alt="Profile" />
          </div>
          <h2 className="font-bold text-gray-800">Major Chris JOhnson.M</h2>
          <p className="text-[10px] text-gray-500"><b>****5489</b></p>
          <X className="absolute top-4 right-4 text-gray-400" onClick={() => setIsProfileOpen(false)} />
        </div>
        <div className="p-4 space-y-6">
          <div className="space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase">Profile</p>
            {['Contact Information', 'Language Preference', 'Push Notifications', 'Manage Banking Alerts'].map(item => (
              <div key={item} onClick={triggerAuthLock} className="text-sm text-gray-700 flex justify-between items-center cursor-pointer">
                {item} <ChevronRight size={14} className="text-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. RIGHT MENU DRAWER (Slides from Right) */}
      <div className={`fixed inset-y-0 right-0 w-full bg-[#D71E28] z-[70] transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <header className="p-4 flex justify-between items-center border-b border-white/20">
           <User className="text-white border border-white rounded-full p-1" size={28} />
           <h1 className="text-white font-bold text-xl tracking-tighter uppercase">WELLS FARGO</h1>
           <X className="text-white" size={30} onClick={() => setIsMenuOpen(false)} />
        </header>
        <div className="p-4 flex flex-col text-white">
          <button onClick={onLogout} className="py-5 border-b border-white/10 text-left font-bold text-lg">Sign Off</button>
          {['Account Summary', 'Deposit Checks', 'Transfer & Pay', 'Brokerage'].map(item => (
            <div key={item} onClick={triggerTaxLock} className="py-5 border-b border-white/10 flex justify-between items-center">
              <span>{item}</span> <ChevronRight size={18} className="opacity-50" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. POP-UP ALERT */}
      {popup && (
        <div className="fixed top-24 inset-x-4 z-[100] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-black/90 text-white p-4 rounded-lg shadow-2xl flex items-center space-x-3 border-l-4 border-amber-500">
            <AlertCircle className="text-amber-500 shrink-0" />
            <p className="text-sm font-bold">{popup}</p>
          </div>
        </div>
      )}

      {/* --- DASHBOARD UI --- */}
      <header className="bg-[#D71E28] text-white p-4 flex justify-between items-center sticky top-0 z-40">
        <User size={28} className="border border-white rounded-full p-1 cursor-pointer" onClick={() => setIsProfileOpen(true)} />
        <h1 className="text-xl font-bold tracking-tighter uppercase">WELLS FARGO</h1>
        <Menu size={28} className="cursor-pointer" onClick={() => setIsMenuOpen(true)} />
      </header>

      {/* ACCOUNT SUMMARY (Matching image a.PNG) */}
      <div className="p-5 border-b border-gray-200">
        <p className="text-center text-gray-500 text-[13px] mb-4 font-serif italic">Account Summary</p>
        <div className="flex justify-between items-start">
          <div onClick={triggerTaxLock}>
            <h2 className="text-[#D71E28] font-bold text-lg leading-tight uppercase">EVERYDAY CHECKING</h2>
            <p className="text-xs text-gray-500">...5489</p>
          </div>
          <div className="text-right flex items-start space-x-1">
            <div onClick={triggerTaxLock}>
                <p className="text-[15px] font-bold text-gray-800"><b>$700,340,458.00</b></p>
               
                <p className="text-[10px] text-gray-400 uppercase font-bold">Available balance</p>
                {/* MOVING TAX TEXT */}
                <div className="h-5 overflow-hidden mt-1">
                  <p className="text-[12px] font-bold animate-tax-ticker">TAX: $8,000</p>
                </div>
            </div>
            <MoreVertical size={18} className="text-gray-300 mt-1" />
          </div>
        </div>
        <div onClick={triggerTaxLock} className="mt-5 flex items-center justify-center text-blue-800 text-sm font-medium space-x-2">
           <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
             <DollarSign size={12} />
           </div>
           <span className="underline">Open a Way2Save® savings today</span>
        </div>
      </div>

      {/* ACTIONS (Matching image a.PNG) */}
      <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50">
        {[
          { icon: <Landmark size={22}/>, label: "Card-Free ATM" },
          { icon: <ArrowLeftRight size={22}/>, label: "Send Money with Zelle®" },
          { icon: <DollarSign size={22}/>, label: "Deposit Checks" }
        ].map((item, i) => (
          <div key={i} onClick={triggerTaxLock} className="flex flex-col items-center justify-center p-4 border-r border-gray-200 last:border-0">
            <div className="text-gray-500 mb-2">{item.icon}</div>
            <span className="text-[9px] text-center font-bold text-gray-500 uppercase leading-tight">{item.label}</span>
          </div>
        ))}
      </div>

      <div onClick={triggerTaxLock} className="bg-gray-700 text-white p-2.5 text-center text-[11px] font-medium flex items-center justify-center">
          View Your FICO® Credit Score <ChevronRight size={14} className="ml-1" />
      </div>

      {/* TRANSACTIONS (Matching image dddddd.PNG) */}
      <div className="mt-4">
        <div className="flex bg-gray-800 text-white">
          <div className="p-3 border-r border-gray-700"><Search size={20}/></div>
          <div className="flex-1 text-center p-3 border-b-4 border-amber-500 font-bold text-amber-500 text-sm">Transactions</div>
          <div className="flex-1 text-center p-3 text-gray-400 text-sm" onClick={triggerTaxLock}>Deposits</div>
        </div>
        <div className="p-4">
          <p className="text-center font-bold text-gray-800 text-[11px] border-b border-dotted border-gray-300 pb-1 mb-4">Pending Transactions</p>
          {[
            { name: "PURCHASE ROKU FOR DIS", date: "05/26/20", amount: "$6.99" },
            { name: "PURCHASE NETFLIX.COM", date: "05/26/20", amount: "$12.99" },
            { name: "PURCHASE HLU*HULU", date: "05/26/20", amount: "$11.99" },
            { name: "PURCHASE AMAZON PRIME", date: "05/26/20", amount: "$14.00" },
          ].map((t, i) => (
            <div key={i} onClick={triggerTaxLock} className="flex justify-between items-center py-4 border-b border-gray-100">
               <div className="flex items-center space-x-3">
                 <PlusCircle size={22} className="text-gray-300" />
                 <div>
                   <p className="text-[11px] font-bold text-gray-800">{t.name}</p>
                   <p className="text-[10px] text-gray-400">{t.date}</p>
                 </div>
               </div>
               <span className="text-sm font-bold text-gray-800">{t.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* COLLEGE SLIDER (Matching image a.PNG) */}
      <div className="mt-4 bg-[#7B4D99] p-10 text-center text-white relative" onClick={triggerTaxLock}>
         <GraduationCap className="mx-auto mb-4" size={36} />
         <h3 className="text-2xl font-serif italic">Paying for college?</h3>
         <p className="text-sm mt-2 opacity-90">Our private student loans may help</p>
         <button className="mt-6 bg-[#9B6DBA] px-10 py-3 font-bold text-sm rounded shadow-sm">Learn More</button>
      </div>

      <div className="p-5 text-gray-500 text-[10px] leading-relaxed bg-gray-50">
        <p className="font-bold text-red-600">* Account Disclosures</p>
        <p className="mt-2">Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.</p>
        <p className="mt-1">Equal Housing Lender</p>
      </div>

      {/* BOTTOM NAV (Matching image sssssssss.PNG) */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-300 flex justify-around p-2 z-50">
        {[
          { icon: <Home size={24}/>, label: "Accounts", active: true },
          { icon: <ArrowLeftRight size={24}/>, label: "Transfer" },
          { icon: <DollarSign size={24}/>, label: "Zelle®" },
          { icon: <Landmark size={24}/>, label: "Deposit" },
          { icon: <Menu size={24}/>, label: "Menu" }
        ].map((item, i) => (
          <div key={i} onClick={triggerTaxLock} className={`flex flex-col items-center ${item.active ? 'text-[#D71E28]' : 'text-gray-400'}`}>
            {item.icon}
            <span className="text-[9px] font-bold mt-1 uppercase">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* BACKGROUND OVERLAY */}
      {(isMenuOpen || isProfileOpen) && (
        <div className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm" onClick={() => {setIsMenuOpen(false); setIsProfileOpen(false);}} />
      )}
    </div>
  );
};

export default MobileDashboard;