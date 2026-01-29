import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* Hero Section - Video-like animated background */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        {/* Animated gradient mesh - video-like effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] via-[#e8e0d4] to-[#f5f0e8]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,115,85,0.15),transparent)]" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(45deg, #c4b8a8 0%, transparent 50%, #8b7355 100%)',
            backgroundSize: '400% 400%',
          }}
        />
        {/* Floating decorative shapes */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#8b7355]/10 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#2c2416]/5 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8b7355]/5 blur-3xl"
        />
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232c2416\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl mx-auto text-center z-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-xs sm:text-sm font-semibold text-[#8b7355] uppercase tracking-[0.2em] mb-4"
          >
            Premium Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2c2416] leading-tight mb-4 sm:mb-6"
          >
            Discover <span className="text-[#8b7355] italic">Timeless</span> Furniture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[#5a5248] leading-relaxed max-w-xl mx-auto px-2"
          >
            Curated pieces for modern living. Quality craftsmanship meets contemporary design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-10"
          >
            <motion.a
              href="#collection"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 sm:px-10 sm:py-4 bg-[#2c2416] text-[#f5f0e8] font-semibold rounded-xl hover:bg-[#3d3224] transition-colors shadow-lg shadow-[#2c2416]/25"
            >
              Explore Collection
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="collection" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="block text-xs sm:text-sm font-semibold text-[#8b7355] uppercase tracking-widest mb-2"
          >
            Shop by Category
          </motion.span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2c2416] mb-4 sm:mb-6">
            Our Collection
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#2c2416] text-[#f5f0e8] shadow-lg shadow-[#2c2416]/20'
                    : 'bg-white/80 text-[#5a5248] border border-[#2c2416]/20 hover:border-[#8b7355] hover:text-[#2c2416]'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ProductGrid products={filteredProducts} />
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.main>
  );
}
