import React from "react";
import "animate.css";

const reviews = [
  {
    id: 1,
    name: "Aarav",
    comment: "My hair feels so soft after using their Onion Oil!",
  },
  {
    id: 2,
    name: "Sneha",
    comment: "I love how fresh my skin feels. Glow Serum is 🔥.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-16 bg-background text-foreground relative z-10 overflow-hidden">
      
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate__animated animate__fadeInUp animate__slow">
        Happy Customers
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((r, index) => (
          <div
            key={r.id}
            className={`bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-xl text-center transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
          >
            <p className="italic text-lg mb-4 text-muted-foreground">
              “{r.comment}”
            </p>
            <h4 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              – {r.name}
            </h4>
          </div>
        ))}
      </div>

      {/* Decorative Gradient Blobs with Fix */}
      <div className="absolute -top-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-3xl opacity-20 pointer-events-none mix-blend-screen dark:mix-blend-normal"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none mix-blend-screen dark:mix-blend-normal"></div>
    </section>
  );
}
