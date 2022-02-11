import { useState, useEffect } from 'react';
import { MDBContainer } from 'mdbreact';
import { useParams } from 'react-router-dom';
import BaseInfoList from '../components/BaseInfoList';
import MapInfo from '../components/MapInfo';
import Schedule from '../components/Schedule/Schedule';
import ServicesInfo from '../components/ServicesInfo';
import { fetchOneOrganization } from '../api/organizationAPI';
import { useFetching } from '../hooks/useFetching';

function OrganizationPage() {
  const [organization, setOrganization] = useState({});
  const { id } = useParams();
  const listServices = ['Вид на город', 'Test'];

  const [fetchOrg, isLoading, isError] = useFetching(async (id) => {
    const response = await fetchOneOrganization(id);
    setOrganization({ ...response, ...response.info });
  });

  useEffect(() => {
    fetchOrg(id);
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
            <strong>{organization.name}</strong>
          </h3>
          <hr />
          <div className="organization_page_base_info">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ width: '75%' }}>
                <BaseInfoList data={organization} />
              </div>
              <div style={{ width: '25%', marginTop: '1.25rem' }}>
                <Schedule
                  data={organization.name ? 'test' : organization.schedule} //TO DO:
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="organization_page__description">
            {organization.description ? (
              organization.description
            ) : (
              <h5 className="text-center p-2">Нет информации</h5>
            )}
          </div>
          <hr />
          <div className="organization_page__services">
            <ServicesInfo services={listServices} />
          </div>
          <hr />
          <div className="organization_page__maps">
            <MapInfo address={organization.addres} />
            <h6 style={{ padding: '1rem 0 1rem' }}>
              <strong>Как добраться</strong>
            </h6>
            <div>
              {organization.route ? (
                organization.route
              ) : (
                <h5 className="text-center">Нет информации</h5>
              )}
            </div>
          </div>
        </div>
      )}
    </MDBContainer>
  );
}

export default OrganizationPage;
