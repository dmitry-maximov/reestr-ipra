import { useState } from 'react';
import Message from '../Message/Message';
import ServicesInfo from '../ServicesInfo';
import ChangeOrganizationServices from './ChangeOrganizationServices';

function OrganizationServices({ services }) {
  const [isShowNewServices, setIsShowNewServices] = useState(false);

  const showAddHandler = (e) => {
    e.preventDefault();
    setIsShowNewServices(!isShowNewServices);
  };

  return (
    <div className="p-4">
      {isShowNewServices && (
        <ChangeOrganizationServices showHandler={showAddHandler} />
      )}
      {services && services.length > 0 ? (
        <ServicesInfo services={services} AddButtonHandler={showAddHandler} />
      ) : (
        <div>
          {!isShowNewServices && (
            <Message
              style={{ display: 'flex', justifyContent: 'center' }}
              title={'Услуги не найдены'}
            >
              <h6
                className="p-1"
                style={{ cursor: 'pointer' }}
                onClick={(e) => showAddHandler(e)}
              >
                <strong>Добавить?</strong>
              </h6>
            </Message>
          )}
        </div>
      )}
    </div>
  );
}

export default OrganizationServices;
