import Element from './Element/Element';
import { ICONS, SERVICE_ITEM_ROUTE } from '../utils/const';
import ButtonShadow from './ButtonShadow/ButtonShadow';

function ServicesInfo({ services, AddButtonHandler }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5 style={{ paddingBottom: '1rem' }}>
          <strong>Предоставляемые услуги</strong>
        </h5>

        {AddButtonHandler && (
          <div>
            <ButtonShadow onClick={AddButtonHandler}>
              <i className={ICONS.plus}></i>
            </ButtonShadow>
          </div>
        )}
      </div>

      {services && services.length > 0 ? (
        <div className="services_wrapper">
          {services.map((item) => (
            <Element
              key={item.id}
              name={item.name}
              id={item.id}
              width={'50%'}
              route={SERVICE_ITEM_ROUTE}
              type={item.type}
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
