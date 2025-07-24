"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import ProductsPage from "./components/ProductsPage"
import WishlistPage from "./components/WishlistPage"
import SignInPage from "./components/SignInPage"
import CheckoutPage from "./components/CheckoutPage"
import SkinHairAnalyzer from "./components/SkinHairAnalyzer"
import RecommendationsPage from "./components/RecommendationsPage"
import ShoppingCartSidebar from "./components/ShoppingCartSidebar"
import Footer from "./components/Footer"
import NotificationToast from "./components/NotificationToast"
import AIAssistant from "./components/AIAssistant"
import TreeTracker from "./components/TreeTracker"
import CommunitySection from "./components/CommunitySection"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [user, setUser] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [userProfile, setUserProfile] = useState(null)
  const [recommendations, setRecommendations] = useState([])

  // Load data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("mamaearth-cart")
    const savedWishlist = localStorage.getItem("mamaearth-wishlist")
    const savedUser = localStorage.getItem("mamaearth-user")
    const savedProfile = localStorage.getItem("mamaearth-profile")

    if (savedCart) setCartItems(JSON.parse(savedCart))
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist))
    if (savedUser) setUser(JSON.parse(savedUser))
    if (savedProfile) setUserProfile(JSON.parse(savedProfile))

    // Listen for custom navigation events
    const handleNavigateToAnalyzer = () => {
      setCurrentPage("analyzer")
      setIsAIAssistantOpen(false)
    }

    window.addEventListener("navigate-to-analyzer", handleNavigateToAnalyzer)
    return () => window.removeEventListener("navigate-to-analyzer", handleNavigateToAnalyzer)
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("mamaearth-cart", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem("mamaearth-wishlist", JSON.stringify(wishlistItems))
  }, [wishlistItems])

  useEffect(() => {
    if (user) {
      localStorage.setItem("mamaearth-user", JSON.stringify(user))
    } else {
      localStorage.removeItem("mamaearth-user")
    }
  }, [user])

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem("mamaearth-profile", JSON.stringify(userProfile))
    }
  }, [userProfile])

  const showNotification = (message, type = "success") => {
    const id = Date.now()
    const notification = { id, message, type }
    setNotifications((prev) => [...prev, notification])

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 3000)
  }

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        showNotification(`Updated ${product.name} quantity in cart`)
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      } else {
        showNotification(`${product.name} added to cart`)
        return [...prev, { ...product, quantity }]
      }
    })

    // Update user's tree count
    if (user) {
      setUser((prev) => ({
        ...prev,
        treesPlanted: (prev.treesPlanted || 0) + 1,
      }))
    }
  }

  const removeFromCart = (productId) => {
    const product = cartItems.find((item) => item.id === productId)
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
    if (product) {
      showNotification(`${product.name} removed from cart`, "info")
    }
  }

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) {
        showNotification(`${product.name} removed from wishlist`, "info")
        return prev.filter((item) => item.id !== product.id)
      } else {
        showNotification(`${product.name} added to wishlist`)
        return [...prev, product]
      }
    })
  }

  const removeFromWishlist = (productId) => {
    const product = wishlistItems.find((item) => item.id === productId)
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId))
    if (product) {
      showNotification(`${product.name} removed from wishlist`, "info")
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const handleProductRecommend = (products) => {
    setCurrentPage("products")
    setSearchQuery(products[0] || "")
    setIsAIAssistantOpen(false)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onNavigate={setCurrentPage}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
          />
        )
      case "products":
        return (
          <ProductsPage
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )
      case "wishlist":
        return (
          <WishlistPage wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} addToCart={addToCart} />
        )
      case "signin":
        return <SignInPage onNavigate={setCurrentPage} setUser={setUser} />
      case "checkout":
        return (
          <CheckoutPage
            cartItems={cartItems}
            onNavigate={setCurrentPage}
            user={user}
            total={getCartTotal()}
            clearCart={() => setCartItems([])}
          />
        )
      case "analyzer":
        return (
          <SkinHairAnalyzer
            onNavigate={setCurrentPage}
            setUserProfile={setUserProfile}
            showNotification={showNotification}
            setRecommendations={setRecommendations}
          />
        )
      case "recommendations":
        return (
          <RecommendationsPage
            onNavigate={setCurrentPage}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            userProfile={userProfile}
            wishlistItems={wishlistItems}
            recommendations={recommendations}
          />
        )
      case "community":
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <CommunitySection />
            </div>
          </div>
        )
      case "impact":
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 pb-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Your Environmental Impact</h1>
                <p className="text-xl text-gray-400">See how you're making a difference with every purchase</p>
              </div>
              <TreeTracker user={user} />
            </div>
          </div>
        )
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            wishlistItems={wishlistItems}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-hero-pattern">
      {/* Floating particles background */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <Header
        onNavigate={setCurrentPage}
        cartItemsCount={getCartItemsCount()}
        wishlistCount={wishlistItems.length}
        onCartClick={() => setIsCartOpen(true)}
        user={user}
        onLogout={() => setUser(null)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentPage={currentPage}
        onAIAssistantOpen={() => setIsAIAssistantOpen(true)}
      />

      <main className="relative z-10">{renderPage()}</main>

      <Footer onNavigate={setCurrentPage} />

      <ShoppingCartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveFromCart={removeFromCart}
        setCurrentPage={setCurrentPage}
      />

      <AIAssistant
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
        onProductRecommend={handleProductRecommend}
      />

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <NotificationToast key={notification.id} message={notification.message} type={notification.type} />
        ))}
      </div>
    </div>
  )
}

export default App
