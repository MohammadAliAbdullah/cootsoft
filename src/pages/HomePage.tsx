import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { CheckCircle, Users, Globe, Server, ShieldCheck, BarChart, Code, User } from 'lucide-react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonial';

const HomePage = () => {
  const languages = ['PHP', 'Laravel', 'Node.js', 'React.js', 'Python'];
  const clients = ['Petlink', '10bazar', 'Bata', 'Robi'];

  return (
    <div>
      <Hero />
      {/* Hero Section */}

      {/* Products Section */}
      <AnimatedSection className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Solutions</h2>
            <p className="text-neutral-600">
              Discover our comprehensive range of software solutions designed to address the unique needs of various industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Use Language Section */}
       <AnimatedSection className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-800">Technologies We Use</h2>
            <p className="text-neutral-600">
              We leverage a variety of cutting-edge technologies to build robust and scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Code size={24} />
                </div>
                <h3 className="text-lg font-semibold text-center text-indigo-800">{language}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Client Section */}
      <AnimatedSection className="section bg-neutral-80">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Our Clients</h2>
            <p className="text-neutral-600">
              We are proud to work with a diverse range of clients across various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <User size={24} />
                </div>
                <h3 className="text-lg font-semibold text-center text-purple-800">{client}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cootsoft?</h2>
            <p className="text-neutral-600">
              We deliver exceptional software solutions backed by expertise, innovation, and dedicated support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-neutral-600">
                Our team consists of experienced developers, designers, and industry experts committed to delivering exceptional solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-neutral-600">
                We implement rigorous testing and quality assurance processes to ensure reliable, bug-free software solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Support</h3>
              <p className="text-neutral-600">
                We provide comprehensive support and maintenance services to clients around the world, ensuring smooth operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-neutral-600">
                Our solutions are designed to scale with your business, accommodating growth and evolving requirements seamlessly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Robust Security</h3>
              <p className="text-neutral-600">
                We implement industry-leading security practices to protect your data and ensure compliance with regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-neutral-600">
                Our solutions provide valuable insights and analytics to help you make informed business decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      <Testimonials />
      {/* Testimonials Section */}

      {/* CTA Section */}
      <AnimatedSection className="section bg-primary-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how our software solutions can help your business grow and succeed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="font-semibold"
              >
                Contact Us
              </Button>
              <Button
                to="/products"
                variant="outline"
                size="lg"
                className="font-semibold bg-white/10 border-white text-white hover:bg-white/20"
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
