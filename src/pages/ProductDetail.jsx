import React from "react";
import { useParams } from "react-router-dom";
import { productList } from "../components/ProductData"; // Adjust your path
import { useCart } from "../context/cartContext";
import toast from "react-hot-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productList.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-3xl font-bold text-red-500">
        Product Not Found 🚫
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart ✅`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-foreground">
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-green-400 mb-6">{product.price}</p>

          {product.badge && (
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-pink-500 text-white font-semibold text-xs w-max">
              {product.badge}
            </span>
          )}

          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
