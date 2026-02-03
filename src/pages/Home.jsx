import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import Hero3DScene from '../components/Hero3DScene';

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
        {/* Animated gradient background - simplified for 3D overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] via-[#e8e0d4] to-[#f5f0e8] -z-20" />

        {/* 3D Scene */}
        <Hero3DScene />

        {/* Subtle overlay for text readability if needed */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none -z-10" />

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
                className={`flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${activeCategory === cat.id
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
