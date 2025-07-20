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

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Waves /> 
      <div className="relative z-10">
        <DarkMode />
        <Navbar />
        <Hero />
        <Products />
        <Benefits />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
      {/* ✅ Pass image or emoji */}
      <TextCursor image="/leaf.png" /> 
    </div>
  );
}
