"use client"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { ShoppingBag, ArrowLeft } from "lucide-react"

export default function CheckoutPage({ setCurrentPage, cart, getCartTotal, setCart }) {
  const handleOrderComplete = () => {
    setCart([])
    setCurrentPage("home")
    alert("Order placed successfully! Thank you for shopping with MamaEarth.")
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-600" />
          <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Add some products to your cart to continue</p>
          <Button onClick={() => setCurrentPage("products")} className="bg-green-600 hover:bg-green-700">
            Continue Shopping
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-green-900 py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => setCurrentPage("home")}
            className="mb-4 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Checkout</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-white font-medium">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-700 mt-6 pt-6">
                <div className="flex justify-between items-center text-xl font-bold text-white">
                  <span>Total:</span>
                  <span>₹{getCartTotal()}</span>
                </div>
              </div>
              <Button onClick={handleOrderComplete} className="w-full mt-6 bg-green-600 hover:bg-green-700">
                Place Order
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
