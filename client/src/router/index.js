import OrganizationPage from '../pages/OrganizationPage';
import Reestr from '../pages/Reestr';
import StartPage from '../pages/StartPage';
import {
  START_PAGE_ROUTE,
  REESTR_ROUTE,
  ORGANIZATION_ROUTE,
} from '../utils/const';

export const publicRoutes = [
  {
    path: START_PAGE_ROUTE,
    element: <StartPage />,
  },
  {
    path: REESTR_ROUTE,
    element: <Reestr />,
  },
  {
    path: ORGANIZATION_ROUTE + '/:id',
    element: <OrganizationPage />,
  },
];

// TO DO: список страниц доступных только вошедшим пользователям
export const privateRoutes = [];
