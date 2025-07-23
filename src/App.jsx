"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import ProductsPage from "./components/ProductsPage"
import WishlistPage from "./components/WishlistPage"
import SignInPage from "./components/SignInPage"
import CheckoutPage from "./components/CheckoutPage"
import ShoppingCartSidebar from "./components/ShoppingCartSidebar"
import "./index.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState(null)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("mamaearth-cart")
    const savedWishlist = localStorage.getItem("mamaearth-wishlist")
    const savedUser = localStorage.getItem("mamaearth-user")

    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("mamaearth-cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("mamaearth-wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    if (user) {
      localStorage.setItem("mamaearth-user", JSON.stringify(user))
    } else {
      localStorage.removeItem("mamaearth-user")
    }
  }, [user])

  const showNotificationMessage = (message) => {
    setNotificationMessage(message)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)))
      showNotificationMessage(`Updated ${product.name} quantity in cart`)
    } else {
      setCart([...cart, { ...product, quantity }])
      showNotificationMessage(`${product.name} added to cart`)
    }
  }

  const removeFromCart = (productId) => {
    const product = cart.find((item) => item.id === productId)
    setCart(cart.filter((item) => item.id !== productId))
    showNotificationMessage(`${product?.name} removed from cart`)
  }

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
  }

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id)
    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id))
      showNotificationMessage(`${product.name} removed from wishlist`)
    } else {
      setWishlist([...wishlist, product])
      showNotificationMessage(`${product.name} added to wishlist`)
    }
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "products":
        return (
          <ProductsPage
            setCurrentPage={setCurrentPage}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
            searchQuery={searchQuery}
          />
        )
      case "signin":
        return <SignInPage setCurrentPage={setCurrentPage} setUser={setUser} />
      case "wishlist":
        return (
          <WishlistPage
            setCurrentPage={setCurrentPage}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
          />
        )
      case "checkout":
        return (
          <CheckoutPage setCurrentPage={setCurrentPage} cart={cart} getCartTotal={getCartTotal} setCart={setCart} />
        )
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )
    }
  }

  if (currentPage === "signin") {
    return <SignInPage setCurrentPage={setCurrentPage} setUser={setUser} />
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>{notificationMessage}</span>
          </div>
        </div>
      )}

      <Header
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        getCartItemsCount={getCartItemsCount}
        setIsCartOpen={setIsCartOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        user={user}
        setUser={setUser}
        wishlist={wishlist}
      />

      {renderPage()}

      <Footer setCurrentPage={setCurrentPage} />

      <ShoppingCartSidebar
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        updateCartQuantity={updateCartQuantity}
        getCartTotal={getCartTotal}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
