"use client"

import { useState, useMemo } from "react"
import { Button } from "./ui/Button"
import { Input } from "./ui/input"
import { Badge } from "./ui/Badge"
import { Card, CardContent } from "./ui/card"
import {
  Search,
  Grid3X3,
  List,
  Star,
  Heart,
  ShoppingCart,
  SlidersHorizontal,
  X,
  ChevronDown,
  Crown,
  Sparkles,
} from "lucide-react"
import { products } from "../data/products"

export default function ProductsPage({
  onAddToCart,
  onAddToWishlist,
  wishlistItems = [],
  searchQuery = "",
  setSearchQuery,
  onProductClick,
}) {
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("popularity")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedRating, setSelectedRating] = useState(0)

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    { id: "face-care", name: "Face Care", count: products.filter((p) => p.category === "face-care").length },
    { id: "hair-care", name: "Hair Care", count: products.filter((p) => p.category === "hair-care").length },
    { id: "body-care", name: "Body Care", count: products.filter((p) => p.category === "body-care").length },
    { id: "baby-care", name: "Baby Care", count: 0 },
  ]

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesRating = product.rating >= selectedRating

      return matchesSearch && matchesCategory && matchesPrice && matchesRating
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default: // popularity
        filtered.sort((a, b) => b.reviews - a.reviews)
    }

    return filtered
  }, [searchQuery, selectedCategory, priceRange, selectedRating, sortBy])

  const ProductCard = ({ product }) => {
    const isInWishlist = wishlistItems.some((item) => item.id === product.id)

    return (
      <Card className="group bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        <div className="relative">
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
              onClick={() => onProductClick && onProductClick(product)}
            />
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-1">
            {product.discount && (
              <Badge className="bg-red-500 text-white font-bold text-xs px-2 py-1 shadow-lg">
                {product.discount}% OFF
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-xs px-2 py-1 shadow-lg">
                <Crown className="h-3 w-3 mr-1" />
                Bestseller
              </Badge>
            )}
            {product.isNew && (
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xs px-2 py-1 shadow-lg">
                <Sparkles className="h-3 w-3 mr-1" />
                New
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => onAddToWishlist(product)}
            className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
              isInWishlist
                ? "bg-red-500 text-white scale-110"
                : "bg-white/10 backdrop-blur-md text-gray-300 hover:bg-red-500 hover:text-white hover:scale-110"
            }`}
          >
            <Heart className={`h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
          </button>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3
                className="font-bold text-white text-lg mb-1 line-clamp-2 cursor-pointer hover:text-green-400 transition-colors"
                onClick={() => onProductClick && onProductClick(product)}
              >
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-600/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold text-white ml-1">{product.rating}</span>
              </div>
              <span className="text-gray-500 text-sm">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black text-green-400">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-lg">₹{product.originalPrice}</span>
              )}
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={() => onAddToCart(product)}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-4">All Products</h1>
          <p className="text-xl text-gray-400">Discover our complete range of natural, toxin-free products</p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-gray-800/50 border-2 border-gray-600 rounded-xl focus:border-green-500 focus:ring-0 text-white placeholder-gray-400"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800/50 border-2 border-gray-600 rounded-xl px-6 py-3 pr-10 text-white focus:border-green-500 focus:ring-0"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/5 backdrop-blur-md rounded-xl p-1 border border-gray-600/50">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  viewMode === "grid" ? "bg-green-500 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  viewMode === "list" ? "bg-green-500 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            {/* Filters Toggle */}
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="border-2 border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 hover:bg-green-500/10 px-6 py-3 rounded-xl bg-transparent"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Filters</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">Categories</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                              selectedCategory === category.id
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "text-gray-300 hover:bg-gray-700/50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{category.name}</span>
                              <span className="text-sm">({category.count})</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">Price Range</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>₹{priceRange[0]}</span>
                          <span>₹{priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="2000"
                          step="50"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                          className="w-full slider"
                        />
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">Minimum Rating</h4>
                      <div className="space-y-2">
                        {[4, 3, 2, 1, 0].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => setSelectedRating(rating)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                              selectedRating === rating
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "text-gray-300 hover:bg-gray-700/50"
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span>{rating > 0 ? `${rating}+ Stars` : "All Ratings"}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-400">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div
                className={`grid gap-8 ${
                  viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                }`}
              >
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700/50">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
                <Button
                  onClick={() => {
                    setSearchQuery && setSearchQuery("")
                    setSelectedCategory("all")
                    setPriceRange([0, 2000])
                    setSelectedRating(0)
                  }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
