import React from "react";
import DarkMode from "../components/Darkmode/DarkMode"; // ✅ Import added

function LeafIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 5.5-2 11-11 11 .8 1.8 2.2 3.4 4 5 .4 2.1-1.2 4.3-2.9 4.3-.9 0-1.7-.5-2.7-1.3A9 9 0 0 1 11 20Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6 2.18-.45 5.87-1.25 8.68-.5 2.76.76 5.08 3.09 5.08 6" />
    </svg>
  );
}

function NavButton({ icon, label, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 hover:text-green-700 transition-colors duration-200 ${className}`}
      aria-label={label}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}

export default function Navbar() {
  return (
    <nav className="w-full bg-[var(--bg)] shadow-md p-4 flex items-center justify-between px-6 sticky top-0 z-50 transition-colors duration-300">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <LeafIcon className="w-8 h-8 text-green-600 transition-colors duration-300" />
        <span className="text-2xl font-bold text-green-600 transition-colors duration-300">
          mamaearth
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6 max-w-lg">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm bg-[var(--bg)] text-[var(--text)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
        />
      </div>

      {/* Navigation Buttons + Dark Mode */}
      <div className="flex gap-4 text-sm items-center">
        <NavButton
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A4.992 4.992 0 0112 16c1.657 0 3.156.805 4.061 2.066M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          label="Sign In"
        />

        <NavButton
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h11.4M7 13H5.4M16 16a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          }
          label="Cart"
        />

        {/* ✅ Dark Mode Toggle Button */}
        <div className="ml-7">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}
