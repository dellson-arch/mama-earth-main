import React from "react";

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
    <section className="px-6 py-10 bg-[var(--bg)] transition-colors duration-500">
      <h2 className="text-xl font-bold mb-6 text-[var(--text)]">
        Happy Customers
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-[var(--bg)] text-[var(--text)] rounded-xl shadow p-6 transition-colors duration-500"
          >
            <p className="italic text-sm mb-2">"{r.comment}"</p>
            <h4 className="text-sm font-semibold">– {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
