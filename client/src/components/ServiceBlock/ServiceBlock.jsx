import { useState, useEffect } from 'react';
import { fetchService } from '../../api/serviceAPI';
import { useFetching } from '../../hooks/useFetching';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import Modal from '../Modal/Modal';
import Service from '../Service/Service';
import cl from './ServiceBlock.module.css';

function ServiceBlock(props) {
  const { type, name } = props;
  const [services, setServices] = useState([]);
  const [modal, setModal] = useState(false);
  const [fetchServices, isLoading, isError] = useFetching(async (type) => {
    const response = await fetchService(type);
    const { rows } = response;
    setServices(rows);
  });

  useEffect(() => {
    fetchServices(type);
  }, []);

  return (
    <div className={cl.service_block}>
      <div className={cl.service_block__header}>
        <h5>
          <strong>{name}</strong>
        </h5>
      </div>
      <div className={cl.service_block__body}>
        {services.length > 0 ? (
          services.map((item) => <Service key={item.id} name={item.name} />)
        ) : (
          <h5 className="text-center pt-3">Нет данных</h5>
        )}
      </div>

      <Modal visible={modal} setVisible={setModal}>
        <>List all services</>
      </Modal>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
      >
        <ButtonShadow
          className="text-center"
          style={{ fontWeight: '400' }}
          onClick={(e) => setModal(true)}
        >
          Показать все
        </ButtonShadow>
      </div>
    </div>
  );
}

export default ServiceBlock;
