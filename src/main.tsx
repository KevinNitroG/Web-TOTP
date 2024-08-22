import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.css';

import store from '@state/store';

import DefaultLayout from '@layouts/Default';
import SigninPage from '@pages/Authentication/Signin';
import SignupPage from '@pages/Authentication/Signup';
import ErrorPage from '@pages/Error';
import HomePage from '@pages/Home';
import VaultPage from '@pages/Vault';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
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
