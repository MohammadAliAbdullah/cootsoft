import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProduct, Product } from '../data/products';
import Button from '../components/Button';
import { Check, ChevronLeft } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      const fetchedProduct = id ? getProduct(id) : null;
      setProduct(fetchedProduct || null);
      setIsLoading(false);
    }, 300);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-neutral-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button to="/products" variant="primary">
          View All Products
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-800 text-white py-16">
        <div className="container">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center text-white/80 hover:text-white mb-6"
            onClick={() => navigate('/products')}
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to Products
          </motion.button>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {product.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl"
          >
            {product.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Product Content */}
      <div className="bg-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <AnimatedSection className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection className="flex flex-col justify-center" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                {product.longDescription}
              </p>
              <div className="mb-8">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Request a Demo
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Features */}
      <AnimatedSection className="py-12 md:py-16 bg-neutral-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start"
              >
                <div className="shrink-0 mt-1">
                  <Check size={20} className="text-secondary-500" />
                </div>
                <p className="ml-3 text-neutral-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-12 md:py-16 bg-primary-900 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-white/80 text-lg mb-8">
            Contact our team today to learn more about our {product.name.toLowerCase()} and how it can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
            >
              Contact Sales
            </Button>
            <Button
              to="/products"
              variant="outline"
              size="lg"
              className="border-white text-white bg-white/10 hover:bg-white/20"
            >
              View Other Solutions
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProductDetailPage;