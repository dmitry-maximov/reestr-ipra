import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from '../../utils/const';
import cl from './NavBar.module.css';

//TO DO:
function NavBar() {
  const [collapse, setCollapse] = useState(false);
  return (
    <header>
      <MDBNavbar className={cl.navbar} color="indigo" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="white-text">Портал ИПРА</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />

          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
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
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default NavBar;
