import React from 'react';
import { MDBContainer, MDBInput } from 'mdbreact';

function FeedbackPage() {
  return (
    <section className="wrapper">
      <MDBContainer className="p-4">
        <div className="feedback_wrapper">
          <h3>
            <strong>Остались вопросы? Напишите нам </strong>
          </h3>
          <form className="p-3">
            <div className="grey-text">
              <MDBInput
                label="Ваше имя"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />

              <MDBInput
                label="E-mail"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Тема"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="5"
                label="Ваше сообщение"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                className="btn btn-indigo my-2 waves-effect waves-light"
              />
            </div>
          </form>
        </div>
      </MDBContainer>
    </section>
  );
}

export default FeedbackPage;
