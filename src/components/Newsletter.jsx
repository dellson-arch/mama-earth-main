import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative px-6 py-20 bg-white/5 backdrop-blur-lg overflow-hidden text-white"
    >
      {/* Green Glow Only */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-green-400 to-teal-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Join Our Glow Tribe</h2>
        <p className="text-base text-gray-300 mb-8 leading-relaxed">
          Exclusive tips, influencer secrets, and product offers straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:flex-1 px-5 py-3 rounded-full text-sm bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <button
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:brightness-110 transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </motion.section>
  );
}
