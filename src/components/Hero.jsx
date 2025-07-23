import React from "react";
import "animate.css";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-6 bg-background text-foreground relative overflow-hidden">
      
      {/* Floating Color Blobs */}
      <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-30 blur-3xl top-16 left-10 z-0"></div>
      <div className="absolute w-96 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl bottom-16 right-10 z-0"></div>

      {/* Left Content */}
      <div className="max-w-xl z-10 text-center lg:text-left animate__animated animate__fadeInUp animate__slow space-y-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
          Glow Naturally with{" "}
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Mamaearth
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground">
          Discover skincare powered by nature, designed for you. Safe, effective, and eco-conscious.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
            Shop Now
          </button>
          <button className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-white transform hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Visual */}
      <div className="w-full lg:w-[52%] flex justify-center lg:justify-end z-10 mb-10 lg:mb-0">
        <div className="w-[90%] lg:w-full h-72 lg:h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-muted">
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="hidden lg:block w-full h-full object-cover"
          />
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01k0mb9enhejxrgb0r06a82qss%2F1753029685_img_0.webp"
            alt="Hero Product"
            className="block lg:hidden w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
