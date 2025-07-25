"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import ProductsPage from "./components/ProductsPage"
import ProductDetailPage from "./components/ProductDetailPage"
import SkinHairAnalyzer from "./components/SkinHairAnalyzer"
import CommunitySection from "./components/CommunitySection"
import AIAssistant from "./components/AIAssistant"
import ShoppingCartSidebar from "./components/ShoppingCartSidebar"
import WishlistPage from "./components/WishlistPage"
import CheckoutPage from "./components/CheckoutPage"
import SignInPage from "./components/SignInPage"
import TreeTracker from "./components/TreeTracker"
import NotificationToast from "./components/NotificationToast"
import Footer from "./components/Footer"
import { getProductById, getRelatedProducts } from "./data/products"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [notification, setNotification] = useState(null)
  const [userProfile, setUserProfile] = useState(null)

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("mamaearth-cart")
    const savedWishlist = localStorage.getItem("mamaearth-wishlist")
    const savedUser = localStorage.getItem("mamaearth-user")

    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error loading cart:", error)
      }
    }

    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist))
      } catch (error) {
        console.error("Error loading wishlist:", error)
      }
    }

    if (savedUser) {
      try {
        setUserProfile(JSON.parse(savedUser))
      } catch (error) {
        console.error("Error loading user:", error)
      }
    }
  }, [])

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("mamaearth-cart", JSON.stringify(cartItems))
  }, [cartItems])

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("mamaearth-wishlist", JSON.stringify(wishlistItems))
  }, [wishlistItems])

  // Save to localStorage whenever user profile changes
  useEffect(() => {
    if (userProfile) {
      localStorage.setItem("mamaearth-user", JSON.stringify(userProfile))
    } else {
      localStorage.removeItem("mamaearth-user")
    }
  }, [userProfile])

  const showNotification = (message, type = "success") => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const handleNavigation = (page, productId = null) => {
    if (page === "product-detail" && productId) {
      const product = getProductById(productId)
      setSelectedProduct(product)
    }
    setCurrentPage(page)
    setIsCartOpen(false)
    setIsAIAssistantOpen(false)
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setCurrentPage("product-detail")
  }

  const handleAddToCart = (product, variant = null, quantity = 1) => {
    const existingItem = cartItems.find((item) => item.id === product.id && item.variant === variant)

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.variant === variant ? { ...item, quantity: item.quantity + quantity } : item,
        ),
      )
      showNotification(`Updated ${product.name} quantity in cart!`)
    } else {
      const cartItem = {
        ...product,
        variant,
        quantity,
        cartId: Date.now() + Math.random(),
      }
      setCartItems([...cartItems, cartItem])
      showNotification(`${product.name} added to cart!`)
    }
  }

  const handleRemoveFromCart = (cartId) => {
    const item = cartItems.find((item) => item.cartId === cartId)
    setCartItems(cartItems.filter((item) => item.cartId !== cartId))
    if (item) {
      showNotification(`${item.name} removed from cart!`, "info")
    }
  }

  const handleUpdateCartQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(cartId)
      return
    }

    setCartItems(cartItems.map((item) => (item.cartId === cartId ? { ...item, quantity: newQuantity } : item)))
  }

  const handleAddToWishlist = (product) => {
    const isAlreadyInWishlist = wishlistItems.some((item) => item.id === product.id)

    if (isAlreadyInWishlist) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== product.id))
      showNotification(`${product.name} removed from wishlist!`, "info")
    } else {
      setWishlistItems([...wishlistItems, { ...product, wishlistId: Date.now() + Math.random() }])
      showNotification(`${product.name} added to wishlist!`)
    }
  }

  const handleRemoveFromWishlist = (productId) => {
    const item = wishlistItems.find((item) => item.id === productId)
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId))
    if (item) {
      showNotification(`${item.name} removed from wishlist!`, "info")
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage("products")
  }

  const handleClearCart = () => {
    setCartItems([])
    showNotification("Cart cleared!", "info")
  }

  const handleCheckout = (orderData) => {
    // Simulate order processing
    console.log("Processing order:", orderData)
    setCartItems([])
    showNotification("Order placed successfully! 🎉")
    setCurrentPage("home")
  }

  const handleSignIn = (userData) => {
    setUserProfile(userData)
    showNotification(`Welcome back, ${userData.name}!`)
    setCurrentPage("home")
  }

  const handleSignOut = () => {
    setUserProfile(null)
    showNotification("Signed out successfully!", "info")
    setCurrentPage("home")
  }

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const wishlistItemsCount = wishlistItems.length

  const relatedProducts = selectedProduct ? getRelatedProducts(selectedProduct.id, selectedProduct.category) : []

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onNavigate={handleNavigation}
            wishlistItems={wishlistItems}
          />
        )

      case "products":
        return (
          <ProductsPage
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onProductClick={handleProductClick}
            wishlistItems={wishlistItems}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )

      case "product-detail":
        return (
          <ProductDetailPage
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onBack={() => setCurrentPage("products")}
            relatedProducts={relatedProducts}
          />
        )

      case "analyzer":
        return <SkinHairAnalyzer onAddToCart={handleAddToCart} onProductClick={handleProductClick} />

      case "community":
        return <CommunitySection />

      case "tree-tracker":
        return <TreeTracker />

      case "wishlist":
        return (
          <WishlistPage
            wishlistItems={wishlistItems}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
            onBack={() => setCurrentPage("home")}
          />
        )

      case "checkout":
        return (
          <CheckoutPage
            cartItems={cartItems}
            onCheckout={handleCheckout}
            onBack={() => setCurrentPage("home")}
            userProfile={userProfile}
          />
        )

      case "signin":
        return (
          <SignInPage
            onSignIn={handleSignIn}
            onBack={() => setCurrentPage("home")}
            userProfile={userProfile}
            onSignOut={handleSignOut}
          />
        )

      default:
        return (
          <HomePage
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onNavigate={handleNavigation}
            wishlistItems={wishlistItems}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        cartItemsCount={cartItemsCount}
        wishlistItemsCount={wishlistItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => handleNavigation("wishlist")}
        onNavigate={handleNavigation}
        onSearch={handleSearch}
        onAIAssistantToggle={() => setIsAIAssistantOpen(!isAIAssistantOpen)}
        currentPage={currentPage}
        userProfile={userProfile}
      />

      <main className="pt-16">{renderCurrentPage()}</main>

      <Footer onNavigate={handleNavigation} />

      {/* Shopping Cart Sidebar */}
      <ShoppingCartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={handleClearCart}
        onCheckout={() => {
          setIsCartOpen(false)
          handleNavigation("checkout")
        }}
      />

      {/* AI Assistant */}
      <AIAssistant
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
        onNavigate={handleNavigation}
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
      />

      {/* Notification Toast */}
      {notification && (
        <NotificationToast
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  )
}

export default App
