import React from 'react';
import { Terminal, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();
  const baseUrl = window.location.origin;
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={`coot_logo.jpg`} alt="Coot Logo" className="h-12 w-[150px]" />
              {/* <img src={`${baseUrl}/public/coot_logo.jpg`} alt="Coot Logo" className="h-12 w-[150px]" /> */}
            </div>
            <p className="text-gray-400 mb-6">
              Providing powerful business software solutions that streamline operations and boost your bottom line.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Point of Sale (POS)
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Restaurant Management
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Hotel Management
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Testimonials
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Help Center
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Documentation
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  System Status
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              &copy; {currentYear} COOTSOFT. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;