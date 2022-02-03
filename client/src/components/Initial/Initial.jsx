import { Link } from 'react-router-dom';
import cl from './Initial.module.css';

const Initial = () => {
  return (
    <div className={cl.start_wrapper}>
      <div className={cl.start_wrapper__container}>
        <h1>Добро пожаловать</h1>
        <h4>
          Портал реестра организаций, реабилитации и абилитации детей
          инвалидов(ИПРА)
        </h4>
        <div>
          <Link
            className="btn btn-indigo my-2 waves-effect waves-light"
            to="/reestr"
          >
            к списку организаций
          </Link>
          <Link
            className="btn btn-secondary my-2 waves-effect waves-light"
            to="/reestr"
          >
            к списку слуг
          </Link>
        </div>
        <div className={cl.start_wrapper__img}></div>
      </div>
    </div>
  );
};

export default Initial;
