"use client"
import { useState } from "react"
import { Heart, ShoppingCart, Star, Eye } from "lucide-react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { Card, CardContent } from "./ui/card"

const ProductCard = ({ product, onAddToCart, onAddToWishlist, isInWishlist = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  const handleToggleWishlist = () => {
    if (onAddToWishlist) {
      onAddToWishlist(product)
    }
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden glass-effect rounded-lg">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isBestseller && <Badge className="bg-green-600 text-white">Bestseller</Badge>}
          {product.isNew && <Badge className="bg-blue-600 text-white">New</Badge>}
          {discountPercentage > 0 && <Badge className="bg-red-600 text-white">{discountPercentage}% OFF</Badge>}
        </div>
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${
            isInWishlist ? "bg-red-500 text-white" : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
          }`}
        >
          <Heart className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
        </button>
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Button variant="outline" className="bg-white/90 text-gray-900 hover:bg-white">
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-white mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-white ml-1 text-sm">{product.rating}</span>
            </div>
            <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-green-400">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
              )}
            </div>
          </div>
          <Button onClick={handleAddToCart} className="w-full btn-primary">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
