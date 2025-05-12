import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Award, Clock, Users, Globe, Send, Zap } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/3782179/pexels-photo-3782179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Alex Rodriguez',
      position: 'Lead Developer',
      image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Jessica Lee',
      position: 'UX/UI Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="inset-0 bg-secondary-100 from-blue-50 to-white py-16 md:py-20 py-16 md:py-20">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-blue-100 rounded-l-full opacity-20 blur-3xl"></div> */}
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 pt-12 md:pt-16"
            >
              About COOTSOFT
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-800"
            >
              We're a team of passionate technology experts committed to creating innovative software solutions for businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                Founded in 2015, Cootsoft began with a simple mission: to create powerful, user-friendly software solutions that help businesses operate more efficiently. What started as a small team of three developers has now grown into a diverse company with expertise across multiple technologies and industries.
              </p>
              <p className="text-neutral-600 mb-4">
                Our founder, Sarah Johnson, recognized a gap in the market for integrated business software that was both powerful and accessible to companies of all sizes. With a background in both technology and business management, she assembled a team of like-minded experts to build solutions that address real-world challenges.
              </p>
              <p className="text-neutral-600">
                Today, Cootsoft serves clients worldwide, from small local businesses to large enterprises, all with the same dedication to quality, innovation, and customer satisfaction that has defined us from the beginning.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Cootsoft team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary-500 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection className="py-16 md:py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-neutral-600">
              At Cootsoft, our values guide everything we do, from how we develop our products to how we interact with our clients.
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
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-neutral-600">
                We strive for excellence in every aspect of our work, from code quality to customer service and documentation.
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
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-neutral-600">
                We constantly explore new technologies and methodologies to ensure our solutions remain cutting-edge and effective.
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
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-neutral-600">
                We believe in the power of teamwork, both within our company and in partnership with our clients and other stakeholders.
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
                <Send size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-neutral-600">
                Our clients can depend on us to deliver high-quality solutions on time and provide ongoing support they can trust.
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
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adaptability</h3>
              <p className="text-neutral-600">
                We recognize that each client is unique, and we tailor our solutions to meet specific needs and challenges.
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
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Long-term Focus</h3>
              <p className="text-neutral-600">
                We build lasting relationships with our clients, focusing on long-term success rather than quick fixes.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Team */}
      <AnimatedSection className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-neutral-600">
              Our diverse team brings together expertise from various backgrounds to create innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-neutral-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-12 md:py-16 bg-primary-800 text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-white/80 text-lg mb-8">
            We're always looking for talented individuals to join our growing team. Check out our current opportunities.
          </p>
          <Button
            to="/contact"
            variant="secondary"
            size="lg"
          >
            View Open Positions
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;