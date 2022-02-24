import { Link } from 'react-router-dom';
import cl from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={cl.sidebar}>
      <div className={cl.sidebar__title}>
        <h5 className="text-center">
          <strong>Портал ИПРА</strong>
        </h5>
      </div>
      <div className={cl.sidebar__menu}>
        <ul className="nav flex-column lighten-4 py-4">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Active
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Link
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
