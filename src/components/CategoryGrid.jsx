"use client"

import { Card, CardContent } from "./ui/card"
import { ArrowRight, Sparkles } from "lucide-react"
import { categories } from "../data/products"

const CategoryGrid = ({ setCurrentPage }) => {
  const handleCategoryClick = (categoryId) => {
    setCurrentPage("products")
    // You can add category filtering logic here
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <Card
          key={category.id}
          className="glass-effect border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-transparent group cursor-pointer overflow-hidden"
          onClick={() => handleCategoryClick(category.id)}
        >
          <CardContent className="p-0">
            {/* Category Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=300&width=400&text=" + encodeURIComponent(category.name)
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Category Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">{category.description}</p>
                    <div className="flex items-center text-green-400 text-sm font-medium">
                      <Sparkles className="h-4 w-4 mr-1" />
                      Explore Now
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-green-400 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CategoryGrid
