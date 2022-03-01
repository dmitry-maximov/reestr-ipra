import { formatDate } from '../../../utils/formatting';
import cl from './AppealsItem.module.css';

function AppealsItem({ item, handleClick, active }) {
  return (
    <div
      className={`${cl.appeals_item} ${active && cl.active}`}
      onClick={(e) => handleClick(e, item)}
    >
      <div className={cl.appeals_item_header}>
        <div className={cl.appeals_item_header__icon}>
          <i className="far fa-envelope"></i>
        </div>
        <h5 className={cl.appeals_item_header__title}>{item.theme}</h5>
      </div>
      <div className={cl.appeals_item_content}>
        <div className={cl.appeals_item_content__text}>{item.body}</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem 0rem .5rem',
          }}
        >
          <div className={cl.appeals_item_content__text}>
            {item.name + `(${item.email})`}
          </div>
          <div className={cl.appeals_item_content__text}>
            {formatDate(item.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppealsItem;
