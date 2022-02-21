import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from 'mdbreact';
import {
  START_PAGE_ROUTE,
  REESTR_ROUTE,
  SERVICE_ROUTE,
  LOGIN_ROUTE,
} from '../../utils/const';
import cl from './NavBar.module.css';
import { AuthContext } from '../../context';

function NavBar() {
  const [collapse, setCollapse] = useState(false);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const history = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('token');
    history(START_PAGE_ROUTE);
  };

  return (
    <header>
      <MDBNavbar className={cl.navbar} color="indigo" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="white-text">Портал ИПРА</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />

          <MDBCollapse show={collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link
                  className="nav-link waves-effect waves-light"
                  to={START_PAGE_ROUTE}
                >
                  Главная
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  className="nav-link waves-effect waves-light"
                  to={REESTR_ROUTE}
                >
                  Реестр
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  className="nav-link waves-effect waves-light"
                  to={SERVICE_ROUTE}
                >
                  Услуги
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                {!isAuth ? (
                  <Link
                    className="nav-link waves-effect waves-light"
                    to={LOGIN_ROUTE}
                  >
                    <div className="d-none d-md-inline"> Войти</div>
                  </Link>
                ) : (
                  <div
                    className="nav-link waves-effect waves-light"
                    onClick={logout}
                  >
                    Выйти
                  </div>
                )}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default NavBar;
