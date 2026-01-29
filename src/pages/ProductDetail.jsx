import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center py-20"
        >
          <h2 className="font-display text-2xl font-semibold text-[#2c2416] mb-4">
            Product not found
          </h2>
          <Link
            to="/"
            className="inline-block text-[#8b7355] hover:text-[#2c2416] font-medium transition-colors"
          >
            ← Back to shop
          </Link>
        </motion.div>
      </motion.main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 px-6 py-12"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-block text-[#8b7355] hover:text-[#2c2416] font-medium mb-8 transition-colors"
          >
            ← Back to products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f5f0e8] shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <span className="block text-xs font-semibold text-[#8b7355] uppercase tracking-widest">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-[#2c2416] leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-[#2c2416]">
              ${product.price.toLocaleString()}
            </p>
            <p className="text-[#5a5248] leading-relaxed text-lg">
              {product.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 px-8 py-4 bg-[#2c2416] text-[#f5f0e8] font-semibold rounded-xl hover:bg-[#3d3224] transition-colors shadow-lg shadow-[#2c2416]/20"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
