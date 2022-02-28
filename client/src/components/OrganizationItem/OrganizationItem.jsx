import { useNavigate } from 'react-router-dom';
import { ORGANIZATION_ROUTE } from '../../utils/const';
import { ICONS } from '../../utils/const';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import cl from './OrganizationItem.module.css';

function OrganizationItem(props) {
  const { item, isChange, changeHandler, isRemove, removeHandler } = props;
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
        <div className={cl.organization_info}>
          <h5 className={cl.organization__header}>{item.name}</h5>
          <div className={cl.organization_change}>
            {isChange && (
              <ButtonShadow
                style={{ border: 'none' }}
                onClick={(e) => changeHandler(e)}
              >
                <i className={ICONS.change}></i>
              </ButtonShadow>
            )}
            {isRemove && (
              <ButtonShadow
                style={{ border: 'none' }}
                onClick={(e) => removeHandler(e, item.id)}
              >
                <i className={ICONS.remove}></i>
              </ButtonShadow>
            )}
          </div>
        </div>
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
