import Movies from '../components/Movies';
import Details from '../components/Details';
import NotFoundPage from '../components/NotFoundPage';
import UsersProfile from '../components/UsersProfile';

export const ROUTES = [
  {
    path: '/',
    element: <Movies />,
  }, 
  {
    path: '/movie/:eventId',
    element: <Details />,
  }, 
  {
    path: '/users-profile',
    element: <UsersProfile />,
  }, 
  {
    path: '*',
    element: <NotFoundPage />,
  },
  ];

  export const headerRoute = {
    user: 'users-profile'
  }
