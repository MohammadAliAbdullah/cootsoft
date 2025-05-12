import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-neutral-600 mb-4">{product.shortDescription}</p>
        <Link
          to={`/products/${product.id}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          Learn more
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;