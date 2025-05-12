import { useState } from 'react';
import { motion } from 'framer-motion';
import products, { getProductsByCategory, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';

const categories = [
  { id: '', label: 'All' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'pos', label: 'POS Management' },
  { id: 'hotel', label: 'Hotel Management' },
  { id: 'restaurant', label: 'Restaurant Management' },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setDisplayedProducts(getProductsByCategory(categoryId));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Software Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80"
            >
              Discover our comprehensive range of professional software solutions designed to address the unique needs of your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories and Products */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="container">
          {/* Category Tabs */}
          <div className="mb-10 border-b border-neutral-200 overflow-x-auto">
            <ul className="flex space-x-2 md:space-x-6 pb-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 text-sm md:text-base font-medium rounded-t-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-white text-primary-700 shadow-sm'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Grid */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;