import { Link } from 'react-router-dom';

//TO DO:
const StartPage = () => {
  return (
    <div className="start_wrapper">
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
      {/* <div className="wrapper__img"></div> */}
      <img
        src="https://tverweek.com/wp-content/uploads/2015/08/04-08-deti-invalidy.jpg"
        className="img-fluid"
      />
    </div>
  );
};

export default StartPage;
