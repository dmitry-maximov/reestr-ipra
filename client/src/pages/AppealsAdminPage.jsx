import Box from '../components/Box/Box';

function AppealsAdminPage() {
  const createHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ padding: '.5rem .5rem 0 .5rem' }}>
      <Box
        title={'Обращения'}
        isAddButton={true}
        AddButtonHandler={createHandler}
      ></Box>
    </div>
  );
}

export default AppealsAdminPage;
