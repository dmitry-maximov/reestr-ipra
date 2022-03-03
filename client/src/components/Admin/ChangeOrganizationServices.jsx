import { useState, useEffect } from 'react';
import { fetchService } from '../../api/serviceAPI';
import { ICONS, SERVICE_ITEM_ROUTE } from '../../utils/const';
import Box from '../Box/Box';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import Element from '../Element/Element';

function ChangeOrganizationServices({ showHandler }) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchService().then((data) => {
      setServices(data.rows);
    });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5 style={{ paddingBottom: '1rem' }}>
          <strong>Добавить услуги</strong>
        </h5>

        {showHandler && (
          <div>
            <ButtonShadow onClick={showHandler}>
              <i className={ICONS.back}></i>
            </ButtonShadow>
          </div>
        )}
      </div>

      <div style={{ display: 'flex' }}>
        <Box title={'Доступные услуги'}>
          {services.length > 0 &&
            services.map((item) => (
              <Element
                key={item.id}
                name={item.name}
                id={item.id}
                width={'100%'}
                icon={false}
                route={SERVICE_ITEM_ROUTE}
                type={item.type}
              />
            ))}
        </Box>
        <Box title={'Услуги организации'} />
      </div>
    </div>
  );
}

export default ChangeOrganizationServices;
