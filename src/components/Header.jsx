"use client"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Search, ShoppingBag, User, Menu, Heart, Leaf } from "lucide-react"

export default function Header({
  setCurrentPage,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  getCartItemsCount,
  setIsCartOpen,
  searchQuery,
  setSearchQuery,
  user,
  setUser,
  wishlist,
}) {
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setCurrentPage("products")
    }
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentPage("home")
  }

  return (
    <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="py-2 text-center text-sm text-gray-400">
          Free shipping on orders above ₹399 | Get 20% off on your first order
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => setCurrentPage("home")}>
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">MamaEarth</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("products")}
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              Products
            </button>
            {user && (
              <button
                onClick={() => setCurrentPage("wishlist")}
                className="text-gray-300 hover:text-green-400 transition-colors relative"
              >
                Wishlist
                {wishlist.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-green-600">
                    {wishlist.length}
                  </Badge>
                )}
              </button>
            )}
          </nav>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </form>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage("wishlist")}
              className="hidden sm:flex text-gray-300 hover:text-green-400 relative"
            >
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-green-600">
                  {wishlist.length}
                </Badge>
              )}
            </Button>

            {user ? (
              <div className="relative group">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-green-400">
                  <User className="h-5 w-5" />
                </Button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-3 border-b border-gray-700">
                    <p className="text-white font-medium">{user.name}</p>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage("signin")}
                className="text-gray-300 hover:text-green-400"
              >
                <User className="h-5 w-5" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-300 hover:text-green-400"
            >
              <ShoppingBag className="h-5 w-5" />
              {getCartItemsCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-green-600">
                  {getCartItemsCount()}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-green-400"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </form>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t bg-gray-900 border-gray-800 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="container mx-auto px-4 py-4 space-y-4">
          <button
            onClick={() => {
              setCurrentPage("products")
              setIsMobileMenuOpen(false)
            }}
            className="block text-gray-300 hover:text-green-400 transition-colors w-full text-left"
          >
            Products
          </button>
          {user && (
            <button
              onClick={() => {
                setCurrentPage("wishlist")
                setIsMobileMenuOpen(false)
              }}
              className="block text-gray-300 hover:text-green-400 transition-colors w-full text-left"
            >
              Wishlist ({wishlist.length})
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
