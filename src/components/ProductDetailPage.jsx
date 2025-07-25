"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  Star,
  Heart,
  ShoppingCart,
  Share2,
  Plus,
  Minus,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import { Card, CardContent } from "./ui/card"
import { reviews } from "../data/products"

const ProductDetailPage = ({ product, onAddToCart, onAddToWishlist, onBack, relatedProducts = [] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [imageErrors, setImageErrors] = useState({})

  const productReviews = reviews.filter((r) => r.productId === product?.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product?.id])

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Button onClick={onBack} className="bg-green-600 hover:bg-green-700">
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  const isInWishlist = false // You can implement wishlist check here

  const handleImageError = (imageUrl) => {
    setImageErrors((prev) => ({ ...prev, [imageUrl]: true }))
  }

  const getImageSrc = (imageUrl, productName) => {
    if (imageErrors[imageUrl]) {
      return `/placeholder.svg?height=600&width=600&text=${encodeURIComponent(productName)}`
    }
    return imageUrl || `/placeholder.svg?height=600&width=600&text=${encodeURIComponent(productName)}`
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-8 bg-white/5 backdrop-blur-md text-white border-gray-700/50 hover:bg-gray-700/50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <img
                src={getImageSrc(product.images[selectedImageIndex], product.name) || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={() => handleImageError(product.images[selectedImageIndex])}
              />

              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-gray-700/50 rounded-full p-2 hover:bg-gray-700/50 transition-all"
                  >
                    <ChevronLeft className="h-5 w-5 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-gray-700/50 rounded-full p-2 hover:bg-gray-700/50 transition-all"
                  >
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index ? "border-green-500" : "border-gray-700/50"
                  }`}
                >
                  <img
                    src={getImageSrc(image, product.name) || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(image)}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.discount && <Badge className="bg-red-500 text-white font-bold">{product.discount}% OFF</Badge>}
              {product.isBestseller && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold">
                  Bestseller
                </Badge>
              )}
              {product.isNew && (
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">New</Badge>
              )}
            </div>

            <h1 className="text-4xl font-black text-white leading-tight">{product.name}</h1>
            <p className="text-xl text-gray-400">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="text-white ml-2 font-semibold text-lg">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-black text-green-400">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">₹{product.originalPrice}</span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">Quantity:</span>
              <div className="flex items-center bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-700/50 transition-colors"
                >
                  <Minus className="h-4 w-4 text-white" />
                </button>
                <span className="px-4 py-2 text-white font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-700/50 transition-colors"
                >
                  <Plus className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                onClick={() => onAddToCart(product, null, quantity)}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 text-lg shadow-xl hover:shadow-green-500/25"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                onClick={() => onAddToWishlist(product)}
                variant="outline"
                className={`px-6 py-4 bg-white/5 backdrop-blur-md border-2 transition-all ${
                  isInWishlist
                    ? "border-red-500 text-red-400 bg-red-500/10"
                    : "border-gray-700/50 text-gray-300 hover:border-red-500 hover:text-red-400 hover:bg-red-500/10"
                }`}
              >
                <Heart className={`h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="px-6 py-4 bg-white/5 backdrop-blur-md border-2 border-gray-700/50 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl mb-16">
          <CardContent className="p-8">
            {/* Tab Navigation */}
            <div className="flex space-x-8 border-b border-gray-700/50 mb-8">
              {[
                { id: "description", label: "Description" },
                { id: "benefits", label: "Key Benefits" },
                { id: "ingredients", label: "Ingredients" },
                { id: "usage", label: "How to Use" },
                { id: "reviews", label: "Reviews" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-2 font-semibold transition-all ${
                    activeTab === tab.id
                      ? "text-green-400 border-b-2 border-green-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-gray-300">
              {activeTab === "description" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Product Description</h3>
                  <p className="text-lg leading-relaxed">{product.description}</p>
                </div>
              )}

              {activeTab === "benefits" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {product.keyBenefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "ingredients" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ingredients</h3>
                  <div className="space-y-4">
                    {product.ingredients?.map((ingredient, index) => (
                      <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="font-semibold text-green-400 text-lg mb-2">{ingredient.name}</h4>
                        <p className="text-gray-300">{ingredient.benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "usage" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">How to Use</h3>
                  <ol className="space-y-3">
                    {product.howToUse?.map((step, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-lg">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews</h3>
                  {productReviews.length > 0 ? (
                    <div className="space-y-6">
                      {productReviews.map((review) => (
                        <div key={review.id} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold text-white">{review.name}</h4>
                                  <div className="flex items-center space-x-2">
                                    <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-4 w-4 ${
                                            i < review.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                    {review.verified && (
                                      <Badge className="bg-green-500/20 text-green-400 text-xs">Verified</Badge>
                                    )}
                                  </div>
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <p className="text-gray-300">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-center py-8">No reviews yet. Be the first to review!</p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-black text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-white text-lg mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{relatedProduct.rating}</span>
                      <span className="text-gray-500 text-sm">({relatedProduct.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-black text-green-400">₹{relatedProduct.price}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-gray-500 line-through">₹{relatedProduct.originalPrice}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetailPage
