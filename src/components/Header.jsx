import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'Products', 'About'];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-xl border-b border-[#2c2416]/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-xl sm:text-2xl font-semibold text-[#2c2416] hover:text-[#8b7355] transition-colors duration-300"
        >
          <span>Furniture</span>
          <span className="text-[#8b7355] ml-0.5">Shop</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              to="/"
              className="text-sm font-medium text-[#2c2416] tracking-wide hover:text-[#8b7355] transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 rounded-lg text-[#2c2416] hover:bg-[#2c2416]/5 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-[#2c2416]/10 bg-[#f5f0e8]"
          >
            <nav className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-lg font-medium text-[#2c2416] hover:text-[#8b7355] transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
