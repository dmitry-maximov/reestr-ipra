import Element from './Element/Element';
import { SERVICE_ITEM_ROUTE } from '../utils/const';

function ServicesInfo({ services }) {
  return (
    <div>
      <h5 style={{ paddingBottom: '1rem' }}>
        <strong>Предоставляемые услуги</strong>
      </h5>

      {services && services.length > 0 ? (
        <div className="services_wrapper">
          {services.map((item) => (
            <Element
              key={item.id}
              name={item.name}
              id={item.id}
              width={'50%'}
              route={SERVICE_ITEM_ROUTE}
            />
          ))}
        </div>
      ) : (
        <h6 className="text-center">
          <strong>Услуги не найдены</strong>
        </h6>
      )}
    </div>
  );
}

export default ServicesInfo;
