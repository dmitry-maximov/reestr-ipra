import ButtonShadow from '../../ButtonShadow/ButtonShadow';
import { ICONS } from '../../../utils/const';
import cl from './Useritem.module.css';
import avatar from '../../../img/user.png';

function Useritem({ item, removeHandler }) {
  return (
    <div className={cl.user_item_container}>
      <div className={cl.user_item_avatar}>
        <img src={avatar} alt="Logo" />
      </div>
      <div className={cl.user_item_content}>
        <div className="pt-3">
          <p className={cl.user_item_content__role}>{item.role}</p>
          <p className={cl.user_item_content__role}>{item.email}</p>
        </div>
      </div>
      <div className={cl.user_item_action}>
        {removeHandler && (
          <ButtonShadow
            style={{ border: 'none' }}
            onClick={(e) => removeHandler(e, item.id)}
          >
            <i className={ICONS.remove}></i>
          </ButtonShadow>
        )}
      </div>
    </div>
  );
}

export default Useritem;
