"use client"

import { useState } from "react"
import { ArrowRight, Sparkles, Leaf, Shield, Award, Star, Heart, ShoppingCart } from "lucide-react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"

const HomePage = ({ onNavigate, addToCart, addToWishlist, wishlistItems = [] }) => {
  const [activeCategory, setActiveCategory] = useState("face-care")

  const featuredProducts = [
    {
      id: 1,
      name: "Vitamin C Face Serum with Vitamin C & Turmeric",
      price: 599,
      originalPrice: 799,
      rating: 4.8,
      reviews: 2847,
      isBestseller: true,
      category: "face-care",
      image: "/placeholder.svg?height=300&width=300&text=Vitamin+C+Serum",
      description: "Brightening serum with natural vitamin C",
      tags: ["Brightening", "Anti-aging"],
    },
    {
      id: 2,
      name: "Onion Hair Oil for Hair Regrowth & Hair Fall Control",
      price: 349,
      originalPrice: 449,
      rating: 4.6,
      reviews: 1923,
      isNew: true,
      category: "hair-care",
      image: "/placeholder.svg?height=300&width=300&text=Onion+Hair+Oil",
      description: "Nourishing hair oil with onion extract",
      tags: ["Hair Growth", "Natural"],
    },
    {
      id: 3,
      name: "Ubtan Face Wash with Turmeric & Saffron",
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 3421,
      isBestseller: true,
      category: "face-care",
      image: "/placeholder.svg?height=300&width=300&text=Ubtan+Face+Wash",
      description: "Natural face wash with turmeric and gram flour",
      tags: ["Cleansing", "Ayurvedic"],
    },
    {
      id: 4,
      name: "Aloe Vera Gel with Pure Aloe Vera & Vitamin E",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 3245,
      isBestseller: true,
      category: "body-care",
      image: "/placeholder.svg?height=300&width=300&text=Aloe+Vera+Gel",
      description: "Pure aloe vera gel for skin and hair",
      tags: ["Soothing", "Multi-purpose"],
    },
  ]

  const categories = [
    {
      id: "face-care",
      name: "Face Care",
      description: "Natural face wash, serums & moisturizers",
      image: "/placeholder.svg?height=200&width=200&text=Face+Care",
      products: 50,
    },
    {
      id: "hair-care",
      name: "Hair Care",
      description: "Onion shampoos, oils & treatments",
      image: "/placeholder.svg?height=200&width=200&text=Hair+Care",
      products: 30,
    },
    {
      id: "body-care",
      name: "Body Care",
      description: "Body lotions, scrubs & moisturizers",
      image: "/placeholder.svg?height=200&width=200&text=Body+Care",
      products: 25,
    },
    {
      id: "baby-care",
      name: "Baby Care",
      description: "Gentle & safe baby products",
      image: "/placeholder.svg?height=200&width=200&text=Baby+Care",
      products: 20,
    },
  ]

  const stats = [
    { label: "Happy Families", value: "2M+", icon: "👨‍👩‍👧‍👦" },
    { label: "Customer Rating", value: "4.8★", icon: "⭐" },
    { label: "Toxin Free", value: "100%", icon: "🌿" },
    { label: "Natural Products", value: "125+", icon: "🧴" },
  ]

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
            <source src="/placeholder.mp4" type="video/mp4" />
            {/* Fallback gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/20" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-black/50 to-gray-900/70" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-6 inline-flex items-center">
                <Sparkles className="h-3 w-3 mr-2" />
                100% Natural & Safe
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Natural Beauty, <span className="gradient-text">Made Safe</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover the goodness of nature with MamaEarth's range of toxin-free, natural products for you and your
                family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => onNavigate("analyzer")} className="btn-primary text-lg px-8 py-4">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Find My Products
                </Button>
                <Button
                  onClick={() => onNavigate("products")}
                  variant="outline"
                  className="text-gray-300 border-gray-700 hover:bg-gray-800 text-lg px-8 py-4"
                >
                  Browse All
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=500&text=Natural+Skincare+Products"
                  alt="Natural skincare products"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full animate-bounce">
                  <Leaf className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-400">Discover natural products for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="glass-effect rounded-xl p-6 text-center card-hover animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onNavigate("products")}
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-20 h-20 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <Badge variant="outline" className="text-green-400 border-green-600">
                  {category.products} Products
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-xl text-gray-400">Our most loved natural beauty essentials</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="glass-effect rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => addToWishlist(product)}
                    className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full shadow-md hover:bg-white/30 transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${isInWishlist(product.id) ? "text-red-500 fill-current" : "text-white"}`}
                    />
                  </button>
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                  {product.isBestseller && (
                    <Badge className="absolute bottom-3 left-3 bg-green-600 text-white text-xs">Bestseller</Badge>
                  )}
                  {product.isNew && (
                    <Badge className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs">New</Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-green-600/20 text-green-400 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-semibold text-white line-clamp-2">{product.name}</h3>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => onNavigate("products")} className="btn-primary text-lg px-8 py-4">
              View All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose MamaEarth?</h2>
            <p className="text-xl text-gray-400">Committed to natural, safe, and effective products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">100% Natural</h3>
              <p className="text-gray-400">Made with natural ingredients, free from harmful chemicals and toxins.</p>
            </div>
            <div className="glass-effect rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Dermatologically Tested</h3>
              <p className="text-gray-400">
                All products are tested by dermatologists to ensure safety and effectiveness.
              </p>
            </div>
            <div className="glass-effect rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Award Winning</h3>
              <p className="text-gray-400">Recognized and trusted by millions of families across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-green-100 mb-8">
            Get the latest updates on new products, offers, and natural beauty tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 text-gray-900"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
