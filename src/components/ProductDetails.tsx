import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, UtensilsCrossed, Building, Check, ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = {
    pos: {
      title: "Point of Sale (POS) System",
      icon: ShoppingCart,
      color: "bg-blue-800",
      description: "A comprehensive point of sale solution that streamlines your business operations.",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["PHP", "Node.js", "React", "MySQL", "PostgreSQL"],
      features: [
        "Real-time inventory management",
        "Multi-location support",
        "Customer relationship management",
        "Advanced reporting and analytics",
        "Integrated payment processing",
        "Employee management and scheduling",
        "Custom pricing and promotions",
        "Offline mode capability"
      ],
      benefits: [
        "Increase operational efficiency",
        "Reduce checkout times",
        "Prevent inventory stockouts",
        "Improve customer satisfaction",
        "Make data-driven decisions"
      ]
    },
    restaurant: {
      title: "Restaurant Management System",
      icon: UtensilsCrossed,
      color: "bg-teal-800",
      description: "An all-in-one solution for managing your restaurant operations efficiently.",
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Vue.js", "Node.js", "Python", "Oracle", "PostgreSQL"],
      features: [
        "Table and reservation management",
        "Kitchen display system",
        "Menu and recipe management",
        "Inventory tracking",
        "Staff scheduling",
        "Online ordering integration",
        "Customer loyalty program",
        "Real-time reporting"
      ],
      benefits: [
        "Streamline order processing",
        "Reduce food waste",
        "Improve table turnover",
        "Enhance customer experience",
        "Optimize staff productivity"
      ]
    },
    hotel: {
      title: "Hotel Management System",
      icon: Building,
      color: "bg-amber-700",
      description: "A powerful hotel management solution that elevates guest experience and streamlines operations.",
      image: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "Python", "Oracle", "PostgreSQL"],
      features: [
        "Reservation and booking management",
        "Room allocation and status tracking",
        "Guest check-in/check-out",
        "Housekeeping management",
        "Billing and invoicing",
        "Event and conference management",
        "Integration with OTAs",
        "Mobile app for guests"
      ],
      benefits: [
        "Maximize occupancy rates",
        "Improve guest satisfaction",
        "Streamline operations",
        "Increase revenue",
        "Reduce administrative work"
      ]
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate('/')}
          className="mb-8 text-gray-600 hover:text-gray-900 font-medium flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className={`w-16 h-16 ${product.color.replace('bg-', 'bg-').replace('800', '100')} ${product.color.replace('bg-', 'text-')} rounded-xl flex items-center justify-center mb-6`}>
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.description}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button className={`${product.color} text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
              Request Demo
            </button>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-4">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className={`${product.color.replace('bg-', 'bg-').replace('800', '100')} p-1 rounded-full mr-3 mt-1`}>
                    <Check className={`w-4 h-4 ${product.color.replace('bg-', 'text-')}`} />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits</h2>
            <ul className="space-y-4">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <span className={`${product.color.replace('bg-', 'bg-').replace('800', '100')} p-1 rounded-full mr-3 mt-1`}>
                    <Check className={`w-4 h-4 ${product.color.replace('bg-', 'text-')}`} />
                  </span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;