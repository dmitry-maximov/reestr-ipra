import cl from './Useritem.module.css';
import avatar from '../../../img/user.png';

function Useritem() {
  return (
    <div className={cl.user_item_container}>
      <div className={cl.user_item_avatar}>
        <img src={avatar} alt="Logo" />
      </div>
      <div className={cl.user_item_content}>
        <div>
          <h5 className={cl.user_item_content__name}>имя</h5>
          <div className={cl.user_item_content__role}>Администратор</div>
          <p className={cl.user_item_content__role}>аддресс</p>
        </div>
      </div>
      <div className={cl.organization_action}></div>
    </div>
  );
}

export default Useritem;
