import HeroSection from "./HeroSection"
import CategoryGrid from "./CategoryGrid"
import FeaturedProducts from "./FeaturedProducts"
import NewsletterSection from "./NewsletterSection"

export default function HomePage({ setCurrentPage, addToCart, toggleWishlist, wishlist }) {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      <CategoryGrid setCurrentPage={setCurrentPage} />
      <FeaturedProducts
        setCurrentPage={setCurrentPage}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        wishlist={wishlist}
      />
      <NewsletterSection />
    </>
  )
}
