import { createHashRouter, Outlet, RouterProvider } from 'react-router';

import '@/assets/css/index.less';

import ErrorPage from '@/ErrorPage';
import Box from '@/pages/Box/Box';

const router = createHashRouter([
  {
    path: '/',
    element: <Outlet></Outlet>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'search-box',
        element: <Box></Box>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
