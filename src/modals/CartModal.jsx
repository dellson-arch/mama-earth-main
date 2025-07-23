import React from "react";
import { useCart } from "../context/cartContext";

export default function CartModal({ isOpen, onClose }) {
  const { cartItems, removeFromCart, addToCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseInt(item.price.replace("₹", "")) * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50 transition-opacity duration-300">
      <div className="w-[90%] sm:w-[400px] h-full bg-white/80 dark:bg-[#111]/80 backdrop-blur-xl text-black dark:text-white p-6 flex flex-col animate-slide-in-right">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="text-2xl hover:text-red-500">✖️</button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 text-lg font-semibold">🛒 Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-3 items-center border-b pb-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover shadow" />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-green-600">{item.price}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => removeFromCart(item)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 rounded-full font-bold"
                    >-</button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 rounded-full font-bold"
                    >+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t pt-4 mt-4 sticky bottom-0 bg-white/80 dark:bg-[#111]/80 backdrop-blur-lg">
            <div className="flex justify-between mb-4 font-semibold text-lg">
              <span>Total:</span>
              <span>₹{totalPrice}</span>
            </div>
            <button
              className="w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-xl hover:opacity-90 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
