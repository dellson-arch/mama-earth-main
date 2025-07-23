"use client"

import { Button } from "../components/ui/button"
import { Heart, ArrowLeft } from "lucide-react"
import ProductCard from "./ProductCard"

export default function WishlistPage({ setCurrentPage, wishlist, toggleWishlist, addToCart }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-green-900 py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => setCurrentPage("home")}
            className="mb-4 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">My Wishlist</h1>
          <p className="text-gray-300 text-center mt-2">Your favorite products saved for later</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 mx-auto mb-4 text-gray-600" />
            <h2 className="text-2xl font-bold text-white mb-4">Your wishlist is empty</h2>
            <p className="text-gray-400 mb-8">Start adding products you love to your wishlist</p>
            <Button onClick={() => setCurrentPage("products")} className="bg-green-600 hover:bg-green-700">
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                isInWishlist={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
