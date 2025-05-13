import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  rating: number;
}

const Testimonial = ({ quote, name, title, company, image, rating }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 flex flex-col items-center md:flex-row md:items-start gap-8">
      <div className="md:w-1/4 flex-shrink-0">
        <img src={image} alt={name} className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover mx-auto border-4 border-blue-100" />
      </div>
      <div className="md:w-3/4">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
          ))}
        </div>
        <blockquote className="text-gray-700 mb-6 italic">"{quote}"</blockquote>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-gray-600">{title}, {company}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "COOTSOFT's POS system has revolutionized how we handle transactions. The inventory management features alone have saved us countless hours and eliminated stockouts.",
      name: "Sarah Johnson",
      title: "Owner",
      company: "The Corner Market",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      quote: "The restaurant management system is incredibly intuitive. Our staff picked it up quickly, and it's made our operations much more efficient. The customer support is also top-notch.",
      name: "Michael Chen",
      title: "General Manager",
      company: "Fusion Bistro",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      quote: "As a hotel chain, we needed a robust management system that could handle multiple properties. COOTSOFT delivered exactly what we needed and has been a reliable partner for years.",
      name: "Emily Rodriguez",
      title: "Operations Director",
      company: "Grand Hotels Group",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our software solutions have helped businesses across various industries.
          </p>
        </div>
        
        <div className="relative">
          <Testimonial {...testimonials[currentTestimonial]} />
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentTestimonial ? 'bg-blue-800' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;