import { MDBContainer } from 'mdbreact';

function ServicePage() {
  const services = {
    paddingTop: '2rem',
    width: '100%',
  };

  const service = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.25rem',
    backgroundColor: '#fff',
    boxShadow:
      '0 5px 11px 0 rgb(128 128 128 / 18%), 0 4px 15px 0 rgb(128 128 128 / 15%)',
    margin: '.75rem',
    flex: '1 1 auto',
  };

  const service_header = {
    color: '#fff',
    padding: '0.75rem 1.25rem 0.5rem',
    marginBottom: '0',
    borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
    backgroundColor: '#4F7EA3',
    textAlign: 'center',
  };

  const service_body = {
    flex: '1 1 auto',
    minHeight: '1px',
    padding: '1.25rem',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    borderRadius: '0',
  };

  return (
    <section className="wrapper">
      <MDBContainer>
        <div className="services" style={services}>
          <div className="service_item" style={service}>
            <div className="service_item__header" style={service_header}>
              <h5>
                <strong>Заголовок</strong>
              </h5>
            </div>
            <div className="service_item__body" style={service_body}>
              Содержимое
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div className="service_item" style={service}>
              <div className="service_item__header" style={service_header}>
                <h5>
                  <strong>Заголовок</strong>
                </h5>
              </div>
              <div className="service_item__body" style={service_body}>
                Содержимое
              </div>
            </div>

            <div className="service_item" style={service}>
              <div className="service_item__header" style={service_header}>
                <h5>
                  <strong>Заголовок</strong>
                </h5>
              </div>
              <div className="service_item__body" style={service_body}>
                Содержимое
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    </section>
  );
}

export default ServicePage;
