import Movies from 'components/Movies';
import Details from 'pages/Details';
import NotFoundPage from 'pages/NotFoundPage';

export const MOBILE_ROUTES = [
  {
    path: '/',
    element: <Movies />,
  }, 
  {
    path: '/movie/:eventId',
    element: <Details />,
  }, 
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
