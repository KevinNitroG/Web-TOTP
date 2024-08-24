import GoToTopButton from '@/components/GoToTopButton';
import ToastContainer from '@/components/ToastContainer';
import Footer from '@layouts/components/Footer';
import Navbar from '@layouts/components/Navbar';
import { Outlet } from 'react-router';

function Default() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
        <ToastContainer />
      </div>
      <Footer />
      <GoToTopButton className="fixed bottom-6 right-6" />
    </div>
  );
}

export default Default;
