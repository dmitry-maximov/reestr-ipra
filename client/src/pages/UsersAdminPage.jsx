import Useritem from '../components/Admin/UserItem/Useritem';
import Box from '../components/Box/Box';

function UsersAdminPage() {
  const createHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ padding: '.5rem .5rem 0 .5rem' }}>
      <Box
        title={'Пользователи'}
        isAddButton={true}
        AddButtonHandler={createHandler}
      >
        <Useritem />
      </Box>
    </div>
  );
}

export default UsersAdminPage;
