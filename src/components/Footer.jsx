import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] px-6 py-10  text-sm text-center text-[var(--text)] transition-colors duration-300">
      <div className="mb-2">
        &copy; {new Date().getFullYear()} Mamaearth. All rights reserved.
      </div>
      <div className="flex justify-center gap-4 text-gray-500 dark:text-gray-400">
        <a
          href="#"
          className="hover:text-green-700 transition-colors duration-200"
          aria-label="Privacy Policy"
        >
          Privacy
        </a>
        <a
          href="#"
          className="hover:text-green-700 transition-colors duration-200"
          aria-label="Terms and Conditions"
        >
          Terms
        </a>
        <a
          href="#"
          className="hover:text-green-700 transition-colors duration-200"
          aria-label="Contact us"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
