import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { CheckCircle, Users, Globe, Server, ShieldCheck, BarChart } from 'lucide-react';
import Hero from './components/Hero';

const HomePage = () => {
  const clients = [
    {
      name: 'TechCorp',
      logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'FoodChain',
      logo: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'HotelPro',
      logo: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'RetailMax',
      logo: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const languages = [
    {
      name: 'PHP',
      icon: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Server-side scripting language perfect for web development',
    },
    {
      name: 'Laravel',
      icon: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'PHP framework for elegant web applications',
    },
    {
      name: 'Node.js',
      icon: 'https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'JavaScript runtime for scalable network applications',
    },
    {
      name: 'Express',
      icon: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Fast, unopinionated web framework for Node.js',
    },
    {
      name: 'React',
      icon: 'https://images.pexels.com/photos/11035390/pexels-photo-11035390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'JavaScript library for building user interfaces',
    },
    {
      name: 'Vue.js',
      icon: 'https://images.pexels.com/photos/11035425/pexels-photo-11035425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Progressive framework for building user interfaces',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Modern Software Solutions for Modern Businesses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl mb-8 text-white/80"
            >
              Streamline operations, enhance customer experiences, and grow your business with our professional software solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                to="/products"
                variant="secondary"
                size="lg"
                className="font-semibold"
              >
                Explore Solutions
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="font-semibold bg-white/10 border-white text-white hover:bg-white/20"
              >
                Request Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

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

      {/* Technologies Section */}
      <AnimatedSection className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-neutral-600">
              We leverage cutting-edge technologies and frameworks to deliver robust, scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{tech.name}</h3>
                  <p className="text-neutral-600 text-sm">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="section bg-white">
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

      {/* Clients Section */}
      <AnimatedSection className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-neutral-600">
              We're proud to work with businesses across various industries, helping them achieve their digital transformation goals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center"
              >
                <div className="w-full aspect-[3/2] relative overflow-hidden rounded-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

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