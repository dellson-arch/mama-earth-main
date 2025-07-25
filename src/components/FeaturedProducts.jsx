"use client"

import { useState } from "react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { Card, CardContent } from "./ui/card"
import { Star, Heart, ShoppingCart, ArrowLeft, ArrowRight, Zap, Award } from "lucide-react"
import { products } from "../data/products"

const FeaturedProducts = ({ onAddToCart, onAddToWishlist, wishlistItems = [], onProductClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredProducts = products.filter((product) => product.featured)
  const productsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + productsPerView >= featuredProducts.length ? 0 : prev + productsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, featuredProducts.length - productsPerView) : prev - productsPerView,
    )
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  const handleWishlistToggle = (product) => {
    if (onAddToWishlist) {
      onAddToWishlist(product)
    }
  }

  const handleProductClick = (productId) => {
    if (onProductClick) {
      onProductClick(productId)
    }
  }

  const visibleProducts = featuredProducts.slice(currentIndex, currentIndex + productsPerView)

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="glass-effect border-gray-700 text-gray-300 hover:text-white hover:border-green-500 disabled:opacity-50 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex + productsPerView >= featuredProducts.length}
            className="glass-effect border-gray-700 text-gray-300 hover:text-white hover:border-green-500 disabled:opacity-50"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-sm text-gray-400">
          {currentIndex + 1}-{Math.min(currentIndex + productsPerView, featuredProducts.length)} of{" "}
          {featuredProducts.length}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProducts.map((product, index) => (
          <Card
            key={product.id}
            className="glass-effect border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-transparent group cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <CardContent className="p-0">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=300&width=300&text=" + encodeURIComponent(product.name)
                  }}
                />

                {/* Discount Badge */}
                {product.discount > 0 && (
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                    {product.discount}% OFF
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleWishlistToggle(product)
                    }}
                    className={`glass-effect border border-gray-700/50 hover:border-red-500 ${
                      isInWishlist(product.id) ? "text-red-500 bg-red-500/20" : "text-gray-300 hover:text-red-500"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                  </Button>
                </div>

                {/* Featured Badge */}
                <div className="absolute bottom-3 left-3">
                  <Badge className="glass-effect text-yellow-400 border-yellow-500/30 px-2 py-1 text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    Bestseller
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({product.reviews})</span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-black text-green-400">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>

                {/* Key Benefits */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <Zap className="h-4 w-4 mr-2 text-green-400" />
                    {product.keyBenefits[0]}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleAddToCart(product)
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: Math.ceil(featuredProducts.length / productsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * productsPerView)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / productsPerView) === index
                ? "bg-green-500 w-8"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
