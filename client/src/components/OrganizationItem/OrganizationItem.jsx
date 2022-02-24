import { useNavigate } from 'react-router-dom';
import { ORGANIZATION_ROUTE } from '../../utils/const';
import { ICONS } from '../../utils/const';
import cl from './OrganizationItem.module.css';

function OrganizationItem(props) {
  const { item } = props;
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    history(ORGANIZATION_ROUTE + `/${item.id}`);
  };

  return (
    <div
      className={cl.organization_container}
      key={item.id}
      onClick={(e) => handleClick(e)}
    >
      <div className={cl.organization}>
        <h5 className={cl.organization__header}>{item.name}</h5>
        <p className={cl.organization__text}>
          <i className={ICONS.address}></i> {item.addres}
        </p>
        <p className={cl.organization__text}>
          <i className={ICONS.phone}></i> {item.phone}
        </p>
      </div>
    </div>
  );
}

export default OrganizationItem;
