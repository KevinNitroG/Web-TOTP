import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.css';

import store from '@state/store';

import DefaultLayout from '@layouts/Default';
import FocusLayout from '@layouts/Focus';
import Authentication from '@pages/Authentication';
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
    path: '/auth',
    element: <FocusLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/auth',
        element: <Authentication />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
);
