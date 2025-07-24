"use client"

import { Button } from "./ui/Button"
import ProductCard from "./ProductCard"

export default function FeaturedProducts({ setCurrentPage, addToCart, toggleWishlist, wishlist }) {
  const products = [
    {
      id: "1",
      name: "Vitamin C Face Serum",
      price: 599,
      originalPrice: 799,
      rating: 4.8,
      reviews: 2847,
      isBestseller: true,
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
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
    },
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Bestselling Products</h2>
          <p className="text-lg text-gray-400">Discover our most loved natural products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={wishlist.some((item) => item.id === product.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:scale-105 transition-transform"
            onClick={() => setCurrentPage("products")}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
