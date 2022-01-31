import React, { useEffect, useState } from 'react';
import { fetchOrganizations } from '../api/organizationAPI';

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
      <h1>Страница реестра</h1>
      <ol>
        {orgs &&
          orgs.map((item) => (
            <li style={{ marginTop: 10 }} key={item.id}>
              {item.name}
            </li>
          ))}
      </ol>
    </>
  );
}

export default Reestr;
