import { useState, useEffect } from 'react';
import { MDBContainer } from 'mdbreact';
import { useParams } from 'react-router-dom';
import BaseInfoList from '../components/BaseInfoList';
import MapInfo from '../components/MapInfo';
import Schedule from '../components/Schedule/Schedule';
import ServicesInfo from '../components/ServicesInfo';
import { fetchOneOrganization } from '../api/organizationAPI';

function OrganizationPage() {
  const [organization, setOrganization] = useState({});
  const { id } = useParams();
  const listServices = ['Вид на город', 'Test'];

  useEffect(() => {
    fetchOneOrganization(id).then((data) =>
      setOrganization({ ...data, ...data.info })
    );
  }, [id]);

  return (
    <MDBContainer>
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
              <Schedule data={organization.schedule} />
            </div>
          </div>
        </div>
        <hr />
        <div className="organization_page__description">
          {organization.description}
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
          <div> {organization.route}</div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default OrganizationPage;
