"use client"

import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"

const WishlistPage = ({ wishlistItems = [], onRemoveFromWishlist, onAddToCart, onProductClick, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center space-x-4">
          <Button onClick={onBack} variant="ghost" className="text-gray-400 hover:text-white">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">My Wishlist</h1>
            <p className="text-gray-400">Your favorite products saved for later</p>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6">Start adding products you love!</p>
            <Button onClick={onBack} className="bg-green-600 hover:bg-green-700 text-white">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <div
                key={product.wishlistId || product.id}
                className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer"
                    onClick={() => onProductClick && onProductClick(product)}
                  />
                  <button
                    onClick={() => onRemoveFromWishlist(product.id)}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  {product.discount && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">-{product.discount}%</Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <h3
                    className="font-semibold text-white line-clamp-2 cursor-pointer hover:text-green-400 transition-colors"
                    onClick={() => onProductClick && onProductClick(product)}
                  >
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-green-400">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                    {product.rating && (
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-300">{product.rating}</span>
                      </div>
                    )}
                  </div>

                  {product.inStock ? (
                    <Button
                      onClick={() => onAddToCart && onAddToCart(product)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-gray-600 text-gray-400 cursor-not-allowed">
                      Out of Stock
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default WishlistPage
