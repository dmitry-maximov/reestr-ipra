import React, { useEffect, useState } from 'react';
import Box from '../Box/Box';
import { fetchTypes, createType, removeType } from '../../api/typeAPI';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import Element from '../Element/Element';
import { ICONS } from '../../utils/const';
import { MDBInput } from 'mdbreact';
import { Formik, ErrorMessage } from 'formik';

function Category() {
  const [types, setTypes] = useState([]);
  const [isShowAddedPanel, setIsShowAddedPanel] = useState(false);

  useEffect(() => {
    fetchTypes().then((data) => {
      setTypes(data);
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
        removeType(id);
        setTypes(types.filter((item) => item.id !== id));
      }
    } catch {
      alert(
        'При удалении выбранной записи возникли проблемы. Попоробуйте удалить запись позже'
      );
    }
  };

  return (
    <Box
      style={{ flex: '1 0 40%' }}
      title={'Категории'}
      isAddButton={true}
      AddButtonHandler={addHandleClick}
    >
      {isShowAddedPanel && (
        <div className="grey-text">
          <Formik
            initialValues={{ name: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = 'поле не заполненно';
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                let data = await createType(values);
                if (data) {
                  setSubmitting(false);
                  setIsShowAddedPanel(!isShowAddedPanel);
                  setTypes([...types, data]);
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
      {types.length > 0 &&
        types.map((item) => (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Element
              key={item.id}
              name={item.name}
              id={item.id}
              width={'100%'}
              icon={false}
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

export default Category;
