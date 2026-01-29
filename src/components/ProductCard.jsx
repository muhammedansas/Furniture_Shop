import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 active:scale-[0.98]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0e8]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2416]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* View Product overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400 text-white font-semibold text-sm bg-[#2c2416] px-5 py-2.5 rounded-lg shadow-lg">
              View Product
            </span>
          </div>
          {product.featured && (
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3 + index * 0.06, type: 'spring', stiffness: 200 }}
              className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 sm:px-3 sm:py-1 bg-[#2c2416] text-[#f5f0e8] text-[10px] sm:text-xs font-semibold tracking-wider uppercase rounded"
            >
              Featured
            </motion.span>
          )}
        </div>
        <div className="p-4 sm:p-5">
          <span className="block text-[10px] sm:text-xs font-medium text-[#8b7355] uppercase tracking-widest mb-1">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-[#2c2416] mb-2 group-hover:text-[#8b7355] transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm sm:text-base font-semibold text-[#2c2416]">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
