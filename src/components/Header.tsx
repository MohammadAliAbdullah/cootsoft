import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Code, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
      ? 'text-primary-800 font-semibold'
      : 'text-neutral-600 hover:text-primary-700 hover:bg-neutral-50'
    }`;
  const baseUrl = window.location.origin;
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent py-4'
        }`}
    >
      <div className="container flex items-center justify-between h-14 md:h-15">
        <Link
          to="/"
          className="flex items-center space-x-2 text-primary-800"
          onClick={closeMenu}
        >
          {/* <Code size={32} className="text-primary-800" /> */}
          {/* <span className="text-xl font-bold">Cootsoft</span> */}
          {/* <img src={`${baseUrl}/public/coot_logo.jpg`} alt="Coot Logo" className="h-12 w-[150px]" /> */}
          <img src={`coot_logo.jpg`} alt="Coot Logo" className="h-12 w-[150px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <div className="relative group">
            <button
              className="flex items-center px-3 py-2 text-sm font-medium text-neutral-600 rounded-md hover:text-primary-700 hover:bg-neutral-50"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
              <ChevronDown size={16} className="ml-1" />
            </button>
            <div
              className={`absolute left-0 w-48 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 transform ${isProductsOpen
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
              <div className="py-1">
                <Link
                  to="/products"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProductsOpen(false)}
                >
                  All Products
                </Link>
                <Link
                  to="/products/ecommerce"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProductsOpen(false)}
                >
                  E-commerce
                </Link>
                <Link
                  to="/products/pos"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProductsOpen(false)}
                >
                  POS Management
                </Link>
                <Link
                  to="/products/hotel"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Hotel Management
                </Link>
                <Link
                  to="/products/restaurant"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Restaurant Management
                </Link>
              </div>
            </div>
          </div>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="ml-3 btn btn-primary text-sm px-4 py-2"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-neutral-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 border-t">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
          <button
            className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-neutral-600 rounded-md hover:text-primary-700 hover:bg-neutral-50"
            onClick={() => setIsProductsOpen(!isProductsOpen)}
          >
            Products
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''
                }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${isProductsOpen ? 'max-h-48' : 'max-h-0'
              }`}
          >
            <Link
              to="/products"
              className="block pl-6 pr-3 py-2 text-sm text-neutral-600 hover:text-primary-700 hover:bg-neutral-50 rounded-md"
              onClick={closeMenu}
            >
              All Products
            </Link>
            <Link
              to="/products/ecommerce"
              className="block pl-6 pr-3 py-2 text-sm text-neutral-600 hover:text-primary-700 hover:bg-neutral-50 rounded-md"
              onClick={closeMenu}
            >
              E-commerce
            </Link>
            <Link
              to="/products/pos"
              className="block pl-6 pr-3 py-2 text-sm text-neutral-600 hover:text-primary-700 hover:bg-neutral-50 rounded-md"
              onClick={closeMenu}
            >
              POS Management
            </Link>
            <Link
              to="/products/hotel"
              className="block pl-6 pr-3 py-2 text-sm text-neutral-600 hover:text-primary-700 hover:bg-neutral-50 rounded-md"
              onClick={closeMenu}
            >
              Hotel Management
            </Link>
            <Link
              to="/products/restaurant"
              className="block pl-6 pr-3 py-2 text-sm text-neutral-600 hover:text-primary-700 hover:bg-neutral-50 rounded-md"
              onClick={closeMenu}
            >
              Restaurant Management
            </Link>
          </div>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="block px-3 py-2 mt-4 btn btn-primary text-center text-sm"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;