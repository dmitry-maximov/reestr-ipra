import Sidebar from '../Sidebar/Sidebar';
import cl from './LayoutAdmin.module.css';

function LayoutAdmin(props) {
  return (
    <div className={cl.admin_container}>
      <div className={cl.admin_container__left}>
        <Sidebar />
      </div>
      <div className={cl.admin_container__right}>
        <header
          style={{
            padding: '0px 64px',
            background: '#fff',
            borderBottom: '1px solid #ecf0f8',
          }}
        >
          <div style={{ padding: '1rem .5rem .5rem' }}>
            <div>
              <h5 style={{ color: '#2043b6' }}>
                <strong> Панель администрирования</strong>
              </h5>
            </div>
            <div></div>
          </div>
        </header>

        <main style={{ background: '#fafbff' }}>{props.children}</main>
      </div>
    </div>
  );
}

export default LayoutAdmin;
