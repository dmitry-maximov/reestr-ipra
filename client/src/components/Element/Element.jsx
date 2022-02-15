import { Link } from 'react-router-dom';
import cl from './Element.module.css';

const Service = ({ id, name, route, width }) => {
  return (
    <div className={cl.element} style={{ width: width }}>
      <div className={cl.element__block}>
        <div>
          <Link to={`${route}/${id}`}>{name}</Link>
        </div>
        <div className={cl.element__icon}>
          <i className="fas fa-caret-left"></i>
        </div>
      </div>
    </div>
  );
};

export default Service;
