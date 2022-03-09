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
  FEEDBACK_ROUTE,
  ADMIN_ROUTE,
  ADMIN_ROUTE_ORG,
  ADMIN_ROUTE_NEW_ORG,
  ADMIN_ROUTE_USERS,
  ADMIN_ROUTE_APPEALS,
  ADMIN_ROUTE_SERVICES,
} from '../utils/const';
import AuthPage from '../pages/AuthPage';
import FeedbackPage from '../pages/FeedbackPage';
import AdminPage from '../pages/AdminPage';
import Changeorganization from '../components/Admin/ChangeOrganization/Changeorganization';
import UsersAdminPage from '../pages/UsersAdminPage';
import ServicesAdminPage from '../pages/ServicesAdminPage';
import AppealsAdminPage from '../pages/AppealsAdminPage';

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
    path: SERVICE_ROUTE,
    element: <ServicePage />,
  },
  {
    path: SERVICE_ITEM_ROUTE + '/:id',
    element: <ServiceItemPage />,
  },
  {
    path: FEEDBACK_ROUTE,
    element: <FeedbackPage />,
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

export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <AdminPage />,
  },
  {
    path: ADMIN_ROUTE_NEW_ORG,
    element: <Changeorganization />,
  },
  {
    path: ADMIN_ROUTE_ORG + '/:id',
    element: <Changeorganization />,
  },
  {
    path: ADMIN_ROUTE_USERS,
    element: <UsersAdminPage />,
  },
  {
    path: ADMIN_ROUTE_SERVICES,
    element: <ServicesAdminPage />,
  },
  {
    path: ADMIN_ROUTE_APPEALS,
    element: <AppealsAdminPage />,
  },
];
