"use client"

import { useState } from "react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { Input } from "./ui/input"
import { Search, ShoppingCart, Heart, User, Menu, X, Bot, Leaf, Sparkles, Users, TreePine } from "lucide-react"

const Header = ({
  cartItemsCount = 0,
  wishlistItemsCount = 0,
  onCartClick,
  onWishlistClick,
  onNavigate,
  onSearch,
  onAIAssistantToggle,
  currentPage,
  userProfile,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
      setSearchQuery("")
    }
  }

  const navItems = [
    { id: "home", label: "Home", icon: Leaf },
    { id: "products", label: "Products", icon: Sparkles },
    { id: "analyzer", label: "AI Analyzer", icon: Bot },
    { id: "community", label: "Community", icon: Users },
    { id: "tree-tracker", label: "Tree Tracker", icon: TreePine },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">MamaEarth</h1>
              <p className="text-xs text-green-400 -mt-1">Natural Beauty</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search natural products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
              />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* AI Assistant Toggle */}
            <Button
              onClick={onAIAssistantToggle}
              variant="ghost"
              size="icon"
              className="relative text-gray-300 hover:text-white hover:bg-gray-700/50"
            >
              <Bot className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </Button>

            {/* Wishlist */}
            <Button
              onClick={onWishlistClick}
              variant="ghost"
              size="icon"
              className="relative text-gray-300 hover:text-white hover:bg-gray-700/50"
            >
              <Heart className="h-5 w-5" />
              {wishlistItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center p-0">
                  {wishlistItemsCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button
              onClick={onCartClick}
              variant="ghost"
              size="icon"
              className="relative text-gray-300 hover:text-white hover:bg-gray-700/50"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center p-0">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* User Profile */}
            <Button
              onClick={() => onNavigate("signin")}
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-gray-700/50"
            >
              {userProfile ? (
                <img
                  src={userProfile.avatar || "/placeholder.svg"}
                  alt={userProfile.name}
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <User className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-300 hover:text-white hover:bg-gray-700/50"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-700/50 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search natural products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                />
              </form>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
