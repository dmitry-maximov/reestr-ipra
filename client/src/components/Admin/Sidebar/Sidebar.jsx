import { Link } from 'react-router-dom';
import {
  START_PAGE_ROUTE,
  ADMIN_ROUTE,
  ADMIN_ROUTE_SERVICES,
  ADMIN_ROUTE_USERS,
  ADMIN_ROUTE_APPEALS,
} from '../../../utils/const';
import cl from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={cl.sidebar}>
      <div className={cl.sidebar__title}>
        <h5 className="text-center">
          <Link to={START_PAGE_ROUTE} style={{ color: '#fff' }}>
            <strong>Портал ИПРА</strong>
          </Link>
        </h5>
      </div>
      <div className={cl.sidebar__menu}>
        <ul className={cl.sidebar__links}>
          <li className="nav-item">
            <Link className="nav-link" to={ADMIN_ROUTE}>
              Организации
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ADMIN_ROUTE_SERVICES}>
              Категории и Услуги
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ADMIN_ROUTE_USERS}>
              Пользователи
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ADMIN_ROUTE_APPEALS}>
              Обращения
            </Link>
          </li>
        </ul>
      </div>
      <div className={cl.sidebar__footer}>
        <p>Pet-Project Company &copy; {new Date().getFullYear()} </p>
      </div>
    </div>
  );
}

export default Sidebar;
