export const products = [
  {
    id: 1,
    name: "Vitamin C Face Wash with Vitamin C & Turmeric",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.5,
    reviews: 2847,
    category: "face-care",
    subCategory: "face-wash",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
    ],
    description:
      "A gentle daily face wash enriched with Vitamin C and Turmeric to brighten skin and remove impurities naturally.",
    keyIngredients: ["Vitamin C", "Turmeric", "Aloe Vera", "Neem"],
    benefits: ["Brightens skin", "Removes impurities", "Natural glow", "Gentle cleansing"],
    howToUse: "Apply on wet face, gently massage and rinse with water. Use twice daily for best results.",
    skinType: ["All skin types", "Dull skin", "Oily skin"],
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: 2,
    name: "Onion Hair Oil for Hair Growth & Hair Fall Control",
    price: 399,
    originalPrice: 499,
    discount: 20,
    rating: 4.6,
    reviews: 1923,
    category: "hair-care",
    subCategory: "hair-oil",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    ],
    description: "Nourishing hair oil with red onion extract to promote hair growth and reduce hair fall naturally.",
    keyIngredients: ["Red Onion Extract", "Coconut Oil", "Jojoba Oil", "Curry Leaves"],
    benefits: ["Promotes hair growth", "Reduces hair fall", "Strengthens hair", "Nourishes scalp"],
    howToUse: "Apply to scalp and hair, massage gently. Leave for 2-3 hours or overnight. Wash with shampoo.",
    skinType: ["All hair types", "Hair fall", "Thin hair"],
    inStock: true,
    featured: true,
    bestseller: false,
  },
  {
    id: 3,
    name: "Rice Face Wash with Rice Water & Niacinamide",
    price: 249,
    originalPrice: 349,
    discount: 29,
    rating: 4.3,
    reviews: 1456,
    category: "face-care",
    subCategory: "face-wash",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    ],
    description: "Gentle face wash with rice water and niacinamide for glass skin effect and oil control.",
    keyIngredients: ["Rice Water", "Niacinamide", "Vitamin E", "Glycerin"],
    benefits: ["Glass skin effect", "Oil control", "Pore minimizing", "Gentle cleansing"],
    howToUse: "Apply on damp face, massage gently in circular motions, rinse thoroughly with water.",
    skinType: ["Oily skin", "Combination skin", "Acne-prone skin"],
    inStock: true,
    featured: false,
    bestseller: true,
  },
  {
    id: 4,
    name: "Tea Tree Face Serum for Acne & Pimples",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.7,
    reviews: 3241,
    category: "face-care",
    subCategory: "serum",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
    ],
    description: "Powerful serum with tea tree oil and niacinamide to fight acne and reduce pimples effectively.",
    keyIngredients: ["Tea Tree Oil", "Niacinamide", "Salicylic Acid", "Zinc"],
    benefits: ["Fights acne", "Reduces pimples", "Controls oil", "Prevents breakouts"],
    howToUse: "Apply 2-3 drops on clean face, gently pat until absorbed. Use in PM routine.",
    skinType: ["Acne-prone skin", "Oily skin", "Combination skin"],
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: 5,
    name: "Aloe Vera Gel with Pure Aloe Vera & Vitamin E",
    price: 199,
    originalPrice: 299,
    discount: 33,
    rating: 4.4,
    reviews: 5678,
    category: "face-care",
    subCategory: "moisturizer",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    ],
    description: "Pure aloe vera gel with vitamin E for soothing, hydrating and healing skin naturally.",
    keyIngredients: ["Pure Aloe Vera", "Vitamin E", "Cucumber Extract", "Rose Water"],
    benefits: ["Soothes skin", "Deep hydration", "Heals irritation", "Natural cooling"],
    howToUse: "Apply generously on face and body. Can be used as moisturizer or after-sun care.",
    skinType: ["All skin types", "Sensitive skin", "Dry skin", "Irritated skin"],
    inStock: true,
    featured: true,
    bestseller: false,
  },
  {
    id: 6,
    name: "Ubtan Face Wash with Turmeric & Saffron",
    price: 349,
    originalPrice: 449,
    discount: 22,
    rating: 4.2,
    reviews: 987,
    category: "face-care",
    subCategory: "face-wash",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop"],
    description: "Traditional ubtan face wash with turmeric and saffron for natural glow and radiance.",
    keyIngredients: ["Turmeric", "Saffron", "Chickpea Flour", "Rose Petals"],
    benefits: ["Natural glow", "Brightens skin", "Traditional care", "Gentle exfoliation"],
    howToUse: "Apply on wet face, massage gently, rinse with lukewarm water. Use 2-3 times a week.",
    skinType: ["All skin types", "Dull skin"],
    inStock: true,
    featured: false,
    bestseller: false,
  },
]

export const reviews = [
  {
    id: 1,
    productId: 1,
    userName: "Priya Sharma",
    rating: 5,
    comment: "Amazing product! My skin feels so fresh and bright after using this face wash.",
    date: "2024-01-15",
    verified: true,
  },
  {
    id: 2,
    productId: 1,
    userName: "Ananya Gupta",
    rating: 4,
    comment: "Good face wash, gentle on skin. Noticed improvement in skin texture.",
    date: "2024-01-10",
    verified: true,
  },
  {
    id: 3,
    productId: 4,
    userName: "Kavya Menon",
    rating: 5,
    comment: "This serum is a game changer! My acne has reduced significantly.",
    date: "2024-01-12",
    verified: true,
  },
]

export const featuredProducts = products.filter((product) => product.featured)
export const bestsellerProducts = products.filter((product) => product.bestseller)

export const getProductById = (id) => {
  return products.find((product) => product.id === Number.parseInt(id))
}

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category)
}

export const getRelatedProducts = (productId, category, limit = 4) => {
  return products
    .filter((product) => product.category === category && product.id !== Number.parseInt(productId))
    .slice(0, limit)
}

export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.keyIngredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm)),
  )
}

export const getProductReviews = (productId) => {
  return reviews.filter((review) => review.productId === Number.parseInt(productId))
}
