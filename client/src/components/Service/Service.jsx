import { Link } from 'react-router-dom';
import { SERVICE_ITEM_ROUTE } from '../../utils/const';
import cl from './Service.module.css';

const Service = (props) => {
  return (
    <div className={cl.service}>
      <div className={cl.service__block}>
        <div>
          <Link to={`${SERVICE_ITEM_ROUTE}/${props.id}`}>{props.name}</Link>
        </div>
        <div className={cl.service__icon}>
          <i className="fas fa-caret-left"></i>
        </div>
      </div>
    </div>
  );
};

export default Service;
