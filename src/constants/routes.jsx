import Main from '../pages/Main';
import Details from '../pages/Details';
import NotFoundPage from '../pages/NotFoundPage';
import UsersProfile from '../pages/UsersProfile';

export const ROUTES = [
  {
    path: '/',
    element: <Main />,
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
  user: 'users-profile',
};
