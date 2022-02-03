import { Link } from 'react-router-dom';
import { MDBContainer, MDBFooter } from 'mdbreact';
import { START_PAGE_ROUTE, REESTR_ROUTE } from '../../utils/const';
import cl from './Footer.module.css';

function Footer() {
  return (
    <MDBFooter className="font-small">
      <MDBContainer className="text-center">
        <div className={cl.social}>
          <a href="#!">
            <i className="fab fa-github"></i>
          </a>
          <a href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#!">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="#!">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <ul className={cl.footer__links}>
          <li className="list-inline-item">
            <Link to={START_PAGE_ROUTE}>Главная</Link>
          </li>
          <li className="list-inline-item">
            <Link to={REESTR_ROUTE}>Реестр</Link>
          </li>
          <li className="list-inline-item">
            <Link to={START_PAGE_ROUTE}>Услуги</Link>
          </li>
          <li className="list-inline-item">
            <Link to={START_PAGE_ROUTE}>Обратная связь</Link>
          </li>
        </ul>
        <p className={cl.copyright}>
          Pet-Project Company &copy; {new Date().getFullYear()}{' '}
        </p>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;
