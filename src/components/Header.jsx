"use client"

import { useState, useEffect } from "react"
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Leaf,
  MessageCircle,
  TreePine,
  Sparkles,
  Users,
} from "lucide-react"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Badge } from "./ui/Badge"

const Header = ({
  onNavigate,
  cartItemsCount = 0,
  wishlistCount = 0,
  onCartClick,
  user,
  onLogout,
  searchQuery = "",
  setSearchQuery,
  currentPage,
  onAIAssistantOpen,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: null },
    { id: "products", label: "Products", icon: null },
    { id: "analyzer", label: "AI Analyzer", icon: Sparkles },
    { id: "community", label: "Community", icon: Users },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b border-gray-700/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">MamaEarth</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? "text-green-400 bg-green-600/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search natural products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    onNavigate("products")
                  }
                }}
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* AI Assistant */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onAIAssistantOpen}
              className="relative text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              <MessageCircle className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </Button>

            {/* Tree Counter (for logged in users) */}
            {user && (
              <button
                onClick={() => onNavigate("impact")}
                className="hidden sm:flex items-center space-x-1 px-3 py-1 bg-green-600/20 rounded-full hover:bg-green-600/30 transition-colors"
              >
                <TreePine className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">{user.treesPlanted || 0}</span>
              </button>
            )}

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate("wishlist")}
              className="relative text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[1.25rem] h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs min-w-[1.25rem] h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800/50"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user.name?.charAt(0) || "U"}
                  </div>
                  <span className="hidden sm:block">{user.name}</span>
                </Button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 glass-effect border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <button
                      onClick={() => onNavigate("profile")}
                      className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => onNavigate("orders")}
                      className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
                    >
                      My Orders
                    </button>
                    <button
                      onClick={() => onNavigate("impact")}
                      className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md flex items-center"
                    >
                      <TreePine className="h-4 w-4 mr-2 text-green-400" />
                      My Impact
                    </button>
                    <hr className="my-2 border-gray-700" />
                    <button
                      onClick={onLogout}
                      className="w-full text-left px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-md"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Button onClick={() => onNavigate("signin")} className="bg-green-600 hover:bg-green-700 text-white">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search natural products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
              onKeyPress={(e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  onNavigate("products")
                  setIsMenuOpen(false)
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-gray-700">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentPage === item.id
                      ? "text-green-400 bg-green-600/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
