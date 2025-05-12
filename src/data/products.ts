export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  image: string;
  category: 'ecommerce' | 'pos' | 'hotel' | 'restaurant';
}

const products: Product[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce Solution',
    shortDescription: 'Comprehensive e-commerce platform for online businesses',
    longDescription: 'Our e-commerce solution is a complete platform designed to help businesses sell online effectively. With powerful tools for product management, payment processing, and customer engagement, you can build and scale your online store with ease. The platform is fully customizable and integrates with multiple payment gateways, shipping providers, and marketing tools.',
    features: [
      'Intuitive product catalog management',
      'Secure payment processing with multiple gateways',
      'Responsive design for all devices',
      'Advanced inventory management',
      'SEO optimization tools',
      'Customer account management',
      'Order tracking and history',
      'Customizable checkout process',
      'Marketing tools and promotional capabilities',
      'Detailed analytics and reporting'
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'ecommerce'
  },
  {
    id: 'pos',
    name: 'POS Management System',
    shortDescription: 'Streamlined point-of-sale system for retail businesses',
    longDescription: 'Our POS Management System is designed to streamline retail operations with an easy-to-use interface and powerful back-end tools. It combines point-of-sale functionality with inventory management, employee tracking, and detailed reporting. The system works both online and offline, ensuring your business can operate in any situation. It\'s scalable for businesses of all sizes, from single locations to multi-store enterprises.',
    features: [
      'Intuitive touchscreen interface',
      'Inventory management and stock alerts',
      'Employee management with role-based access',
      'Customer relationship management',
      'Multi-payment option support',
      'Barcode scanning and label printing',
      'Sales analytics and reporting',
      'Gift card and loyalty program integration',
      'Online and offline operation modes',
      'Multi-location support'
    ],
    image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pos'
  },
  {
    id: 'hotel',
    name: 'Hotel Management System',
    shortDescription: 'All-in-one solution for efficient hotel operations',
    longDescription: 'Our Hotel Management System simplifies operations for hotels and accommodations of all sizes. From reservation management to housekeeping, every aspect of hotel operations is covered in one integrated platform. The system enhances guest experiences through personalized services while optimizing staff efficiency. Real-time reporting and analytics provide insights to improve performance and increase revenue.',
    features: [
      'Reservation and booking management',
      'Front desk operations',
      'Room inventory and rate management',
      'Housekeeping and maintenance tracking',
      'Guest profile management',
      'Point-of-sale integration for restaurants and services',
      'Event and conference space booking',
      'Staff management and task assignment',
      'Reporting and analytics',
      'Online booking engine integration'
    ],
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'hotel'
  },
  {
    id: 'restaurant',
    name: 'Restaurant Management System',
    shortDescription: 'Complete solution for restaurant operations and customer service',
    longDescription: 'Our Restaurant Management System offers a comprehensive solution for food service establishments of all types. From order taking to kitchen management, inventory control, and customer relationship management, the system is designed to increase efficiency and enhance customer experience. The platform is highly customizable to fit the specific needs of different restaurant concepts, from quick service to fine dining.',
    features: [
      'Table and reservation management',
      'Order taking with customization options',
      'Kitchen display system',
      'Inventory and recipe management',
      'Menu engineering tools',
      'Staff scheduling and performance tracking',
      'Customer relationship management',
      'Integrated payment processing',
      'Online ordering integration',
      'Sales and performance analytics'
    ],
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'restaurant'
  }
];

export default products;

export const getProduct = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category?: string): Product[] => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};