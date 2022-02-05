import { Link } from 'react-router-dom';
import { ORGANIZATION_ROUTE } from '../../utils/const';
import cl from './OrganizationItem.module.css';

function OrganizationItem(props) {
  const { item } = props;
  return (
    <Link to={ORGANIZATION_ROUTE + `/${item.id}`}>
      <div className={cl.organization_container} key={item.id}>
        <div className={cl.organization}>
          <h5 className={cl.organization__header}>{item.name}</h5>
          <p className={cl.organization__text}>
            <i className="fas fa-map-marker-alt"></i> {item.addres}
          </p>
          <p className={cl.organization__text}>
            <i className="fas fa-phone-square-alt"></i> {item.phone}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default OrganizationItem;
