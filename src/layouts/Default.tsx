import GoToTopButton from '@/components/GoToTopButton';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { Outlet } from 'react-router';

function Default() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      <GoToTopButton className="fixed bottom-6 right-6" />
    </div>
  );
}

export default Default;
