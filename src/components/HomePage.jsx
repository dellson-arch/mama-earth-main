"use client"

import { useState, useEffect } from "react"
import { Badge } from "./ui/Badge"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/Button"
import {
  Star,
  Crown,
  TrendingUp,
  Users,
  CheckCircle,
  Leaf,
  Shield,
  Award,
  ArrowRight,
  Play,
  Sparkles,
  Heart,
  ShoppingCart,
} from "lucide-react"
import { featuredProducts } from "../data/products"

const HomePage = ({ setCurrentPage, onAddToCart, onAddToWishlist, wishlistItems = [], onProductClick }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "MamaEarth products have transformed my skincare routine completely. My skin has never looked better!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Ananya Gupta",
      location: "Delhi",
      text: "Love how natural and effective these products are. Perfect for my sensitive skin!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Kavya Menon",
      location: "Bangalore",
      text: "The vitamin C serum is amazing! Visible results in just 2 weeks. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
    },
  ]

  const impactStats = [
    { number: "2M+", label: "Happy Families", icon: Users, color: "text-green-400" },
    { number: "50K+", label: "Trees Planted", icon: TrendingUp, color: "text-blue-400" },
    { number: "100%", label: "Toxin-Free", icon: CheckCircle, color: "text-emerald-400" },
    { number: "4.8★", label: "Customer Rating", icon: Star, color: "text-yellow-400" },
  ]

  const categories = [
    {
      name: "Face Care",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
      products: "50+ Products",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Hair Care",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop",
      products: "40+ Products",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Body Care",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      products: "30+ Products",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Baby Care",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
      products: "25+ Products",
      color: "from-green-500 to-emerald-600",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleAddToCart = (product) => {
    onAddToCart && onAddToCart(product)
  }

  const handleAddToWishlist = (product) => {
    onAddToWishlist && onAddToWishlist(product)
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <Badge className="glass-effect text-green-400 border-green-500/30 px-6 py-3 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                India's #1 Natural Beauty Brand
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-white">Natural Beauty,</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent block">
                  Made Safe
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discover the goodness of nature with MamaEarth's range of toxin-free, natural products for you and your
                family.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => setCurrentPage("products")}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCurrentPage("analyzer")}
                  className="border-2 border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 hover:bg-green-500/10 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Try AI Analyzer
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {impactStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 glass-effect rounded-2xl mb-3 mx-auto">
                        <IconComponent className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div className={`text-2xl font-black ${stat.color}`}>{stat.number}</div>
                      <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative">
              <div className="glass-effect rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
                <div className="aspect-square relative">
                  <img
                    src={featuredProducts[currentProductIndex]?.image || "/placeholder.svg"}
                    alt="Featured Product"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Product Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-effect rounded-2xl p-6 border border-gray-700/50">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {featuredProducts[currentProductIndex]?.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-black text-green-400">
                            ₹{featuredProducts[currentProductIndex]?.price}
                          </span>
                          {featuredProducts[currentProductIndex]?.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ₹{featuredProducts[currentProductIndex]?.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleAddToWishlist(featuredProducts[currentProductIndex])}
                            className={`p-2 ${
                              isInWishlist(featuredProducts[currentProductIndex]?.id)
                                ? "text-pink-400"
                                : "text-gray-400 hover:text-pink-400"
                            }`}
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(featuredProducts[currentProductIndex])}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2"
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredProducts.slice(0, 5).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProductIndex ? "bg-green-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="glass-effect text-green-400 border-green-500/30 px-4 py-2 text-sm font-medium mb-4">
              <Crown className="h-4 w-4 mr-2" />
              Bestsellers
            </Badge>
            <h2 className="text-4xl font-black text-white mb-4">Our Most Loved Products</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover why millions of families trust MamaEarth for their natural beauty needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 8).map((product) => (
              <Card
                key={product.id}
                className="glass-effect border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-transparent group cursor-pointer"
                onClick={() => onProductClick && onProductClick(product.id)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddToWishlist(product)
                        }}
                        className={`p-2 glass-effect ${
                          isInWishlist(product.id) ? "text-pink-400" : "text-gray-400 hover:text-pink-400"
                        }`}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.discount && (
                      <Badge className="absolute top-3 left-3 bg-red-500 text-white">-{product.discount}%</Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-black text-green-400">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddToCart(product)
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setCurrentPage("products")}
              variant="outline"
              size="lg"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 text-lg font-semibold rounded-2xl transition-all duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find the perfect natural products for every member of your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="glass-effect border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-transparent group cursor-pointer overflow-hidden"
                onClick={() => setCurrentPage("products")}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-2">{category.name}</h3>
                        <p className="text-white/80">{category.products}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Why Choose MamaEarth?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're committed to providing safe, natural, and effective products for your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                description:
                  "All our products are made with natural ingredients, free from harmful chemicals and toxins.",
                color: "green",
              },
              {
                icon: Shield,
                title: "MadeSafe Certified",
                description:
                  "India's first MadeSafe certified brand, ensuring the highest safety standards for your family.",
                color: "blue",
              },
              {
                icon: Award,
                title: "Dermatologically Tested",
                description: "Every product is rigorously tested by dermatologists to ensure safety and effectiveness.",
                color: "purple",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              const colorClasses = {
                green: "bg-green-500/20 text-green-400",
                blue: "bg-blue-500/20 text-blue-400",
                purple: "bg-purple-500/20 text-purple-400",
              }

              return (
                <Card
                  key={index}
                  className="glass-effect border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-transparent"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${colorClasses[feature.color]} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join millions of happy families who trust MamaEarth for their natural beauty needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-gray-700/50 shadow-2xl bg-transparent">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl text-gray-300 font-medium leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-4 border-green-500/30"
                  />
                  <div className="text-left">
                    <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-400">{testimonials[currentTestimonial].location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-green-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl p-12 border border-gray-700/50">
            <h2 className="text-4xl font-black text-white mb-4">Stay Updated with MamaEarth</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new products, exclusive offers, and natural beauty tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:bg-gray-800 transition-all"
              />
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
