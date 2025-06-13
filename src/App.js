import { createBrowserRouter, createHashRouter, Outlet, RouterProvider } from 'react-router';

import '@/assets/css/index.less';

import ErrorPage from '@/ErrorPage';
import Box from '@/pages/Box/Box';

const createRouter =
  process.env.REACT_APP_USE_HASH_ROUTE === 'true' ? createHashRouter : createBrowserRouter;

const router = createRouter([
  {
    path: '/',
    element: <Outlet></Outlet>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/box',
        element: <Box></Box>
      }
    ]
  }
]);

function App() {
  const a  =    1;
  return <RouterProvider router={router} />;
}

export default App;
