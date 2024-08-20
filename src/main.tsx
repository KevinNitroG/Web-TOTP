import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import './styles/index.css';

import store from '@state/store';

import ErrorPage from '@/pages/Error';
import NormalLayout from '@layouts/Normal';
import HomePage from '@pages/Home';
import VaultPage from '@pages/Vault';
import SigninPage from '@pages/Signin';
import SignupPage from '@pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NormalLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/vault',
        element: <VaultPage />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
);
