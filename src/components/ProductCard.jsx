import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0e8]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-[#2c2416]/0 group-hover:bg-[#2c2416]/20 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white font-semibold text-sm bg-[#2c2416] px-4 py-2 rounded-lg">
              View Product
            </span>
          </div>
          {product.featured && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.08, type: 'spring', stiffness: 200 }}
              className="absolute top-4 left-4 px-3 py-1 bg-[#2c2416] text-[#f5f0e8] text-xs font-semibold tracking-wider uppercase rounded"
            >
              Featured
            </motion.span>
          )}
        </div>
        <div className="p-5">
          <span className="block text-xs font-medium text-[#8b7355] uppercase tracking-widest mb-1">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          <h3 className="font-display text-xl font-semibold text-[#2c2416] mb-2 group-hover:text-[#8b7355] transition-colors">
            {product.name}
          </h3>
          <p className="text-base font-semibold text-[#2c2416]">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
