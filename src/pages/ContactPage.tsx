import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const ContactPage = () => {
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/80"
            >
              Have questions or ready to get started? Reach out to our team and we'll be happy to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <AnimatedSection className="py-16 md:py-20 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-neutral-600 mb-8">
                We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-neutral-600">
                      123 Tech Street, Suite 456<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@cootsoft.com" className="hover:text-primary-600 transition-colors">
                        info@cootsoft.com
                      </a><br />
                      <a href="mailto:support@cootsoft.com" className="hover:text-primary-600 transition-colors">
                        support@cootsoft.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+15551234567" className="hover:text-primary-600 transition-colors">
                        (555) 123-4567
                      </a><br />
                      <a href="tel:+15559876543" className="hover:text-primary-600 transition-colors">
                        (555) 987-6543
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-neutral-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map */}
      <AnimatedSection className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-neutral-600">
              Visit our office in the heart of San Francisco's tech district.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.27319386007!2d-122.46638806312286!3d37.77493603712015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1688522913469!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Cootsoft Office Location"
            ></iframe>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;