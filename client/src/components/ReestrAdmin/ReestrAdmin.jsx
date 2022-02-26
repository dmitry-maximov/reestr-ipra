import Box from '../Box/Box';
import React, { useEffect, useState } from 'react';
import { fetchOrganizations } from '../../api/organizationAPI';
import { useFetching } from '../../hooks/useFetching';
import OrganizationItem from '../OrganizationItem/OrganizationItem';

const ReestrAdmin = (props) => {
  const [orgs, setOrgs] = useState([]);

  const [fetchOrgs, isLoading, isError] = useFetching(async (page, limit) => {
    const response = await fetchOrganizations(page, limit);
    const { rows } = response;
    setOrgs(rows);
  });

  useEffect(() => {
    fetchOrgs();
  }, []);

  const createHandler = () => {
    alert('TO DO: create new org');
  };

  const changeHandler = () => {
    alert('TO DO: change org');
  };

  const removeHandler = () => {
    alert('TO DO: remove org');
  };

  return (
    <div className="p-3 w-100">
      <Box
        title={'Организации'}
        isAddButton={true}
        AddButtonHandler={createHandler}
      >
        {orgs.length > 0 &&
          orgs.map((item) => (
            <OrganizationItem key={item.id} item={item} isChange={true} />
          ))}
      </Box>
    </div>
  );
};

export default ReestrAdmin;
