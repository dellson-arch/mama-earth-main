"use client"

import { Button } from "../components/ui/button"
import { ArrowLeft } from "lucide-react"
import ProductCard from "./ProductCard"

export default function ProductsPage({ setCurrentPage, addToCart, toggleWishlist, wishlist, searchQuery }) {
  const allProducts = [
    {
      id: "1",
      name: "Vitamin C Face Serum",
      price: 599,
      originalPrice: 799,
      rating: 4.8,
      reviews: 2847,
      isBestseller: true,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    },
    {
      id: "2",
      name: "Onion Hair Oil",
      price: 349,
      originalPrice: 449,
      rating: 4.6,
      reviews: 1923,
      isNew: true,
      category: "haircare",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop",
    },
    {
      id: "3",
      name: "Ubtan Face Wash",
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 3421,
      isBestseller: true,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    },
    {
      id: "4",
      name: "Rice Face Wash",
      price: 199,
      originalPrice: 249,
      rating: 4.5,
      reviews: 1567,
      isNew: true,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
    },
    {
      id: "5",
      name: "Aloe Vera Gel",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 3245,
      isBestseller: true,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
    },
    {
      id: "6",
      name: "Tea Tree Shampoo",
      price: 449,
      originalPrice: 549,
      rating: 4.7,
      reviews: 1876,
      category: "haircare",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop",
    },
    {
      id: "7",
      name: "Charcoal Face Mask",
      price: 499,
      originalPrice: 599,
      rating: 4.6,
      reviews: 1432,
      isNew: true,
      category: "skincare",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    },
    {
      id: "8",
      name: "Baby Lotion",
      price: 299,
      originalPrice: 349,
      rating: 4.9,
      reviews: 2156,
      isBestseller: true,
      category: "babycare",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
    },
  ]

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

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
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
          </h1>
          <p className="text-gray-300 text-center mt-2">
            {searchQuery
              ? `Found ${filteredProducts.length} products`
              : "Discover our range of natural beauty products"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={wishlist.some((item) => item.id === product.id)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No products found</div>
            <Button onClick={() => setCurrentPage("home")} className="bg-green-600 hover:bg-green-700">
              Browse All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
