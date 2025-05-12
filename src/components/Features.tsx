import React from 'react';
import { 
  Shield, 
  BarChart, 
  Clock, 
  Monitor, 
  Smartphone, 
  Users, 
  Cloud, 
  Headphones,
  ShoppingCart,
  UtensilsCrossed,
  Building,
  Check
} from 'lucide-react';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-blue-100 p-3 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-blue-800" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security and 99.9% uptime guarantee for all our software solutions."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Gain actionable insights with our comprehensive reporting and analytics tools."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "All systems update in real-time so you always have the latest information."
    },
    {
      icon: Monitor,
      title: "User-friendly Interface",
      description: "Intuitive design that requires minimal training for your staff to master."
    },
    {
      icon: Smartphone,
      title: "Mobile Compatibility",
      description: "Access your system from anywhere using our mobile-responsive applications."
    },
    {
      icon: Users,
      title: "Multi-user Support",
      description: "Role-based permissions and unlimited user accounts with your subscription."
    },
    {
      icon: Cloud,
      title: "Cloud-based Solution",
      description: "No need for expensive hardware — access your system from any device."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you."
    }
  ];

  const productFeatures = {
    pos: [
      "Inventory Management",
      "Customer Loyalty Programs",
      "Multi-payment Options",
      "Sales Analytics",
      "Employee Management"
    ],
    restaurant: [
      "Table Management",
      "Order Tracking",
      "Menu Customization",
      "Kitchen Display System",
      "Reservation Management"
    ],
    hotel: [
      "Booking Management",
      "Room Allocation",
      "Guest Profiles",
      "Housekeeping Tracking",
      "Integrated Billing"
    ]
  };

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our software comes packed with features designed to make your business operations more efficient and profitable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-blue-50 rounded-xl p-8 md:p-10 shadow-md">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Product-Specific Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-center text-gray-900 mb-4">Point of Sale</h4>
                <ul className="space-y-2">
                  {productFeatures.pos.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="bg-blue-100 rounded-full p-1 mr-3">
                        <Check className="w-4 h-4 text-blue-800" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-teal-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <UtensilsCrossed className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-center text-gray-900 mb-4">Restaurant Management</h4>
                <ul className="space-y-2">
                  {productFeatures.restaurant.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="bg-teal-100 rounded-full p-1 mr-3">
                        <Check className="w-4 h-4 text-teal-800" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-amber-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-center text-gray-900 mb-4">Hotel Management</h4>
                <ul className="space-y-2">
                  {productFeatures.hotel.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="bg-amber-100 rounded-full p-1 mr-3">
                        <Check className="w-4 h-4 text-amber-700" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;