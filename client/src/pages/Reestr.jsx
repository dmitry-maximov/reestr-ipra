import React, { useEffect, useState } from 'react';
import { fetchOrganizations } from '../api/organizationAPI';

function Reestr() {
  const [orgs, setOrgs] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => async () => {
    const response = await fetchOrganizations(limit, page);
    setOrgs([...orgs, ...response.data]);
  });

  return (
    <>
      <h1>Страница реестра</h1>
    </>
  );
}

export default Reestr;
