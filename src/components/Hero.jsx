import React from "react";

export default function Hero() {
  return (
    <section className="w-full h-screen flex items-center justify-between px-6 lg:px-20 py-6 bg-background text-foreground relative overflow-hidden">
      {/* Left Content */}
      <div className="max-w-xl z-10">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
          Glow Naturally with <span className="text-green-500">Mamaearth</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground mb-6">
          Discover skincare powered by nature, designed for you. Safe, effective, and eco-conscious.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg transition-all shadow-md">
            Shop Now
          </button>
          <button className="border border-green-500 text-green-500 px-6 py-3 rounded-full text-lg hover:bg-green-500 hover:text-white transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Visual (Video or Image) */}
      <div className="hidden lg:flex w-[52%] justify-end z-0">
        <div className="w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-muted">
          <video
            src="/your-video.mp4" // Replace with actual path
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Optional gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
