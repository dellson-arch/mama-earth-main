import React from "react";

const productList = [
  { id: 1, name: "Onion Hair Oil", price: "₹419", image: "./onionoil.webp" },
  { id: 2, name: "Vitamin C Face Wash", price: "₹299", image: "/images/product2.png" },
  { id: 3, name: "Ubtan Face Mask", price: "₹349", image: "/images/product3.png" },
  { id: 4, name: "Charcoal Face Scrub", price: "₹279", image: "/images/product4.png" },
  { id: 5, name: "Tea Tree Shampoo", price: "₹325", image: "/images/product5.png" },
  { id: 6, name: "Aloe Vera Gel", price: "₹199", image: "/images/product6.png" },
  { id: 7, name: "Sunscreen SPF50+", price: "₹449", image: "/images/product7.png" },
  { id: 8, name: "Lip Balm Strawberry", price: "₹149", image: "/images/product8.png" },
];

export default function Products() {
  return (
    <section className="px-6 md:px-12 py-20 bg-[var(--bg)]">
      <h2 className="text-2xl font-bold mb-12 text-center text-[var(--accent)]">
        Best Sellers
      </h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {productList.map((product) => (
          <div
            key={product.id}
            className="group relative w-[240px] transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <div
              className="p-5 rounded-2xl bg-[var(--card)] text-[var(--text)] 
              border border-transparent group-hover:border-[var(--accent)] 
              shadow-lg group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] 
              transition-all duration-300"
            >
              {/* ✅ Added wrapper for image */}
              <div className="w-full h-40 mb-4 rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-base font-semibold mb-1">{product.name}</h4>
              <p className="text-[var(--price)] font-semibold text-sm mb-3">{product.price}</p>

              <button className="w-full bg-[var(--cta)] hover:brightness-110 text-white font-semibold rounded-full py-2 text-sm transition-shadow shadow hover:shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 