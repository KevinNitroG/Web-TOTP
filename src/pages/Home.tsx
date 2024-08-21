import { useAppSelector } from '@state/hook';
import { Link } from 'react-router-dom';

function Home() {
  const isSignin: boolean = useAppSelector((state) => state.user.isSignin);

  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="bg-gradient-to-br from-ctp-mauve to-ctp-lavender bg-clip-text text-5xl font-bold text-transparent dark:from-ctp-lavender dark:to-ctp-mauve">
            WEB TOTP
          </h1>
          <p className="py-6">A simple website generates TOTP</p>
          <Link
            className="btn btn-primary"
            to={isSignin ? '/vault' : '/signin'}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
