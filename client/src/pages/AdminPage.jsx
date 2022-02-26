import Box from '../components/Box/Box';
import ReestrAdmin from '../components/ReestrAdmin/ReestrAdmin';

function AdminPage() {
  return (
    <div className="admin_container p-2">
      <div className="admin_row">
        <ReestrAdmin />
      </div>
      <div className="admin_row p-2">
        <Box title={'Категории'} />
        <Box title={'Услуги'} />
      </div>
      <div className="admin_row p-2">
        <Box title={'Пользователи'} />
        <Box title={'Обращения'} />
      </div>
    </div>
  );
}

export default AdminPage;
