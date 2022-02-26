import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import { AuthContext } from '../../context';
import { START_PAGE_ROUTE } from '../../utils/const';
import cl from './NavbarAdmin.module.css';

const NavbarAdmin = (props) => {
  const { setIsAuth } = useContext(AuthContext);
  const history = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem('token');
    history(START_PAGE_ROUTE);
  };

  return (
    <header className={cl.nav_bar_admin}>
      <h5>
        <strong> Панель администрирования</strong>
      </h5>
      <div className={cl.nav_bar_admin__btn}>
        <ButtonShadow
          onClick={(e) => logout(e)}
          style={{
            color: '#2043b6',
            border: 'none',
          }}
        >
          Выйти
        </ButtonShadow>
      </div>
    </header>
  );
};

export default NavbarAdmin;
