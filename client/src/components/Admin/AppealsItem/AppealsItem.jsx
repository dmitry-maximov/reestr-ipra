import { formatDate } from '../../../utils/formatting';
import cl from './AppealsItem.module.css';

function AppealsItem({ item, handleClick }) {
  return (
    <div className={cl.appeals_item} onClick={(e) => handleClick(e, item)}>
      <div className={cl.appeals_item_header}>
        <div className={cl.appeals_item_header__icon}>
          <i className="far fa-envelope"></i>
        </div>
        <h5 className={cl.appeals_item_header__title}>{item.theme}</h5>
      </div>
      <div className={cl.appeals_item_content}>
        <div className={cl.appeals_item_content__text}>{item.body}</div>
        <div class="info d-flex justify-content-between">
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
