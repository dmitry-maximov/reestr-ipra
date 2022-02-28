import Box from '../Box/Box';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { Formik, ErrorMessage } from 'formik';
import { createOrganization } from '../../api/organizationAPI';
import { useNavigate } from 'react-router-dom';

const Neworganization = (props) => {
  const history = useNavigate();
  return (
    <div className="p-3 w-100">
      <Box
        title={'Новая организация'}
        isBackButton={true}
        BackButtonHandler={() => history(-1)}
      >
        <Formik
          initialValues={{
            name: '',
            fullName: '',
            supervisor: '',
            registration: '',
            addres: '',
            route: '',
            phone: '',
            email: '',
            description: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'поле не заполненно';
            }
            if (!values.email) {
              errors.email = 'поле не заполненно';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            )
              return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const { name, addres, phone, ...info } = values;
              const data = createOrganization({ name, addres, phone, info });
              if (data) {
                alert('Организация успешно добавлена');
                setSubmitting(false);
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
                        group
                        type="date"
                        name="registration"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.registration}
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
                      />
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
      </Box>
    </div>
  );
};

export default Neworganization;
