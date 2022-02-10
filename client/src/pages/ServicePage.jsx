import { MDBContainer } from 'mdbreact';
import ServiceBlock from '../components/ServiceBlock/ServiceBlock';

function ServicePage() {
  const services = {
    paddingTop: '2rem',
    width: '100%',
    display: 'flex',
  };

  const services_wrapper = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  };

  return (
    <section className="wrapper">
      <MDBContainer>
        <div className="services" style={services}>
          <div style={services_wrapper}>
            <ServiceBlock />
            <ServiceBlock />
            <ServiceBlock />
            <ServiceBlock />
            <ServiceBlock />
          </div>
        </div>
      </MDBContainer>
    </section>
  );
}

export default ServicePage;
