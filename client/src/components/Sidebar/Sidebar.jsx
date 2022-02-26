import { Link } from 'react-router-dom';
import {
  START_PAGE_ROUTE,
  ADMIN_ROUTE_ORG,
  ADMIN_ROUTE,
} from '../../utils/const';
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
              Панель администрирования
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ADMIN_ROUTE_ORG}>
              Организации
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Категории и Услуги
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Пользователи
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
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
