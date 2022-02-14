import { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching';
import { MDBContainer } from 'mdbreact';
import ServiceBlock from '../components/ServiceBlock/ServiceBlock';
import { fetchTypes } from '../api/typeAPI';

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
    width: '100%',
  };

  const [types, setTypes] = useState([]);
  const [fetchType, isLoading, isError] = useFetching(async () => {
    const response = await fetchTypes();
    const { rows } = response;
    setTypes(rows);
  });

  useEffect(() => {
    fetchType();
  }, []);

  return (
    <section className="wrapper">
      <MDBContainer>
        <div className="services" style={services}>
          <div style={services_wrapper}>
            {types.map((item) => (
              <ServiceBlock key={item.id} type={item.id} name={item.name} />
            ))}
          </div>
        </div>
      </MDBContainer>
    </section>
  );
}

export default ServicePage;
