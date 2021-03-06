import { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching';
import { MDBContainer } from 'mdbreact';
import ServiceBlock from '../components/ServiceBlock/ServiceBlock';
import { fetchTypes } from '../api/typeAPI';
import Modal from '../components/Modal/Modal';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Spinner from '../components/Spinner/Spinner';
import Message from '../components/Message/Message';

const services = {
  width: '100%',
  display: 'flex',
};

const services_wrapper = {
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
};

function ServicePage() {
  const [types, setTypes] = useState([]);
  const [modal, setModal] = useState(false);
  const [viewType, setViewType] = useState(null);
  const [fetchType, isLoading, isError] = useFetching(async () => {
    const response = await fetchTypes();
    setTypes(response);
  });

  useEffect(() => {
    fetchType();
  }, []);

  const handleViewClick = (type, name) => {
    setModal(true);
    setViewType({ type, name });
  };

  return (
    <section className="wrapper">
      <Breadcrumb title={'Список услуг'} />
      <MDBContainer>
        {isLoading && <Spinner />}
        {!isLoading && isError && (
          <Message title={'Произошла ошибка при получении данных'} />
        )}

        {!isError && !isLoading && types.length === 0 && (
          <Message title={'Услуги не найдены'} />
        )}

        {!isError && !isLoading && (
          <div className="services" style={services}>
            <div style={services_wrapper}>
              {types.map((item) => (
                <ServiceBlock
                  key={item.id}
                  type={item.id}
                  name={item.name}
                  viewAllHandler={handleViewClick}
                  limit={10}
                />
              ))}
            </div>
          </div>
        )}

        <Modal visible={modal} setVisible={setModal}>
          {viewType && (
            <ServiceBlock
              key={viewType.type}
              type={viewType.type}
              name={viewType.name}
            />
          )}
        </Modal>
      </MDBContainer>
    </section>
  );
}

export default ServicePage;
