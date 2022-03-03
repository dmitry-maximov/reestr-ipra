import React, { useEffect, useState } from 'react';
import Box from '../../Box/Box';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { Formik, ErrorMessage } from 'formik';
import {
  changeOrganization,
  createOrganization,
  fetchOneOrganization,
} from '../../../api/organizationAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { formatDateWithOutTimeZone } from '../../../utils/formatting';
import OrganizationServices from '../OrganizationServices';

const Changeorganization = (props) => {
  const [org, setOrg] = useState(null);
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchOneOrganization(id).then((data) => {
        setOrg({ ...data, ...data.info });
        console.table({ ...data, ...data.info });
      });
    } else
      setOrg({
        name: '',
        fullName: '',
        supervisor: '',
        registration: '',
        addres: '',
        route: '',
        phone: '',
        email: '',
        description: '',
      });
  }, []);

  return (
    <div className="p-3 w-100">
      <Box
        title={'Новая организация'}
        isBackButton={true}
        BackButtonHandler={() => history(-1)}
      >
        {org && (
          <Formik
            initialValues={org}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = 'поле не заполненно';
              }
              if (!values.fullName) {
                errors.fullName = 'поле не заполненно';
              }
              if (!values.supervisor) {
                errors.supervisor = 'поле не заполненно';
              }
              if (!values.addres) {
                errors.addres = 'поле не заполненно';
              }
              if (!values.route) {
                errors.route = 'поле не заполненно';
              }
              if (!values.registration) {
                errors.registration = 'поле не заполненно';
              }
              if (!values.phone) {
                errors.phone = 'поле не заполненно';
              }
              if (!values.email) {
                errors.email = 'поле не заполненно';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              )
                errors.email = 'поле не корректно';
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const { name, addres, phone, ...info } = values;
                const data = id
                  ? changeOrganization(id, { name, addres, phone, info })
                  : createOrganization({ name, addres, phone, info });
                if (data) {
                  alert(
                    id ? 'Данные изменены' : 'Организация успешно добавлена'
                  );
                  setSubmitting(false);
                  history(-1);
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
              <form onSubmit={handleSubmit} className="p-3">
                <div className="grey-text">
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol size="6">
                        <MDBInput
                          label="Наименование"
                          icon="home"
                          group
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
                      </MDBCol>
                      <MDBCol size="6">
                        <MDBInput
                          label="Полное наименование"
                          icon="building"
                          group
                          type="text"
                          name="fullName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fullName}
                        />
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol size="6">
                        <MDBInput
                          label="Руководитель"
                          icon="user-tie"
                          group
                          type="text"
                          name="supervisor"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.supervisor}
                        />
                        <ErrorMessage
                          name="supervisor"
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </MDBCol>
                      <MDBCol size="6">
                        <MDBInput
                          label="Дата регистрации"
                          icon="calendar-check"
                          type="date"
                          name="registration"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={formatDateWithOutTimeZone(values.registration)}
                        />
                        <ErrorMessage
                          name="registration"
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol size="6">
                        <MDBInput
                          label="Адрес"
                          icon="map-marker-alt"
                          group
                          type="text"
                          name="addres"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.addres}
                        />
                        <ErrorMessage
                          name="addres"
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </MDBCol>
                      <MDBCol size="6">
                        <MDBInput
                          label="Как добраться"
                          icon="route"
                          group
                          type="text"
                          name="route"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.route}
                        />
                        <ErrorMessage
                          name="route"
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol size="6">
                        <MDBInput
                          label="Телефон"
                          icon="phone"
                          group
                          type="text"
                          name="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />

                        <ErrorMessage
                          name="phone"
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </MDBCol>
                      <MDBCol size="6">
                        <MDBInput
                          label="Электронная почта"
                          icon="at"
                          group
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol size="12">
                        <MDBInput
                          type="textarea"
                          name="description"
                          rows="5"
                          label="Описание организации"
                          icon="pencil-alt"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </div>
                <div className="grey-text">
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol size="12">
                        <OrganizationServices services={org.services} />
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    className="btn btn-indigo my-2 waves-effect waves-light"
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            )}
          </Formik>
        )}
      </Box>
    </div>
  );
};

export default Changeorganization;
