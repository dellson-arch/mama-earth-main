// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        
        <div>
          <h3 className="font-bold text-lg mb-2">Mamaearth</h3>
          <p className="text-sm max-w-xs">Made with ❤️ for healthy skin & hair. 100% safe, natural, cruelty-free products.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">Products</a></li>
            <li><a href="#" className="hover:text-green-600">About Us</a></li>
            <li><a href="#" className="hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: support@mamaearth.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">Address: New Delhi, India</p>
        </div>
      </div>
      <div className="text-center text-xs mt-6 text-gray-500">
        © {new Date().getFullYear()} Mamaearth. All rights reserved.
      </div>
    </footer>
  );
}
