import React, { useEffect, useState } from 'react';
import Box from '../Box/Box';
import {
  fetchService,
  createService,
  removeService,
} from '../../api/serviceAPI';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import Element from '../Element/Element';
import { ICONS, SERVICE_ITEM_ROUTE } from '../../utils/const';
import { MDBInput } from 'mdbreact';
import { Formik, ErrorMessage } from 'formik';

function Services() {
  const [services, setServices] = useState([]);
  const [isShowAddedPanel, setIsShowAddedPanel] = useState(false);

  useEffect(() => {
    fetchService().then((data) => {
      setServices(data.rows);
    });
  }, []);

  const addHandleClick = (e) => {
    e.preventDefault();
    setIsShowAddedPanel(!isShowAddedPanel);
  };

  const removeHandleClick = (e, id) => {
    e.preventDefault();
    let isRemove = window.confirm('Действительно удалить выбранную запись?');
    try {
      if (isRemove) {
        removeService(id);
        setServices(services.filter((item) => item.id !== id));
      }
    } catch {
      alert(
        'При удалении выбранной записи возникли проблемы. Попоробуйте удалить запись позже'
      );
    }
  };

  return (
    <Box title={'Услуги'} isAddButton={true} AddButtonHandler={addHandleClick}>
      {isShowAddedPanel && (
        <div className="grey-text">
          <Formik
            initialValues={{ name: '', description: '', typeId: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.typeId) {
                errors.typeId = 'поле не заполненно';
              }
              if (!values.name) {
                errors.name = 'поле не заполненно';
              }
              if (!values.description) {
                errors.description = 'поле не заполненно';
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                let data = await createService(values);
                if (data) {
                  setSubmitting(false);
                  setIsShowAddedPanel(!isShowAddedPanel);
                  setServices([...services, data]);
                }
              } catch {
                alert(
                  'При отправке данных возникли проблемы, повторите отправку позже'
                );
              }
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="pl-3 pb-5">
                <MDBInput
                  label="Категория"
                  type="text"
                  name="typeId"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.typeId}
                />
                <ErrorMessage
                  name="typeId"
                  component="div"
                  style={{ color: 'red' }}
                />
                <MDBInput
                  label="Услуга"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: 'red' }}
                />
                <MDBInput
                  label="Описание"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  style={{ color: 'red' }}
                />
                <input
                  type="submit"
                  className="btn btn-sm btn-indigo waves-effect waves-light"
                  disabled={isSubmitting}
                />
              </form>
            )}
          </Formik>
        </div>
      )}
      {services.length > 0 &&
        services.map((item) => (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Element
              key={item.id}
              name={item.name}
              id={item.id}
              width={'100%'}
              icon={false}
              route={SERVICE_ITEM_ROUTE}
              type={item.type}
            />
            <ButtonShadow
              style={{ border: 'none' }}
              onClick={(e) => removeHandleClick(e, item.id)}
            >
              <i className={ICONS.remove}></i>
            </ButtonShadow>
          </div>
        ))}
    </Box>
  );
}

export default Services;
