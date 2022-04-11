import { Navigate, Outlet } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import TeamPage from '../pages/TeamPage';

const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/team',
    element: <TeamPage />,
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
