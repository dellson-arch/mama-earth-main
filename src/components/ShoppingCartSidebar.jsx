"use client"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { ShoppingBag, X, Plus, Minus } from "lucide-react"

export default function ShoppingCartSidebar({
  isOpen,
  setIsOpen,
  cart,
  removeFromCart,
  updateCartQuantity,
  getCartTotal,
  setCurrentPage,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-end">
      <Card className="w-full max-w-md h-full rounded-none bg-gray-900 border-gray-700">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5 text-gray-400" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                <p className="text-lg text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-700">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{item.name}</h3>
                      <p className="text-sm font-medium text-white">₹{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 p-0 border-gray-600"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-white">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 p-0 border-gray-600"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-700">
              <div className="flex justify-between items-center mb-4 text-lg font-semibold text-white">
                <span>Total:</span>
                <span>₹{getCartTotal()}</span>
              </div>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white mb-2"
                onClick={() => {
                  setCurrentPage("checkout")
                  setIsOpen(false)
                }}
              >
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                onClick={() => {
                  setCurrentPage("products")
                  setIsOpen(false)
                }}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
