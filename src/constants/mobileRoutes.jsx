import Movies from '../components/Movies';
import Details from '../components/Details';
import NotFoundPage from '../components/NotFoundPage';

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
