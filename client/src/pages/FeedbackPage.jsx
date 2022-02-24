import React from 'react';
import { MDBContainer, MDBInput } from 'mdbreact';
import { Formik, ErrorMessage } from 'formik';
import { createFeedback } from '../api/feedbackAPI';

function FeedbackPage() {
  return (
    <section className="wrapper">
      <MDBContainer className="p-4">
        <div className="feedback_wrapper">
          <h3>
            <strong>Остались вопросы? Напишите нам </strong>
          </h3>

          <Formik
            initialValues={{ name: '', email: '', theme: '', body: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = 'поле не заполненно';
              }
              if (!values.email) {
                errors.email = 'поле не заполненно';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'не корректный e-mail';
              }
              if (!values.theme) {
                errors.theme = 'поле не заполненно';
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                let data = await createFeedback(values);
                setSubmitting(false);
                if (data)
                  alert(`Ваше сообщение добавлено. Спасибо за обращение. `);
                values = { name: '', email: '', theme: '', body: '' };
              } catch {
                alert(
                  'При отправке сообщения возникли проблемы, повторите отправку позже'
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
                  <MDBInput
                    label="Ваше имя"
                    icon="user"
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

                  <MDBInput
                    label="E-mail"
                    icon="envelope"
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

                  <MDBInput
                    label="Тема"
                    icon="tag"
                    group
                    type="text"
                    name="theme"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.theme}
                  />

                  <ErrorMessage
                    name="theme"
                    component="div"
                    style={{ color: 'red' }}
                  />
                  <MDBInput
                    type="textarea"
                    name="body"
                    rows="5"
                    label="Ваше сообщение"
                    icon="pencil-alt"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
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
        </div>
      </MDBContainer>
    </section>
  );
}

export default FeedbackPage;
