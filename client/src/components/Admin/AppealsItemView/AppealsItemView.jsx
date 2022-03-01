import ButtonShadow from '../../ButtonShadow/ButtonShadow';
import { ICONS } from '../../../utils/const';
import cl from './AppealsItemView.module.css';
import avatar from '../../../img/user.png';
import { formatDate } from '../../../utils/formatting';

function AppealsItemView({ view, isRemove = true }) {
  debugger;
  return (
    <div className={cl.appeals_view_item_container}>
      <div className={cl.appeals_view_item_avatar}>
        <img src={avatar} alt="Logo" />
        <h6>{view.email}</h6>
        <p>{view.name}</p>
      </div>
      <div className={cl.appeals_view_item_content}>
        <h5 className={cl.appeals_view_item_content__title}>{view.theme}</h5>
        <p className={cl.appeals_view_item_text__left}>
          <i className="fas fa-quote-right"></i>
        </p>
        <p className={cl.appeals_view_item_text}>{view.body}</p>
        <p className={cl.appeals_view_item_text__right}>
          <i className="fas fa-quote-left"></i>
        </p>

        <div className={cl.appeals_view_item__row}>
          <p className={cl.appeals_view_item_text}>
            {formatDate(view.createdAt)}
          </p>
          <div className={cl.appeals_view_item_action}>
            {isRemove && (
              <ButtonShadow style={{ border: 'none' }}>
                <i className={ICONS.remove} style={{ color: 'red' }}></i>
              </ButtonShadow>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppealsItemView;
