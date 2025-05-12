import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[60vh] flex items-center justify-center py-16 md:py-20"
    >
      <div className="container text-center max-w-lg">
        <h1 className="text-9xl font-bold text-primary-700 mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary" size="lg">
            Go Home
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;