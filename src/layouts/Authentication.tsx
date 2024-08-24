import ToastContainer from '@/components/ToastContainer';
import { Outlet } from 'react-router-dom';

function Authentication() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200">
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default Authentication;
