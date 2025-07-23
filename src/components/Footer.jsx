"use client"
import { Leaf, Mail, Phone } from "lucide-react"

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => setCurrentPage("home")}>
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">MamaEarth</span>
            </div>
            <p className="text-gray-400 mb-4">Natural beauty products made with love for you and your family.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setCurrentPage("products")}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("wishlist")}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Wishlist
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Contact Us</span>
              </li>
              <li>
                <span className="text-gray-400">FAQ</span>
              </li>
              <li>
                <span className="text-gray-400">Shipping Info</span>
              </li>
              <li>
                <span className="text-gray-400">Returns</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">hello@mamaearth.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">1800-123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">© 2024 MamaEarth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
