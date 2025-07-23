"use client"

import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"
import { Heart, ShoppingCart, Star } from "lucide-react"

export default function ProductCard({ product, addToCart, toggleWishlist, isInWishlist }) {
  return (
    <Card className="group cursor-pointer transition-all duration-300 bg-gray-900 border-gray-700 hover:border-green-500/50 hover:scale-105">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && <Badge className="bg-green-600 text-white">New</Badge>}
            {product.isBestseller && <Badge className="bg-orange-600 text-white">Bestseller</Badge>}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              toggleWishlist(product)
            }}
            className={`absolute top-3 right-3 w-8 h-8 p-0 transition-all ${
              isInWishlist ? "bg-red-500 hover:bg-red-600 text-white" : "bg-white/80 hover:bg-white text-gray-800"
            }`}
          >
            <Heart className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
          </Button>

          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                addToCart(product)
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">{product.name}</h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                />
              ))}
            </div>
            <span className="text-sm ml-2 text-gray-400">({product.reviews})</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-white">₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm line-through text-gray-500">₹{product.originalPrice}</span>
                <Badge variant="secondary" className="text-xs bg-green-600 text-white">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
