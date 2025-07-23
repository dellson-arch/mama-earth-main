import React from "react";
import "animate.css";

const benefits = [
  { id: 1, title: "Personalized Care", desc: "Products that suit your skin", icon: "🧴" },
  { id: 2, title: "Free Shipping", desc: "On orders above ₹399", icon: "🚚" },
  { id: 3, title: "Secure Payment", desc: "100% secure transactions", icon: "🔒" },
];

export default function Benefits() {
  return (
    <section className="px-6 py-20 bg-background text-foreground relative z-10 overflow-hidden">
      
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate__animated animate__fadeInUp animate__slow">
        Why Mamaearth?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((b, index) => (
          <div
            key={b.id}
            className={`bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl text-center p-10 border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transform hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
          >
            <div className="text-5xl mb-4 animate-bounce">{b.icon}</div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              {b.title}
            </h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Fixed Background Glow Effects */}
      <div className="absolute -top-32 left-10 w-96 h-96 bg-gradient-to-br from-green-400 to-purple-600 opacity-20 blur-3xl rounded-full pointer-events-none mix-blend-screen dark:mix-blend-normal"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-pink-500 opacity-10 blur-3xl rounded-full pointer-events-none mix-blend-screen dark:mix-blend-normal"></div>
    </section>
  );
}
