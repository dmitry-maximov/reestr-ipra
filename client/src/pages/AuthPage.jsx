import { useContext } from 'react';
import useInput from '../hooks/useInput';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';
import { loginUser, registration } from '../api/userAPI';
import { MDBInput } from 'mdbreact';
import { AuthContext } from '../context';

function AuthPage() {
  const EMAIL_REGEX = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const login = useInput('', { isEmpty: true, regular: EMAIL_REGEX });
  const password = useInput('', { isEmpty: true, minLen: 4, maxLen: 10 });
  const history = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const { setIsAuth } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (isLogin) {
        data = await loginUser(login.value, password.value);
        setIsAuth(true);
        history(ADMIN_ROUTE);
      } else {
        data = await registration(login.value, password.value);
        history(LOGIN_ROUTE);
      }

      //TO DO: data to context ?
    } catch (e) {
      if (e.response.status) alert(`Пользователь не найден`);
    }
  };

  return (
    <section className="wrapper">
      <div className="auth-container">
        <div className="auth-row">
          <h5 className="auth__text">
            {isLogin ? 'Авторизация' : 'Регистрация'}
          </h5>
          <div className="box__form">
            <MDBInput
              label="Логин"
              size="lg"
              onChange={(e) => login.onChange(e)}
              onBlur={(e) => login.onBlur(e)}
              value={login.value}
              type="text"
            />
            {login.isDirty && login.isRerularError && (
              <sub className="error-input-msg">
                данные не корректны <br />
              </sub>
            )}
            {login.isDirty && login.isEmpty && (
              <sub className="error-input-msg">поле не заполнено</sub>
            )}
            <MDBInput
              label="Пароль"
              size="lg"
              onChange={(e) => password.onChange(e)}
              onBlur={(e) => password.onBlur(e)}
              value={password.value}
              type="password"
            />
            {password.isDirty && password.isEmpty && (
              <sub className="error-input-msg">Поле не заполнено</sub>
            )}
            <div style={{ display: 'flex', justifyContent: 'start' }}>
              {isLogin ? (
                <div>
                  Нет аккаунта?
                  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
              ) : (
                <div>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}
            </div>

            <button
              className="btn btn-secondary my-2 waves-effect waves-light w-100 mt-5"
              disabled={!(login.isValid && password.isValid)}
              onClick={handleClick}
            >
              {isLogin ? `Войти` : `Зарегистрироваться`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
