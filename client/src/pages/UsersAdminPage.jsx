import React, { useEffect, useState } from 'react';
import { fetchUsers, removeUser } from '../api/userAPI';
import { useNavigate } from 'react-router-dom';
import Useritem from '../components/Admin/UserItem/Useritem';
import Box from '../components/Box/Box';

function UsersAdminPage() {
  const [users, setUsers] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const createHandler = (e) => {
    e.preventDefault();
    history('/registration');
  };

  const removeHandler = (e, id) => {
    e.preventDefault();
    let isRemove = window.confirm(
      'Действительно удалить выбранную организацию'
    );
    try {
      if (isRemove) {
        removeUser(id);
        setUsers(users.filter((item) => item.id !== id));
      }
    } catch {
      alert(
        'При удалении выбранной записи возникли проблемы. Попоробуйте удалить запись позже'
      );
    }
  };

  return (
    <div style={{ padding: '.5rem .5rem 0 .5rem' }}>
      <Box
        title={'Пользователи'}
        isAddButton={true}
        AddButtonHandler={createHandler}
      >
        <div className="users-container">
          {users &&
            users.map((item) => (
              <Useritem
                key={item.id}
                item={item}
                removeHandler={removeHandler}
              />
            ))}
        </div>
      </Box>
    </div>
  );
}

export default UsersAdminPage;
