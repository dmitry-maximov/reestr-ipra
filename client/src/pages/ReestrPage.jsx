import Reestr from '../components/Reestr/Reestr';
import { MDBContainer } from 'mdbreact';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const ReestrPage = () => {
  return (
    <section className="wrapper">
      <Breadcrumb title={'Реестр организаций'} />
      <MDBContainer>
        <Reestr />
      </MDBContainer>
    </section>
  );
};

export default ReestrPage;
