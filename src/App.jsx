import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import DarkMode from "./components/Darkmode/DarkMode";
import Waves from "./components/Waves";
import TextCursor from "./components/TextCursor";
import { CartProvider } from "./context/cartContext";
import { SearchProvider } from "./context/searchContext";
import { Toaster } from "react-hot-toast";
import CartModal from "./modals/CartModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <Toaster position="bottom-left" />
        <BrowserRouter>
          <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
            <Waves />
            <div className="relative z-10">
              <CartModal />
              <DarkMode />
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Products />
                      <Benefits />
                      <Testimonials />
                      <Newsletter />
                      <Footer />
                    </>
                  }
                />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </div>
            <TextCursor image="/leaf.png" />
          </div>
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>
  );
}
