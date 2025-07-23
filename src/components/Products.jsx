import React from "react";
import { useCart } from "../context/cartContext";
import { useSearch } from "../context/searchContext";
import toast from "react-hot-toast";

const productList = [
  { id: 1, name: "Onion Hair Oil", price: "₹419", image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0mb9enhejxrgb0r06a82qss%2F1753029685_img_0.webp", badge: "Best Seller" },
  { id: 2, name: "Vitamin C Face Wash", price: "₹299", image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0mamnhjegk8yb2bkegvh9dq%2F1753029015_img_0.webp", badge: "Glow" },
  { id: 3, name: "Ubtan Face Mask", price: "₹349", image: "https://videos.openai.com/vg-assets/assets%2Ftask_01k0mbk59hedtraas8pgay9nbs%2F1753030019_img_0.webp", badge: "New" },
  { id: 4, name: "Charcoal Face Scrub", price: "₹279", image: "/images/product4.png" },
  { id: 5, name: "Tea Tree Shampoo", price: "₹325", image: "/images/product5.png" },
  { id: 6, name: "Aloe Vera Gel", price: "₹199", image: "/images/product6.png" },
  { id: 7, name: "Sunscreen SPF50+", price: "₹449", image: "/images/product7.png" },
  { id: 8, name: "Lip Balm Strawberry", price: "₹149", image: "/images/product8.png" },
];

export default function Products() {
  const { addToCart } = useCart();
  const { searchQuery } = useSearch();

  const filteredProducts = productList.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart ✅`);
  };

  return (
    <section id="products-section" className="px-6 md:px-12 py-20 bg-background text-foreground">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
        Best Sellers
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative w-[240px] rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300 shadow-lg bg-white/5 backdrop-blur-lg border border-white/10"
            >
              {product.badge && (
                <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                  {product.badge}
                </span>
              )}
              <div className="p-5 text-center">
                <div className="w-full h-44 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain scale-100 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
                <p className="text-green-400 font-semibold text-sm mb-4">{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white font-semibold rounded-full py-2 text-sm shadow hover:shadow-xl transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground text-lg">No products found.</p>
        )}
      </div>
    </section>
  );
}
