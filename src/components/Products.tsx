import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, UtensilsCrossed, Building } from 'lucide-react';

const ProductCard = ({ 
  icon: Icon, 
  title, 
  description, 
  image,
  color,
  id
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  image: string;
  color: string;
  id: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 group">
      <div className={`${color} h-2 w-full`}></div>
      <div className="p-6">
        <div className={`w-14 h-14 ${color.replace('bg-', 'bg-').replace('800', '100')} ${color.replace('bg-', 'text-')} rounded-lg flex items-center justify-center mb-4`}>
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <button 
          onClick={() => navigate(`/product/${id}`)}
          className={`mt-6 px-4 py-2 rounded-md ${color} text-white hover:opacity-90 transition-opacity w-full font-medium`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      id: "pos",
      icon: ShoppingCart,
      title: "Point of Sale (POS)",
      description: "Streamline checkout processes and inventory management with our powerful POS solution.",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "bg-blue-800"
    },
    {
      id: "restaurant",
      icon: UtensilsCrossed,
      title: "Restaurant Management",
      description: "Manage tables, orders, kitchen operations, and staff with our comprehensive system.",
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "bg-teal-800"
    },
    {
      id: "hotel",
      icon: Building,
      title: "Hotel Management",
      description: "Optimize bookings, guest services, and facilities management with our hotel solution.",
      image: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "bg-amber-700"
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Software Solutions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We develop sophisticated yet user-friendly business management software tailored to your industry needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;