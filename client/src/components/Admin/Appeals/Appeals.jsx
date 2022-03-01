import AppealsItem from '../AppealsItem/AppealsItem';
import cl from './Appeals.module.css';

function Appeals() {
  return (
    <div className={cl.appeals_container}>
      <AppealsItem />
      <AppealsItem />
    </div>
  );
}

export default Appeals;
