"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { ArrowRight, Play, Sparkles, CheckCircle, Star, Award, Users, TrendingUp } from "lucide-react"

const HeroSection = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const heroSlides = [
    {
      title: "Natural Beauty,",
      subtitle: "Made Safe",
      description:
        "Discover the goodness of nature with MamaEarth's range of toxin-free, natural products for you and your family.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=800&fit=crop",
      badge: "100% Natural & Toxin-Free",
      stats: { number: "100%", label: "Natural", color: "text-green-400" },
    },
    {
      title: "Skincare That",
      subtitle: "Actually Works",
      description:
        "Clinically proven formulas with natural ingredients that deliver visible results for healthier, glowing skin.",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=800&fit=crop",
      badge: "Dermatologically Tested",
      stats: { number: "4.8★", label: "Rating", color: "text-yellow-400" },
    },
    {
      title: "Join 2M+",
      subtitle: "Happy Families",
      description: "Trusted by millions of families across India for safe, effective, and natural beauty solutions.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=800&fit=crop",
      badge: "India's #1 Natural Brand",
      stats: { number: "2M+", label: "Customers", color: "text-blue-400" },
    },
  ]

  const floatingStats = [
    { icon: Users, number: "2M+", label: "Happy Customers", color: "text-green-400" },
    { icon: Star, number: "4.8★", label: "Average Rating", color: "text-yellow-400" },
    { icon: Award, number: "100%", label: "Natural Products", color: "text-emerald-400" },
    { icon: TrendingUp, number: "50K+", label: "Trees Planted", color: "text-blue-400" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 15,
            top: mousePosition.y / 15,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge className="glass-effect text-green-400 border-green-500/30 px-6 py-3 text-sm font-medium animate-bounce">
                <Sparkles className="h-4 w-4 mr-2" />
                {currentHero.badge}
              </Badge>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white">{currentHero.title}</span>
                <span className="gradient-text block">{currentHero.subtitle}</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">{currentHero.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Floating Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {floatingStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="text-center animate-slide-up glass-effect p-4 rounded-2xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
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

          {/* Right Content - Hero Image Card */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="glass-effect rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="aspect-[4/5] relative">
                  <img
                    src={currentHero.image || "/placeholder.svg"}
                    alt="Natural skincare model"
                    className="w-full h-full object-cover transition-all duration-1000"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=600&width=480&text=Natural+Beauty"
                    }}
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute top-6 left-6 animate-float">
                    <div className="glass-effect rounded-2xl p-4 shadow-lg border border-gray-700/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <div className={`text-lg font-black text-white ${currentHero.stats.color}`}>
                            {currentHero.stats.number}
                          </div>
                          <div className="text-xs text-gray-400 font-medium">{currentHero.stats.label}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 animate-float" style={{ animationDelay: "1s" }}>
                    <div className="glass-effect rounded-2xl p-4 shadow-lg border border-gray-700/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <Award className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-lg font-black text-white">Safe</div>
                          <div className="text-xs text-gray-400 font-medium">Certified</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "bg-green-500 w-8" : "bg-gray-500 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl -z-10 animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl -z-10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
