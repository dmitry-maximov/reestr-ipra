import OrganizationPage from '../pages/OrganizationPage';
import Reestr from '../pages/ReestrPage';
import InitialPage from '../pages/InitialPage';
import ServicePage from '../pages/ServicePage';
import ServiceItemPage from '../pages/ServiceItemPage';
import {
  START_PAGE_ROUTE,
  REESTR_ROUTE,
  ORGANIZATION_ROUTE,
  SERVICE_ROUTE,
  SERVICE_ITEM_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from '../utils/const';
import AuthPage from '../pages/AuthPage';

export const publicRoutes = [
  {
    path: START_PAGE_ROUTE,
    element: <InitialPage />,
  },
  {
    path: REESTR_ROUTE,
    element: <Reestr />,
  },
  {
    path: ORGANIZATION_ROUTE + '/:id',
    element: <OrganizationPage />,
  },
  {
    path: ORGANIZATION_ROUTE + '/:id',
    element: <OrganizationPage />,
  },
  {
    path: SERVICE_ROUTE,
    element: <ServicePage />,
  },
  {
    path: SERVICE_ITEM_ROUTE + '/:id',
    element: <ServiceItemPage />,
  },
  {
    path: LOGIN_ROUTE,
    element: <AuthPage />,
  },

  {
    path: REGISTRATION_ROUTE,
    element: <AuthPage />,
  },
];

// TO DO: список страниц доступных только вошедшим пользователям
export const privateRoutes = [];
