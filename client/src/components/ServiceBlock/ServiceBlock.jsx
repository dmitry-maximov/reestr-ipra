import { useState, useEffect } from 'react';
import { fetchService } from '../../api/serviceAPI';
import { useFetching } from '../../hooks/useFetching';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import Service from '../Service/Service';
import cl from './ServiceBlock.module.css';

function ServiceBlock({ type, name, viewAllHandler, limit }) {
  const [services, setServices] = useState([]);
  const [fetchServices, isLoading, isError] = useFetching(
    async (type, limit) => {
      const response = await fetchService(type, limit);
      const { rows } = response;
      setServices(rows);
    }
  );

  useEffect(() => {
    fetchServices(type, limit);
  }, []);

  return (
    <div className={cl.service_block}>
      <div className={cl.service_block__header}>
        <h5>
          <strong>{name}</strong>
        </h5>
      </div>
      <div className={cl.service_block__body}>
        {isLoading && (
          <h5 className="text-center pt-5">Идет загрузка данных</h5>
        )}
        {!isLoading && isError && (
          <h5 className="text-center pt-5">
            Произошла ошибка при получении данных
          </h5>
        )}

        {!isError && !isLoading && services.length === 0 && (
          <h5 className="text-center pt-5">Данные не найдены</h5>
        )}

        {services.map((item) => (
          <Service key={item.id} name={item.name} id={item.id} />
        ))}
      </div>
      {viewAllHandler && (
        <div className={cl.service_block__button_row}>
          <ButtonShadow
            className="text-center"
            style={{ fontWeight: '400' }}
            onClick={(e) => viewAllHandler(type, name)}
          >
            Показать все
          </ButtonShadow>
        </div>
      )}
    </div>
  );
}

export default ServiceBlock;
