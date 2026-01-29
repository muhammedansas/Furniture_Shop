import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#2c2416] text-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center md:text-left"
        >
          <Link
            to="/"
            className="inline-block font-display text-lg sm:text-xl font-semibold text-[#f5f0e8] hover:text-[#c4b8a8] transition-colors"
          >
            Furniture<span className="text-[#c4b8a8] ml-0.5">Shop</span>
          </Link>
          <p className="text-sm text-[#f5f0e8]/70">Quality furniture for every home.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center md:justify-end"
        >
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-display font-semibold text-[#f5f0e8]">Shop</h4>
            <div className="flex flex-col gap-2">
              {['All Products', 'Sofas', 'Chairs', 'Tables'].map((link) => (
                <Link
                  key={link}
                  to="/"
                  className="text-sm text-[#f5f0e8]/80 hover:text-[#f5f0e8] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-display font-semibold text-[#f5f0e8]">Company</h4>
            <div className="flex flex-col gap-2">
              {['About Us', 'Contact', 'Careers'].map((link) => (
                <Link
                  key={link}
                  to="/"
                  className="text-sm text-[#f5f0e8]/80 hover:text-[#f5f0e8] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="border-t border-[#f5f0e8]/10 py-4 sm:py-6 text-center px-4">
        <p className="text-xs sm:text-sm text-[#f5f0e8]/60">
          © {new Date().getFullYear()} Furniture Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
