import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== MOBILE HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-700 text-white lg:hidden">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Profile */}
          <UserCircle className="w-7 h-7" />

          {/* Bank Name */}
          <h1 className="absolute left-1/2 -translate-x-1/2 font-semibold tracking-wide">
            BANKNAME
          </h1>

          {/* Hamburger */}
          <button onClick={() => setOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* ===== MOBILE SLIDE MENU ===== */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Menu */}
          <div className="w-4/5 max-w-xs bg-red-700 text-white p-6">
            <div className="flex justify-end mb-6">
              <X
                className="w-6 h-6 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <nav className="space-y-6 text-base">
              <MenuItem label="Account Summary" />
              <MenuItem label="Deposit Checks" />
              <MenuItem label="Transfer & Pay" />
              <MenuItem label="Account Services" />
              <MenuItem label="Brokerage" />
              <MenuItem label="Account Details & Notifications" />
              <MenuItem label="Financial Planning" />
              <MenuItem label="Security Center" />
              <MenuItem label="Customer Support" />
            </nav>
          </div>
        </div>
      )}

      {/* ===== DESKTOP HEADER ===== */}
      <header className="hidden lg:block bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <h1 className="font-semibold tracking-wide text-lg">
              BANKNAME
            </h1>

            {/* Desktop Menus */}
            <nav className="flex items-center gap-8 text-sm">
              <DesktopMenu title="Accounts" />
              <DesktopMenu title="Transfer & Pay" />
              <DesktopMenu title="Plan & Learn" />
              <DesktopMenu title="Security" />
              <DesktopMenu title="Support" />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

const MenuItem = ({ label }) => (
  <div className="border-b border-white/20 pb-2 cursor-pointer">
    {label}
  </div>
);

const DesktopMenu = ({ title }) => (
  <div className="relative group cursor-pointer">
    <span>{title}</span>

    {/* Dropdown */}
    <div className="absolute left-0 top-full mt-3 hidden group-hover:block bg-white text-black rounded-xl shadow-lg p-4 w-56">
      <ul className="space-y-2 text-sm">
        <li className="hover:text-red-700">Option One</li>
        <li className="hover:text-red-700">Option Two</li>
        <li className="hover:text-red-700">Option Three</li>
      </ul>
    </div>
  </div>
);

export default Header;
