import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-xl border-b border-[#2c2416]/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-2xl font-semibold text-[#2c2416] hover:text-[#8b7355] transition-colors duration-300"
        >
          <span>Furniture</span>
          <span className="text-[#8b7355] ml-0.5">Shop</span>
        </Link>
        <nav className="flex gap-8">
          {['Home', 'Products', 'About'].map((item) => (
            <Link
              key={item}
              to="/"
              className="text-sm font-medium text-[#2c2416] tracking-wide hover:text-[#8b7355] transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
