import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[var(--bg)] px-6 py-16 transition-colors duration-500"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-[var(--text)]">
          Get Beauty Tips & Offers
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Join our newsletter for weekly skincare & haircare advice.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm shadow-sm bg-[var(--bg)] text-[var(--text)] placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </motion.section>
  );
}
