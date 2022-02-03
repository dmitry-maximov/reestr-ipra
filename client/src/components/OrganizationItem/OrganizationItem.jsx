import { Link } from 'react-router-dom';
import { ORGANIZATION_ROUTE } from '../../utils/const';
import cl from './OrganizationItem.module.css';

function OrganizationItem(props) {
  const { item } = props;
  return (
    <Link to={ORGANIZATION_ROUTE + `/${item.id}`}>
      <div className={cl.organization_container}>
        <div className={cl.organization} key={item.id}>
          <h5 className={cl.organization__header}>
            {item.name} Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum
            Lorem IpsumLorem Ipsum
          </h5>
          <p className={cl.organization__text}>
            <i className="fas fa-map-marker-alt"></i> 620089, Свердловская
            область, Октябрьский р-н Екатеринбурга, г.Екатеринбург,
            ул.Белинского, д. 173, корп. а
          </p>
          <p className={cl.organization__text}>
            <i className="fas fa-phone-square-alt"></i> 8(343) 270-88-19
          </p>
        </div>
      </div>
    </Link>
  );
}

export default OrganizationItem;
