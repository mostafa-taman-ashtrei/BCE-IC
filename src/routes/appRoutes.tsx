import { Navigate, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <h1>hi there</h1>,
  },
  {
    path: '*',
    element: <Outlet />,
    children: [
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]
  },
];

export default appRoutes;
