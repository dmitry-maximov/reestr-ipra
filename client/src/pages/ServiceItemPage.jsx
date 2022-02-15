import { useState, useEffect } from 'react';
import { fetchOneService } from '../api/serviceAPI';
import { useFetching } from '../hooks/useFetching';
import { useParams } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
import Element from '../components/Element/Element';
import { ORGANIZATION_ROUTE } from '../utils/const';

function ServiceEtemPage() {
  const { id } = useParams();
  const [serviceInfo, setServiceInfo] = useState({});

  const [fetchServiceInfo, isLoading, isError] = useFetching(async (id) => {
    const response = await fetchOneService(id);
    setServiceInfo(response);
  });

  useEffect(() => {
    fetchServiceInfo(id);
  }, []);
  return (
    <MDBContainer>
      {isLoading && (
        <div style={{ marginTop: 50 }}>
          <h5 className="text-center">Идет загрузка данных</h5>
        </div>
      )}
      {!isLoading && isError && (
        <h5 className="text-center pt-5">
          Произошла ошибка при получении данных
        </h5>
      )}
      {!isError && !isLoading && (
        <div className="organization_page_wrapper">
          <h3>
            <strong>{serviceInfo.name}</strong>
          </h3>
          <hr />
          <div className="organization_page__description">
            {serviceInfo.description}
          </div>
          <hr />
          <div className="organization_page__services">
            <h5 style={{ paddingBottom: '1rem' }}>
              <strong>Организации предоставляющие услугу</strong>
            </h5>
            <div className="services_wrapper">
              {serviceInfo.organizations &&
                serviceInfo.organizations.map((item) => (
                  <Element
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    width={'50%'}
                    route={ORGANIZATION_ROUTE}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </MDBContainer>
  );
}

export default ServiceEtemPage;
