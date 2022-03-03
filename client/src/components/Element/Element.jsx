import { Link } from 'react-router-dom';
import { ICONS } from '../../utils/const';
import cl from './Element.module.css';

const Element = ({ id, name, route, width, type, icon = true, ...props }) => {
  return (
    <div className={cl.element} style={{ width: width }} {...props}>
      <div className={cl.element__block}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {route ? <Link to={`${route}/${id}`}>{name}</Link> : <h6>{name}</h6>}
          {type && (
            <strong>
              <sub>{type.name}</sub>
            </strong>
          )}
        </div>
        {icon && (
          <div className={cl.element__icon}>
            <i className={ICONS.element_icon}></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Element;
