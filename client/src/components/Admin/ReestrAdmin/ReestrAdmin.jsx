import React, { useEffect, useState } from 'react';
import Box from '../../Box/Box';
import {
  fetchOrganizations,
  removeOrganization,
} from '../../../api/organizationAPI';
import { useNavigate } from 'react-router-dom';
import OrganizationItem from '../../OrganizationItem/OrganizationItem';
import { ADMIN_ROUTE_NEW_ORG, ADMIN_ROUTE_ORG } from '../../../utils/const';

const ReestrAdmin = (props) => {
  const [orgs, setOrgs] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetchOrganizations().then((data) => setOrgs(data.rows));
  }, []);

  const createHandler = () => {
    history(ADMIN_ROUTE_NEW_ORG);
  };

  const changeHandler = (e, id) => {
    e.stopPropagation();
    history(ADMIN_ROUTE_ORG + `/${id}`);
  };

  const removeHandler = (e, id) => {
    e.stopPropagation();
    let isRemove = window.confirm(
      'Действительно удалить выбранную организацию'
    );
    try {
      isRemove && removeOrganization(id);
      setOrgs(orgs.filter((item) => item.id !== id));
    } catch {
      alert(
        'При удалении выбранной записи возникли проблемы. Попоробуйте удалить запись позже'
      );
    }
  };

  return (
    <div style={{ padding: '.5rem .5rem 0 .5rem' }}>
      <Box
        title={'Организации'}
        isAddButton={true}
        AddButtonHandler={createHandler}
      >
        {orgs.length > 0 &&
          orgs.map((item) => (
            <OrganizationItem
              key={item.id}
              item={item}
              isChange={true}
              changeHandler={changeHandler}
              isRemove={true}
              removeHandler={removeHandler}
            />
          ))}
      </Box>
    </div>
  );
};

export default ReestrAdmin;
