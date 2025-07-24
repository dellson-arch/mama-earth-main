"use client"

import { useState, useMemo } from "react"
import { Filter, Grid, List, Search, Star, Heart, ShoppingCart } from "lucide-react"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Badge } from "./ui/Badge"

const ProductsPage = ({ onAddToCart, onAddToWishlist, wishlistItems = [], searchQuery = "", setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [sortBy, setSortBy] = useState("popularity")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Sample products data
  const allProducts = [
    {
      id: 1,
      name: "Vitamin C Face Serum with Vitamin C & Turmeric",
      price: 599,
      originalPrice: 799,
      image: "/placeholder.svg?height=300&width=300&text=Vitamin+C+Serum",
      category: "face-care",
      rating: 4.5,
      reviews: 1250,
      description: "Brightens skin and reduces dark spots with natural Vitamin C",
      ingredients: ["Vitamin C", "Turmeric", "Hyaluronic Acid"],
      benefits: ["Brightening", "Anti-aging", "Hydrating"],
    },
    {
      id: 2,
      name: "Onion Hair Oil for Hair Regrowth & Hair Fall Control",
      price: 399,
      originalPrice: 499,
      image: "/placeholder.svg?height=300&width=300&text=Onion+Hair+Oil",
      category: "hair-care",
      rating: 4.3,
      reviews: 890,
      description: "Reduces hair fall and promotes hair growth naturally",
      ingredients: ["Onion Extract", "Coconut Oil", "Curry Leaves"],
      benefits: ["Hair Growth", "Reduces Hair Fall", "Strengthening"],
    },
    {
      id: 3,
      name: "Tea Tree Face Wash with Tea Tree & Neem",
      price: 249,
      originalPrice: 299,
      image: "/placeholder.svg?height=300&width=300&text=Tea+Tree+Face+Wash",
      category: "face-care",
      rating: 4.4,
      reviews: 2100,
      description: "Deep cleanses and controls acne with natural tea tree",
      ingredients: ["Tea Tree Oil", "Neem", "Aloe Vera"],
      benefits: ["Acne Control", "Deep Cleansing", "Oil Control"],
    },
    {
      id: 4,
      name: "Argan Hair Mask with Argan Oil & Vanilla",
      price: 449,
      originalPrice: 599,
      image: "/placeholder.svg?height=300&width=300&text=Argan+Hair+Mask",
      category: "hair-care",
      rating: 4.6,
      reviews: 750,
      description: "Deep conditioning mask for dry and damaged hair",
      ingredients: ["Argan Oil", "Vanilla", "Shea Butter"],
      benefits: ["Deep Conditioning", "Frizz Control", "Shine Enhancement"],
    },
    {
      id: 5,
      name: "Ubtan Face Pack with Turmeric & Saffron",
      price: 299,
      originalPrice: 399,
      image: "/placeholder.svg?height=300&width=300&text=Ubtan+Face+Pack",
      category: "face-care",
      rating: 4.2,
      reviews: 1500,
      description: "Traditional face pack for glowing and radiant skin",
      ingredients: ["Turmeric", "Saffron", "Chickpea Flour"],
      benefits: ["Glowing Skin", "Tan Removal", "Natural Glow"],
    },
    {
      id: 6,
      name: "Rice Water Hair Conditioner with Rice Water & Keratin",
      price: 349,
      originalPrice: 449,
      image: "/placeholder.svg?height=300&width=300&text=Rice+Water+Conditioner",
      category: "hair-care",
      rating: 4.5,
      reviews: 980,
      description: "Smoothens and strengthens hair with rice water goodness",
      ingredients: ["Rice Water", "Keratin", "Coconut Milk"],
      benefits: ["Hair Smoothening", "Strengthening", "Shine"],
    },
    {
      id: 7,
      name: "Charcoal Face Mask with Charcoal & Coffee",
      price: 199,
      originalPrice: 249,
      image: "/placeholder.svg?height=300&width=300&text=Charcoal+Face+Mask",
      category: "face-care",
      rating: 4.1,
      reviews: 1800,
      description: "Detoxifies and purifies skin with activated charcoal",
      ingredients: ["Activated Charcoal", "Coffee", "Clay"],
      benefits: ["Detoxifying", "Pore Cleansing", "Oil Control"],
    },
    {
      id: 8,
      name: "Coconut Body Lotion with Coconut Oil & Shea Butter",
      price: 299,
      originalPrice: 399,
      image: "/placeholder.svg?height=300&width=300&text=Coconut+Body+Lotion",
      category: "body-care",
      rating: 4.3,
      reviews: 650,
      description: "Deeply moisturizes and nourishes skin all day long",
      ingredients: ["Coconut Oil", "Shea Butter", "Vitamin E"],
      benefits: ["Deep Moisturizing", "Nourishing", "Long-lasting"],
    },
  ]

  const categories = [
    { id: "all", name: "All Products", count: allProducts.length },
    { id: "face-care", name: "Face Care", count: allProducts.filter((p) => p.category === "face-care").length },
    { id: "hair-care", name: "Hair Care", count: allProducts.filter((p) => p.category === "hair-care").length },
    { id: "body-care", name: "Body Care", count: allProducts.filter((p) => p.category === "body-care").length },
    { id: "baby-care", name: "Baby Care", count: allProducts.filter((p) => p.category === "baby-care").length },
  ]

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

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
        filtered.sort((a, b) => b.id - a.id)
        break
      default: // popularity
        filtered.sort((a, b) => b.reviews - a.reviews)
    }

    return filtered
  }, [selectedCategory, searchQuery, priceRange, sortBy])

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  const handleAddToWishlist = (product) => {
    if (onAddToWishlist) {
      onAddToWishlist(product)
    }
  }

  const ProductCard = ({ product }) => (
    <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice > product.price && (
          <Badge className="absolute top-2 left-2 bg-red-600 text-white">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </Badge>
        )}
        <button
          onClick={() => handleAddToWishlist(product)}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            isInWishlist(product.id) ? "bg-red-500 text-white" : "bg-black/50 text-white hover:bg-red-500"
          }`}
        >
          <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-white line-clamp-2 group-hover:text-green-400 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center space-x-1">
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
          <span className="text-sm text-gray-400">({product.rating})</span>
          <span className="text-xs text-gray-500">• {product.reviews} reviews</span>
        </div>

        <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>

        <div className="flex flex-wrap gap-1">
          {product.benefits.slice(0, 2).map((benefit, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-green-600/20 text-green-400">
              {benefit}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          <Badge variant="secondary" className="text-xs bg-green-600 text-white">
            Free Shipping
          </Badge>
        </div>

        <Button onClick={() => handleAddToCart(product)} className="w-full bg-green-600 hover:bg-green-700 text-white">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">All Products</h1>
          <p className="text-gray-300">Discover our complete range of natural beauty products</p>
          {searchQuery && (
            <p className="text-green-400 mt-2">
              Showing results for "{searchQuery}" ({filteredProducts.length} products found)
            </p>
          )}
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? "bg-green-600 text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-xs">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-20 bg-gray-800 border-gray-700 text-white"
                  />
                  <span className="text-gray-400">-</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 2000])}
                    className="w-20 bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPriceRange([0, 500])}
                    className="text-gray-300 border-gray-700 hover:bg-gray-800"
                  >
                    Under ₹500
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPriceRange([500, 1000])}
                    className="text-gray-300 border-gray-700 hover:bg-gray-800"
                  >
                    ₹500-1000
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden text-gray-300 border-gray-700 hover:bg-gray-800"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <span className="text-gray-300">{filteredProducts.length} products found</span>
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>

                <div className="flex border border-gray-700 rounded-md">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-green-600 text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-green-600 text-white" : "text-gray-400 hover:text-white"}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg mb-4">No products found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all")
                    setPriceRange([0, 2000])
                    if (setSearchQuery) setSearchQuery("")
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
