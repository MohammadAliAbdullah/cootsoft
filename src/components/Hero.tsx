import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-blue-100 rounded-l-full opacity-20 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Business Solutions <span className="text-blue-800">Redefined</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
                            COOTSOFT delivers powerful software solutions for modern businesses.
                            Our integrated POS, restaurant, and hotel management systems streamline
                            operations and boost your bottom line.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={scrollToContact}
                                className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <button
                                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 bg-white text-blue-800 font-medium rounded-md border border-blue-800 hover:bg-blue-50 transition-colors flex items-center justify-center"
                            >
                                Explore Products
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-2xl transform translate-x-10 translate-y-10"></div>
                            <img
                                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Business team using COOTSOFT"
                                className="relative z-10 rounded-lg shadow-xl w-full transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;