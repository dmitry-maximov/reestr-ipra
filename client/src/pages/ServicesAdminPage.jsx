import Box from '../components/Box/Box';

function ServicesAdminPage() {
  const createHandler = (e) => {
    e.preventDefault();
  };

  return (
    //TO DO:
    <div style={{ display: 'flex', padding: '.5rem .5rem 0 .5rem' }}>
      <Box
        title={'Категории'}
        isAddButton={true}
        AddButtonHandler={createHandler}
      ></Box>
      <Box
        title={'Услуги'}
        isAddButton={true}
        AddButtonHandler={createHandler}
      ></Box>
    </div>
  );
}

export default ServicesAdminPage;
