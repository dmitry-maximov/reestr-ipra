import NavbarAdmin from '../../NavbarAdmin/NavbarAdmin';
import Sidebar from '../Sidebar/Sidebar';
import cl from './LayoutAdmin.module.css';

function LayoutAdmin(props) {
  return (
    <div className={cl.admin_container}>
      <div className={cl.admin_container__left}>
        <Sidebar />
      </div>
      <div className={cl.admin_container__right}>
        <NavbarAdmin />
        <main style={{ background: '#fafbff' }}>{props.children}</main>
      </div>
    </div>
  );
}

export default LayoutAdmin;
