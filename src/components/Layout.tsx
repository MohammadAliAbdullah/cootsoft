import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;