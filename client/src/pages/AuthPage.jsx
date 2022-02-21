import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { MDBInput } from 'mdbreact';

function AuthPage() {
  const EMAIL_REGEX = new RegExp(
    '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i'
  );

  const login = useInput('', { isEmpty: true, regular: EMAIL_REGEX });
  const password = useInput('', { isEmpty: true, minLen: 4, maxLen: 10 });
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    history('/');
    // login.value, password.value;
  };

  return (
    <section className="wrapper">
      <div className="box-container">
        <div className="box">
          <h5 className="box__w-text">Портал ИПРА</h5>
          <div className="box__form">
            <div className="form-group">
              <MDBInput
                label="Логин"
                size="lg"
                onChange={(e) => login.onChange(e)}
                onBlur={(e) => login.onBlur(e)}
                value={login.value}
                type="text"
              />
              {login.isDirty && login.isEmpty && (
                <sub style={{ color: 'red', top: '-1.5rem' }}>
                  Поле не заполнено
                </sub>
              )}
            </div>
            <div className="form-group">
              <MDBInput
                label="Пароль"
                size="lg"
                onChange={(e) => password.onChange(e)}
                onBlur={(e) => password.onBlur(e)}
                value={password.value}
                type="password"
              />
              {password.isDirty && password.isEmpty && (
                <sub style={{ color: 'red', top: '-1.5rem' }}>
                  Поле не заполнено
                </sub>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                className="btn btn-secondary my-2 waves-effect waves-light"
                // disabled={!(login.isValid && password.isValid)}
                onClick={handleClick}
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
