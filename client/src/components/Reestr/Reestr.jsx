import React, { useEffect, useState } from 'react';
import { fetchOrganizations } from '../../api/organizationAPI';
import OrganizationItem from '../OrganizationItem/OrganizationItem';

function Reestr() {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetchOrganizations(1, 10);
      const { rows } = response;
      setOrgs(rows);
    }

    fetchMyAPI();
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '.5rem',
          minHeight: '65.5vh',
        }}
      >
        {orgs && orgs.map((item) => <OrganizationItem item={item} />)}
      </div>
    </>
  );
}

export default Reestr;
