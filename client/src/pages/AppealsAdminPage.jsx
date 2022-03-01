import React, { useEffect, useState } from 'react';
import { fetchFeedback } from '../api/feedbackAPI';
import AppealsItem from '../components/Admin/AppealsItem/AppealsItem';
import AppealsItemView from '../components/Admin/AppealsItemView/AppealsItemView';
import Box from '../components/Box/Box';
import Message from '../components/Message/Message';

function AppealsAdminPage() {
  const [appeals, setAppeals] = useState([]);
  const [activeAppeal, setActiveAppeal] = useState(null);

  useEffect(() => {
    fetchFeedback().then((data) => setAppeals(data));
  }, []);

  const handleClick = (e, item) => {
    e.preventDefault();
    setActiveAppeal(item);
  };

  const removeHandler = (e, id) => {
    e.preventDefault();
    let isRemove = window.confirm('Действительно удалить выбранную запись ?');
    try {
      if (isRemove) {
        //removeAppeal(id);
        setAppeals(appeals.filter((item) => item.id !== id));
        setActiveAppeal(null);
      }
    } catch {
      alert(
        'При удалении выбранной записи возникли проблемы. Попоробуйте удалить запись позже'
      );
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        padding: '.5rem .5rem 0 .5rem',
      }}
    >
      <Box style={{ flexBasis: '40%' }} title={'Обращения'}>
        {appeals ? (
          appeals.map((item) => (
            <AppealsItem item={item} handleClick={handleClick} />
          ))
        ) : (
          <Message title={'Нет обращений'} />
        )}
      </Box>
      <Box title={'Текущее обращение'}>
        {activeAppeal ? (
          <AppealsItemView view={activeAppeal} removeHandler={removeHandler} />
        ) : (
          <Message title={'Обращение не выбрано'} />
        )}
      </Box>
    </div>
  );
}

export default AppealsAdminPage;
